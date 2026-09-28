import Image from "next/image";

export interface RecentJob {
    /** Short headline, e.g. "Carpet uplift + hybrid install, 3-bed lowset". */
    title: string;
    /** 2-4 sentences in plain words: what was on the floor, what went wrong under it, what was done. */
    summary: string;
    /** Month of the job as YYYY-MM, shown as "Aug 2026". */
    date?: string;
    /** Services used, e.g. ["Carpet uplift", "Concrete grinding", "Self-levelling"]. */
    services?: string[];
    /** Real photo from the job in /public, with a descriptive alt. */
    image?: { src: string; alt: string };
}

function formatMonth(value: string) {
    const [year, month] = value.split("-").map(Number);
    if (!year || !month) return value;
    return new Date(year, month - 1, 1).toLocaleDateString("en-AU", { month: "short", year: "numeric" });
}

/**
 * "Recent jobs in <suburb>" block for suburb landing pages. Renders nothing
 * until real job notes are added to the suburb's `recentJobs` data, so it
 * never shows placeholder or invented projects. Each entry is the most
 * valuable text a suburb page can carry: it is unique to that page, which is
 * what separates a genuine local page from a templated doorway page.
 */
export default function RecentJobs({ suburbName, jobs }: { suburbName: string; jobs?: RecentJob[] }) {
    if (!jobs?.length) return null;

    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                    Recent Jobs in <span className="text-yellow-500">{suburbName}</span>
                </h2>
                <p className="text-slate-600 mb-10 max-w-2xl">
                    Real floor preparation and installation work we have completed in {suburbName}.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                    {jobs.map((job) => (
                        <article key={job.title} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                            {job.image && (
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={job.image.src}
                                        alt={job.image.alt}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                {job.date && (
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                        {formatMonth(job.date)}
                                    </p>
                                )}
                                <h3 className="text-xl font-black text-slate-900 mb-3">{job.title}</h3>
                                <p className="text-slate-700 leading-relaxed">{job.summary}</p>
                                {job.services?.length ? (
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {job.services.map((service) => (
                                            <li
                                                key={service}
                                                className="rounded bg-yellow-100 px-2.5 py-1 text-xs font-bold text-slate-800"
                                            >
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
