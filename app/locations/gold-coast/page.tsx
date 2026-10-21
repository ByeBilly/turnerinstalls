import RegionPrepPage from "@/components/RegionPrepPage";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

const ogTitle = "Floor Preparation & Floor Levelling Gold Coast";
const ogDescription = "Floor preparation and floor levelling on the Gold Coast: tile and carpet uplift, adhesive removal, concrete grinding and self-levelling, then your new floor laid by the same crew.";

export const metadata: Metadata = buildPageMetadata({
    title: "Floor Preparation & Floor Levelling Gold Coast",
    description: "Floor preparation and floor levelling on the Gold Coast: uplift, adhesive removal, concrete grinding and self-levelling, then the same crew lays your new floor.",
    path: "/locations/gold-coast",
    ogTitle,
    ogSubtitle: ogDescription,
});

const faqs = [
    {
        question: "Do you do floor levelling on the Gold Coast?",
        answer: "Yes. We grind high spots and ridges, fill low spots or flood-coat the floor with self-levelling compound, and check flatness against the installation guide for the flooring going down. One of our crew leaders is based in Eagleby, on the M1 between Brisbane and the Gold Coast.",
    },
    {
        question: "Can you prepare the floor and install the new flooring?",
        answer: "Yes. The same crew uplifts the old floor, grinds and levels, then lays the new timber, hybrid, vinyl or laminate, so prep and installation are quoted together.",
    },
    {
        question: "Can you remove old tiles before new hybrid or timber?",
        answer: "Yes. We uplift ceramic and porcelain tiles, grind the adhesive bed back to the slab and level the low spots, ready for hybrid, vinyl or timber. Flat, firmly bonded tiles can sometimes stay under hybrid; hollow or uneven tiles have to come up.",
    },
    {
        question: "Do you work in Gold Coast apartments?",
        answer: "Yes. Apartment slabs are often less flat than new flooring needs. We grind with dust extraction, protect the joinery and finishes, and remove the old flooring on our own truck.",
    },
    {
        question: "Which parts of the Gold Coast do you cover?",
        answer: "The Gold Coast is covered from our Eagleby crew base. Call with the suburb and the size of the job and we will confirm timing.",
    },
];

export default function GoldCoast() {
    return (
        <RegionPrepPage
            region="Gold Coast"
            path="/locations/gold-coast"
            heroImage="/installspics/finished/large-open-plan-timber-floor.jpg"
            heroImageAlt="Large open-plan timber floor laid after floor preparation"
            subtitle="Uplift, adhesive removal, grinding and self-levelling before your new floor goes down, with the install done by the same crew."
            intro={<>
                <p>
                    Gold Coast floors bring the same problems we fix every week in Brisbane: ribbed tile adhesive under
                    old ceramic tiles, apartment slabs with humps and hollows, glue left behind by old vinyl and carpet, and
                    new-build slabs that are flat enough for carpet but not for hybrid or glue-down vinyl.
                </p>
                <p>
                    Turner Installs does the floor preparation and the installation. We lift and remove the old floor,
                    grind and repair the slab, level it with self-levelling compound where it needs it, and then lay your
                    new floor on the surface we prepared. One quote covers both, and the crew that levelled the floor is the
                    crew that stands behind the finished install.
                </p>
                <p>
                    We are based in Oxley, and one of our crew leaders is based in Eagleby, on the M1 between Brisbane and
                    the Gold Coast.
                </p>
            </>}
            jobs={[
                {
                    title: "Floor levelling",
                    body: "High spots ground down, low spots filled or the whole floor flood-coated with self-levelling compound, then checked against the flatness your flooring's installation guide asks for.",
                },
                {
                    title: "Tiles out, new floor in",
                    body: "Ceramic and porcelain tiles uplifted, the adhesive bed ground back to the slab, and the floor levelled ready for hybrid, vinyl or timber.",
                },
                {
                    title: "Apartment slabs",
                    body: "Unit and high-rise slabs prepared with dust-extracted grinding, finishes protected, and old flooring taken away on our own truck.",
                },
                {
                    title: "Adhesive and glue removal",
                    body: "Old vinyl adhesive, carpet glue and tile adhesive mechanically removed so the new adhesive bonds to clean concrete.",
                },
                {
                    title: "Concrete grinding",
                    body: "Ridges, trowel marks, lips between old and new slab, paint and weak surface concrete ground off before new flooring.",
                },
                {
                    title: "Carpet uplift",
                    body: "Carpet, underlay, smoothedge and staples removed and the slab cleaned up, patched and levelled for a hard floor.",
                },
            ]}
            areas={[
                { name: "Surfers Paradise", href: "/locations/gold-coast/surfers-paradise/floor-preparation" },
                { name: "Broadbeach", href: "/locations/gold-coast/broadbeach/floor-preparation" },
                { name: "Carrara", href: "/locations/gold-coast/carrara/floor-preparation" },
                { name: "Burleigh Heads", href: "/locations/gold-coast/burleigh-heads/floor-preparation" },
            ]}
            gallery={[
                { src: "/images/Showroom-Carrara-Gold-Coast.jpeg", alt: "Flooring showroom job in Carrara, Gold Coast" },
                { src: "/images/Showroom-Carrara-Gold-Coast1.jpeg", alt: "Detail of the Carrara showroom flooring job" },
                { src: "/installspics/prep/floods/mirror-glass-level-flood.jpg", alt: "Self-levelling flood coat cured to a flat, glassy finish" },
                { src: "/installspics/locations/goldcoastcleanfinish.jpg", alt: "Clean finished floor on the Gold Coast" },
            ]}
            faqs={faqs}
        />
    );
}
