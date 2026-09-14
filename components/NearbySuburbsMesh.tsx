import Link from "next/link";

export interface NearbySuburbLink {
    name: string;
    slug: string;
    region: string;
}

/**
 * "Serving X & Surrounding Suburbs" internal-link block for floor-prep
 * suburb pages — links only to suburbs that actually have their own
 * floor-preparation page (resolved by the caller against
 * floorPreparationSuburbs), so it never points at a dead route.
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
                            key={n.slug}
                            href={`/locations/${n.region}/${n.slug}/floor-preparation`}
                            className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors border border-yellow-400/30 hover:border-yellow-400/60 px-4 py-2 rounded"
                        >
                            Floor Preparation {n.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
