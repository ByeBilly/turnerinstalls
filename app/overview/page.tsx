import LegacyLayout from "@/components/LegacyLayout";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Service Overview | Turner Installs Flooring" },
    description: "Comprehensive overview of our flooring installation and preparation services.",
    alternates: {
        canonical: "/overview",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function OverviewPage() {
    return <LegacyLayout />;
}
