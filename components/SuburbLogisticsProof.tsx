import Image from "next/image";
import Link from "next/link";

type SuburbLogisticsProofProps = {
    suburbName: string;
    regionName?: string;
    prepHref?: string;
};

const logisticsImages = [
    {
        src: "/Liams-trucks/truck.jpeg",
        alt: "Turner Installs truck ready for flooring removal and installation work",
        title: "The truck comes with the crew",
        caption: "Proper transport for gear, uplift waste, trims, adhesives, levelling products, and site clean-up.",
    },
    {
        src: "/Liams-trucks/packs-of-boards.jpeg",
        alt: "Flooring packs loaded on the Turner Installs truck",
        title: "Materials handled properly",
        caption: "Boards, trims, and installation materials arrive organised so the job can move without delays.",
    },
    {
        src: "/Liams-trucks/removerubbish.jpeg",
        alt: "Old flooring and rubbish loaded for removal by Turner Installs",
        title: "Old flooring taken away",
        caption: "Uplift rubbish, packaging, and loose site waste are loaded out instead of being left for the owner.",
    },
];

const tileVariants = [
    {
        title: "Uplift & Removal",
        desc: (suburb: string) => `Old flooring, trims, smooth edge, loose material, and ${suburb} site waste removed cleanly.`,
    },
    {
        title: "Trucks & Equipment",
        desc: (suburb: string) => `The right gear brought to ${suburb} for uplift, disposal, grinding, and floor preparation.`,
    },
    {
        title: "Grinding & Levelling",
        desc: () => "High spots, uneven slabs, adhesive, and rough substrates corrected before install.",
    },
    {
        title: "Moisture & Repairs",
        desc: () => "Moisture checks, barriers, subfloor repairs, patching, ramping, and make-good work.",
    },
    {
        title: "Floor Installation",
        desc: (suburb: string) => `Vinyl, hybrid, timber, carpet tiles, planks, trims, and finishes installed in ${suburb}.`,
    },
    {
        title: "Clean Finish",
        desc: () => "A tidy site and a floor system prepared to last, not just look good on day one.",
    },
];

function variantIndex(key: string, length: number) {
    const total = key.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return total % length;
}

export default function SuburbLogisticsProof({
    suburbName,
    regionName,
    prepHref = "/services/floor-preparation",
}: SuburbLogisticsProofProps) {
    const areaLabel = regionName ? `${suburbName} and ${regionName}` : suburbName;
    const introCopy = [
        `Not just installers. For ${areaLabel}, the truck, tools, materials, removal, and clean-up come with the job.`,
        `${suburbName} jobs need more than boards and labour. Turner Installs brings the vehicle, prep gear, waste handling, trims, adhesives, and levelling materials needed to finish properly.`,
        `From first uplift to final clean-up in ${areaLabel}, the logistics are handled as part of the flooring work, not left as the owner's problem.`,
    ][variantIndex(areaLabel, 3)];

    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-5">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
                    <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 text-white shadow-xl lg:p-8">
                        <div className="text-xs font-black uppercase tracking-widest text-yellow-400">
                            On-site capability
                        </div>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                            Trucks, tools and clean removal for {suburbName} floors.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                            {introCopy}
                        </p>
                        <Link
                            href={prepHref}
                            className="mt-7 inline-flex rounded bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-yellow-300"
                        >
                            See Floor Preparation
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {logisticsImages.map((img) => (
                            <div key={img.src} className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                                <div className="relative min-h-[170px] bg-slate-100 sm:min-h-[150px] lg:min-h-[210px]">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="mb-2 text-lg font-black text-slate-900">{img.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600">{img.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {tileVariants.map((item) => (
                        <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5">
                            <h3 className="mb-2 font-black text-slate-900">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{item.desc(suburbName)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
