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
- **Contact Form**: Website forms post directly from the browser to FormSubmit, which emails leads to Liam (the contact form also accepts pasted/attached photos)
- **Modern UI**: Dark theme with high-contrast design matching brand aesthetics

## Contact Information

- **Reception**: 07 4802 2388
- **Liam Direct**: 0413 592 054
- **Email**: liam@turnerinstalls.com
- **Operating Hours**: 7am - 5pm, Monday to Friday
- **Service Area**: Brisbane, Ipswich & surrounding suburbs

## Deployment

This site is configured for deployment on Vercel. Simply connect your repository to Vercel and deploy.

## Lead Form Email Delivery

Website form delivery uses Resend directly. GoHighLevel is no longer required for lead capture.

**Required Environment Variables** (set in `.env.local`):
- `RESEND_API_KEY` - Resend API key for sending lead emails
- `LEAD_EMAIL_TO` - Comma-separated recipient list, such as `billiamglobal@gmail.com,liam@turnerinstalls.com`
- `LEAD_EMAIL_FROM` - Verified Resend sender, such as `Turner Installs <leads@turnerinstalls.com.au>`

See [docs/integration-highlevel.md](docs/integration-highlevel.md) for detailed setup instructions.

## TODO / Future Enhancements

1. **Image Optimization**: Add more professional photography to replace placeholder images
2. **Analytics**: Add Google Analytics or similar tracking
3. **Testimonials**: Replace dummy testimonials with real client reviews
4. **Blog/News**: Consider adding a blog section for SEO content

## Notes

- Images are stored in `/public/images/` and can be referenced as `/images/filename.png`
- Form delivery uses FormSubmit via `lib/formSubmit.ts` (destination is `BUSINESS.email`); `app/api/lead/route.ts` (Resend) is no longer used by the forms
- All pages include proper metadata for SEO
- JSON-LD schema is included on the home page for local business SEO
