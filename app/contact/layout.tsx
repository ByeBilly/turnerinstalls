import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Turner Installs | Request a Quote | Brisbane Flooring",
  description:
    "Get in touch with Turner Installs for expert flooring installation in Brisbane. Request a quote or call us at 07 4802 2388. Operating hours: 7am - 5pm.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

