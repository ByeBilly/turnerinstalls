import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Floor Preparation Sunshine Coast | Grinding & Levelling",
    description:
        "Sunshine Coast floor preparation. Caloundra to Noosa. We bring professional concrete grinding and levelling to the Coast.",
};

export default function SunshineCoast() {
    const specs = [
        {
            icon: "☀️",
            title: "Sunny Coast Wide",
            description: "Servicing Caloundra, Maroochydore, Noosa, and the Hinterland."
        },
        {
            icon: "🏡",
            title: "Renovation Experts",
            description: "Specializing in slab preparation for beach house and holiday rental renovations."
        },
        {
            icon: "💧",
            title: "Moisture Care",
            description: "Treating damp coastal slabs with epoxy barriers before new flooring is installed."
        },
        {
            icon: "🔨",
            title: "Grind & Seal",
            description: "Creating polished concrete looks for modern coastal homes and cafes."
        }
    ];

    const faqs = [
        {
            question: "Do you charge travel to Noosa?",
            answer: "We have regular runs to the Sunshine Coast. Contact us to check our schedule—we often waive travel fees for booked works."
        },
        {
            question: "Can you level a garage for a gym?",
            answer: "Yes, we grind and level garage floors to create a flat, safe surface for home gyms or workshops."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Prep <span className="text-yellow-500">Sunshine Coast</span>.</>}
                subtitle="Professional flooring foundations from Caloundra to Noosa."
                imagePath="/images/resource_9fVqoabE10H5PDfVW4rOXY.png"
                label="SUNSHINE_COAST"
            />

            <TechSpecs
                title="Coastal Quality."
                description={<>
                    <p className="mb-4">The laid-back lifestyle demands floors that look great and last. Whether it's a <strong>Mooloolaba</strong> apartment or a <strong>Buderim</strong> family home, we ensure your subfloor is rock solid.</p>
                    <p>Don't risk your new hybrid or timber floor on an uneven slab. Get it prepped by the professionals.</p>
                </>}
                features={specs}
            />

            <GalleryStrip
                images={[
                    "/images/resource_avPl0dbJ2Se1Om54B2t_d-.png",
                    "/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png",
                    "/images/resource_9P4V5A71bJ19uiTBiRV4_n.png",
                    "/images/resource_8hoRmbeN0wZaeTsIWHp4VF.png"
                ]}
            />

            <FAQSection items={faqs} />

            <SEOCTA
                title="Sunshine Coast Services."
                subtitle="Reliable, professional, and on-time. Book your Sunshine Coast floor assessment."
                buttonText="Get Coastal Quote"
            />
        </>
    );
}
