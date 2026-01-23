import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import GalleryStrip from "@/components/GalleryStrip";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";

export const metadata = {
    title: "Epoxy Removal & Concrete Stripping Brisbane",
    description:
        "Professional removal of failing epoxy coatings, paint, and sealers. We return concrete to a raw, porous state ready for resurfacing.",
};

export default function EpoxyRemoval() {
    const specs = [
        {
            icon: "🔥",
            title: "Heavy Coating Removal",
            description: "Stripping thick industrial epoxy, polyurethane, and seamless flake flooring systems."
        },
        {
            icon: "⚙️",
            title: "PCD Grinding",
            description: "Using 'Pre-Cut Diamond' tooling to aggressively shred coatings without smearing them."
        },
        {
            icon: "🌦️",
            title: "Sealer Stripping",
            description: "Removing UV-damaged or flaking concrete sealers from driveways and patios."
        },
        {
            icon: "🏁",
            title: "Surface Profiling",
            description: "Leaving the concrete with a CSP (Concrete Surface Profile) of 2-3, ideal for re-coating."
        }
    ];

    const faqs = [
        {
            question: "Why is my epoxy peeling?",
            answer: "Epoxy usually peels because the concrete wasn't ground correctly before application, or moisture was trapped underneath. We remove the failed coating and fix the underlying issue."
        },
        {
            question: "Can you grind off driveway paint?",
            answer: "Yes. Driveway paint (stencilcrete or plain sealer) can be ground off to reveal the natural concrete or prepare for a new covercrete application."
        },
        {
            question: "Is it noisy?",
            answer: "Concrete grinding is industrial work, so it does create noise. However, we work efficiently to minimize disruption and can schedule works around your trading hours."
        },
        {
            question: "How fast can you remove it?",
            answer: "Our machines can strip 50-100m² of standard coatings per day, usually completing residential garages or shops in a single shift."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Epoxy & Coating <span className="text-yellow-500">Stripping</span>.</>}
                subtitle="Removing failed epoxy, paint, and sealers to reveal fresh concrete."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="COATING_REMOVAL"
            />

            <TechSpecs
                title="Epoxy Gone Wrong?"
                description={<>
                    <p className="mb-4">There is nothing worse than a peeling garage floor. Attempting to sand it off yourself will just clog sandpaper in seconds.</p>
                    <p>We use aggressive PCD tooling that literally cuts underneath the coating to lift it off the concrete, leaving a clean, open-pored surface ready for a new system.</p>
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
                title="Strip it back."
                subtitle="Get rid of that ugly, peeling coating. Contact us for a quote."
                buttonText="Book Stripping Service"
            />
        </>
    );
}
