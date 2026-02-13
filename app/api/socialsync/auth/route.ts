import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { authConfig } from "@/data/socialsync-auth";
import { createSession } from "@/lib/socialsync-auth";

const resend = new Resend(process.env.RESEND_API_KEY);

// Temporary in-memory store for codes (Reset on server restart)
// Format: email -> { code: string, expires: number }
const codeStore = new Map<string, { code: string; expires: number }>();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { action, email, code } = body;

        // 1. REQUESTING A CODE
        if (action === "REQUEST_CODE") {
            const normalizedEmail = email.toLowerCase().trim();

            const isAuthorized =
                normalizedEmail === authConfig.masterEmail.toLowerCase() ||
                authConfig.authorizedEmails.map(e => e.toLowerCase()).includes(normalizedEmail);

            // Check authorization
            if (!isAuthorized) {
                return NextResponse.json({ error: "Email not authorized" }, { status: 403 });
            }

            // Generate 6-digit code
            const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

            // Store code (valid for 10 minutes)
            codeStore.set(normalizedEmail, {
                code: generatedCode,
                expires: Date.now() + 10 * 60 * 1000
            });

            // Send Email via Resend
            const { data, error } = await resend.emails.send({
                from: "SocialSync <onboarding@resend.dev>", // Transition to your domain later
                to: [normalizedEmail],
                subject: `${generatedCode} is your SocialSync Access Code`,
                html: `
                    <div style="font-family: sans-serif; padding: 40px; background-color: #f9f9f9; color: #333;">
                        <h2 style="color: #4f46e5;">SocialSync Authorization</h2>
                        <p>You requested access to the SocialSync Dashboard for Turner Installs.</p>
                        <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px; display: inline-block; margin: 20px 0;">
                            <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #000;">${generatedCode}</span>
                        </div>
                        <p style="font-size: 12px; color: #666;">This code will expire in 10 minutes.</p>
                    </div>
                `,
            });

            if (error) {
                console.error("Resend Error:", error);
                return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
            }

            return NextResponse.json({ success: true });
        }

        // 2. VERIFYING A CODE
        if (action === "VERIFY_CODE") {
            const normalizedEmail = email.toLowerCase().trim();
            const storedData = codeStore.get(normalizedEmail);

            if (!storedData) {
                return NextResponse.json({ error: "No code requested for this email" }, { status: 400 });
            }

            if (Date.now() > storedData.expires) {
                codeStore.delete(normalizedEmail);
                return NextResponse.json({ error: "Code expired" }, { status: 400 });
            }

            if (storedData.code !== code) {
                return NextResponse.json({ error: "Invalid code" }, { status: 400 });
            }

            // Success! Create session and delete the used code
            codeStore.delete(normalizedEmail);
            await createSession(normalizedEmail);

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });

    } catch (err) {
        console.error("Auth API Error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
