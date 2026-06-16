# Turner Installs Tracking Audit

Date: 2026-06-16

## Sitewide Tags

The sitewide tracking snippets live in `app/layout.tsx`, so they are loaded on every public page that uses the main app layout.

### Google Tag Manager

- Container ID: `GTM-NMJJSS86`
- Code location: `app/layout.tsx`
- Loads: `https://www.googletagmanager.com/gtm.js?id=GTM-NMJJSS86`
- Noscript fallback: `https://www.googletagmanager.com/ns.html?id=GTM-NMJJSS86`

What it can track depends on what is configured inside the Google Tag Manager container. Common GTM use cases include GA4 events, Google Ads conversions, Meta Pixel, call-click events, form-submit events, scroll depth, and outbound-link clicks.

### Google Analytics 4

- Measurement ID: `G-T6ZG4K0J3W`
- Code location: `app/layout.tsx`
- Loads: `https://www.googletagmanager.com/gtag/js?id=G-T6ZG4K0J3W`
- Current config call: `gtag('config', 'G-T6ZG4K0J3W')`

GA4 will normally track page views, sessions, traffic source, device, browser, country/city, engagement time, and enhanced-measurement events if enabled in the GA4 web stream.

### Call Liam Click Counter

- Event name: `call_liam_click`
- Code location: `app/layout.tsx`
- First-party log endpoint: `app/api/call-liam-click/route.ts`
- Tracked numbers: `0413592054`, `+61413592054`, `61413592054`

The counter is intentionally hidden from the public website. It listens for clicks on Liam phone links, then sends the event to both `dataLayer`/GTM and direct GA4 `gtag`. It also sends a first-party POST to `/api/call-liam-click`, which logs the click in the site host's server/function logs with page path, page URL, link text, referrer, user agent, and timestamp.

Where to see it:

- GA4 Realtime and Events: look for `call_liam_click`.
- GTM Preview: look for the `call_liam_click` dataLayer event.
- Vercel/runtime logs: search for `Turner Installs call Liam click`.

## Lead And Chat Tracking

### HighLevel Web Chat

- Code location: `components/HighLevelChat.tsx`
- Loader: `https://widgets.leadconnectorhq.com/loader.js`
- Widget ID comes from: `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID`

This can track chat starts, chat messages, contact details entered through the widget, and source/page context if the HighLevel widget/account is configured for it.

### Lead Forms

- API route: `app/api/lead/route.ts`
- Destination webhook env var: `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL`
- Homepage form ID: `hero_fast_quote`
- Contact page form ID: `contact_page`

The submitted payload includes name, phone, email, page URL, form ID, source label, service name, message, and raw form values.

## How To See What They Are Tracking

1. Google Tag Manager:
   - Open Google Tag Manager.
   - Find container `GTM-NMJJSS86`.
   - Check `Tags`, `Triggers`, and `Variables`.
   - Use `Preview` mode, enter `https://turnerinstalls.com.au`, and click through the site to see which tags fire.

2. Google Analytics:
   - Open Google Analytics.
   - Find property/web stream using measurement ID `G-T6ZG4K0J3W`.
   - Check `Reports > Realtime` while visiting the site in another tab.
   - Check `Admin > Data streams > Web > Enhanced measurement` to see automatic events.
   - Check `Admin > Events` and `Admin > Key events` for conversions.

3. HighLevel:
   - Open the relevant HighLevel sub-account.
   - Check Chat Widget settings for the widget matching `NEXT_PUBLIC_GHL_CHAT_WIDGET_ID`.
   - Check Automations/Webhooks for the URL stored in `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL`.
   - Submit a test form and confirm the contact appears with the right page URL and form source.

## Recommendation

Keep both GTM and GA4 only if GTM is doing extra work beyond GA4 page tracking. If GTM is only loading GA4, simplify later by using GTM as the single source of truth or removing the duplicate GA4 direct snippet.

Add explicit events for the actions that matter most:

- Phone number clicks: done for Liam's direct phone number as `call_liam_click`
- Email clicks
- Homepage fast quote submissions
- Contact page submissions
- Chat opens and chat leads
- Flooring calculator outbound clicks

For the CalculationTime flooring calculator link, add UTM parameters if Billy wants clear cross-site attribution:

`https://www.calculationtime.com/calculators/professional-flooring-calculator/?utm_source=turnerinstalls&utm_medium=referral&utm_campaign=floor_preparation_planning_tool`
