import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { authConfig } from "@/data/pumpposts-auth";
import { createSession } from "@/lib/pumpposts-auth";
import { SignJWT, jwtVerify } from "jose";

function getResend() {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY is not configured");
    return new Resend(key);
}
const secret = new TextEncoder().encode(authConfig.jwtSecret);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { action, email, code, verificationToken } = body;

        // 1. REQUESTING A CODE
        if (action === "REQUEST_CODE") {
            const normalizedEmail = email.toLowerCase().trim();

            const isAuthorized =
                normalizedEmail === authConfig.masterEmail.toLowerCase() ||
                authConfig.authorizedEmails.map(e => e.toLowerCase()).includes(normalizedEmail);

            if (!isAuthorized) {
                return NextResponse.json({ error: "Email not authorized" }, { status: 403 });
            }

            const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

            // Create a short-lived "Verification Token" containing the code
            // This allows us to verify the code without needing server memory (Vercel Fix)
            const token = await new SignJWT({ email: normalizedEmail, code: generatedCode })
                .setProtectedHeader({ alg: "HS256" })
                .setIssuedAt()
                .setExpirationTime('10m') // Valid for 10 mins
                .sign(secret);

            // Send Email
            await getResend().emails.send({
                from: "PumpPosts <onboarding@resend.dev>",
                to: [normalizedEmail],
                subject: `${generatedCode} is your PumpPosts Access Code`,
                html: `
                    <div style="font-family: sans-serif; padding: 40px; background-color: #f9f9f9; color: #333;">
                        <h2 style="color: #4f46e5;">PumpPosts Authorization</h2>
                        <p>You requested access to the PumpPosts Dashboard for Turner Installs.</p>
                        <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px; display: inline-block; margin: 20px 0;">
                            <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #000;">${generatedCode}</span>
                        </div>
                    </div>
                `,
            });

            // Return the verification token to the client
            return NextResponse.json({ success: true, verificationToken: token });
        }

        // 2. VERIFYING A CODE
        if (action === "VERIFY_CODE") {
            if (!verificationToken) {
                return NextResponse.json({ error: "No session found" }, { status: 400 });
            }

            try {
                // Verify the token we sent earlier
                const { payload } = await jwtVerify(verificationToken, secret);
                const storedData = payload as { email: string; code: string };

                if (storedData.email !== email.toLowerCase().trim()) {
                    return NextResponse.json({ error: "Email mismatch" }, { status: 400 });
                }

                if (storedData.code !== code) {
                    return NextResponse.json({ error: "Invalid code" }, { status: 400 });
                }

                // Success! Create final session
                await createSession(storedData.email);
                return NextResponse.json({ success: true });

            } catch (err) {
                return NextResponse.json({ error: "Code expired or invalid" }, { status: 400 });
            }
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    } catch (err) {
        console.error("Auth API Error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
