import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighLevelChat from "@/components/HighLevelChat";

export const metadata: Metadata = {
  title: "Turner Installs | Expert Flooring & Professional Floor Preparation – Brisbane",
  description:
    "Turner Installs is a Brisbane-based flooring contractor specialising in vinyl plank, timber, laminate and hybrid installations, professional floor preparation, flood levelling, and clean removals for residential clients, property managers and premium retailers.",
  keywords: [
    "floor preparation Brisbane",
    "vinyl plank installation Brisbane",
    "hybrid flooring installers Brisbane",
    "commercial plank flooring installation",
    "floor levelling Brisbane",
    "timber flooring installation Brisbane",
  ],
  openGraph: {
    title: "Turner Installs | Expert Flooring & Professional Floor Preparation – Brisbane",
    description:
      "15+ years experience in Brisbane. Expert flooring installation, professional floor preparation, and immaculate clean-up for residential and commercial clients.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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

