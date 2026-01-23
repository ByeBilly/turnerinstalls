import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Subfloor Repairs Brisbane | Timber & Concrete Fixes",
    description:
        "Structural subfloor repairs for timber and concrete. We fix squeaks, rot, cracks, and uneven joists across Brisbane and Gold Coast.",
};

export default function SubfloorRepairs() {
    const specs = [
        {
            icon: "🪵",
            title: "Yellow Tongue Replacements",
            description: "Cut out and replace rotted or water-damaged yellow tongue particle board sections."
        },
        {
            icon: "🔇",
            title: "Squeak Removal",
            description: "Screw down loose boards and plane joists to eliminate annoying creaks and groans."
        },
        {
            icon: "🏚️",
            title: "Concrete Crack Stitching",
            description: "Epoxy injection and stitching to stabilize cracks in concrete slabs before tiling."
        },
        {
            icon: "🔨",
            title: "Joist Packing",
            description: "Correcting uneven timber subfloors by packing or planing joists for a flat finish."
        }
    ];

    const faqs = [
        {
            question: "Why does my floor squeak?",
            answer: "Squeaks are usually caused by movement—nails pulling out of joists or boards rubbing together. We re-fix the subfloor with screws to lock it down tight."
        },
        {
            question: "Can you fix water-damaged termite floors?",
            answer: "We can replace damaged particle board or plywood sheeting. For structural termite damage to bearers/joists, we recommend a builder inspection first."
        },
        {
            question: "Do you sand timber floors?",
            answer: "We focus on **subfloor preparation** (the structure underneath). We prepare timber subfloors for new coverings (vinyl/carpet) but we don't sand/polish floorboards as a finish."
        },
        {
            question: "How do you fix large concrete cracks?",
            answer: "We chase the crack (open it up), insert metal staples ('stitching'), and fill it with high-strength epoxy to bond the slab back together."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Structural <span className="text-yellow-500">Subfloor Repairs</span>.</>}
                subtitle="Fixing the squeaks, rot, and cracks before the new floor goes down."
                imagePath="/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                label="STRUCTURAL_REPAIR"
            />

            <TechSpecs
                title="Solid Foundations."
                description={<>
                    <p className="mb-4">Never install a new floor over a compromised subfloor. Rot, movement, and uneven joists will ruin your investment quickly.</p>
                    <p>We specialize in surgical repairs—cutting out the bad, reinforcing the structure, and ensuring you have a rock-solid, silent base for your renovation.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Stop the squeak."
                subtitle="Get expert advice on repairing your timber or concrete subfloor."
                buttonText="Get Repair Quote"
            />
        </>
    );
}
