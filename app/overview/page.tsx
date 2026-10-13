import LegacyLayout from "@/components/LegacyLayout";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: { absolute: "Service Overview | Turner Installs Flooring" },
    description: "Comprehensive overview of our flooring installation and preparation services.",
    path: "/overview",
    ogTitle: "Service Overview | Turner Installs",
    ogSubtitle: "Flooring installation, preparation, levelling and grinding service overview.",
});

export default function OverviewPage() {
    return <LegacyLayout />;
}
