import Link from "next/link";

interface InternalLinksProps {
    type: "services" | "locations";
}

export default function InternalLinks({ type }: InternalLinksProps) {
    const services = [
        { name: "Floor Preparation", link: "/services/floor-preparation" },
        { name: "Concrete Grinding", link: "/services/concrete-grinding" },
        { name: "Floor Levelling", link: "/services/floor-levelling" },
        { name: "Moisture Barriers", link: "/services/moisture-barriers" },
        { name: "Subfloor Repairs", link: "/services/subfloor-repairs" },
        { name: "Adhesive Removal", link: "/services/adhesive-removal" },
        { name: "Epoxy Removal", link: "/services/epoxy-removal" },
        { name: "Industrial Prep", link: "/services/industrial-surface-prep" }
    ];

    const locations = [
        { name: "Brisbane", link: "/locations/brisbane" },
        { name: "Gold Coast", link: "/locations/gold-coast" },
        { name: "Sunshine Coast", link: "/locations/sunshine-coast" },
        { name: "Toowoomba", link: "/locations/toowoomba" },
        { name: "Gympie", link: "/locations/gympie" }
    ];

    const items = type === "services" ? services : locations;
    const title = type === "services" ? "Other Services We Offer" : "Locations We Serve";

    return (
        <section className="py-12 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-5">
                <h3 className="text-xl font-bold mb-6 text-center text-gray-500 uppercase tracking-widest">{title}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {items.map((item, i) => (
                        <Link
                            key={i}
                            href={item.link}
                            className="text-sm text-gray-400 hover:text-yellow-500 transition-colors border-r border-white/10 pr-4 last:border-0 hover:underline"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
