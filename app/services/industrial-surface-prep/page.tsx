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
    title: "Industrial Surface Preparation Brisbane | Large Scale Grinding",
    description: "Large scale industrial floor preparation. Shot blasting, heavy grinding, and make-good services for warehouses and factories.",
};

export default function IndustrialPrep() {
    const specs = [
        {
            icon: "🏭",
            title: "Heavy Duty",
            description: "Equipment capable of handling thousands of square meters of concrete prep."
        },
        {
            icon: "🚧",
            title: "Make Goods",
            description: "Restoring leased warehouse floors to original condition for lease exit."
        },
        {
            icon: "📐",
            title: "Safety markings",
            description: "Removal of old safety lines, walkways, and hazard striping."
        }
    ];

    const processSteps = [
        {
            title: "Site Assessment",
            description: "Planning logistics for large areas, power requirements, and waste management."
        },
        {
            title: "Bulk Grinding",
            description: "Deploying large planetary grinders to rapidly cover open spaces."
        },
        {
            title: "Edging & Detail",
            description: "Ensuring perimeters and difficult-to-reach areas are treated with the same quality."
        }
    ];

    const suitableFor = [
        { label: "Warehouses" },
        { label: "Factories" },
        { label: "Car Parks" },
        { label: "Retail Centres" }
    ];

    const faqs = [
        {
            question: "Do you work after hours?",
            answer: "Yes, for commercial and industrial projects, we can operate at night or weekends to minimize downtime."
        },
        {
            question: "Do you have 3-phase power equipment?",
            answer: "Yes, we run high-powered 3-phase grinders. If site power isn't available, we bring appropriately sized generators."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Industrial <span className="text-yellow-500">Prep</span>.</>}
                subtitle="Large scale solutions for big concrete spaces."
                imagePath="/images/brisbane_skyline.png"
                label="INDUSTRIAL_SERVICES"
            />

            <TechSpecs
                title="Built for Scale."
                description={<>
                    <p className="mb-4">From warehouse make-goods to factory floor rectification, we have the fleet and the manpower to handle large square meterage efficiently.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Industrial Sectors"
                features={suitableFor}
                columns={4}
            />

            <ProcessSteps
                title="Industrial Workflow"
                steps={processSteps}
            />

            <ModernGallery
                images={[
                    "/images/new_prep_61729.jpg",
                    "/images/new_prep_61734.jpg",
                    "/images/new_prep_61801.jpg",
                    "/images/new_prep_61938.jpg",
                    "/images/new_prep_61961.jpg",
                    "/images/new_prep_61981.jpg",
                    "/images/new_prep_62113.jpg"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Industrial Strength."
                subtitle="Need a warehouse prepped fast? Contact our commercial team."
                buttonText="Get Industrial Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Industrial Surface Preparation",
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
