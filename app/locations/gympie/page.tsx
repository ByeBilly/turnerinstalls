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
    title: "Floor Preparation Gympie | Concrete Grinding & Levelling",
    description: "Reliable floor preparation in Gympie. Servicing the Wide Bay region. Concrete grinding, floor levelling, and adhesive removal.",
};

export default function Gympie() {
    const specs = [
        {
            icon: "🚜",
            title: "Regional Service",
            description: "Bringing city-standard flooring equipment to the Wide Bay region."
        },
        {
            icon: "🏚️",
            title: "Old Home Renovations",
            description: "Expertise in rectifying subfloors in Gympie's classic timber homes."
        },
        {
            icon: "🏭",
            title: "Commercial & Industrial",
            description: "Prep for sheds, workshops, and commercial spaces."
        },
        {
            icon: "🛣️",
            title: "Travel Friendly",
            description: "Fully mobile setup allows us to work efficiently on remote sites."
        }
    ];

    const suitableFor = [
        { label: "Gympie Town" },
        { label: "Southside" },
        { label: "Monkland" },
        { label: "Curra" },
        { label: "Mary Valley" }
    ];

    const faqs = [
        {
            question: "Is there a travel charge for Gympie?",
            answer: "We quote based on the job. For larger projects, travel is often absorbed into the cost. We are competitive with local rates while bringing specialized machinery."
        },
        {
            question: "Can you level uneven concrete in a shed?",
            answer: "Yes, we can grind high spots and fill low spots to create a flat, usable surface for workshops or conversions."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Gympie</span>.</>}
                subtitle="High-quality concrete preparation for the Gold City region."
                imagePath="/installspics/finished/paddington-staircase-timber.jpg"
                label="WIDE_BAY"
            />

            <TechSpecs
                title="Gympie's Flooring Choice."
                description={<>
                    <p className="mb-4">Renovating in Gympie doesn't mean you have to settle for second best. We bring our full fleet of concrete grinders and pump trucks to the region.</p>
                    <p>Whether it's a new build in Southside or a classic Queenslander renovation, we ensure your floors are flat, smooth, and ready for installation.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Service Areas"
                features={suitableFor}
                columns={4}
            />

            <ModernGallery
                title="Gympie Works"
                images={[
                    { src: "/installspics/finished/brisbane-city-view-flooring.jpg", alt: "High Quality Finish" },
                    { src: "/installspics/prep/level/sliding-door-height-grinding-solution.jpg", alt: "Correcting Door Heights" },
                    { src: "/installspics/laying/professional-cutting-station-setup.jpg", alt: "Mobile Workshop Setup" },
                    { src: "/installspics/prep/floods/flood-work-preparation.jpg", alt: "Wide Area Levelling" }
                ]}
                limit={4}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="services" />

            <SEOCTA
                title="Gympie Floors Done Right."
                subtitle="Get a quote from the experts who travel to you."
                buttonText="Get Gympie Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Turner Installs Gympie",
                        "telephone": "+61 7480 223 88",
                        "email": "liam@turnerinstalls.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Gympie",
                            "addressRegion": "QLD",
                            "addressCountry": "AU"
                        },
                        "areaServed": "Gympie"
                    })
                }}
            />
        </>
    );
}
