import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2, Zap, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "PumpPosts | Next-Gen Social Integration",
    description: "The unified dashboard for synchronizing your brand across the web.",
};

export default function PumpPostsLanding() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Navigation (Internal Prototype) */}
            <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <Share2 className="w-5 h-5 text-black" strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold tracking-tight uppercase">PumpPosts</span>
                </div>
                <Link
                    href="/pumpposts/dashboard"
                    className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all active:scale-95"
                >
                    Access Dashboard
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 pb-32 px-5 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-8">
                        <Zap className="w-3 h-3" />
                        <span>v1.0 Internal Prototype</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-[1.1]">
                        Power your <br />
                        <span className="text-white">Social Presence.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
                        One unified layer for automated social proof, cross-platform distribution, and brand reputation management. Built to be integrated into any modern web architecture.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/pumpposts/dashboard"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-xl shadow-indigo-600/20 group"
                        >
                            Launch Prototype
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="px-8 py-4 rounded-xl bg-zinc-900 border border-white/10 text-white font-semibold hover:bg-zinc-800 transition-all">
                            Documentation
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="relative z-10 py-24 px-5 border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <FeatureCard
                        icon={<BarChart3 className="w-6 h-6 text-cyan-400" />}
                        title="Unified Analytics"
                        description="Track engagement and mentions across all platforms from a single interface."
                    />
                    <FeatureCard
                        icon={<Zap className="w-6 h-6 text-indigo-400" />}
                        title="Real-time Distribution"
                        description="Push updates to all profiles instantly with zero-latency distribution."
                    />
                    <FeatureCard
                        icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
                        title="Brand Integrity"
                        description="Automated monitoring to ensure your brand remains consistent everywhere."
                    />
                </div>
            </section>

            {/* Footer / Context */}
            <footer className="relative z-10 py-12 px-5 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-500 text-sm italic">
                        PumpPosts is a modular component designed for universal web integration.
                    </p>
                    <div className="flex items-center gap-6 text-zinc-400 text-sm">
                        <span>Turner Installs Case Study</span>
                        <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                        <span>v1.0.0</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all group hover:bg-zinc-900">
            <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
    );
}
