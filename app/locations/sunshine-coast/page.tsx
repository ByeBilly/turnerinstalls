import RegionPrepPage from "@/components/RegionPrepPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

const ogTitle = "Floor Preparation Sunshine Coast";
const ogDescription = "Floor preparation on the Sunshine Coast: uplift, adhesive removal, concrete grinding and floor re-levelling before new flooring, with the install done by the same crew.";

export const metadata: Metadata = buildPageMetadata({
    title: "Floor Preparation Sunshine Coast: Levelling & Grinding",
    description: "Floor preparation on the Sunshine Coast: uplift, adhesive removal, concrete grinding and floor re-levelling, then your new floor laid by the same crew.",
    path: "/locations/sunshine-coast",
    ogTitle,
    ogSubtitle: ogDescription,
});

const faqs = [
    {
        question: "Do you do floor preparation on the Sunshine Coast?",
        answer: "Yes. We travel up from Brisbane for Sunshine Coast floor prep and installation. Send the suburb, the floor area and a few photos and we will confirm timing and quote the job.",
    },
    {
        question: "What does floor re-levelling involve?",
        answer: "For new flooring, re-levelling means making the floor surface flat enough for the product going down: grinding the high spots, then filling the lows or flood-coating with self-levelling compound. It is not house restumping. If the house itself has moved, that is a job for a builder or restumper first.",
    },
    {
        question: "Can you prepare the floor and install the new flooring?",
        answer: "Yes. The same crew uplifts the old floor, grinds and levels, then lays the new timber, hybrid, vinyl or laminate, so prep and installation are quoted together.",
    },
    {
        question: "Can you fix a floor after water damage?",
        answer: "We remove the damaged flooring, grind off residue, take moisture readings and add a moisture barrier if the readings call for it, then level the floor ready for the new one. The slab has to be dry enough before new flooring goes down.",
    },
    {
        question: "Do you remove old tiles and carpet?",
        answer: "Yes. Tiles, carpet, underlay, smoothedge and old vinyl are uplifted and taken away, and the adhesive is ground off the slab before levelling.",
    },
];

export default function SunshineCoast() {
    return (
        <RegionPrepPage
            region="Sunshine Coast"
            path="/locations/sunshine-coast"
            heroImage="/installspics/finished/modern-timber-flooring-living-room.jpg"
            heroImageAlt="Modern timber flooring in a living room after floor preparation"
            subtitle="Uplift, grinding and floor re-levelling before your new floor goes down, with the install done by the same crew."
            intro={<>
                <p>
                    Whether it is an older coastal home in Maroochydore, a unit in Mooloolaba or a renovation near Noosa
                    Heads, a new floor only lasts if the slab or subfloor under it is flat, dry and sound. Coastal homes add
                    their own problems: old tiles, glued-down vinyl, and slabs that have seen water.
                </p>
                <p>
                    Turner Installs does the floor preparation and the installation. We lift and remove the old floor, grind
                    and repair the slab, re-level it with self-levelling compound where needed, take moisture readings, and
                    then lay your new floor on the surface we prepared. One quote covers both.
                </p>
                <p>
                    We are based in Oxley in Brisbane and travel up for Sunshine Coast jobs. Tell us the suburb and the size of
                    the job and we will confirm timing.
                </p>
            </>}
            jobs={[
                {
                    title: "Floor re-levelling",
                    body: "High spots ground down and low spots filled or flood-coated with self-levelling compound, so the floor is flat enough for the flooring going on top.",
                },
                {
                    title: "Tiles out, new floor in",
                    body: "Tiles uplifted, the adhesive bed ground back to the slab, and the floor levelled ready for hybrid, vinyl or timber.",
                },
                {
                    title: "Water-damaged floors",
                    body: "Damaged flooring removed, residue ground off, moisture readings taken and a moisture barrier added where the readings call for it.",
                },
                {
                    title: "Adhesive and glue removal",
                    body: "Old vinyl adhesive, carpet glue and tile adhesive mechanically removed so new adhesive bonds to clean concrete.",
                },
                {
                    title: "Concrete grinding",
                    body: "Ridges, trowel marks, paint and weak surface concrete ground off with dust extraction before new flooring.",
                },
                {
                    title: "Carpet uplift",
                    body: "Carpet, underlay, smoothedge and staples removed, the slab patched and levelled for a hard floor.",
                },
            ]}
            areas={[
                { name: "Caloundra" },
                { name: "Mooloolaba" },
                { name: "Maroochydore" },
                { name: "Noosa Heads" },
            ]}
            gallery={[
                { src: "/installspics/finished/the-gap-timber-flooring.jpg", alt: "Timber flooring laid on a prepared subfloor" },
                { src: "/installspics/prep/floods/flood-work-preparation.jpg", alt: "Self-levelling flood coat during floor preparation" },
                { src: "/installspics/locations/sunshinecoast.jpg", alt: "Sunshine Coast flooring" },
                { src: "/installspics/locations/sunshinecoast1.jpg", alt: "Sunshine Coast home flooring" },
            ]}
            faqs={faqs}
        />
    );
}
