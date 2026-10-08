import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighLevelChat from "@/components/HighLevelChat";
import TrackingScripts from "@/components/TrackingScripts";
import { BASE_URL, BUSINESS, WEBSITE_ID, buildBusinessEntity, businessRef } from "@/lib/business";
import { buildAggregateRating } from "@/lib/reviews";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Turner Installs | Expert Flooring & Professional Floor Preparation – Brisbane",
    template: "%s | Turner Installs"
  },
  description:
    "Turner Installs is a Brisbane-based flooring contractor specialising in vinyl plank, timber, laminate and hybrid installations, professional floor preparation, flood levelling, and clean removals.",
  keywords: [
    "floor preparation Brisbane",
    "vinyl plank installation Brisbane",
    "hybrid flooring installers Brisbane",
    "commercial plank flooring installation",
    "floor levelling Brisbane",
    "timber flooring installation Brisbane",
  ],
  authors: [{ name: "Liam Turner" }],
  creator: "Liam Turner",
  publisher: "Turner Installs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Turner Installs | Expert Flooring & Professional Floor Preparation",
    description:
      "15+ years experience in Brisbane. Expert flooring installation, professional floor preparation, and immaculate clean-up for residential and commercial clients.",
    url: baseUrl,
    siteName: "Turner Installs",
    images: [
      {
        url: "/installspics/promo/resource_9fVqoabE10H5PDfVW4rOXY.png",
        width: 1200,
        height: 630,
        alt: "Turner Installs Premium Flooring",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turner Installs | Expert Flooring & Professional Floor Preparation",
    description: "Expert flooring installation and professional preparation in Brisbane.",
    images: ["/installspics/promo/resource_9fVqoabE10H5PDfVW4rOXY.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                buildBusinessEntity(buildAggregateRating()),
                {
                  "@type": "WebSite",
                  "@id": WEBSITE_ID,
                  url: BASE_URL,
                  name: BUSINESS.name,
                  inLanguage: "en-AU",
                  publisher: businessRef,
                },
              ],
            }),
          }}
        />
        <TrackingScripts />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <HighLevelChat />
      </body>
    </html>
  );
}
