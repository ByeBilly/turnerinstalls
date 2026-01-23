import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Floor Adhesive Removal Brisbane | Tile Glue & Carpet Stripping",
    description:
        "Fast removal of tile glue, vinyl adhesive, carpet foam, and bitumen. We strip floors back to bare concrete across Brisbane.",
};

export default function AdhesiveRemoval() {
    const specs = [
        {
            icon: "🔪",
            title: "Tile Glue Singing",
            description: "Aggressive removal of cement-based tile adhesive (thin-set) and bedding."
        },
        {
            icon: "🧶",
            title: "Carpet & Foam Stripping",
            description: "Scraping and grinding away stubborn carpet underlay, foam, and tack strip glue."
        },
        {
            icon: "⚫",
            title: "Vinyl & Bitumen",
            description: "Specialized removal of 'Black Jack' bitumen adhesive and vinyl plank glue."
        },
        {
            icon: "✨",
            title: "Residue Free",
            description: "We don't just scrape; we grind the substrate to ensure it's chemically clean for the next floor."
        }
    ];

    const faqs = [
        {
            question: "Can't I just chip the glue off myself?",
            answer: "You can, but it's back-breaking work. Manual chipping leaves ridges that will telegraph through your new vinyl flooring. We grind it perfectly flat in a fraction of the time."
        },
        {
            question: "Do you remove 'Black Jack' glue?",
            answer: "Yes. Old bitumen adhesive (often containing asbestos) requires careful handling. If confirmed non-friable/safe, we use wet grinding techniques to remove it safely."
        },
        {
            question: "Does it create dust?",
            answer: "Old glue turns into fine powder when ground. Our HEPA-filtered extraction units capture this dust instantly to protect your home."
        },
        {
            question: "What specific glues do you remove?",
            answer: "Everything: Two-part epoxy, contact adhesive, pressure-sensitive vinyl glue, ceramic tile cement, and timber flooring polyurethane."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Industrial <span className="text-yellow-500">Adhesive Removal</span>.</>}
                subtitle="We strip tile glue, vinyl adhesive, and carpet foam back to clean, bare concrete."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="STRIPPING & REMOVAL"
            />

            <TechSpecs
                title="Back to Bare."
                description={<>
                    <p className="mb-4">Old adhesive is the enemy of new flooring. If you stick new vinyl over old glue ridges, it <strong>will fail</strong>. </p>
                    <p>We use heavy planetary grinders with specific PCD (Polycrystalline Diamond) tooling to slice through thick glue and paint, leaving you with a pristine 'blank canvas' for your renovation.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png",
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Don't fight the glue."
                subtitle="Save your back and your schedule. Let our machines strip it in hours, not days."
                buttonText="Get Removal Quote"
            />
        </>
    );
}
