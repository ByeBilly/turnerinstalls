import { notFound } from "next/navigation";
import Link from "next/link";
import {
    flooringInstallationSuburbs,
    getFlooringInstallationSuburb,
} from "@/data/flooringInstallationSuburbs";
import ServiceHero from "@/components/ServiceHero";
import SEOCTA from "@/components/SEOCTA";
import InternalLinks from "@/components/InternalLinks";
import ModernGallery from "@/components/ModernGallery";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import FloorPrepUpliftModule from "@/components/FloorPrepUpliftModule";
import SuburbLogisticsProof from "@/components/SuburbLogisticsProof";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return flooringInstallationSuburbs.map((suburb) => ({
        suburb: suburb.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
    const { suburb } = await params;
    const data = getFlooringInstallationSuburb(suburb);
    if (!data) return {};

    const title = `${data.name} Flooring Installation, Floor Prep, Uplift & Removal`;
    const description = `Flooring installation in ${data.name} with floor preparation, old floor uplift, adhesive removal, rubbish removal, levelling and clean subfloor handover. Free quote.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/flooring-installation/${data.slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title,
            description,
            url: `/flooring-installation/${data.slug}`,
        },
    };
}

const services = [
    "Timber floor installation",
    "Hybrid floor installation",
    "Vinyl plank flooring",
    "Laminate flooring",
    "Old flooring uplift and removal",
    "Tile, carpet and adhesive removal",
    "Concrete grinding and floor preparation",
    "Floor levelling before installation",
    "Floor replacements",
    "Renovation flooring upgrades",
];

const projectExampleImages = [
    {
        src: "/installspics/finished/finished-timber-floor-display.jpg",
        alt: "Turner Installs finished timber flooring project example",
        caption: "Turner Installs project example",
    },
    {
        src: "/installspics/finished/finishedfloor.jpg",
        alt: "Turner Installs finished flooring project example",
        caption: "Turner Installs project example",
    },
    {
        src: "/installspics/finished/new-farm-apartment-flooring.jpg",
        alt: "New Farm apartment flooring project by Turner Installs",
        caption: "New Farm project shown",
    },
    {
        src: "/installspics/finished/paddington-queenslander-flooring.jpg",
        alt: "Paddington Queenslander timber flooring project by Turner Installs",
        caption: "Paddington project shown",
    },
    {
        src: "/installspics/finished/the-gap-timber-flooring.jpg",
        alt: "The Gap timber flooring project by Turner Installs",
        caption: "The Gap project shown",
    },
    {
        src: "/images/Timber-Oxley.jpeg",
        alt: "Youngs Crossing timber-look flooring project by Turner Installs",
        caption: "Youngs Crossing project shown",
    },
];

function projectIndex(slug: string) {
    return Array.from(slug).reduce((sum, char) => sum + char.charCodeAt(0), 0) % projectExampleImages.length;
}

function rotatedProjectExamples(slug: string) {
    const start = projectIndex(slug);
    return [
        ...projectExampleImages.slice(start),
        ...projectExampleImages.slice(0, start),
    ];
}

export default async function FlooringInstallationSuburbPage({
    params,
}: {
    params: Promise<{ suburb: string }>;
}) {
    const { suburb } = await params;
    const data = getFlooringInstallationSuburb(suburb);

    if (!data) {
        notFound();
    }

    const nearbyLinks = data.nearbySuburbs
        .map((slug) => flooringInstallationSuburbs.find((s) => s.slug === slug))
        .filter(Boolean);
    const serviceDescription = `Flooring installation in ${data.name} with floor preparation, old floor uplift, adhesive removal, rubbish removal, levelling and clean subfloor handover.`;
    const heroProject = projectExampleImages[projectIndex(data.slug)];
    const galleryProjects = rotatedProjectExamples(data.slug);

    return (
        <>
            <Breadcrumbs items={[
                { name: "Home", url: "/" },
                { name: "Flooring Installation Brisbane", url: "/flooring-installation-brisbane" },
                { name: data.name, url: `/flooring-installation/${data.slug}` }
            ]} />
            <ServiceHero
                title={data.h1Title || <>Flooring Installation in <span className="text-yellow-500">{data.name}</span></>}
                subtitle={`Premium timber, hybrid, vinyl and laminate flooring for ${data.name} homes. Local installer based near Oxley.`}
                imagePath={heroProject.src}
                imageAlt={heroProject.alt}
                imageNote={heroProject.caption}
                label={`${data.name.toUpperCase()} (${data.postcode})`}
            />

            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-5">
                    <p className="text-lg text-slate-700 leading-relaxed">
                        {data.introParagraph}
                    </p>
                    <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                        If the existing floor in {data.name} needs to come up first, we can handle that
                        before installation: carpet and vinyl uplift, ceramic tile removal, smoothedge
                        and staple removal, adhesive grinding, rubbish removal, levelling and substrate
                        preparation for a cleaner finished floor.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="max-w-3xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Why {data.name} Homeowners Choose Us
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        {data.localRelevance}
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Flooring, Uplift and Floor Preparation in {data.name}
                    </h2>
                    <ul className="space-y-3 text-slate-700">
                        {services.map((service, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-1">✓</span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FloorPrepUpliftModule suburbName={data.name} variantKey={data.slug} />

            <SuburbLogisticsProof
                suburbName={data.name}
                regionName="Brisbane"
            />

            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="max-w-3xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Why Choose a Local Installer
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        {data.whyChooseLocal}
                    </p>
                </div>
            </section>

            <ModernGallery
                title="Recent Turner Installs flooring projects"
                description={`Real Turner Installs project photos used as workmanship examples for ${data.name}. Captions name the location where it is known.`}
                images={galleryProjects}
                limit={4}
            />

            <InternalLinks type="services" />

            {nearbyLinks.length > 0 && (
                <section className="py-12 bg-slate-900 border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-5">
                        <h3 className="text-lg font-bold text-gray-400 mb-4 uppercase tracking-widest">
                            Flooring Installation in Nearby Suburbs
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {nearbyLinks.map((s) =>
                                s ? (
                                    <Link
                                        key={s.slug}
                                        href={`/flooring-installation/${s.slug}`}
                                        className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors border border-yellow-400/30 hover:border-yellow-400/60 px-4 py-2 rounded"
                                    >
                                        {s.name}
                                    </Link>
                                ) : null
                            )}
                        </div>
                    </div>
                </section>
            )}

            <SEOCTA
                title={data.ctaText}
                subtitle="Get a free quote from the local flooring experts. Fast response, quality finish."
                buttonText={`Get ${data.name} Quote`}
            />

            <FAQSchema faqs={[
                {
                    question: `Do you provide flooring installation quotes in ${data.name}?`,
                    answer: `Yes, Turner Installs provides free site measures and detailed quotes for homes and businesses in ${data.name} and surrounding suburbs.`
                },
                {
                    question: `What flooring types do you install in ${data.name}?`,
                    answer: "We specialise in luxury vinyl plank (LVP), hybrid flooring, engineered timber, laminate, and commercial plank installation."
                }
            ]} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FlooringContractor",
                        "name": `Turner Installs - Flooring Installation ${data.name}`,
                        "description": serviceDescription,
                        "telephone": "+61413592054",
                        "email": "liam@turnerinstalls.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": data.name,
                            "addressRegion": "QLD",
                            "postalCode": data.postcode,
                            "addressCountry": "AU",
                        },
                        "areaServed": [data.name, "Brisbane"],
                        "priceRange": "$$",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": `${data.name} flooring preparation and installation services`,
                            "itemListElement": [
                                "Flooring installation",
                                "Old flooring uplift and removal",
                                "Carpet tile removal",
                                "Adhesive removal",
                                "Concrete grinding",
                                "Floor levelling"
                            ].map((name) => ({
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": `${name} ${data.name}`,
                                    "areaServed": data.name
                                }
                            }))
                        }
                    }),
                }}
            />
        </>
    );
}
