import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const payload = await request.json();

        // Log incoming payload for debugging (Vercel logs)
        console.log('[API/Lead] Incoming payload:', JSON.stringify(payload));

        const webhookUrl = process.env.NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('[API/Lead] Missing NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL');
            return NextResponse.json(
                { error: 'Configuration error' },
                { status: 500 }
            );
        }

        // Forward to HighLevel Webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Upstream webhook failed: ${response.status}`);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('[API/Lead] Error processing lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
