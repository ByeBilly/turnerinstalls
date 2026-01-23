import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Concrete Grinding Services Brisbane | Dust-Free Floor Prep",
    description: "Professional concrete grinding in Brisbane. Remove old adhesives, paint, and high spots with our dust-free grinding systems.",
};

export default function ConcreteGrinding() {
    const specs = [
        {
            icon: "🌫️",
            title: "Dust-Free System",
            description: "High-powered M-Class vacuum attachment captures 99.9% of silica dust."
        },
        {
            icon: "🧼",
            title: "Contaminant Removal",
            description: "Strips away old glue, paint, curing compounds, and surface grime."
        },
        {
            icon: "📏",
            title: "Surface Profiling",
            description: "Creates the correct 'key' or porosity for new adhesives to bond securely."
        },
        {
            icon: "🔨",
            title: "Hump Removal",
            description: "Aggressive diamond tooling to grind down high spots and ridges in the slab."
        }
    ];

    const processSteps = [
        {
            title: "Surface Analysis",
            description: "We identify the hardness of the concrete to select the correct diamond grit segments."
        },
        {
            title: "Coarse Grinding",
            description: "Initial pass with aggressive diamonds to remove bulk adhesive or high spots."
        },
        {
            title: "Refinement",
            description: "Secondary passes to smooth the profile and open the concrete pores."
        },
        {
            title: "Vacuum & Seal",
            description: "Thorough vacuuming followed by priming if levelling is required immediately after."
        }
    ];

    const suitableFor = [
        { label: "Garage Floors", sublabel: "Epoxy Prep" },
        { label: "Renovations", sublabel: "Tile Removal" },
        { label: "Commercial", sublabel: "Make Good" },
        { label: "Warehouses", sublabel: "Line Marking Removal" }
    ];

    const faqs = [
        {
            question: "Is concrete grinding messy?",
            answer: "Our system is virtually dust-free. We connect our large grinders to industrial HEPA vacuums that capture dust at the source."
        },
        {
            question: "Can you grind wet concrete?",
            answer: "No, the concrete must be relatively dry for effective grinding. If moisture is a broad issue, we may need to investigate moisture barriers."
        },
        {
            question: "Do you grind rain-damaged slabs?",
            answer: "Yes, we can grind off the soft, dusty top layer of a rain-damaged slab to reveal the solid concrete underneath."
        },
        {
            question: "Does this level the floor?",
            answer: "Grinding removes high spots. To fill low spots, we use a combination of grinding (highs) and self-levelling compound (lows)."
        },
        {
            question: "How much can you grind off?",
            answer: "Typically up to 3-5mm safely. Taking off more might expose aggregate or affect slab structural integrity, which we assess on-site."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Concrete <span className="text-yellow-500">Grinding</span>.</>}
                subtitle="Dust-free mechanical preparation to clean, flatten, and profile your slab."
                imagePath="/images/resource_avPl0dbJ2Se1Om54B2t_d-.png"
                label="SURFACE_PREP"
            />

            <TechSpecs
                title="The Foundation of Adhesion."
                description={<>
                    <p className="mb-4">You cannot stick new flooring to old paint, glue, or dusty concrete. It simply won't bond.</p>
                    <p>Concrete grinding is the essential first step in most renovation projects. It exposes fresh, clean concrete that is ready to accept primers, levelling compounds, or direct-stick adhesives.</p>
                </>}
                features={specs}
            />

            <FeaturesGrid
                title="Ideal Applications"
                features={suitableFor}
                columns={4}
            />

            <ProcessSteps
                title="The Grinding Workflow"
                steps={processSteps}
            />

            <div className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Grinding Fleet</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Planetary Grinders", "Hand Grinders (Edging)", "PCD Diamonds (Glue Removal)", "Soft Bond Diamonds (Hard Concrete)", "Hard Bond Diamonds (Soft Concrete)"].map((item, i) => (
                            <span key={i} className="px-6 py-3 bg-black border border-white/10 rounded-full text-gray-300 text-sm font-mono">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <ModernGallery
                images={[
                    "/images/gen/concrete_grinding.png",
                    "/images/image1.jpeg",
                    "/images/gen/concrete_texture.png",
                    "/images/image8.jpeg"
                ]}
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Start with a Clean Slate."
                subtitle="Need old adhesive gone or a rain-damaged slab fixed? We have the machines to handle it."
                buttonText="Get Grinding Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Concrete Grinding",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "email": "liam@turnerinstalls.com"
                        },
                        "description": "Dust-free concrete grinding services for adhesive removal, surface prep, and slab rectification in Brisbane.",
                        "areaServed": ["Brisbane", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"]
                    })
                }}
            />
        </>
    );
}
