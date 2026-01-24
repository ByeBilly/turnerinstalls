import ServiceHero from "@/components/ServiceHero";
import CTAButton from "@/components/CTAButton";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Floor Preparation Services Brisbane | Turner Installs",
    description: "Comprehensive floor preparation services including concrete grinding, levelling, moisture barriers, and adhesive removal across SE QLD.",
};

export default function ServicesIndex() {
    const services = [
        {
            title: "Floor Preparation",
            description: "The complete package. Laser levelling, grinding, and smoothing for a flawless install.",
            link: "/services/floor-preparation",
            icon: "🏗️"
        },
        {
            title: "Concrete Grinding",
            description: "Dust-free mechanical preparation to remove contaminants and flatten slabs.",
            link: "/services/concrete-grinding",
            icon: "⚙️"
        },
        {
            title: "Floor Levelling",
            description: "Self-levelling flood coats to correct uneven subfloors to 3mm tolerance.",
            link: "/services/floor-levelling",
            icon: "🌊"
        },
        {
            title: "Moisture Barriers",
            description: "Epoxy systems to stop rising damp destroying your new floors.",
            link: "/services/moisture-barriers",
            icon: "💧"
        },
        {
            title: "Subfloor Repairs",
            description: "Structural crack stitching, ramping, and divot filling.",
            link: "/services/subfloor-repairs",
            icon: "🔨"
        },
        {
            title: "Adhesive Removal",
            description: "Stripping stubborn tile glue, carpet adhesive, and vinyl residue.",
            link: "/services/adhesive-removal",
            icon: "🚮"
        },
        {
            title: "Epoxy Removal",
            description: "Grinding back old failed garage coatings and industrial paint.",
            link: "/services/epoxy-removal",
            icon: "🧪"
        },
        {
            title: "Industrial Prep",
            description: "Large scale make-goods and surface rectification for commercial sites.",
            link: "/services/industrial-surface-prep",
            icon: "🏭"
        }
    ];

    const locations = [
        { name: "Brisbane", link: "/locations/brisbane" },
        { name: "Gold Coast", link: "/locations/gold-coast" },
        { name: "Sunshine Coast", link: "/locations/sunshine-coast" },
        { name: "Toowoomba", link: "/locations/toowoomba" },
        { name: "Gympie", link: "/locations/gympie" }
    ];

    return (
        <>
            <ServiceHero
                title={<>Our <span className="text-yellow-500">Services</span>.</>}
                subtitle="Expert floor preparation solutions for every substrate challenge."
                imagePath="/images/brisbane_skyline.png"
                label="FULL_SERVICE"
            />

            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.link}
                                className="group bg-zinc-900 border border-white/10 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 block"
                            >
                                <div className="text-4xl mb-6 bg-black w-16 h-16 flex items-center justify-center rounded-lg border border-white/5 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 mb-6">{service.description}</p>
                                <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                                    View Service →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-950 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold mb-8">Serving South East Queensland</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {locations.map((loc, i) => (
                            <Link
                                key={i}
                                href={loc.link}
                                className="px-6 py-3 bg-black border border-white/10 rounded-full text-gray-300 hover:text-yellow-400 hover:border-yellow-500/50 transition-colors"
                            >
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black text-white text-center">
                <div className="max-w-3xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-6">Need Advice?</h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Not sure what your floor needs? Send us a photo or give us a call.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <CTAButton href="tel:+61748022388" variant="primary">
                            Call Now
                        </CTAButton>
                        <CTAButton href="/contact" variant="secondary">
                            Email Us
                        </CTAButton>
                    </div>
                </div>
            </section>
        </>
    );
}
