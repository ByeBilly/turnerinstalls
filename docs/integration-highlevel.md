# Lead Form Email Delivery

Turner Installs no longer depends on GoHighLevel for website form delivery.

The public forms post directly from the browser to FormSubmit, which emails Liam. No server route or API key is involved.

> `app/api/lead/route.ts` (Resend) still exists but is no longer used by either form. The Resend notes below only apply if a form is pointed back at it.

## Flow

- Homepage and suburb fast quote forms: `components/HeroForm.tsx`
- Contact page form: `components/ContactForm.tsx`
- Shared endpoint: `lib/formSubmit.ts` (`https://formsubmit.co/<BUSINESS.email>`)
- Email provider: FormSubmit

Request flow:

```text
Website form -> FormSubmit -> Liam's inbox
```

The fast quote form also sends analytics/tracking to `/api/fast-quote-submit`, but that route only logs a tracking event. It is not the lead delivery path.

## Vercel Environment Variables

Set these in Vercel for Production, Preview, and Development as needed:

```bash
RESEND_API_KEY="re_..."
LEAD_EMAIL_TO="billiamglobal@gmail.com,liam@turnerinstalls.com"
LEAD_EMAIL_FROM="Turner Installs <leads@turnerinstalls.com.au>"
```

Use a comma-separated `LEAD_EMAIL_TO` value when leads should go to more than one inbox.

`LEAD_EMAIL_FROM` must be a sender/domain verified in the Resend account. If the domain is not verified yet, add and verify the sending domain in Resend before relying on production delivery.

For Liam's live-only handover later, change `LEAD_EMAIL_TO` to Liam's preferred inbox.

For local non-sending tests only:

```bash
LEAD_EMAIL_DRY_RUN="true"
```

When dry run is enabled, `/api/lead` returns success and logs the email content instead of sending it.

## Chat Widget

The LeadConnector chat widget is separate from form delivery. If still wanted, it uses:

```bash
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID="..."
```

If GoHighLevel/LeadConnector is no longer used, remove this variable or remove the `HighLevelChat` component from `app/layout.tsx`.

## Testing

Local dry-run test:

```bash
LEAD_EMAIL_DRY_RUN=true npm run dev
```

Then submit a form, or POST a test payload to `/api/lead`. A successful dry run returns:

```json
{ "success": true, "dryRun": true }
```

Production test after configuring Resend:

1. Submit the live contact form with a clear test name.
2. Confirm the email arrives in `LEAD_EMAIL_TO`.
3. Check Vercel function logs for `/api/lead` if delivery fails.
