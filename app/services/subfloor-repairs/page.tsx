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
    title: "Subfloor Repairs Brisbane | Crack Fixing & Concrete Repair",
    description: "Expert subfloor repair services in Brisbane. Fixing cracks, divots, ramping height differences, and stabilising loose areas.",
};

export default function SubfloorRepairs() {
    const specs = [
        {
            icon: "🔨",
            title: "Crack Stitching",
            description: "Stabilising moving cracks with cross-stitching steel staples and structural epoxy."
        },
        {
            icon: "📉",
            title: "Ramping",
            description: "Creating smooth transitions between different floor heights (e.g., tile to vinyl)."
        },
        {
            icon: "🩹",
            title: "Divot Filling",
            description: "Patching holes from removed carpet gripper, nails, or dynabolts."
        },
        {
            icon: "🚧",
            title: "Joint Repair",
            description: "Rectifying expansion joints and cold joints in concrete slabs."
        }
    ];

    const processSteps = [
        {
            title: "Diagnosis",
            description: "We inspect the cause of the damage—is it settling, moisture, or structural movement?"
        },
        {
            title: "Preparation",
            description: "Chasing out cracks with a V-blade grinder to open them up for filling."
        },
        {
            title: "Reinforcement",
            description: "Inserting steel pins/staples if required to mechanically lock the crack."
        },
        {
            title: "Filling",
            description: "Injecting rapid-set epoxy or structural mortar to bond and seal the repair."
        }
    ];

    const suitableFor = [
        { label: "Cracked Slabs" },
        { label: "Renovation Damage" },
        { label: "Height Differences" },
        { label: "Trip Hazards" }
    ];

    const faqs = [
        {
            question: "Will the cracks come back?",
            answer: "We use structural stitching to minimize return cracking. However, if the house has major foundation movement, some re-cracking can occur. Our repairs are stronger than the original concrete."
        },
        {
            question: "Can you fix squeaky timber floors?",
            answer: "Yes, we can re-screw loose particleboard (yellow tongue) or plywood subfloors to joists to silence squeaks."
        },
        {
            question: "What is 'ramping'?",
            answer: "Ramping is creating a gentle slope to join a lower floor (like a bedroom) to a higher floor (like a tiled hallway) so there is no step or trip hazard."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Subfloor <span className="text-yellow-500">Repairs</span>.</>}
                subtitle="Fixing the cracks, holes, and hazards before the new floor goes down."
                imagePath="/images/resource_9fVqoabE10H5PDfVW4rOXY.png"
                label="STRUCTURAL_FIX"
            />

            <TechSpecs
                title="Solid Ground."
                description={<>
                    <p className="mb-4">You can't build a great floor on a broken foundation. Minor cracks can telescope through to your new vinyl, and height differences can create trip hazards.</p>
                    <p>We provide targeted repairs to stabilize your subfloor, creating a monolithic, continuous surface ready for installation.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Repair Services"
                features={suitableFor}
                columns={4}
            />

            <ProcessSteps
                title="Crack Repair Process"
                steps={processSteps}
            />

            <GalleryStrip
                images={[
                    "/images/image12.jpeg",
                    "/images/image4.jpeg",
                    "/images/image0.jpeg",
                    "/images/image6.jpeg"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Fix It Once."
                subtitle="Structure and stability are key. Let us repair your subfloor correctly."
                buttonText="Get Repair Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Subfloor Repairs",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "email": "liam@turnerinstalls.com.au"
                        },
                        "description": "Subfloor repair services including crack stitching, ramping, and patching in Brisbane.",
                        "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
                    })
                }}
            />
        </>
    );
}
