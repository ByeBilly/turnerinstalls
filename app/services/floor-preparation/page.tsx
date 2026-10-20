import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import SEOCTA from "@/components/SEOCTA";
import FAQSection from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import ImageGrid from "@/components/ImageGrid";
import RecentJobs from "@/components/RecentJobs";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import { siteImages } from "@/data/siteImages";
import { springHillRecentJobs, toowongPrepJobs } from "@/data/flooringInstallationSuburbs";
import type { Metadata } from "next";
import { buildPageMetadata, safeJsonLd } from "@/lib/seo";
import { buildServiceSchema } from "@/lib/business";

const ogTitle = "Floor Preparation Brisbane";
const ogDescription = "Floor preparation in Brisbane before new flooring: old floor uplift, adhesive removal, concrete grinding and self-levelling, then the same crew installs your hybrid, vinyl, timber or laminate.";

export const metadata: Metadata = buildPageMetadata({
    title: "Floor Preparation Brisbane: Levelling, Grinding & Uplift",
    description: "Floor preparation in Brisbane before new flooring: uplift, adhesive removal, concrete grinding and self-levelling, then the same crew installs the floor. Free quote.",
    path: "/services/floor-preparation",
    ogTitle,
    ogSubtitle: ogDescription,
});

// What each floor type is sensitive to, and the prep it usually needs. Kept
// general on purpose: the exact tolerance always comes from the product's own
// installation guide, which is what the warranty is judged against.
const prepByFloorType = [
    {
        floor: "Hybrid / SPC plank",
        sensitiveTo: "Dips and humps. The rigid core bridges low spots, so the joints flex, click and can eventually split.",
        usualPrep: "Grind high spots, fill or flood-coat the lows, check flatness against the manufacturer's tolerance before laying.",
    },
    {
        floor: "Laminate",
        sensitiveTo: "Unevenness and moisture from the slab. Soft spots show up as bounce and noisy joints.",
        usualPrep: "Flatten the slab, add a moisture barrier underlay on concrete, fix any loose or squeaky timber subfloor.",
    },
    {
        floor: "Glue-down vinyl plank / sheet vinyl",
        sensitiveTo: "Everything. Thin vinyl shows every trowel mark, crack and grain of grit, and adhesive fails on damp or dusty slabs.",
        usualPrep: "Grind to clean concrete, moisture test, prime, then a full skim or self-levelling coat for a smooth surface.",
    },
    {
        floor: "Engineered or solid timber",
        sensitiveTo: "Moisture and flatness. Glue-down boards need a sound, clean, dry surface for the adhesive to hold.",
        usualPrep: "Moisture readings, adhesive and contamination ground off, levelling where needed, moisture barrier if readings call for it.",
    },
    {
        floor: "Carpet / carpet tiles",
        sensitiveTo: "Less fussy about flatness, but old smoothedge, staples, glue lumps and cracks show through and wear the carpet.",
        usualPrep: "Old carpet, underlay and smoothedge out, glue and lumps scraped or ground, cracks and holes patched.",
    },
];

const commonSituations = [
    {
        title: "Tiles out, hybrid in",
        body: "Tile uplift leaves a ribbed adhesive bed. We grind it back to a flat slab and level the low spots, so the new planks sit flat. If the tiles are flat and firmly bonded, laying over them can be an option. Hollow or uneven tiles have to come up.",
        href: "/blog/hybrid-flooring-over-tiles-brisbane",
        linkText: "Hybrid over tiles: what prep is needed",
    },
    {
        title: "Carpet up, slab exposed",
        body: "Under old carpet there is usually smoothedge, staples, paint spills and patches of glue, plus dips nobody noticed while the underlay hid them. All of it has to be cleared and filled before a hard floor goes down.",
        href: "/services/adhesive-removal",
        linkText: "Adhesive and glue removal",
    },
    {
        title: "Uneven slab in a unit or new build",
        body: "Apartment and new-build slabs are often out by more than a hybrid or vinyl warranty allows. We grind the worst highs and flood-coat engineered self-levelling compound across the room, as on our recent Spring Hill job.",
        href: "/blog/floor-levelling-before-new-flooring-brisbane",
        linkText: "Grinding vs self-levelling",
    },
    {
        title: "Old vinyl, lino or glued timber",
        body: "Old resilient floors and glued boards leave adhesive that new glue will not bond to reliably. It is mechanically ground off with dust extraction so the next adhesive grips clean concrete.",
        href: "/services/concrete-grinding",
        linkText: "Concrete grinding",
    },
    {
        title: "Queenslander timber subfloors",
        body: "High joints, cupped boards, squeaks and old repairs. Timber subfloors are sanded or planed flat, re-fixed and patched, with sheeting or levelling where the floor going on top needs it.",
        href: "/services/subfloor-repairs",
        linkText: "Subfloor repairs",
    },
    {
        title: "Damp slabs",
        body: "Slabs on ground, wet areas and new pours can hold moisture that lifts glue and grows mould under floating floors. We take readings before quoting the install and add a moisture barrier where the readings call for it.",
        href: "/services/moisture-barriers",
        linkText: "Moisture barriers",
    },
];

