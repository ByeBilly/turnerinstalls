import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModernGallery from "@/components/ModernGallery";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import FAQSchema from "@/components/FAQSchema";
import InternalLinks from "@/components/InternalLinks";
import { safeJsonLd } from "@/lib/seo";
import { buildServiceSchema } from "@/lib/business";

type Faq = { question: string; answer: string };
type AreaLink = { name: string; href?: string };

/**
 * Floor-prep landing page for a region outside Brisbane (Gold Coast,
 * Sunshine Coast). Region-specific copy comes in as props; the
 * prep-then-install structure and links back to the floor-prep pillar and
 * guides are shared so the regions read as one service, not doorway copies.
 */
export default function RegionPrepPage({
    region,
    path,
    heroImage,
    heroImageAlt,
    subtitle,
    intro,
    jobs,
    areas,
    gallery,
    faqs,
}: {
    region: string;
    path: string;
    heroImage: string;
    heroImageAlt: string;
    subtitle: string;
    intro: React.ReactNode;
    jobs: { title: string; body: string }[];
    areas: AreaLink[];
    gallery: { src: string; alt: string }[];
    faqs: Faq[];
}) {
    return (
        <>
            <Breadcrumbs items={[
                { name: "Home", url: "/" },
                { name: "Service Areas", url: "/service-areas" },
                { name: region, url: path },
            ]} />
            <ServiceHero
                title={<>Floor Preparation <span className="text-yellow-500">{region}</span></>}
                subtitle={subtitle}
                imagePath={heroImage}
                imageAlt={heroImageAlt}
                label="FLOOR_PREP"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-5 text-slate-700 leading-relaxed space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Floor prep and levelling on the {region}, then the floor laid by the same crew
                    </h2>
                    {intro}
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">
                        {region} floor prep we are asked for most
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <article key={job.title} className="rounded-xl border border-slate-200 bg-white p-6">
                                <h3 className="text-xl font-black text-slate-900 mb-3">{job.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{job.body}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-10 text-slate-700">
                        Which prep does your new floor need? See{" "}
                        <Link href="/services/floor-preparation" className="font-bold text-yellow-700 underline underline-offset-2">floor preparation by flooring type</Link>,{" "}
                        <Link href="/blog/floor-levelling-before-new-flooring-brisbane" className="font-bold text-yellow-700 underline underline-offset-2">grinding vs self-levelling</Link>{" "}
                        and{" "}
                        <Link href="/blog/hybrid-flooring-over-tiles-brisbane" className="font-bold text-yellow-700 underline underline-offset-2">hybrid flooring over tiles</Link>.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Areas we cover on the {region}</h2>
                    <div className="flex flex-wrap gap-3">
                        {areas.map((area) =>
                            area.href ? (
                                <Link
                                    key={area.name}
                                    href={area.href}
                                    className="rounded-full border border-yellow-400 bg-yellow-50 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-yellow-100"
                                >
                                    Floor preparation {area.name}
                                </Link>
                            ) : (
                                <span key={area.name} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600">
                                    {area.name}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </section>

            <ModernGallery title={`${region} work`} images={gallery} limit={4} />

            <FAQSection items={faqs} />
            <FAQSchema faqs={faqs} />

            <InternalLinks type="services" />

            <SEOCTA
                title={`Floor prep on the ${region}?`}
                subtitle="Send a few photos of the floor and tell us what you are laying. We will tell you what prep it needs and quote prep and installation together."
                buttonText={`Get a ${region} Quote`}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: safeJsonLd(buildServiceSchema({
                        name: `Floor Preparation ${region}`,
                        description: `Floor preparation on the ${region}: old floor uplift, adhesive removal, concrete grinding and self-levelling before new flooring, with installation by the same crew.`,
                        url: path,
                        areaServed: [region],
                    }))
                }}
            />
        </>
    );
}
