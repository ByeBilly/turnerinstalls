import { notFound } from "next/navigation";
import Link from "next/link";
import {
    flooringInstallationSuburbs,
    getFlooringInstallationSuburb,
} from "@/data/flooringInstallationSuburbs";
import ServiceHero from "@/components/ServiceHero";
import SEOCTA from "@/components/SEOCTA";
import InternalLinks from "@/components/InternalLinks";
import { siteImages } from "@/data/siteImages";
import ModernGallery from "@/components/ModernGallery";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
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

    return {
        title: data.seoTitle,
        description: data.metaDescription,
        alternates: {
            canonical: `/flooring-installation/${data.slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: data.seoTitle,
            description: data.metaDescription,
            url: `/flooring-installation/${data.slug}`,
        },
    };
}

const services = [
    "Timber floor installation",
    "Hybrid floor installation",
    "Vinyl plank flooring",
    "Laminate flooring",
    "Floor replacements",
    "Renovation flooring upgrades",
];

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

    return (
        <>
            <ServiceHero
                title={data.h1Title || <>Flooring Installation in <span className="text-yellow-500">{data.name}</span></>}
                subtitle={`Premium timber, hybrid, vinyl and laminate flooring for ${data.name} homes. Local installer based near Oxley.`}
                imagePath={
                    siteImages.home.transformations[0]?.src ||
                    "/installspics/finished/brisbane views.jpg"
                }
                label={`${data.name.toUpperCase()} (${data.postcode})`}
            />

            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-5">
                    <p className="text-lg text-slate-700 leading-relaxed">
                        {data.introParagraph}
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
                        Flooring Services in {data.name}
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
                title={`Recent flooring projects in ${data.name} and surrounds`}
                images={siteImages.home.transformations}
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

            <BreadcrumbSchema items={[
                { name: "Home", url: "/" },
                { name: "Flooring Installation Brisbane", url: "/flooring-installation-brisbane" },
                { name: data.name, url: `/flooring-installation/${data.slug}` }
            ]} />

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
                        "description": data.metaDescription,
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
                    }),
                }}
            />
        </>
    );
}
