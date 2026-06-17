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
                    <h2 className="text-3xl font-black mb-4 border-l-8 border-yellow-400 pl-6 text-slate-900 uppercase">
                        Flooring Installation - Brisbane West
                    </h2>
                    <p className="mb-8 pl-6 text-slate-600 max-w-3xl">
                        Based in Oxley, Turner Installs is positioned for fast site visits across Brisbane's western suburbs, Ipswich, Logan, Moreton Bay, and nearby areas. We focus on proper preparation, clean installation, and a high-end finish rather than treating every suburb as a separate sales pitch.
                    </p>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["Brisbane West", "Oxley, Graceville, Sherwood, Chelmer, Corinda, Jindalee, Kenmore and nearby suburbs."],
                            ["Ipswich & Springfield", "Springfield, Springfield Lakes, Redbank Plains and surrounding growth areas."],
                            ["Logan", "Springwood, Daisy Hill and reachable Logan renovation work."],
                            ["Moreton Bay", "North Lakes, Narangba and suitable projects north of Brisbane."],
                        ].map(([title, copy]) => (
                            <div key={title} className="bg-white border border-slate-200 p-5 shadow-sm">
                                <h3 className="text-base font-black text-slate-900 uppercase mb-3">
                                    {title}
                                </h3>
                                <p className="text-sm leading-6 text-slate-600">
                                    {copy}
                                </p>
                            </div>
                        ))}
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

            <section className="py-12 bg-white border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-2xl font-black mb-3 border-l-8 border-yellow-400 pl-6 text-slate-900 uppercase">
                        Suburbs We Service
                    </h2>
                    <p className="mb-5 pl-6 text-sm text-slate-600 max-w-3xl">
                        Quick links for flooring installation suburbs across Brisbane, Ipswich, Logan, Moreton Bay, and nearby areas.
                    </p>
                    <div className="pl-6 flex flex-wrap gap-x-4 gap-y-2 text-sm leading-6">
                        {flooringInstallationSuburbs.map((suburb) => (
                            <Link
                                key={suburb.slug}
                                href={`/flooring-installation/${suburb.slug}`}
                                className="text-slate-600 underline-offset-4 hover:text-yellow-700 hover:underline"
                            >
                                {suburb.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

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