const processSteps = [
    {
        title: "Measure and check the floor",
        description: "Straightedge and laser checks for highs and lows, moisture readings on concrete, and a tap-test for hollow tiles or loose boards. You get one quote that covers the prep and the installation.",
    },
    {
        title: "Uplift and removal",
        description: "Old carpet, tiles, vinyl, timber, smoothedge and staples are removed and the rubbish is taken away on our own truck.",
    },
    {
        title: "Grind and repair",
        description: "Dust-extracted grinding takes off adhesive, high spots and weak surface concrete. Cracks and holes are patched.",
    },
    {
        title: "Level, then install",
        description: "Low spots are filled or the floor is flood-coated with self-levelling compound. Once it has cured, the same crew lays your new floor on the surface they prepared.",
    },
];

const faqs = [
    {
        question: "Do I need floor preparation before new flooring?",
        answer: "Usually some, often more than people expect. Every flooring manufacturer sets a flatness and moisture requirement in its installation guide, and the warranty depends on meeting it. A floor can look fine and still be out by enough to make hybrid planks click or vinyl show dips. We check the floor before quoting so the prep is in the price, not a surprise on install day.",
    },
    {
        question: "Can you do the floor prep and install the flooring as one job?",
        answer: "Yes, and that is how most of our jobs run. The same crew uplifts the old floor, grinds, levels and then installs the new flooring, so one quote covers it and there is no argument between trades about whose work caused a problem.",
    },
    {
        question: "Can I lay hybrid flooring over tiles?",
        answer: "Sometimes. If the tiles are flat, firmly bonded and the grout lines are filled, hybrid can go over them. If tiles are hollow (drummy), lippy at the edges or the floor is out of level, the rigid core will flex over those defects. Then the tiles are ground flat and skimmed, or uplifted and the slab prepared.",
    },
    {
        question: "How long does floor preparation take?",
        answer: "Grinding and patching a typical home is usually a day. Self-levelling compound then needs time to cure before flooring goes on top. The cure time depends on the product and the thickness, often overnight to a couple of days. We schedule the install around it so you are not waiting on two separate trades.",
    },
    {
        question: "What is the difference between grinding and self-levelling?",
        answer: "Grinding removes material: high spots, ridges, adhesive and weak surface concrete. Self-levelling compound adds material: it flows into the low spots to create a flat plane. Most uneven floors need both, grinding first and levelling second.",
    },
    {
        question: "Do you remove old tiles, carpet and glue?",
        answer: "Yes. We uplift carpet, underlay and smoothedge, ceramic tiles, vinyl and old timber, mechanically remove tile adhesive and carpet glue, and take the rubbish away on our own truck.",
    },
    {
        question: "How much does floor preparation cost in Brisbane?",
        answer: "It depends on what is on the floor now, how uneven the slab is and how much area needs levelling. We give a fixed quote after looking at the floor. Our cost guide explains what drives the price.",
    },
    {
        question: "Where do you do floor preparation?",
        answer: "Across Brisbane from our base in Oxley, plus Ipswich, Logan, Moreton Bay, the Gold Coast and the Sunshine Coast. Our crew leaders are based in Sherwood and Eagleby.",
    },
];

