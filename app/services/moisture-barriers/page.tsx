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
    title: "Moisture Barriers Brisbane | Damp Proofing Concrete Slabs",
    description: "Protect your flooring from rising damp. Professional epoxy moisture barrier application for concrete slabs in Brisbane & SE QLD.",
};

export default function MoistureBarriers() {
    const specs = [
        {
            icon: "💧",
            title: "Stops Rising Damp",
            description: "Blocks hydrostatic pressure and capillary moisture rising through the concrete slab."
        },
        {
            icon: "🛡️",
            title: "Floor Protection",
            description: "Prevents adhesive failure, timber warping, and mould growth under your floor."
        },
        {
            icon: "🧪",
            title: "Epoxy Systems",
            description: "We use 2-part water-based or solvent-free epoxy barriers for maximum suppression."
        },
        {
            icon: "✅",
            title: "Warranty Safe",
            description: "Essential for validating warranties on timber and vinyl floors installed over recent slabs."
        }
    ];

    const processSteps = [
        {
            title: "Moisture Testing",
            description: "We use hygrometers and relative humidity (RH) probes to determine the moisture content of your slab."
        },
        {
            title: "Surface Prep",
            description: "The slab must be clean and porous. We grind open the surface to ensure the barrier penetrates."
        },
        {
            title: "Application",
            description: "Rolling out the 2-part epoxy moisture barrier in a uniform, cross-linked coat."
        },
        {
            title: "Curing & Priming",
            description: "After curing, the surface creates a sealed membrane ready for levelling or glue."
        }
    ];

    const suitableFor = [
        { label: "New Concrete Slabs", sublabel: "High moisture content" },
        { label: "Ground Floor Units", sublabel: "Moisture ingress risk" },
        { label: "Converted Garages", sublabel: "No existing vapour barrier" },
        { label: "Timber Installations", sublabel: "Highly sensitive to damp" }
    ];

    const faqs = [
        {
            question: "How do I know if I need a moisture barrier?",
            answer: "If you have a new slab (under 6 months old) or a ground-floor slab with no plastic vapour barrier underneath, testing is essential. Dark spots or mouldy smells are also signs."
        },
        {
            question: "What happens if I don't use one?",
            answer: "Trapped moisture breaks down adhesives (glues turn to mush) and causes timber/bamboo to cup and warp. It creates a perfect environment for mould."
        },
        {
            question: "Is it expensive?",
            answer: "It is an added cost, but it acts as an insurance policy for your flooring. The cost of replacing a ruined floor far outweighs the cost of a barrier."
        },
        {
            question: "Can you level over the barrier?",
            answer: "Yes, once the barrier cures, we apply a specific primer and then the self-levelling compound bonds directly to that system."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Moisture <span className="text-yellow-500">Barriers</span>.</>}
                subtitle="Seal your slab against rising damp and protect your flooring investment."
                imagePath="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                label="DAMP_PROOFING"
            />

            <TechSpecs
                title="Stop Moisture at the Source."
                description={<>
                    <p className="mb-4">Concrete is like a hard sponge; it can wick moisture from the ground up. This 'rising damp' is the silent killer of floor coverings.</p>
                    <p>Our epoxy moisture mitigation systems create an impermeable layer between your slab and your floor, ensuring a dry, stable installation surface.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Critical Protection For"
                features={suitableFor}
                columns={4}
            />

            <ProcessSteps
                title="Moisture Mitigation Process"
                steps={processSteps}
            />

            <GalleryStrip
                images={[
                    "/images/image7.jpeg",
                    "/images/image10.jpeg",
                    "/images/image11.jpeg",
                    "/images/image1.jpeg"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Keep it Dry."
                subtitle="Worried about damp? Let us test and seal your slab before you install."
                buttonText="Get Moisture Check"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Moisture Barriers",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "email": "liam@turnerinstalls.com"
                        },
                        "description": "Application of epoxy moisture barriers to prevent rising damp in concrete slabs.",
                        "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
                    })
                }}
            />
        </>
    );
}
