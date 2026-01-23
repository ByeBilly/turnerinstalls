import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Floor Preparation Gympie | Concrete Grinding",
    description:
        "Gympie's trusted concrete grinding and floor levelling service. From the Mary Valley to the Cooloola Coast.",
};

export default function Gympie() {
    const specs = [
        {
            icon: "⛏️",
            title: "Gold City Prep",
            description: "Servicing Gympie, Mary Valley, and surrounding regional areas."
        },
        {
            icon: "🏚️",
            title: "Flood Recovery",
            description: "Experiencing in sanitizing, grinding, and restoring flood-affected concrete slabs."
        },
        {
            icon: "🌤️",
            title: "Regional Service",
            description: "Bringing city-spec commercial grinding equipment to regional projects."
        },
        {
            icon: "🚜",
            title: "Hard Access",
            description: "Equipped for rural properties and difficult access sites."
        }
    ];

    const faqs = [
        {
            question: "Do you travel to Gympie?",
            answer: "Yes. For larger residential or commercial jobs, we mobilize our truck and team to Gympie."
        },
        {
            question: "Can you remove flood damaged glue?",
            answer: "Yes and it is critical to do so. Flood water contaminates the glue and concrete. We grind it back to a clean, hygienic surface."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Gympie</span>.</>}
                subtitle="Professional concrete grinding and levelling for the Gympie region."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="WIDE_BAY"
            />

            <TechSpecs
                title="Restoring the Region."
                description={<>
                    <p className="mb-4">Whether it's flood restoration or a new build, specialized floor preparation is often hard to find in regional areas. Turner Installs brings the full setup to you.</p>
                    <p>We ensure your slab is ready for modern vinyl, hybrid, or timber flooring, backing our work with industry warranties.</p>
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
                title="Gympie Floor Services."
                subtitle="Professional prep, done right. Contact us for regional rates."
                buttonText="Get Gympie Quote"
            />
        </>
    );
}