const prepAreas = [
    { name: "Spring Hill", href: "/locations/brisbane/spring-hill/floor-preparation" },
    { name: "Toowong", href: "/locations/brisbane/toowong/floor-preparation" },
    { name: "Graceville", href: "/locations/brisbane/graceville/floor-preparation" },
    { name: "Sherwood", href: "/locations/brisbane/sherwood/floor-preparation" },
    { name: "Oxley", href: "/locations/brisbane/oxley/floor-preparation" },
    { name: "Chelmer", href: "/locations/brisbane/chelmer/floor-preparation" },
    { name: "Indooroopilly", href: "/locations/brisbane/indooroopilly/floor-preparation" },
    { name: "Kenmore", href: "/locations/brisbane/kenmore/floor-preparation" },
    { name: "Paddington", href: "/locations/brisbane/paddington/floor-preparation" },
    { name: "New Farm", href: "/locations/brisbane/new-farm/floor-preparation" },
    { name: "Gold Coast", href: "/locations/gold-coast" },
    { name: "Sunshine Coast", href: "/locations/sunshine-coast" },
];

const guides = [
    { title: "Do you need floor preparation before new flooring?", href: "/blog/do-you-need-floor-preparation-before-new-flooring" },
    { title: "Can you lay hybrid flooring over tiles?", href: "/blog/hybrid-flooring-over-tiles-brisbane" },
    { title: "Floor levelling before new flooring: grinding vs self-levelling", href: "/blog/floor-levelling-before-new-flooring-brisbane" },
    { title: "Floor preparation cost in Brisbane", href: "/blog/floor-preparation-cost-brisbane-what-to-expect" },
];

