import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Moisture Barriers Brisbane | Stop Rising Damp",
    description:
        "Protect your flooring from rising damp with professional epoxy moisture barriers. Essential for Brisbane concrete slabs.",
};

export default function MoistureBarriers() {
    const specs = [
        {
            icon: "🛑",
            title: "Block Rising Damp",
            description: "Creates an impermeable seal against ground moisture vapour rising through the concrete capillaries."
        },
        {
            icon: "🛡️",
            title: "Protect Inventory",
            description: "Prevents mould growth and water damage to timber, carpet, and stored goods."
        },
        {
            icon: "💪",
            title: "Two-Part Epoxy",
            description: "We use industrial-grade two-part epoxy systems that penetrate and cap the slab surface."
        },
        {
            icon: "✅",
            title: "Australian Standards",
            description: "Compliant application for commercial and residential slabs exceeding RH limits."
        }
    ];

    const faqs = [
        {
            question: "How do I know if I need a moisture barrier?",
            answer: "We perform a hygrometer test. If your concrete relative humidity (RH) is above 75% (or 85% for specific products), a barrier is required to prevent floor failure."
        },
        {
            question: "What happens if I ignore moisture?",
            answer: "Timber floors will cup and warp. Vinyl adhesive will emulsify (turn to soup) and bubble. Carpet creates a mould hazard. It is the #1 cause of flooring insurance claims."
        },
        {
            question: "Can you apply it over old concrete?",
            answer: "Yes, but we must grind the surface first to open the pores and ensure the epoxy penetrates deeply."
        },
        {
            question: "Is it tailored for new slabs?",
            answer: "New slabs ('green concrete') hold massive amounts of water. A moisture barrier allows you to install flooring months earlier than waiting for natural drying."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Epoxy <span className="text-yellow-500">Moisture Barriers</span>.</>}
                subtitle="Stop rising damp in its tracks. Protect your health and your investment."
                imagePath="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png"
                label="DAMP_PROOFING"
            />

            <TechSpecs
                title="The Invisible Killer of Floors."
                description={<>
                    <p className="mb-4">Brisbane's humid climate and clay soils mean concrete slabs are constantly wicking moisture from the ground. This <strong>'rising damp'</strong> is silent until it destroys your new timber or vinyl.</p>
                    <p>We apply roll-on epoxy membranes that lock moisture into the slab, creating a safe, dry surface for installation.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Dry slab, safe floor."
                subtitle="Don't let moisture void your warranty. Ask us for a moisture test today."
                buttonText="Request Moisture Test"
            />
        </>
    );
}
