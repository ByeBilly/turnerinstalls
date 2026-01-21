# HighLevel CRM Integration

This Next.js site is integrated with HighLevel CRM to automatically capture website enquiries and provide AI chat support.

## Overview

- **Contact Form Submissions**: All contact form submissions are automatically sent to HighLevel as contacts/opportunities
- **AI Chat Widget**: HighLevel's AI chat widget appears on every page for instant customer support

## Environment Variables

Create a `.env.local` file in the root of the project (it's already in `.gitignore` to keep secrets safe).

The following environment variables must be set in `.env.local`:

### `NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET`

The HighLevel web chat script snippet that enables the AI chat widget on all pages.

**How to get it:**
1. Log into your HighLevel account
2. Navigate to **Sites → Chat Widget**
3. Copy the web chat script snippet
4. Paste it into `NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET` in your `.env.local` file

**Example `.env.local`:**
```
NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET="<script>(function(w,d,s,o,f,js,fjs){w['GoHighLevel']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)},js=d.createElement(s),fjs=d.getElementsByTagName(s)[0],js.id=o,js.src=f,js.async=1,fjs.parentNode.insertBefore(js,fjs)}(window,document,'script','ghl','https://cdn.gohighlevel.com/widget.js'));ghl('init', 'YOUR_LOCATION_ID');</script>"
```

### `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL`

The HighLevel webhook URL that receives contact form submissions.

**How to get it:**
1. Log into your HighLevel account
2. Navigate to **Automations → Webhooks** (or the appropriate Form/Workflow section)
3. Create a new **Inbound Webhook** or configure a Form integration
4. Copy the webhook URL
5. Paste it into `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL` in your `.env.local` file

**Example `.env.local`:**
```
NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL="https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID"
```

## Form Submission Payload

When a contact form is submitted, the following data is sent to HighLevel:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0412345678",
  "propertyType": "Homeowner",
  "serviceInterest": "Vinyl plank installs, Floor preparation & levelling",
  "message": "I need a quote for my living room...",
  "source": "Turner Installs Website"
}
```

## Graceful Degradation

Both integrations are optional and fail gracefully:

- **If `NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET` is not set**: The chat widget simply won't appear. The site functions normally.
- **If `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL` is not set**: Form submissions are logged to the console (for development) and the user still sees a success message.

## Testing

1. **Test Chat Widget**:
   - Set `NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET` in `.env.local`
   - Run `npm run dev`
   - Visit any page - the chat widget should appear

2. **Test Form Submission**:
   - Set `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL` in `.env.local`
   - Submit the contact form
   - Check your HighLevel account - a new contact/opportunity should be created

## Troubleshooting

- **Chat widget not appearing**: Check that `NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET` is set correctly and includes the full script tag
- **Form submissions not reaching HighLevel**: 
  - Verify the webhook URL is correct
  - Check browser console for errors
  - Ensure the webhook is active in HighLevel
  - Check HighLevel webhook logs for incoming requests

## Files Modified

- `components/HighLevelChat.tsx` - Chat widget component
- `app/layout.tsx` - Includes HighLevelChat component
- `app/contact/page.tsx` - Form submission handler with HighLevel webhook integration

