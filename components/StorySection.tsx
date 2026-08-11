import Image from "next/image";
import { siteImages } from "@/data/siteImages";

interface StorySectionProps {
    className?: string;
    locationName?: string;
}

export default function StorySection({ className = "", locationName }: StorySectionProps) {
    return (
        <section className={`py-24 md:py-32 relative bg-slate-50 border-y border-slate-200 ${className}`}>
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                            <div className="absolute inset-0 border-2 border-slate-900/10 z-10 pointer-events-none rounded-lg"></div>
                            <Image
                                src={siteImages.commercial.projectShots[2].src}
                                alt="Quality Flooring Installation"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 right-0 sm:-right-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl border-l-4 border-yellow-400">
                            <div className="text-3xl font-black text-yellow-400">15+</div>
                            <div className="text-sm font-bold uppercase tracking-wide">Years Experience</div>
                        </div>
                    </div>
                    <div>
                        <div className="inline-block bg-white border border-slate-200 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-slate-900 mb-6 shadow-sm">
                            The Turner Standard
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
                            Precision preparation. <br />
                            <span className="text-yellow-500">Flawless results{locationName ? ` in ${locationName}` : ''}.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                            <p>
                                A stunning floor starts long before the planks are laid. It begins with a mirror-flat subfloor and obsessive attention to detail.
                            </p>
                            <p>
                                What you see here is the standard we deliver on every project{locationName ? ` in ${locationName}` : ''}. We don't just install flooring; we engineer the perfect foundation to ensure your investment looks incredible and stands the test of time. No bounces, no hollow spots, just perfection.
                            </p>
                            <div className="flex items-center gap-6 pt-6">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-slate-900">100%</span>
                                    <span className="text-xs uppercase font-bold text-slate-500">Level Finish</span>
                                </div>
                                <div className="w-px h-12 bg-slate-300"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-slate-900">Zero</span>
                                    <span className="text-xs uppercase font-bold text-slate-500">Compromises</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
