import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type LeadPayload = {
    schema_version?: number;
    event?: string;
    occurred_at?: string;
    lead?: {
        name?: string;
        phone?: string;
        email?: string;
    };
    meta?: {
        form_id?: string;
        source?: string;
        page_url?: string;
    };
    custom_fields?: {
        service_name?: string;
        message?: string;
        flooring_type?: string;
    };
    raw?: Record<string, unknown>;
};

function clean(value: unknown, fallback = '') {
    return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatLine(label: string, value: string) {
    return `${label}: ${value || 'Not provided'}`;
}

function parseEmailList(value: string | undefined) {
    return (value || '')
        .split(',')
        .map(email => email.trim())
        .filter(Boolean);
}

function buildLeadEmail(payload: LeadPayload) {
    const lead = payload.lead || {};
    const meta = payload.meta || {};
    const custom = payload.custom_fields || {};

    const name = clean(lead.name, 'Website lead');
    const phone = clean(lead.phone);
    const email = clean(lead.email);
    const service = clean(custom.service_name, 'Website enquiry');
    const message = clean(custom.message);
    const source = clean(meta.source, 'Turner Installs website');
    const pageUrl = clean(meta.page_url);
    const formId = clean(meta.form_id);
    const occurredAt = clean(payload.occurred_at, new Date().toISOString());

    const lines = [
        'New Turner Installs website lead',
        '',
        formatLine('Name', name),
        formatLine('Phone', phone),
        formatLine('Email', email),
        formatLine('Service', service),
        formatLine('Flooring type', clean(custom.flooring_type)),
        '',
        'Message:',
        message || 'Not provided',
        '',
        formatLine('Source', source),
        formatLine('Form', formId),
        formatLine('Page', pageUrl),
        formatLine('Submitted', occurredAt),
    ];

    const htmlRows = [
        ['Name', name],
        ['Phone', phone],
        ['Email', email],
        ['Service', service],
        ['Flooring type', clean(custom.flooring_type)],
        ['Message', message || 'Not provided'],
        ['Source', source],
        ['Form', formId],
        ['Page', pageUrl],
        ['Submitted', occurredAt],
    ];

    const html = `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827">
            <h1 style="font-size:22px;margin:0 0 16px">New Turner Installs website lead</h1>
            <table style="border-collapse:collapse;width:100%;max-width:680px">
                ${htmlRows.map(([label, value]) => `
                    <tr>
                        <th style="text-align:left;vertical-align:top;padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;width:140px">${escapeHtml(label)}</th>
                        <td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(value || 'Not provided')}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;

    return {
        subject: `New Turner Installs lead: ${name}`,
        text: lines.join('\n'),
        html,
        replyTo: email || undefined,
    };
}

export async function POST(request: Request) {
    try {
        const payload = await request.json() as LeadPayload;

        // Log incoming payload for debugging (Vercel logs)
        console.log('[API/Lead] Incoming payload:', JSON.stringify(payload));

        const to = parseEmailList(process.env.LEAD_EMAIL_TO);
        const from = process.env.LEAD_EMAIL_FROM;
        const resendApiKey = process.env.RESEND_API_KEY;
        const dryRun = process.env.LEAD_EMAIL_DRY_RUN === 'true';

        const email = buildLeadEmail(payload);

        if (dryRun) {
            console.info('[API/Lead] Dry run email payload:', {
                to: to.length ? to : 'not configured',
                from: from || 'not configured',
                subject: email.subject,
                text: email.text,
            });

            return NextResponse.json({ success: true, dryRun: true });
        }

        if (!resendApiKey || !to.length || !from) {
            console.error('[API/Lead] Missing email configuration', {
                hasResendApiKey: Boolean(resendApiKey),
                hasLeadEmailTo: Boolean(to.length),
                hasLeadEmailFrom: Boolean(from),
            });
            return NextResponse.json(
                { error: 'Configuration error' },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const result = await resend.emails.send({
            from,
            to,
            replyTo: email.replyTo,
            subject: email.subject,
            text: email.text,
            html: email.html,
        });

        if (result.error) {
            throw new Error(`Resend failed: ${result.error.message}`);
        }

        return NextResponse.json({ success: true, id: result.data?.id });

    } catch (error) {
        console.error('[API/Lead] Error processing lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
