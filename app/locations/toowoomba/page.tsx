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
    title: "Floor Preparation Toowoomba | Concrete Grinding & Prep",
    description: "Toowoomba's floor prep specialists. Handling red soil slab movement, grinding, and levelling for The Garden City.",
};

export default function Toowoomba() {
    const specs = [
        {
            icon: "⛰️",
            title: "Range Specialists",
            description: "Regular service to Toowoomba and the Darling Downs region."
        },
        {
            icon: "🔴",
            title: "Red Soil Experts",
            description: "We understand the extreme slab movement caused by reactive red clay soils and how to prep for it."
        },
        {
            icon: "🏛️",
            title: "Heritage Homes",
            description: "Careful subfloor restoration for Toowoomba's classic historic homes."
        },
        {
            icon: "❄️",
            title: "Cold Climate Curing",
            description: "Using accelerators and specific compounds that set correctly in cooler mountain temperatures."
        }
    ];

    const suitableFor = [
        { label: "Toowoomba City" },
        { label: "Highfields" },
        { label: "Withcott" },
        { label: "Westbrook" },
        { label: "Darling Downs" }
    ];

    const faqs = [
        {
            question: "Do you come up the Range?",
            answer: "Yes, we service Toowoomba regularly. We bring all our own powered equipment and generators if required."
        },
        {
            question: "My slab has cracked due to soil movement.",
            answer: "This is common in Toowoomba. We 'stitch' the cracks with epoxy and steel staples to stabilize the slab before levelling."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Toowoomba</span>.</>}
                subtitle="Bringing high-spec floor preparation to the Darling Downs."
                imagePath="/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                label="DARLING_DOWNS"
            />

            <TechSpecs
                title="Built on Red Soil."
                description={<>
                    <p className="mb-4">Toowoomba's reactive clay soils cause slabs to heave and crack. You need a prep team that understands geotechnical movement.</p>
                    <p>We use flexible additives and structural repair systems designed specifically for the frequent ground movement in the region.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Service Areas"
                features={suitableFor}
                columns={4}
            />

            <GalleryStrip
                images={[
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="services" />

            <SEOCTA
                title="Toowoomba Tough."
                subtitle="Get your floor prepped right. Contact us for a quote in the Garden City."
                buttonText="Get Toowoomba Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Turner Installs Toowoomba",
                        "telephone": "+61 7480 223 88",
                        "email": "liam@turnerinstalls.com.au",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Toowoomba",
                            "addressRegion": "QLD",
                            "addressCountry": "AU"
                        },
                        "areaServed": "Toowoomba"
                    })
                }}
            />
        </>
    );
}
