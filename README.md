# Turner Installs Website

A modern, production-ready Next.js website for Turner Installs, a Brisbane-based flooring contractor.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
turnerinstallswebsite/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── about/                    # About page
│   ├── commercial/               # Commercial services page
│   ├── contact/                  # Contact page with form
│   ├── residential/              # Residential services page
│   ├── privacy-policy/           # Privacy policy page
│   └── services/
│       └── floor-preparation/    # Floor preparation services page
├── components/                   # Reusable React components
│   ├── Header.tsx                # Site header with navigation
│   ├── Footer.tsx                # Site footer
│   ├── CTAButton.tsx             # Call-to-action button component
│   └── Section.tsx               # Section wrapper component
├── public/
│   └── images/                   # Image assets
└── package.json                  # Dependencies and scripts
```

## Key Features

- **SEO Optimized**: Metadata, Open Graph tags, and JSON-LD schema
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Semantic HTML, proper heading hierarchy, ARIA where needed
- **Contact Form**: Client-side validation (TODO: integrate with email service)
- **Modern UI**: Dark theme with high-contrast design matching brand aesthetics

## Contact Information

- **Reception**: 07 4802 2388
- **Liam Direct**: 0413 592 054
- **Email**: liam@turnerinstalls.com
- **Operating Hours**: 7am - 5pm, Monday to Friday
- **Service Area**: Brisbane, Ipswich & surrounding suburbs

## Deployment

This site is configured for deployment on Vercel. Simply connect your repository to Vercel and deploy.

## HighLevel CRM Integration

This site is integrated with HighLevel CRM for lead capture and AI chat support.

**Required Environment Variables** (set in `.env.local`):
- `NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET` - HighLevel chat widget script (from Sites → Chat Widget)
- `NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL` - HighLevel webhook URL (from Automations → Webhooks)

See [docs/integration-highlevel.md](docs/integration-highlevel.md) for detailed setup instructions.

## TODO / Future Enhancements

1. **Image Optimization**: Add more professional photography to replace placeholder images
2. **Analytics**: Add Google Analytics or similar tracking
3. **Testimonials**: Replace dummy testimonials with real client reviews
4. **Blog/News**: Consider adding a blog section for SEO content

## Notes

- Images are stored in `/public/images/` and can be referenced as `/images/filename.png`
- The contact form currently logs to console - see `app/contact/page.tsx` for integration points
- All pages include proper metadata for SEO
- JSON-LD schema is included on the home page for local business SEO

