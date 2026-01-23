import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Floor Preparation Gold Coast | Concrete Grinding & Levelling",
    description: "Expert floor prep on the Gold Coast. Servicing from Southport to Coolangatta. Concrete grinding, adhesive removal, and levelling.",
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
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Gold Coast</span>.</>}
                subtitle="High-end floor preparation for the Coast's luxury homes and apartments."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
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

            <GalleryStrip
                images={[
                    "/images/image0.jpeg", // Using image12 or similar beachy ones if known, but random is safer
                    "/images/image12.jpeg",
                    "/images/image4.jpeg",
                    "/images/image7.jpeg"
                ]}
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
                        "telephone": "+61 7480 223 88",
                        "email": "liam@turnerinstalls.com.au",
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
