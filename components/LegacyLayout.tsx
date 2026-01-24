import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function LegacyLayout() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* HEADER SECTION (Simulated or just Content) */}
            <section className="relative pt-32 pb-20 px-5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-zinc-800 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Brisbane - Flooring Contractor
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Flawless floors start with <span className="text-yellow-500">flawless preparation</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl">
                            Turner Installs delivers vinyl plank, hybrid, timber and laminate installations with professional floor preparation, engineered flood levelling and immaculate clean-up for residential homes, property managers and premium flooring retailers.
                        </p>

                        <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-300 mb-8">
                            <li className="flex items-center gap-2"><span className="text-yellow-500">•</span> Vinyl, hybrid, timber & laminate</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">•</span> Engineered flood levelling</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">•</span> Carpet uplift & disposal</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">•</span> Zero-mess completion</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">•</span> 15+ years' experience</li>
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <CTAButton href="/contact" variant="primary">Request a Quote</CTAButton>
                            <span className="text-gray-400 self-center text-sm">Or call: <span className="text-yellow-500 font-bold">07 4802 2388</span></span>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                            No use of client bins - Floors left vacuumed and dust-free
                        </div>
                    </div>

                    {/* INSTALLATION WORKFLOW CARD */}
                    <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Installation Workflow</h3>
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded border border-yellow-500/30">FULL-SERVICE</span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Step 1 - Uplift & Removal</div>
                                <h4 className="font-bold text-white mb-1">Old floor out, waste off-site.</h4>
                                <p className="text-xs text-gray-400">Existing carpet or hard flooring is uplifted, removed from site and disposed of — never in your bins.</p>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Step 2 - Professional Floor Prep</div>
                                <h4 className="font-bold text-white mb-1">Engineered flood levelling.</h4>
                                <p className="text-xs text-gray-400">Subfloors are corrected, patched and flood-levelled with engineered compounds for mirror-flat finishes.</p>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Step 3 - Precision Installation</div>
                                <h4 className="font-bold text-white mb-1">Showroom-ready finish.</h4>
                                <p className="text-xs text-gray-400">Planks are installed with tight transitions, clean trims and a dust-free, ready-to-furnish handover.</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                            <div className="text-xs text-gray-500 mb-2">Built for homeowners, property managers & retailers.</div>
                            <div className="flex justify-center gap-2">
                                <div className="bg-black p-2 rounded w-1/3 border border-gray-800 text-center">
                                    <div className="text-xl font-bold">ZERO</div>
                                    <div className="text-xs text-gray-400">STRESS</div>
                                </div>
                                <div className="bg-black p-2 rounded w-2/3 border border-gray-800 flex items-center justify-center relative overflow-hidden">
                                    <div className="relative z-10 text-sm font-bold italic text-gray-500">The Foundation of Flawless</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TURNER INSTALLS */}
            <section className="py-20 border-y border-white/5 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Why Turner Installs</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-black p-6 rounded-lg border border-gray-800">
                            <div className="text-xs text-blue-400 uppercase font-bold mb-2">EXPERTISE</div>
                            <h3 className="font-bold text-lg mb-2">Engineered Floor Preparation</h3>
                            <p className="text-sm text-gray-400">Mirror-flat surfaces achieved through professional flood levelling techniques.</p>
                        </div>
                        <div className="bg-black p-6 rounded-lg border border-gray-800">
                            <div className="text-xs text-purple-400 uppercase font-bold mb-2">PRECISION</div>
                            <h3 className="font-bold text-lg mb-2">Showroom-Quality Installation</h3>
                            <p className="text-sm text-gray-400">Tight transitions, clean trims and attention to every detail.</p>
                        </div>
                        <div className="bg-black p-6 rounded-lg border border-gray-800">
                            <div className="text-xs text-green-400 uppercase font-bold mb-2">CLEANLINESS</div>
                            <h3 className="font-bold text-lg mb-2">Immaculate Clean-Up</h3>
                            <p className="text-sm text-gray-400">No mess, no use of client bins. Floors left vacuumed and dust-free.</p>
                        </div>
                        <div className="bg-black p-6 rounded-lg border border-gray-800">
                            <div className="text-xs text-yellow-400 uppercase font-bold mb-2">TRUST</div>
                            <h3 className="font-bold text-lg mb-2">Trusted by Premium Partners</h3>
                            <p className="text-sm text-gray-400">Property managers and premium flooring retailers rely on our reliability.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
