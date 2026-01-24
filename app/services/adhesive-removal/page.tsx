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
    title: "Adhesive & Glue Removal Brisbane | Tile, Carpet, Vinyl Removal",
    description: "Professional removal of floor adhesives. We grind off tile glue, carpet adhesive, vinyl residue, and bitumen coatings.",
};

export default function AdhesiveRemoval() {
    const specs = [
        {
            icon: "🚮",
            title: "Clean Slate",
            description: "Complete removal of stubborn adhesives leaving a clean concrete surface."
        },
        {
            icon: "🔋",
            title: "Powerful Machinery",
            description: "Using heavy 3-phase and petrol grinders with PCD (Polycrystalline Diamond) tooling."
        },
        {
            icon: "🌫️",
            title: "Dust Controlled",
            description: "Industrial vacuums capture the toxic dust and old glue particles."
        },
        {
            icon: "⏱️",
            title: "Efficient",
            description: "We can strip hundreds of square meters of glue in a single day."
        }
    ];

    const processSteps = [
        {
            title: "Bulk Removal",
            description: "Scrapers or ride-on strippers remove the bulk of the floor covering."
        },
        {
            title: "PCD Grinding",
            description: " aggressively shaving off the thick ridges of hardened adhesive."
        },
        {
            title: "Smoothing Pass",
            description: "Changing to standard diamond segments to smooth the concrete after the glue is gone."
        },
        {
            title: "Cleanup",
            description: "All waste is bagged and removed, leaving the site ready for the next trade."
        }
    ];

    const suitableFor = [
        { label: "Tile Adhesive (Bedding)", sublabel: "Cement based" },
        { label: "Carpet Glue", sublabel: "Yellow contacts" },
        { label: "Vinyl Adhesive", sublabel: "Pressure sensitive" },
        { label: "Bitumen / Magnesite", sublabel: "Old waterproofing" }
    ];

    const faqs = [
        {
            question: "Can I just lay over the old glue?",
            answer: "No. Old glue is chemically incompatible with new adhesives and creates an uneven surface. It must be removed for a successful install."
        },
        {
            question: "Is tile glue hard to remove?",
            answer: "Yes, cement-based tile bedding is very hard. We use specialized grinding segments to cut through it without damaging the slab."
        },
        {
            question: "Do you take away the rubbish?",
            answer: "Yes, we can arrange for the disposal of the removed adhesive and flooring waste."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Adhesive <span className="text-yellow-500">Removal</span>.</>}
                subtitle="The worst job in flooring, done right. We strip stubborn glues so you don't have to."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="DEMOLITION_PREP"
            />

            <TechSpecs
                title="Stubborn Glue Gone."
                description={<>
                    <p className="mb-4">Removing old flooring is half the battle; the glue it leaves behind is the real challenge. Manual scraping is ineffective and back-breaking.</p>
                    <p>We use industrial grinding technology to shred through layers of old adhesive, bitumen, and bedding, restoring your slab to its original state.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="We Remove"
                features={suitableFor}
                columns={4}
            />

            <ProcessSteps
                title="Removal Process"
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
                title="Get it Clean."
                subtitle="Don't fight the glue with a hand scraper. Let our machines do the work."
                buttonText="Get Removal Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Adhesive Removal",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "email": "liam@turnerinstalls.com"
                        },
                        "description": "Mechanical removal of floor adhesives including tile glue, carpet glue, and vinyl adhesive.",
                        "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
                    })
                }}
            />
        </>
    );
}
