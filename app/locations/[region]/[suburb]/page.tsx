import { notFound } from 'next/navigation';
import { suburbs, getSuburb, SuburbData } from '@/data/suburbs';
import ServiceHero from "@/components/ServiceHero";
import TechSpecs from "@/components/TechSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesGrid from "@/components/FeaturesGrid";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import TrustBar from "@/components/TrustBar";
import HeroForm from "@/components/HeroForm";
import StorySection from "@/components/StorySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import { siteImages } from "@/data/siteImages";
import type { Metadata } from "next";

// 1. Generate StaticParams & Metadata (Unchanged)
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

    const title = `Flooring Installation ${suburb.name} | Professional Floor Preparation`;
    const desc = `Specalist flooring contractors in ${suburb.name}. We provide expert floor preparation, concrete grinding, and installation services for renovations in ${suburb.postcode}.`;

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

// 3. Page Component
export default async function SuburbPage({ params }: { params: Promise<{ region: string; suburb: string }> }) {
    const { suburb: suburbSlug } = await params;
    const suburb = getSuburb(suburbSlug);

    if (!suburb) {
        notFound();
    }

    // --- ARCHETYPE CONTENT LOGIC ---
    const archetypeContent = {
        'historic': {
            heroSubtitle: `Restoring ${suburb.name}'s classic homes from the ground up.`,
            introTitle: "Respecting the Past, Prepping for the Future.",
            introText: `Renovating in ${suburb.name} often means dealing with decades of history—and the uneven subfloors that come with it. Whether it's a Queenslander with a moving frame or a post-war cottage with glue-riddled hardwood, we ensure your base is solid.`,
            spec1: "Timber Floor Prep",
            spec1Desc: "Stabilizing and ramping timber subfloors for new hybrid or engineered heavy flooring."
        },
        'apartment': {
            heroSubtitle: `Low-dust, noise-compliant floor prep for ${suburb.name} apartments.`,
            introTitle: "High-Rise Precision.",
            introText: `Body Corporate bylaws in ${suburb.name} are strict. We specialize in low-noise, dust-extracted grinding and acoustic matting installation that meets ISO standards, ensuring your renovation doesn't disturb the neighbors.`,
            spec1: "Acoustic Matting",
            spec1Desc: "Supply and install of Regupol or similar acoustic underlays to meet Body Corp by-laws."
        },
        'new-build': {
            heroSubtitle: `Correcting slab defects in ${suburb.name}'s new estates.`,
            introTitle: "Don't Settle for uneven slabs.",
            introText: `Builders often hand over slabs that aren't flat enough for modern vinyl planking. We come in post-handover to grind humps and flood-fill low spots, ensuring your warranty remains valid in ${suburb.name}.`,
            spec1: "Slab Rectification",
            spec1Desc: "Grinding rain-damaged slabs or levelling to the 3mm tolerance required by floor layers."
        },
        'commercial': {
            heroSubtitle: `Industrial grade floor preparation in ${suburb.name}.`,
            introTitle: "Business Grade Base.",
            introText: `From retail defits in ${suburb.name} to warehouse make-goods, we provide the heavy machinery needed to strip 500m²+ of glue or epoxy in a single shift.`,
            spec1: "Bulk Removal",
            spec1Desc: "Ride-on stripping and 3-phase grinding for rapid turnaround."
        }
    };

    const content = archetypeContent[suburb.archetype] || archetypeContent['historic'];

    const specs = [
        {
            icon: "📍",
            title: "Local Experts",
            description: `We understand the specific building guidelines and unique soil/foundation challenges in ${suburb.name}.`
        },
        {
            icon: "🛠️",
            title: content.spec1,
            description: content.spec1Desc
        },
        {
            icon: "📉",
            title: "Laser Levelling",
            description: "Using rotary lasers to map your floor's topography and ensure a perfectly flat finish."
        },
        {
            icon: "✨",
            title: "Dust-Free Promise",
            description: "Essential for occupied homes in " + suburb.name + ". Our H-Class vacuums capture 99.9% of dust."
        }
    ];

    // Adapted from Homepage Services but tailored title
    const suitableFor = [
        { label: "Renovations" },
        { label: "New Builds" },
        { label: "Real Estate Pre-Sale" },
        { label: "Commercial Fitouts" }
    ];

    // --- HERO IMAGE LOGIC ---
    // 1. Suburb Specific Image (Highest Priority)
    // 2. Region Specific Fallback (Gold Coast vs Brisbane)
    // 3. Default Site Hero
    let heroImage = suburb.image?.src;
    if (!heroImage) {
        if (suburb.region === 'gold-coast') {
            heroImage = "/images/gold_coast_skyline.jpg"; // You'll need to ensure this image exists or use a placeholder
        } else {
            heroImage = "/installspics/finished/brisbane views.jpg";
        }
    }

    // --- GALLERY LOGIC ---
    // If we have specific gallery images for the suburb, use them.
    // Otherwise, use the standard transformation set.
    const galleryImages = suburb.galleryImages && suburb.galleryImages.length > 0
        ? suburb.galleryImages
        : siteImages.home.transformations;

    return (
        <>
            <ServiceHero
                title={<>{suburb.name} <span className="text-yellow-500">Flooring Specialists</span>.</>}
                subtitle={content.heroSubtitle}
                imagePath={heroImage}
                label={`${suburb.region.toUpperCase().replace('-', ' ')}`}
            >
                {/* INJECT HERO FORM */}
                <HeroForm location={suburb.name} />
            </ServiceHero>

            {/* INJECT TRUST BAR */}
            <TrustBar />

            {/* INJECT STORY SECTION */}
            <StorySection locationName={suburb.name} />

            <TechSpecs
                title={content.introTitle}
                description={<>
                    <p className="mb-4">{content.introText}</p>
                    {suburb.landmarks && suburb.landmarks.length > 0 && (
                        <p className="text-sm text-gray-400 mt-2">
                            <em>Serving projects near {suburb.landmarks.join(', ')} and surrounding streets of {suburb.name} ({suburb.postcode}).</em>
                        </p>
                    )}
                </>}
                features={specs}
            />

            <FeaturesGrid
                title={`Full Service Flooring in ${suburb.name}`}
                features={suitableFor}
                columns={4}
            />

            {/* INJECT WHY CHOOSE US */}
            <WhyChooseUs locationName={suburb.name} />

            <ProcessSteps
                title="Our Process"
                steps={[
                    { title: "Consult", description: `We visit your ${suburb.name} site to assess specific access and power requirements.` },
                    { title: "Prep", description: "Grinding, stripping, or repairing the subfloor." },
                    { title: "Level", description: "Applying flood coating if required for a mirror finish." },
                    { title: "Handover", description: "Site left clean, vacuumed, and ready for installation." }
                ]}
            />

            <ModernGallery
                title={`Recent transformations in and around ${suburb.name}`}
                description="See the quality of our preparation and finishing work. Real projects, real results."
                images={galleryImages}
                limit={4}
            />

            <FAQSection items={[
                {
                    question: `Do you charge for travel to ${suburb.name}?`,
                    answer: "No, we have teams stationed across Brisbane and the Gold Coast, so we don't charge extra travel fees."
                },
                {
                    question: "How quickly can you start?",
                    answer: "We often have capacity for urgent jobs in the area. Contact us to check our schedule."
                }
            ]} />

            <InternalLinks type="services" />

            {(() => {
                const nearby = suburbs
                    .filter((s) => s.region === suburb.region && s.slug !== suburb.slug)
                    .slice(0, 6);
                if (nearby.length === 0) return null;
                return (
                    <section className="py-12 bg-slate-900 border-t border-white/5">
                        <div className="max-w-4xl mx-auto px-5">
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest text-center">
                                Other Floor Preparation Service Areas in {suburb.region.replace('-', ' ').toUpperCase()}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {nearby.map((s) => (
                                    <a
                                        key={s.slug}
                                        href={`/locations/${s.region}/${s.slug}`}
                                        className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors border border-yellow-400/30 hover:border-yellow-400/60 px-3 py-1.5 rounded"
                                    >
                                        {s.name} Floor Prep
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })()}

            <SEOCTA
                title={`Ready to prep your ${suburb.name} property?`}
                subtitle="Get a free quote from the local experts today."
                buttonText="Get Local Quote"
            />

            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Service Areas", url: "/service-areas" },
                { name: suburb.region.replace('-', ' ').toUpperCase(), url: `/locations/${suburb.region}` },
                { name: suburb.name, url: `/locations/${suburb.region}/${suburb.slug}` }
            ]} />

            <FAQSchema faqs={[
                {
                    question: `Do you charge for travel to ${suburb.name}?`,
                    answer: "No, we have teams stationed across Brisbane and the Gold Coast, so we don't charge extra travel fees."
                },
                {
                    question: `How quickly can you start floor preparation in ${suburb.name}?`,
                    answer: "We often have capacity for urgent jobs in the area. Contact us to check our schedule."
                }
            ]} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FlooringContractor",
                        "name": `Turner Installs - ${suburb.name}`,
                        "description": `Professional floor preparation services in ${suburb.name}, ${suburb.region}.`,
                        "telephone": "+61413592054",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": suburb.name,
                            "addressRegion": "QLD",
                            "postalCode": suburb.postcode,
                            "addressCountry": "AU"
                        },
                        "areaServed": [suburb.name],
                        "priceRange": "$$"
                    })
                }}
            />
        </>
    );
}
