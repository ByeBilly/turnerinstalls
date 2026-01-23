import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Floor Levelling Services Brisbane | Self-Levelling Compound",
    description: "Professional floor levelling and flood coating in Brisbane. Correcting uneven slabs and preparing for vinyl, timber, and hybrid floors.",
};

export default function FloorLevelling() {
    const specs = [
        {
            icon: "🌊",
            title: "Liquid Flatness",
            description: "Self-levelling compound flows to create a perfectly flat surface, correcting waves and dips."
        },
        {
            icon: "💪",
            title: "High Strength",
            description: "We use high-MPA compounds that are hard, durable, and resistant to point loading."
        },
        {
            icon: "📏",
            title: "Precision",
            description: "Can be applied from feather-edge (1mm) up to 50mm+ in a single bulk fill."
        },
        {
            icon: "🚀",
            title: "Rapid Setting",
            description: "Walkable in 2-4 hours and ready for floor covering in as little as 12-24 hours."
        }
    ];

    const processSteps = [
        {
            title: "Prime & Seal",
            description: "The substrate is essentially sealed with a specialised primer to ensure bond and prevent air bubbles."
        },
        {
            title: "Mix & Pour",
            description: "We mix the compound to exact water ratios and pour it across the floor."
        },
        {
            title: "Spreading & Smoothing",
            description: "Using gauge rakes and smoothing trowels, we guide the flow of the material."
        },
        {
            title: "De-aeration",
            description: "A spike roller is used to release trapped air and ensure a glass-smooth finish."
        }
    ];

    const suitableFor = [
        { label: "Vinyl Planks", sublabel: "Essential for 3mm tolerance" },
        { label: "Engineered Timber", sublabel: "Prevents board deflection" },
        { label: "Hybrid Flooring", sublabel: "Stops joint breakage" },
        { label: "Carpet Tiles", sublabel: "Commercial Standard" },
        { label: "Large Format Tiles", sublabel: "Prevents lippage" },
        { label: "Direct Stick", sublabel: "Uniform adhesion" }
    ];

    const faqs = [
        {
            question: "Why do I need floor levelling?",
            answer: "Most concrete slabs are not flat enough for modern flooring types like vinyl plank or hybrid. Levelling prevents the new floor from showing lumps, bumps, or bouncing underfoot."
        },
        {
            question: "How long until I can walk on it?",
            answer: "Typically, you can walk on the levelled floor after 2-4 hours, depending on humidity and temperature."
        },
        {
            question: "Can you level over tiles?",
            answer: "Yes, provided the tiles are sound and secure. We grind the glaze, prime them, and flood coat over the top."
        },
        {
            question: "Is it expensive?",
            answer: "It is a premium process, but it is cheaper than ripping up a new floor that has failed due to poor prep. We charge per bag/m² so you only pay for what you need."
        },
        {
            question: "What brands do you use?",
            answer: "We use trusted trade brands like Ardex, Kiesel, and Mapei to ensure manufacturer warranties are maintained."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor <span className="text-yellow-500">Levelling</span>.</>}
                subtitle="Achieve a glass-smooth, structural finish for your new floor coverings."
                imagePath="/images/resource_bcHx5yFfMiH6FiD4JYkOpV.png"
                label="FLOOD_COATING"
            />

            <TechSpecs
                title="The Art of Flatness."
                description={<>
                    <p className="mb-4">Modern flooring like LVT (Luxury Vinyl Tiles) requires a subfloor variance of no more than 3mm over 3 meters. A standard concrete slab rarely meets this spec.</p>
                    <p>Our flood levelling service corrects undulations, ensuring your new floor sits flat, feels solid, and looks impeccable under any lighting condition.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Critical For"
                features={suitableFor}
                columns={3}
            />

            <ProcessSteps
                title="The Pour Process"
                steps={processSteps}
            />

            <div className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold mb-8">Premium Compounds</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">We select the right compound for the depth and application required.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Ardex K-12", "Ardex K-55 (Rapid)", "Kiesel Servoplan", "Bulk Fill Compounds", "Feather Finish"].map((item, i) => (
                            <span key={i} className="px-6 py-3 bg-black border border-white/10 rounded-full text-gray-300 text-sm font-mono">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <GalleryStrip
                images={[
                    "/images/image4.jpeg",
                    "/images/image8.jpeg",
                    "/images/image13.jpeg",
                    "/images/image6.jpeg"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Level Up Your Floor."
                subtitle="Don't let a bumpy slab ruin your renovation. Get a perfectly flat base today."
                buttonText="Get Levelling Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Floor Levelling",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "email": "liam@turnerinstalls.com"
                        },
                        "description": "Expert self-levelling and flood coating services to create perfectly flat subfloors in Brisbane.",
                        "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
                    })
                }}
            />
        </>
    );
}
