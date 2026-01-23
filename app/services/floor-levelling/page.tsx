import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Floor Levelling Brisbane | Self Leveling Compound Experts",
    description:
        "Specialist flood levelling and floor flattening in Brisbane. We correct uneven slabs for vinyl, hybrid, and timber installation.",
};

export default function FloorLevelling() {
    const specs = [
        {
            icon: "⚖️",
            title: "Needle-Perfect Flatness",
            description: "Achieve tolerances tighter than 3mm over 3m, meeting strict warranty requirements for hybrid and vinyl."
        },
        {
            icon: "🧪",
            title: "Engineered Compounds",
            description: "We use Ardit and Mapei commercial levelling compounds for specific depths and curing times."
        },
        {
            icon: "🏗️",
            title: "Structural Integrity",
            description: "Our compounds bond chemically to the subfloor, adding strength and reducing drumminess."
        },
        {
            icon: "⏱️",
            title: "Rapid Curing",
            description: "Walkable in 2-4 hours, ready for flooring next day. Fast-track your project."
        }
    ];

    const faqs = [
        {
            question: "What is flood levelling?",
            answer: "Flood levelling (or self-levelling) involves pouring a liquid cement-based compound over a primed subfloor. Gravity does the work, creating a perfectly flat, smooth surface as it cures."
        },
        {
            question: "Why do I need it for Hybrid flooring?",
            answer: "Hybrid and Vinyl plank joining mechanisms (locks) are brittle. If the floor dips more than 2-3mm, walking on it causes the locks to snap, ruining your floor. Levelling prevents this."
        },
        {
            question: "Can you level just one room?",
            answer: "Yes, we can level a single bedroom or an entire warehouse. We often ramp levels to meet existing heights at doorways (e.g., meeting tiles or carpet)."
        },
        {
            question: "Do you primer first?",
            answer: "Always. Priming is non-negotiable. It seals the substrate and ensures the leveller bonds permanently. We never skip this step."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Engineered <span className="text-yellow-500">Floor Levelling</span>.</>}
                subtitle="The ultimate solution for uneven slabs. Create a mirror-flat foundation for your new floors."
                imagePath="/images/resource_9fVqoabE10H5PDfVW4rOXY.png"
                label="LEVEL_CORRECTION"
            />

            <TechSpecs
                title="Dead Flat. Guaranteed."
                description={<>
                    <p className="mb-4">Installing modern flooring on an eerie, wavy slab is a recipe for disaster. <strong>Floor Levelling</strong> is the only way to guarantee the longevity of Vinyl, Hybrid, or Timber floors.</p>
                    <p>We pump and pour high-performance self-levelling compounds that correct dips, ramps, and undulations, giving you a showroom-quality base.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png",
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png",
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Get on the level."
                subtitle="Ensure your subfloor meets warranty standards. Book a free laser selection today."
                buttonText="Book Levelling Quote"
            />
        </>
    );
}
