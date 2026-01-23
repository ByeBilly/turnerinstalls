import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Floor Preparation Gold Coast | Concrete Grinding GC",
    description:
        "Gold Coast's premier floor prep team. Servicing Southport, Surfers Paradise, Burleigh to Coolangatta. High-rise and residential specialists.",
};

export default function GoldCoast() {
    const specs = [
        {
            icon: "🏖️",
            title: "Coastal Conditions",
            description: "Expertise in managing coastal humidity and salt air effects on concrete curing."
        },
        {
            icon: "🏢",
            title: "High-Rise Specialist",
            description: "Experienced in apartment strip-outs, acoustic flooring requirements, and lift access logistics."
        },
        {
            icon: "🛍️",
            title: "Retail & Hospitality",
            description: "Fast turnaround for cafes, restaurants, and shops in the busy GC tourism hubs."
        },
        {
            icon: "📍",
            title: "Gold Coast Local",
            description: "Servicing the entire coast from Coomera to Coolangatta."
        }
    ];

    const faqs = [
        {
            question: "Do you work in apartments?",
            answer: "Yes, we specialize in high-rise work. We have sound-dampened equipment and dust extraction to adhere to strict Body Corporate bylaws."
        },
        {
            question: "Can you remove tiles on a balcony?",
            answer: "Yes, we strip balcony tiles, grind the glue, and prepare the correct falls for re-waterproofing and tiling."
        },
        {
            question: "How far south do you go?",
            answer: "We cover the entire Gold Coast down to Coolangatta and Tweed Heads."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Gold Coast</span>.</>}
                subtitle="Leveling the Gold Coast, one floor at a time. High-rise, residential, and commercial."
                imagePath="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png"
                label="GOLD_COAST"
            />

            <TechSpecs
                title="Surfers to Coolangatta."
                description={<>
                    <p className="mb-4">Renovating a unit in <strong>Surfers Paradise</strong> or a family home in <strong>Burleigh</strong>? We help GC locals get the perfect base for their new floors.</p>
                    <p>We are experts in meeting the strict acoustic (soundproofing) and level requirements of Gold Coast body corporates.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png",
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Gold Coast Trusted."
                subtitle="Get a quote from the team that knows the Coast. Book your free measure."
                buttonText="Get GC Quote"
            />
        </>
    );
}
