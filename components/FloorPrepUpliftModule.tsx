import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/data/siteImages";

type FloorPrepUpliftModuleProps = {
    suburbName: string;
    prepHref?: string;
};

const servicePoints = [
    "Carpet, vinyl, laminate and floating-floor uplift",
    "Ceramic tile, smoothedge, staples and adhesive removal",
    "Concrete grinding, low-spot filling and floor levelling",
    "Rubbish removed from site so the install starts clean",
];

export default function FloorPrepUpliftModule({
    suburbName,
    prepHref = "/services/floor-preparation",
}: FloorPrepUpliftModuleProps) {
    const images = siteImages.floorPrep.upliftRemoval;

    return (
        <section className="bg-slate-950 py-20 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-yellow-400">
                        Floor preparation, uplift and removal
                    </p>
                    <h2 className="mb-5 text-3xl font-black leading-tight md:text-5xl">
                        Old floor out. Subfloor made ready in {suburbName}.
                    </h2>
                    <p className="mb-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                        Turner Installs does the messy part before the new flooring goes down: uplift,
                        disposal, glue removal, grinding, levelling and final substrate checks. That means
                        the installation crew starts with a clean, flat base instead of trying to hide old
                        floor problems under new product.
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
