import Image from "next/image";
import Link from "next/link";
import { suburbs, getSuburbsByRegion } from "@/data/suburbs";
import ServiceHero from "@/components/ServiceHero";

export const metadata = {
    title: "Service Areas | Turner Installs",
    description: "View our active service locations across Brisbane and the Gold Coast.",
};

export default function ServiceAreas() {
    const brisbaneSuburbs = getSuburbsByRegion("brisbane");
    const goldCoastSuburbs = getSuburbsByRegion("gold-coast");

    return (
        <>
            <ServiceHero
                title={<>Where We <span className="text-yellow-500">Work</span>.</>}
                subtitle="Our active service locations across South East Queensland."
                imagePath="/images/brisbane_skyline.png"
                label="SERVICE DIRECTORY"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-5">

                    {/* BRISBANE REGION */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-black mb-8 border-l-8 border-yellow-400 pl-6 text-slate-900 uppercase">Brisbane</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {brisbaneSuburbs.map((suburb) => (
                                <div key={suburb.slug} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="relative h-48 bg-slate-100">
                                        {suburb.image ? (
                                            <Image
                                                src={suburb.image.src}
                                                alt={suburb.image.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-slate-300 font-bold uppercase">No Image</div>
                                        )}
                                        <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 m-2 rounded">
                                            {suburb.postcode}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{suburb.name}</h3>
                                        <p className="text-slate-600 text-sm mb-6 line-clamp-2">{suburb.description}</p>

                                        <div className="space-y-3">
                                            <Link
                                                href={`/locations/${suburb.region}/${suburb.slug}`}
                                                className="block w-full text-center py-3 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors"
                                            >
                                                View {suburb.name} Home
                                            </Link>
                                            <Link
                                                href={`/locations/${suburb.region}/${suburb.slug}/floor-preparation`}
                                                className="block w-full text-center py-2 border border-slate-200 text-slate-600 text-sm font-bold rounded hover:bg-slate-50 transition-colors"
                                            >
                                                View Floor Prep Page
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GOLD COAST REGION */}
                    <div>
                        <h2 className="text-3xl font-black mb-8 border-l-8 border-yellow-400 pl-6 text-slate-900 uppercase">Gold Coast</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {goldCoastSuburbs.map((suburb) => (
                                <div key={suburb.slug} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="relative h-48 bg-slate-100">
                                        {suburb.image ? (
                                            <Image
                                                src={suburb.image.src}
                                                alt={suburb.image.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-slate-300 font-bold uppercase">No Image</div>
                                        )}
                                        <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 m-2 rounded">
                                            {suburb.postcode}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{suburb.name}</h3>
                                        <p className="text-slate-600 text-sm mb-6 line-clamp-2">{suburb.description}</p>

                                        <div className="space-y-3">
                                            <Link
                                                href={`/locations/${suburb.region}/${suburb.slug}`}
                                                className="block w-full text-center py-3 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors"
                                            >
                                                View {suburb.name} Home
                                            </Link>
                                            <Link
                                                href={`/locations/${suburb.region}/${suburb.slug}/floor-preparation`}
                                                className="block w-full text-center py-2 border border-slate-200 text-slate-600 text-sm font-bold rounded hover:bg-slate-50 transition-colors"
                                            >
                                                View Floor Prep Page
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
