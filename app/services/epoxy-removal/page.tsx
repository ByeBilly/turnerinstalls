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
    title: "Epoxy Removal Services Brisbane | Coating Stripping",
    description: "Specialised removal of epoxy coatings, polyurethane, and garage flake systems. Grind back to clean concrete.",
};

export default function EpoxyRemoval() {
    const specs = [
        {
            icon: "🧪",
            title: "Coating stripper",
            description: "Removing failed or old epoxy flake floors, paint, and industrial sealers."
        },
        {
            icon: "⚙️",
            title: "Aggressive Tooling",
            description: "Utilising heavy grit PCD diamonds to 'slice' under the coating rather than just grinding it."
        },
        {
            icon: "🔄",
            title: "Restoration",
            description: "Returning the floor to bare concrete ready for a new coating or new flooring."
        }
    ];

    const processSteps = [
        {
            title: "Evaluation",
            description: "Checking coating thickness and bond strength to determine the right tooling."
        },
        {
            title: "PCD Stripping",
            description: "First pass with toothed PCD blades to rip the main body of the epoxy off the slab."
        },
        {
            title: "Grind & Smoothing",
            description: "Cleaning up remaining residue and smoothing the gouges left by the aggressive stripping."
        },
        {
            title: "Surface Prep",
            description: "Final vacuum and inspection, ensuring no bond-breakers remain."
        }
    ];

    const suitableFor = [
        { label: "Garage Floors", sublabel: "Old flake removal" },
        { label: "Commercial Kitchens", sublabel: "Failed coatings" },
        { label: "Warehouses", sublabel: "Line marking" },
        { label: "Driveways", sublabel: "Sealer stripping" }
    ];

    const faqs = [
        {
            question: "Why is epoxy hard to remove?",
            answer: "Epoxy is designed to bond permanently. Removing it requires sufficient weight and specialized cutting teeth to break that bond."
        },
        {
            question: "Does it damage the concrete?",
            answer: "The process is aggressive, but we follow up with smoothing passes to leave a flat, usable surface."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Epoxy <span className="text-yellow-500">Removal</span>.</>}
                subtitle="Stripping back failed coatings and old garage floors."
                imagePath="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png"
                label="COATING_REMOVAL"
            />

            <TechSpecs
                title="Strip It Back."
                description={<>
                    <p className="mb-4">Do you have a peeling garage floor or an old industrial coating that needs to go? Epoxy is tough, but our machines are tougher.</p>
                    <p>We systematically strip back layers of paint, epoxy, and polyurethane to reveal fresh concrete.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="We Strip"
                features={suitableFor}
                columns={4}
            />

            <ProcessSteps
                title="Stripping Workflow"
                steps={processSteps}
            />

            <ModernGallery
                images={[
                    "/images/gen/concrete_grinding.png",
                    "/images/image11.jpeg",
                    "/images/gen/concrete_texture.png",
                    "/images/image8.jpeg"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Remove the Old."
                subtitle="Get rid of that peeling paint or epoxy. Contact us for a stripping quote."
                buttonText="Get Epoxy Removal Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Epoxy Removal",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "email": "liam@turnerinstalls.com"
                        },
                        "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
                    })
                }}
            />
        </>
    );
}
