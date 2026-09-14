import ServiceHero from "@/components/ServiceHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import type { Metadata } from "next";

const ogTitle = "Floor Preparation Gold Coast | Concrete Grinding & Levelling";
const ogDescription = "Expert floor prep on the Gold Coast. Servicing from Southport to Coolangatta. Concrete grinding, adhesive removal, and levelling.";
const ogImageUrl = "/installspics/locations/goldcoastcleanfinish.jpg";

export const metadata: Metadata = {
    title: ogTitle,
    description: ogDescription,
    alternates: { canonical: "/locations/gold-coast" },
    robots: { index: true, follow: true },
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: "/locations/gold-coast",
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "Turner Installs floor preparation, Gold Coast" }],
    },
    twitter: {
        card: "summary_large_image",
        title: ogTitle,
        description: ogDescription,
        images: [ogImageUrl],
    },
};

export default function GoldCoast() {
    const specs = [
        {
            icon: "🏖️",
            title: "Internal & External",
            description: "Prepping internal living areas and external patios for tiles or coatings."
        },
        {
            icon: "🏢",
            title: "High Rise",
            description: "Experienced in logistical challenges of working in Surfers Paradise apartments."
        },
        {
            icon: "🌊",
            title: "Salt Air Protection",
            description: "Understanding coastal conditions and selecting corrosion-resistant materials."
        },
        {
            icon: "🛍️",
            title: "Retail Fitouts",
            description: "Fast turnaround prep for shops in Pacific Fair, Robina, and strip malls."
        }
    ];

    const suitableFor = [
        { label: "Surfers Paradise" },
        { label: "Broadbeach" },
        { label: "Burleigh Heads" },
        { label: "Coolangatta" },
        { label: "Robina" },
        { label: "Southport" }
    ];

    const faqs = [
        {
            question: "How far do you travel on the Gold Coast?",
            answer: "We service the entire Gold Coast region, from the northern corridor down to the NSW border."
        },
        {
            question: "Can you remove old tiles?",
            answer: "Yes, we strip old ceramic and porcelain tiles, grind the adhesive, and level the floor ready for new hybrids or timber."
        }
    ];

    return (
        <>
            <Breadcrumbs items={[
                { name: "Home", url: "/" },
                { name: "Service Areas", url: "/service-areas" },
                { name: "Gold Coast", url: "/locations/gold-coast" },
            ]} />
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Gold Coast</span>.</>}
                subtitle="High-end floor preparation for the Coast's luxury homes and apartments."
                imagePath="/installspics/finished/large-open-plan-timber-floor.jpg"
                label="GOLD_COAST"
            />

            <TechSpecs
                title="Coastal Quality."
                description={<>
                    <p className="mb-4">The Gold Coast demands a higher standard of finish. Whether it's a luxury penthouse or a family home in Burleigh, the subfloor must be perfect.</p>
                    <p>We bring our full fleet of grinding and levelling equipment to the Coast, ensuring city-standard prep for your coastal project.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="We Service"
                features={suitableFor}
                columns={3}
            />

            <ModernGallery
                title="Gold Coast Projects"
                images={[
                    { src: "/images/Showroom-Carrara-Gold-Coast.jpeg", alt: "Gold Coast showroom flooring project" },
                    { src: "/images/Showroom-Carrara-Gold-Coast1.jpeg", alt: "Gold Coast showroom flooring project detail" },
                    { src: "/installspics/prep/floods/mirror-glass-level-flood.jpg", alt: "Mirror Level Flood Prep" },
                    { src: "/installspics/locations/goldcoastcleanfinish.jpg", alt: "Clean Gold Coast Finish" }
                ]}
                limit={4}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="services" />

            <SEOCTA
                title="Gold Standard Prep."
                subtitle="Renovating on the Coast? Ensure your base is solid."
                buttonText="Get Gold Coast Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Turner Installs Gold Coast",
                        "telephone": "+61 413 592 054",
                        "email": "liam@turnerinstalls.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Gold Coast",
                            "addressRegion": "QLD",
                            "addressCountry": "AU"
                        },
                        "areaServed": "Gold Coast"
                    })
                }}
            />
        </>
    );
}