export default function FloorPreparation() {
    return (
        <>
            <Breadcrumbs items={[
                { name: "Home", url: "/" },
                { name: "Services", url: "/services" },
                { name: "Floor Preparation", url: "/services/floor-preparation" }
            ]} />
            <ServiceHero
                title={<>Floor Preparation <span className="text-yellow-500">Brisbane</span></>}
                subtitle="Uplift, grinding and self-levelling before your new floor goes down, then the same crew installs it. One quote, one crew, no blaming the slab afterwards."
                imagePath={siteImages.floorPrep.hero.src}
                imageAlt="Rough concrete slab before floor preparation in Brisbane"
                label="TECHNICAL_PREP"
            />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                            Floor prep and installation, <span className="text-yellow-500">one crew</span>
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Most flooring problems start under the floor. Hybrid planks that click, vinyl that shows every dip,
                            boards that lift at the joins: almost always the slab or subfloor was not flat, clean or dry enough
                            for the product going on top.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Turner Installs does both halves of the job. We lift the old floor, grind, repair and level the
                            substrate, then install your new timber, hybrid, vinyl or laminate on the surface we prepared. You
                            get one quote for the whole job, and the crew that prepares the substrate is the crew that has to
                            stand behind the finished floor.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Flooring already bought, or another installer booked? We also do prep-only jobs and hand over a
                            floor that meets the installation guide for the product you have chosen.
                        </p>
                    </div>
                    <ul className="grid gap-4">
                        {[
                            ["One quote", "Uplift, rubbish removal, grinding, levelling and installation priced together after we have checked the floor."],
                            ["Checked against your product", "Flatness and moisture are measured against the installation guide for the flooring you are laying, which is what its warranty is judged on."],
                            ["No gap between trades", "Levelling compound cures, then the same crew lays the floor. No waiting on a second trade, no dispute about whose work failed."],
                            ["Clean site", "Dust-extracted grinding, and old flooring loaded out on our own truck."],
                        ].map(([title, body]) => (
                            <li key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                <p className="font-black text-slate-900 mb-1">{title}</p>
                                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Does my floor need preparation?
                    </h2>
                    <p className="text-slate-600 mb-10 max-w-3xl">
                        It depends on the floor going down. These are the prep jobs we most often do before each type of
                        flooring. The exact tolerance always comes from the product&apos;s own installation guide.
                    </p>
                    <div className="grid gap-4 md:hidden">
                        {prepByFloorType.map((row) => (
                            <div key={row.floor} className="rounded-xl border border-slate-200 bg-white p-5 text-sm">
                                <h3 className="font-black text-slate-900 mb-3">{row.floor}</h3>
                                <p className="text-slate-600 mb-3"><span className="font-bold text-slate-800">On a poor base: </span>{row.sensitiveTo}</p>
                                <p className="text-slate-700"><span className="font-bold text-slate-800">Usual prep: </span>{row.usualPrep}</p>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th scope="col" className="p-4 font-bold">New floor</th>
                                    <th scope="col" className="p-4 font-bold">What goes wrong on a poor base</th>
                                    <th scope="col" className="p-4 font-bold">Prep we usually do</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prepByFloorType.map((row) => (
                                    <tr key={row.floor} className="border-t border-slate-200 align-top">
                                        <th scope="row" className="p-4 font-bold text-slate-900">{row.floor}</th>
                                        <td className="p-4 text-slate-600">{row.sensitiveTo}</td>
                                        <td className="p-4 text-slate-700">{row.usualPrep}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">
                        Floor prep jobs we do every week
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {commonSituations.map((item) => (
                            <article key={item.title} className="flex flex-col rounded-xl border border-slate-200 p-6">
                                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{item.body}</p>
                                <Link href={item.href} className="text-sm font-bold text-yellow-600 hover:underline">
                                    {item.linkText} →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ImageGrid
                title="Avoid these costly issues"
                description="What happens when flooring goes down on a poor base."
                images={siteImages.floorPrep.unacceptable}
                columns={2}
                variant="warning"
            />

            <ProcessSteps
                title="How a prep-and-install job runs"
                steps={processSteps}
            />

            <ImageGrid
                title="Ready for installation"
                description="The standard we hand over: clean, flat and sound."
                images={siteImages.floorPrep.turnerDifference.map((img) => ({ ...img, caption: img.alt }))}
                columns={3}
                variant="success"
            />

            <RecentJobs suburbName="Brisbane" jobs={[...springHillRecentJobs.slice(0, 2), ...toowongPrepJobs.slice(0, 2)]} />

            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Floor preparation near you</h2>
                        <p className="text-slate-600 mb-6">
                            Based in Oxley, with crew leaders in Sherwood and Eagleby. Local pages with jobs we have done in
                            each area:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {prepAreas.map((area) => (
                                <Link
                                    key={area.href}
                                    href={area.href}
                                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-yellow-400 hover:text-slate-900"
                                >
                                    {area.name}
                                </Link>
                            ))}
                            <Link
                                href="/flooring-installation-brisbane"
                                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
                            >
                                All Brisbane suburbs
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Floor prep guides</h2>
                        <ul className="space-y-3">
                            {guides.map((guide) => (
                                <li key={guide.href}>
                                    <Link href={guide.href} className="font-bold text-slate-800 hover:text-yellow-600">
                                        {guide.title} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Tools & Materials We Use</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Husqvarna Grinders", "M Class Dust Extractors", "Ardex Compounds", "Kiesel Systems", "Laser Levels", "Moisture Meters"].map((item, i) => (
                            <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-mono shadow-sm">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="mt-12 rounded-lg border border-yellow-300 bg-white p-8 text-left shadow-sm">
                        <span className="mb-3 inline-block rounded bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-900">
                            Planning Tool
                        </span>
                        <h3 className="mb-3 text-2xl font-black text-slate-900">Working out flooring quantities?</h3>
                        <p className="mb-6 text-slate-600">
                            Before ordering boards or booking prep, it helps to estimate floor area, waste allowance, pack coverage, and rough material requirements. Use this free professional flooring calculator as a planning aid, then book Turner Installs for the site measure and final quote.
                        </p>
                        <a
                            href="https://www.calculationtime.com/calculators/professional-flooring-calculator/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-slate-800"
                        >
                            Open Flooring Calculator
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <FAQSection items={faqs} />

            <InternalLinks type="locations" />

            <SEOCTA
                title="Get the floor right first."
                subtitle="Send a few photos of the floor as it is now and we will tell you what prep it needs. Prep and installation quoted together."
                buttonText="Get a Prep + Install Quote"
            />
            <FAQSchema faqs={faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: safeJsonLd(buildServiceSchema({
                        name: "Floor Preparation",
                        description: "Floor preparation before new flooring: old floor uplift, adhesive removal, concrete grinding, crack repair, self-levelling and moisture barriers, with installation by the same crew.",
                        url: "/services/floor-preparation",
                        areaServed: ["Brisbane", "Ipswich", "Logan", "Gold Coast", "Sunshine Coast", "Toowoomba", "Gympie"],
                    }))
                }}
            />
        </>
    );
}
