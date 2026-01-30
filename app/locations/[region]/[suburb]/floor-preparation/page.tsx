import { notFound } from 'next/navigation';
import { suburbs, getSuburb } from '@/data/suburbs';
import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import ImageGrid from "@/components/ImageGrid";
import TrustBar from "@/components/TrustBar";
import HeroForm from "@/components/HeroForm";
import { siteImages } from "@/data/siteImages";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return suburbs.map((suburb) => ({
        region: suburb.region,
        suburb: suburb.slug,
    }));
}

export async function generateMetadata({ params }: { params: { region: string; suburb: string } }): Promise<Metadata> {
    const suburb = getSuburb(params.suburb);
    if (!suburb) return {};

    const title = `Floor Preparation ${suburb.name} | Concrete Grinding Specialists`;
    const desc = `Expert floor preparation in ${suburb.name}. Concrete grinding, levelling, and glue removal for renovations in ${suburb.postcode}. Dead flat finish guaranteed.`;

    return {
        title: title,
        description: desc,
        openGraph: {
            title: title,
            description: desc,
            images: suburb.image ? [suburb.image.src] : [],
        }
    };
}

export default function SuburbFloorPrepPage({ params }: { params: { region: string; suburb: string } }) {
    const suburb = getSuburb(params.suburb);

    if (!suburb) {
        notFound();
    }

    // Dynamic specs localized to the suburb where possible
    const specs = [
        {
            icon: "📏",
            title: `Dead Flat in ${suburb.name}`,
            description: "Achieving tolerances of 3mm over 3m or better for premium vinyl and timber installs."
        },
        {
            icon: "🛡️",
            title: "Moisture Protection",
            description: `Essential for ${suburb.name} homes. Identifying and resolving rising damp before it destroys your new floor.`
        },
        {
            icon: "🏗️",
            title: "Structural Integrity",
            description: "Repairing cracks, divots, and weak concrete to ensure a solid bond."
        },
        {
            icon: "⏱️",
            title: "Fast Turnaround",
            description: "Rapid-setting compounds allow for same-day or next-day installation."
        }
    ];

    const processSteps = [
        {
            title: "Assessment",
            description: `We scan your ${suburb.name} subfloor with laser levels to map every high and low spot.`
        },
        {
            title: "Grinding",
            description: "Mechanical removal of old adhesive, paint, and weak surface laitance."
        },
        {
            title: "Repair",
            description: "Filling cracks and divots to ensure a monolithic substrate."
        },
        {
            title: "Levelling",
            description: "Application of self-levelling compound for a mirror-flat finish."
        }
    ];

    const faqs = [
        {
            question: `Do you cover ${suburb.name}?`,
            answer: `Yes, ${suburb.name} is a key service area for us. We have teams operating in ${suburb.region.replace('-', ' ')} daily.`
        },
        {
            question: "How long does the prep take?",
            answer: "Most residential jobs are completed in 1-2 days, depending on the need for flood levelling."
        },
        {
            question: "Is it dusty?",
            answer: "We use high-end dust extraction systems to keep your home clean, capturing 99.9% of dust."
        }
    ];

    return (
        <>
            <ServiceHero
                title={<>Floor Preparation <span className="text-yellow-500">{suburb.name}</span>.</>}
                subtitle={`The secret to a flawless floor in ${suburb.name} is what lies beneath. We create mirror-flat substrates for renovations and new builds.`}
                imagePath={siteImages.floorPrep.hero.src}
                label="TECHNICAL_SPECIALIST"
            >
                <HeroForm />
            </ServiceHero>

            <TrustBar />

            <TechSpecs
                title={`Don't Risk Your ${suburb.name} Floor.`}
                description={<>
                    <p className="mb-4">New flooring is a huge investment. Installing it over the uneven or damp subfloors often found in {suburb.name} is the fastest way to void your warranty.</p>
                    <p>We don't just lay floors; we engineer the substrate to Australian Standards.</p>
                </>}
                features={specs}
            />

            <ImageGrid
                title="The Turner Difference"
                description={`Why ${suburb.name} homeowners choose us.`}
                images={siteImages.floorPrep.turnerDifference}
                columns={2}
            />

            <ProcessSteps
                title="Our Prep Process"
                steps={processSteps}
            />

            <ImageGrid
                title="Ready for Installation"
                description="The standard we deliver. Clean, flat, and structurally sound."
                images={siteImages.floorPrep.process.slice(0, 3).map(img => ({ ...img, caption: img.alt }))}
                columns={3}
                variant="success"
            />

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title={`Ready to prep your ${suburb.name} property?`}
                subtitle="Get a free measure and quote from the local specialists."
                buttonText="Get a Prep Quote"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `Floor Preparation ${suburb.name}`,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Turner Installs",
                            "telephone": "+61 7480 223 88",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": suburb.name,
                                "addressRegion": "QLD",
                                "postalCode": suburb.postcode
                            }
                        },
                        "description": `Expert floor preparation in ${suburb.name}.`,
                        "areaServed": [suburb.name]
                    })
                }}
            />
        </>
    );
}
