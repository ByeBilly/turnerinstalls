import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Concrete Grinding Brisbane | Dust-Free Surface Prep",
    description:
        "Expert concrete grinding in Brisbane. Remove glues, paint, and high spots with our dust-free industrial grinding setup. Get a quote today.",
};

export default function ConcreteGrinding() {
    const specs = [
        {
            icon: "🌪️",
            title: "Dust-Free HEPA Extraction",
            description: "Our industrial vacuums capture 99.9% of silica dust, keeping your home or site clean and safe."
        },
        {
            icon: "💎",
            title: "Diamond Tooling",
            description: "We use various diamond grits to aggressively remove coatings or polish surfaces to a smooth finish."
        },
        {
            icon: "🧹",
            title: "Glue & Paint Removal",
            description: "Effortlessly strip old tile adhesive, vinyl glue, epoxy, and carpet foam residue."
        },
        {
            icon: "📏",
            title: "High Spot Correction",
            description: "Grinding down humps in concrete slabs to ensure flat flooring installation."
        }
    ];

    const faqs = [
        {
            question: "Is concrete grinding messy?",
            answer: "Not with us. We use high-powered industrial vacuums connected directly to our grinders (HEPA filters), capturing dust at the source. Your property is left clean."
        },
        {
            question: "Can you grind outdoor concrete?",
            answer: "Yes, we grind driveways, patios, and pool surrounds to remove old coatings, expose aggregate, or prepare for resurfacing."
        },
        {
            question: "How much does it cost per m2?",
            answer: "Rates depend on the concrete hardness and what needs removing (glue vs. high spots). Contact us for a precise per-meter or project rate."
        },
        {
            question: "Do I need grinding before tiling?",
            answer: "Ideally, yes. Grinding opens the concrete 'pores' (providing a mechanical key), allowing the new tile adhesive to bond much stronger than on a smooth or contaminated surface."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Precision <span className="text-yellow-500">Concrete Grinding</span>.</>}
                subtitle="Dust-free removal of adhesives, coatings, and imperfections. The ultimate prep for any floor."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="SURFACE_PREP"
            />

            <TechSpecs
                title="Surface Perfection"
                description={<>
                    <p className="mb-4">Concrete grinding is the heavy lifting of floor prep. Whether you need to remove stubborn <strong>tile glue</strong>, level out a <strong>rain-damaged slab</strong>, or prepare for a <strong>polished finish</strong>, our machines make short work of it.</p>
                    <p>We operate 3-phase industrial grinders that are powerful enough for commercial sites but compact enough for residential renovations.</p>
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
                title="Start with a clean slate."
                subtitle="Remove the old, prepare for the new. Book your concrete grinding service today."
                buttonText="Get a Grinding Quote"
            />
        </>
    );
}
