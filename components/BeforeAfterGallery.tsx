import Image from "next/image";

interface BeforeAfterPair {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
    title?: string;
}

interface BeforeAfterGalleryProps {
    title: string;
    pairs: BeforeAfterPair[];
}

export default function BeforeAfterGallery({ title, pairs }: BeforeAfterGalleryProps) {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">{title}</h2>

                <div className="space-y-24">
                    {pairs.map((pair, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Before */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-red-100 group">
                                    <Image src={pair.before.src} alt={pair.before.alt} fill className="object-cover" />
                                    <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 text-xs font-bold uppercase rounded backdrop-blur-sm">
                                        Before
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">{pair.before.alt}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow (Hidden on mobile) */}
                            <div className="hidden md:flex flex-col items-center justify-center text-slate-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>

                            {/* After */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-green-100 group">
                                    <Image src={pair.after.src} alt={pair.after.alt} fill className="object-cover" />
                                    <div className="absolute top-4 left-4 bg-green-600/90 text-white px-3 py-1 text-xs font-bold uppercase rounded backdrop-blur-sm">
                                        After
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">{pair.after.alt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
