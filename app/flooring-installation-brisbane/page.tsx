import Link from "next/link";
import { flooringInstallationSuburbs } from "@/data/flooringInstallationSuburbs";
import ServiceHero from "@/components/ServiceHero";
import SEOCTA from "@/components/SEOCTA";
import { siteImages } from "@/data/siteImages";
import ModernGallery from "@/components/ModernGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flooring Installation Brisbane | Timber, Hybrid & Vinyl | Turner Installs",
    description:
        "Professional flooring installation across Brisbane. Timber, hybrid, vinyl & laminate. Oxley-based installer servicing 30+ suburbs. Free quotes. 15+ years experience.",
};

const brisbaneSuburbs = flooringInstallationSuburbs.filter(
    (s) =>
        !["springfield", "springfield-lakes", "redbank-plains", "springwood", "daisy-hill", "north-lakes"].includes(s.slug)
);
const ipswichSuburbs = flooringInstallationSuburbs.filter((s) =>
    ["springfield", "springfield-lakes", "redbank-plains"].includes(s.slug)
);
const loganSuburbs = flooringInstallationSuburbs.filter((s) =>
    ["springwood", "daisy-hill"].includes(s.slug)
);
const moretonSuburbs = flooringInstallationSuburbs.filter((s) =>
    ["north-lakes", "narangba"].includes(s.slug)
);

export default function FlooringInstallationBrisbanePage() {
    return (
        <>
            <ServiceHero
                title={
                    <>
                        Flooring Installation <span className="text-yellow-500">Brisbane</span>
                    </>
                }
                subtitle="Premium timber, hybrid, vinyl and laminate flooring across Brisbane, Ipswich, Logan, and Moreton Bay. Oxley-based. 30+ suburbs."
                imagePath={
                    siteImages.home.transformations[0]?.src ||
                    "/installspics/finished/brisbane views.jpg"
                }
                label="BRISBANE WIDE"
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Brisbane's Local Flooring Installer
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Turner Installs is based in Oxley with easy access to the Ipswich Motorway, Centenary Highway, and Gateway. Our central location means 30 minutes covers most of Brisbane and Ipswich, with Logan and Moreton Bay (including Narangba) within easy reach. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homeowners across Brisbane, Ipswich, Logan, and Moreton Bay.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        With 15+ years of experience and three generations of flooring expertise, we bring local knowledge, fast site visits, and a high-end finish to every project. Whether you're in a heritage Queenslander in Paddington or a new build in Springfield, we've got you covered.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">
                        Flooring Installation by Suburb
                    </h2>
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-lg font-bold text-slate-700 mb-4">Brisbane</h3>
                            <div className="flex flex-wrap gap-3">
                                {brisbaneSuburbs.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/flooring-installation/${s.slug}`}
                                        className="px-4 py-2 bg-white border border-slate-200 rounded hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-slate-700 font-medium"
                                    >
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-700 mb-4">Ipswich & Springfield</h3>
                            <div className="flex flex-wrap gap-3">
                                {ipswichSuburbs.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/flooring-installation/${s.slug}`}
                                        className="px-4 py-2 bg-white border border-slate-200 rounded hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-slate-700 font-medium"
                                    >
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-700 mb-4">Logan</h3>
                            <div className="flex flex-wrap gap-3">
                                {loganSuburbs.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/flooring-installation/${s.slug}`}
                                        className="px-4 py-2 bg-white border border-slate-200 rounded hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-slate-700 font-medium"
                                    >
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-700 mb-4">Moreton Bay</h3>
                            <div className="flex flex-wrap gap-3">
                                {moretonSuburbs.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/flooring-installation/${s.slug}`}
                                        className="px-4 py-2 bg-white border border-slate-200 rounded hover:border-yellow-400 hover:bg-yellow-50 transition-colors text-slate-700 font-medium"
                                    >
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Our Services
                    </h2>
                    <ul className="space-y-3 text-slate-700">
                        {[
                            "Timber floor installation",
                            "Hybrid floor installation",
                            "Vinyl plank flooring",
                            "Laminate flooring",
                            "Floor preparation (grinding, levelling)",
                            "Adhesive removal",
                            "Subfloor repair",
                        ].map((s, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-1">✓</span>
                                <span>{s}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ModernGallery
                title="Recent Brisbane Projects"
                images={siteImages.home.transformations}
                limit={4}
            />

            <SEOCTA
                title="Brisbane Flooring—Get a Quote"
                subtitle="We're based in Oxley and service 30+ suburbs. Free site visits. No obligation."
                buttonText="Get Brisbane Quote"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Turner Installs - Flooring Installation Brisbane",
                        "description": "Professional flooring installation across Brisbane. Timber, hybrid, vinyl & laminate. Oxley-based.",
                        "telephone": "+61 7480 223 88",
                        "email": "liam@turnerinstalls.com",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Oxley",
                            "addressRegion": "QLD",
                            "postalCode": "4074",
                            "addressCountry": "AU",
                        },
                        "areaServed": {
                            "@type": "GeoCircle",
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "latitude": -27.5536,
                                "longitude": 152.9769,
                            },
                            "geoRadius": "50000",
                        },
                        "priceRange": "$$",
                    }),
                }}
            />
        </>
    );
}
