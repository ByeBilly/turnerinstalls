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
import FloorPrepUpliftModule from "@/components/FloorPrepUpliftModule";
import { siteImages } from "@/data/siteImages";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return suburbs.map((suburb) => ({
        region: suburb.region,
        suburb: suburb.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string; suburb: string }> }): Promise<Metadata> {
    const { suburb: suburbSlug } = await params;
    const suburb = getSuburb(suburbSlug);
    if (!suburb) return {};

    const title = `Floor Preparation ${suburb.name} | Uplift, Removal, Grinding & Levelling`;
    const desc = `Expert floor preparation in ${suburb.name}. Old floor uplift, rubbish removal, adhesive removal, concrete grinding, levelling and glue removal for renovations in ${suburb.postcode}.`;
    const canonical = `/locations/${suburb.region}/${suburb.slug}/floor-preparation`;

    return {
        title: title,
        description: desc,
        alternates: {
            canonical,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: title,
            description: desc,
            url: canonical,
            images: suburb.image ? [suburb.image.src] : [],
        }
    };
}

export default async function SuburbFloorPrepPage({ params }: { params: Promise<{ region: string; suburb: string }> }) {
    const { suburb: suburbSlug } = await params;
    const suburb = getSuburb(suburbSlug);

    if (!suburb) {
        notFound();
    }

    const variantSeed = `${suburb.region}-${suburb.slug}`;
    const variant = variantSeed.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % 4;
    const regionLabel = suburb.region
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    const landmarkLabel = suburb.landmarks?.length ? suburb.landmarks[0] : `${suburb.name} streets`;
    const prepAngles = [
        {
            intro: `New flooring is a major investment. In ${suburb.name}, the safest install starts with a substrate that has been checked for high spots, low areas, loose residue and moisture risk before any boards go down.`,
            standard: `We prepare ${suburb.name} floors with the same practical goal every time: clean concrete or timber, controlled dust, corrected levels and a surface that supports the flooring manufacturer's requirements.`,
            process: "We check access, existing coverings and the likely problem areas around the home before the uplift or grinding work starts.",
            dust: `Dust control matters in ${suburb.name} renovation work, so grinding is paired with extraction and a tidy handover.`,
            timing: "Most straightforward prep jobs can be completed quickly, but levelling depth, humidity and moisture readings decide when the floor is ready for install.",
        },
        {
            intro: `The floor you see depends on the surface underneath it. Around ${suburb.name}, we often find old adhesive, slab waves, extension joins and tired coverings that need fixing before hybrid, vinyl or timber is installed.`,
            standard: `Turner Installs maps the surface, removes the old floor system where required, grinds contamination, patches defects and levels the areas that would otherwise move underfoot.`,
            process: `We start by reading the ${suburb.name} site: driveway access, room layout, old floor type, slab condition and where waste can be loaded out cleanly.`,
            dust: "Mechanical prep creates fine dust, but the equipment is run with extraction to keep the work controlled inside occupied homes and commercial spaces.",
            timing: "Light grinding and patching may be same-day work; flood levelling usually needs moisture and cure checks before installation continues.",
        },
        {
            intro: `A smooth-looking new floor can still fail if the base flexes, crumbles or dips. For ${suburb.name} projects, we focus on uplift, adhesive removal, grinding and levelling before the finish layer is even considered.`,
            standard: `The aim is a floor-ready substrate: old coverings removed, glue and paint stripped back, high ridges reduced, low spots filled, and the surface left clean enough for primer or adhesive.`,
            process: `We inspect the rooms near ${landmarkLabel}, measure the obvious highs and lows, and plan the prep sequence around access, dust and waste removal.`,
            dust: `Homes and shops in ${suburb.name} need clean work habits. Dust extraction and staged clean-up are part of the prep, not an afterthought.`,
            timing: "The timing depends on the system used: grinding can hand over fast, while levelling compounds need the right cure window before hard flooring is laid.",
        },
        {
            intro: `In ${suburb.name}, good flooring prep is a mix of removal, correction and restraint. We do not hide slab problems with extra underlay; we correct the base so the new floor has proper support.`,
            standard: `That means assessing flatness, removing old glue and residue, grinding the high spots, repairing defects and using self-levelling where the floor needs a flatter plane.`,
            process: `Every ${regionLabel} job has its own site constraints, so we check access, noise, dust, waste, floor height and the selected flooring product before choosing the prep method.`,
            dust: "Dust is managed with extraction and clean work practices, especially where families, tenants or neighbouring businesses are nearby.",
            timing: "We plan around the next trade or installation date, with cure time and moisture checks deciding when the prepared floor is ready.",
        },
    ][variant];

    // Dynamic specs localized to the suburb where possible
    const specs = [
        {
            icon: "📏",
            title: `Dead Flat in ${suburb.name}`,
            description: variant === 0
                ? "Checking and correcting the highs and lows that cause hollow spots, movement and visible waves in new flooring."
                : variant === 1
                    ? "Laser checking slabs and subfloors so vinyl, hybrid and timber are not forced over avoidable dips or ridges."
                    : variant === 2
                        ? "Preparing the base so long boards and low-angle light do not reveal every old slab defect."
                        : "Reducing floor movement by correcting the surface before the new flooring system is installed."
        },
        {
            icon: "🛡️",
            title: "Moisture Protection",
            description: variant === 0
                ? `Moisture readings matter in ${suburb.name}; damp slabs can ruin adhesive, timber and vinyl installs.`
                : variant === 1
                    ? "Checking moisture risk before primers, levellers or flooring adhesives lock a problem under the floor."
                    : variant === 2
                        ? `Identifying damp or suspect concrete around ${suburb.name} before the new floor traps the issue.`
                        : "Moisture checks help protect warranties and reduce the risk of later cupping, lifting or bond failure."
        },
        {
            icon: "↥",
            title: "Uplift & Removal",
            description: "Removing carpet, vinyl, laminate, smoothedge, staples, old tiles and waste before preparation starts."
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
            description: prepAngles.process
        },
        {
            title: "Uplift & Removal",
            description: variant % 2 === 0
                ? "Existing carpet, vinyl, laminate, tile, smoothedge, staples and loose waste removed where required."
                : "Old floor coverings and loose materials are lifted, sorted and removed so the substrate can be assessed properly."
        },
        {
            title: "Grinding & Glue Removal",
            description: variant % 2 === 0
                ? "Mechanical removal of old adhesive, paint and weak surface laitance so primers and compounds can bond."
                : "Diamond tooling strips contamination and opens the surface profile for levelling or direct-stick flooring."
        },
        {
            title: "Repair",
            description: variant % 2 === 0
                ? "Cracks, divots, ramps and broken edges are repaired before the levelling or installation stage."
                : "Local defects are patched and feathered so the finished floor is not forced over avoidable weak points."
        },
        {
            title: "Levelling",
            description: variant % 2 === 0
                ? "Self-levelling compound is used where the floor needs a flatter, more stable installation plane."
                : "Primer and levelling compound are applied only where needed to support the selected floor covering."
        }
    ];

    const faqs = [
        {
            question: `Do you cover ${suburb.name}?`,
            answer: `Yes, ${suburb.name} is a key service area for us. We have teams operating in ${suburb.region.replace('-', ' ')} daily.`
        },
        {
            question: "How long does the prep take?",
            answer: prepAngles.timing
        },
        {
            question: "Is it dusty?",
            answer: prepAngles.dust
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
                    <p className="mb-4">{prepAngles.intro}</p>
                    <p>{prepAngles.standard}</p>
                </>}
                features={specs}
            />

            <ImageGrid
                title="The Turner Difference"
                description={`Why ${suburb.name} homeowners choose us.`}
                images={siteImages.floorPrep.turnerDifference}
                columns={2}
            />

            <FloorPrepUpliftModule
                suburbName={suburb.name}
                variantKey={variantSeed}
                regionName={regionLabel}
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
