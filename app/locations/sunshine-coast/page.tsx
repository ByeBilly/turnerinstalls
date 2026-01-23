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
    title: "Floor Preparation Sunshine Coast | Grinding & Levelling",
    description: "Professional floor preparation Sunshine Coast. Caloundra to Noosa. Concrete grinding, floor levelling, and subfloor rectification.",
};

export default function SunshineCoast() {
    const specs = [
        {
            icon: "☀️",
            title: "Coast Wide",
            description: "Servicing Caloundra, Maroochydore, Coolum, and Noosa."
        },
        {
            icon: "🌫️",
            title: "Humidity Control",
            description: "Managing cure times and moisture levels in the humid coastal environment."
        },
        {
            icon: "🔨",
            title: "Renovation Experts",
            description: "Specializing in the renovation of older beach shacks and modernizing floor plans."
        },
        {
            icon: "🚑",
            title: "Emergency Prep",
            description: "Rapid response for water damage or flood rectification work."
        }
    ];

    const suitableFor = [
        { label: "Caloundra" },
        { label: "Mooloolaba" },
        { label: "Maroochydore" },
        { label: "Noosa" },
        { label: "Hinterland" }
    ];

    const faqs = [
        {
            question: "Do you travel to Noosa?",
            answer: "Yes, we regularly service Noosa and the northern end of the Sunshine Coast."
        },
        {
            question: "Can you fix a floor after water damage?",
            answer: "Absolutely. We grind off the residue, test for moisture, apply a barrier if needed, and level it back to new."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Sunshine Coast</span>.</>}
                subtitle="From Caloundra to Noosa, we deliver premium subfloors."
                imagePath="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                label="SUNSHINE_COAST"
            />

            <TechSpecs
                title="Sunny Coast Specialists."
                description={<>
                    <p className="mb-4">The Sunshine Coast lifestyle is all about indoor-outdoor flow. Ensuring your internal floors are level with your outdoor areas starts with precision grinding and ramping.</p>
                    <p>We work with homeowners and builders across the Coast to deliver defects-free substrates ready for high-end timber and vinyl.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Areas Covered"
                features={suitableFor}
                columns={4}
            />

            <GalleryStrip
                images={[
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="services" />

            <SEOCTA
                title="Coast Class."
                subtitle="Get the right foundation for your beachside home."
                buttonText="Get Sunshine Coast Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Turner Installs Sunshine Coast",
                        "telephone": "+61 7480 223 88",
                        "email": "liam@turnerinstalls.com.au",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Sunshine Coast",
                            "addressRegion": "QLD",
                            "addressCountry": "AU"
                        },
                        "areaServed": "Sunshine Coast"
                    })
                }}
            />
        </>
    );
}
