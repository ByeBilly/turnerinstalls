import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/data/siteImages";

type FloorPrepUpliftModuleProps = {
    suburbName: string;
    prepHref?: string;
    variantKey?: string;
    regionName?: string;
};

const introVariants = [
    (area: string) =>
        `Turner Installs handles the hard prep before the new flooring goes down in ${area}: uplift, disposal, glue removal, grinding, levelling and final substrate checks. The goal is a clean, flat base instead of old floor problems hiding under new product.`,
    (area: string) =>
        `Before a new floor can perform in ${area}, the old surface needs to be dealt with properly. We remove failed coverings, grind away contamination, fill the lows, and hand over a substrate that is ready for installation.`,
    (area: string) =>
        `Good installation around ${area} starts with the messy work nobody should skip. We lift old flooring, remove adhesive, correct high and low spots, and leave the surface ready for vinyl, hybrid, timber or commercial flooring.`,
    (area: string) =>
        `The finish people see in ${area} depends on the base they do not. Our prep work clears the old floor system, controls dust and waste, and gets the slab or subfloor ready before the first board is installed.`,
];

const servicePointSets = [
    [
        (suburb: string) => `Carpet, vinyl, laminate and floating-floor uplift in ${suburb}`,
        () => "Ceramic tile, smoothedge, staples and adhesive removal",
        () => "Concrete grinding, low-spot filling and floor levelling",
        (suburb: string) => `Rubbish removed from the ${suburb} site so the install starts clean`,
    ],
    [
        (suburb: string) => `Old coverings lifted in ${suburb} without leaving the job half-started`,
        "Tile glue, carpet adhesive and loose residue mechanically removed",
        "High ridges ground down and shallow valleys prepared for levelling",
        (suburb: string) => `Waste loaded out so the next ${suburb} stage starts from a controlled site`,
    ],
    [
        (suburb: string) => `Uplift planning for occupied ${suburb} homes, shops and renovation sites`,
        "Dust-extracted grinding where slabs need a clean adhesive profile",
        "Patch, ramp and levelling work before new flooring is installed",
        (suburb: string) => `A tidy ${suburb} handover surface for hybrid, vinyl, timber or carpet tiles`,
    ],
];

function variantIndex(key: string, length: number) {
    const total = key.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return total % length;
}

export default function FloorPrepUpliftModule({
    suburbName,
    prepHref = "/services/floor-preparation",
    variantKey = suburbName,
    regionName,
}: FloorPrepUpliftModuleProps) {
    const images = siteImages.floorPrep.upliftRemoval;
    const areaLabel = regionName ? `${suburbName} and ${regionName}` : suburbName;
    const intro = introVariants[variantIndex(variantKey, introVariants.length)](areaLabel);
    const servicePoints = servicePointSets[variantIndex(`${variantKey}-points`, servicePointSets.length)]
        .map((point) => typeof point === "function" ? point(suburbName) : point);

    return (
        <section className="bg-slate-950 py-20 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-yellow-400">
                        Floor preparation, uplift and removal
                    </p>
                    <h2 className="mb-5 text-3xl font-black leading-tight md:text-5xl">
                        Old floor out. Subfloor made ready in {areaLabel}.
                    </h2>
                    <p className="mb-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                        {intro}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {servicePoints.map((point) => (
                            <div
                                key={point}
                                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-100"
                            >
                                <span className="mr-2 text-yellow-400">+</span>
                                {point}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href={prepHref}
                            className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-yellow-300"
                        >
                            Floor preparation details
                        </Link>
                        <Link
                            href="/services/adhesive-removal"
                            className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-300"
                        >
                            Adhesive removal
                        </Link>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {images.map((image) => (
                        <figure
                            key={image.src}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl"
                        >
                            <div className="relative aspect-[4/5] bg-slate-900">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 90vw"
                                    className="object-cover"
                                />
                            </div>
                            <figcaption className="min-h-[92px] p-4 text-sm leading-6 text-slate-300">
                                <strong className="block text-white">{image.alt}</strong>
                                {image.caption}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
