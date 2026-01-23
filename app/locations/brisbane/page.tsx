import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
    title: "Floor Preparation Brisbane | Concrete Grinding & Levelling",
    description:
        "Brisbane's leading floor preparation team. We service all suburbs from Northside to Southside. Dust-free grinding, levelling, and removal.",
};

export default function Brisbane() {
    const specs = [
        {
            icon: "🏙️",
            title: "Brisbane Wide",
            description: "Servicing CBD, Fortitude Valley, Chermside, Mount Gravatt, and all surrounding suburbs."
        },
        {
            icon: "🏚️",
            title: "Queenslander Reno's",
            description: "Specialized subfloor prep for timber Queenslander homes and concrete renovations."
        },
        {
            icon: "🏢",
            title: "Commercial CBD",
            description: "Night works available for Brisbane City office strip-outs and makegoods."
        },
        {
            icon: "🚚",
            title: "Fast Mobilization",
            description: "Our teams are based in Brisbane for rapid response and free site quotes."
        }
    ];

    const faqs = [
        {
            question: "Do you service Northside and Southside?",
            answer: "Yes, we have teams dedicated to both Brisbane North and South, ensuring travel time doesn't blow out your quote."
        },
        {
            question: "Can you work in CBD high-rises?",
            answer: "Absolutely. We have portable equipment that fits in lifts and HEPA extraction systems compliant with body corporate noise/dust regulations."
        },
        {
            question: "Do you do garage floors in Brisbane?",
            answer: "Yes, grinding and sealing garage floors is a popular service for Brisbane homeowners looking to tidy up their entry."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Brisbane</span>.</>}
                subtitle="The River City's trusted experts in concrete grinding, floor levelling, and adhesive removal."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="BRISBANE_METRO"
            />

            <TechSpecs
                title="Local Brisbane Experts."
                description={<>
                    <p className="mb-4">From heritage listed <strong>Queenslanders</strong> in Ascot to modern industrial warehouses in <strong>Eagle Farm</strong>, we understand Brisbane floors.</p>
                    <p>We solve the unique challenges of our humid climate—rising damp, reactive clay soil movement, and crumbling 1980s concrete slabs.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png",
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_9fVqoabE10H5PDfVW4rOXY.png",
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Brisbane's Best Prep."
                subtitle="Don't trust your floor to anyone else. Get a local quote today."
                buttonText="Get Brisbane Quote"
            />
        </>
    );
}
