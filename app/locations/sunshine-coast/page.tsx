import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import { siteImages } from "@/data/siteImages";
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
                imagePath="/installspics/finished/modern-timber-flooring-living-room.jpg"
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

            <ModernGallery
                title="Coastal Work"
                images={[
                    { src: "/installspics/finished/the-gap-timber-flooring.jpg", alt: "Coastal Timber Style" },
                    { src: "/installspics/prep/floods/flood-work-preparation.jpg", alt: "Flood Prep Work" },
                    { src: "/installspics/laying/newly-laid-stair-treads.jpg", alt: "Timber Stair Installation" },
                    { src: "/installspics/prep/level/yellowtongue-levelling-buildup.jpg", alt: "Yellowtongue Levelling" }
                ]}
                limit={4}
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
                        "email": "liam@turnerinstalls.com",
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
