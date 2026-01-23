import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Floor Preparation Brisbane | Concrete Grinding & Levelling Services",
    description: "Premier floor preparation in Brisbane. Servicing all suburbs from Northside to Southside. Concrete grinding, levelling, and subfloor repairs.",
};

export default function Brisbane() {
    const specs = [
        {
            icon: "🏙️",
            title: "Brisbane Wide",
            description: "Servicing CBD, Northside, Southside, and Western Suburbs."
        },
        {
            icon: "🏡",
            title: "Queenslanders",
            description: "Expertise in prepping timber subfloors in classic Brisbane homes."
        },
        {
            icon: "🏢",
            title: "Commercial CBD",
            description: "Night work capabilities for office fitouts in the city."
        },
        {
            icon: "🏗️",
            title: "New Builds",
            description: "Partnering with Brisbane builders for moisture barriers and levelling."
        }
    ];

    const suitableFor = [
        { label: "Brisbane Northside" },
        { label: "Brisbane Southside" },
        { label: "Western Suburbs" },
        { label: "Bayside" }
    ];

    const faqs = [
        {
            question: "Which Brisbane suburbs do you cover?",
            answer: "We cover the entire Greater Brisbane area, from Caboolture in the north to Logan in the south, and out to Ipswich."
        },
        {
            question: "Do you do apartments in the city?",
            answer: "Yes, we have high-rise protocols including sound-dampening leveling and dust extraction to manage body corporate requirements."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Brisbane</span>.</>}
                subtitle="Your local experts for concrete grinding and floor levelling across the River City."
                imagePath="/images/resource_9fVqoabE10H5PDfVW4rOXY.png"
                label="BRISBANE_METRO"
            />

            <TechSpecs
                title="Brisbane's Flooring Experts."
                description={<>
                    <p className="mb-4">From raised timber cottages in Paddington to modern concrete apartments in New Farm, Brisbane offers unique flooring challenges.</p>
                    <p>Turner Installs has been prepping Brisbane floors for three generations. We understand the local humidity, the soil types, and the specific needs of Queensland homes.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Service Areas"
                features={suitableFor}
                columns={4}
            />

            <div className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold mb-8">Local Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We've worked on residential and commercial sites throughout the city.</p>
                </div>
            </div>

            <ModernGallery
                images={[
                    "/images/gen/luxury_vinyl.png",
                    "/images/image3.jpeg",
                    "/images/image1.jpeg",
                    "/images/gen/concrete_texture.png"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="services" />

            <SEOCTA
                title="Brisbane's Best Prep."
                subtitle="Ready to renovate? Call the local team you can trust."
                buttonText="Get Brisbane Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Turner Installs Brisbane",
                        "telephone": "+61 7480 223 88",
                        "email": "liam@turnerinstalls.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Brisbane",
                            "addressRegion": "QLD",
                            "addressCountry": "AU"
                        },
                        "areaServed": "Brisbane"
                    })
                }}
            />
        </>
    );
}
