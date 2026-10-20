import Link from "next/link";

export interface NearbySuburbLink {
    name: string;
    href: string;
    label: string;
}

/**
 * "Serving X & Surrounding Suburbs" internal-link block for floor-prep
 * suburb pages. The caller resolves each neighbour to a live page (its
 * floor-prep page, else its installation page), so it never points at a
 * dead or redirecting route.
 */
export default function NearbySuburbsMesh({
    suburbName,
    neighbors,
}: {
    suburbName: string;
    neighbors: NearbySuburbLink[];
}) {
    if (!neighbors.length) return null;

    return (
        <section className="py-12 bg-slate-900 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-5">
                <h3 className="text-lg font-bold text-gray-400 mb-4 uppercase tracking-widest">
                    Serving {suburbName} &amp; Surrounding Suburbs
                </h3>
                <div className="flex flex-wrap gap-3">
                    {neighbors.map((n) => (
                        <Link
                            key={n.href}
                            href={n.href}
                            className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors border border-yellow-400/30 hover:border-yellow-400/60 px-4 py-2 rounded"
                        >
                            {n.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
