import Link from "next/link";

interface WhyChooseUsProps {
    className?: string;
    locationName?: string; // Optional: "Brisbane" (default) vs "Surfers Paradise"
}

export default function WhyChooseUs({ className = "", locationName }: WhyChooseUsProps) {
    const isLocal = !!locationName;

    return (
        <section className={`py-24 bg-white ${className}`}>
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 uppercase tracking-tight">
                        Why Choose Turner Installs{locationName ? ` in ${locationName}` : ''}?
                    </h2>
                    <div className="h-1 w-20 bg-yellow-400 mx-auto my-6"></div>
                    <p className="text-slate-600 font-medium">
                        The difference isn't just in how it looks on day one, but how it lasts for years to come.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Expertise", subtitle: "Engineered Prep", desc: "Mirror-flat surfaces through professional flood levelling." },
                        { title: "Precision", subtitle: "Showroom Finish", desc: "Tight transitions, clean trims, and zero corners cut." },
                        { title: "Cleanliness", subtitle: "Immaculate Clean-Up", desc: "No mess left behind. We treat your home like our own." },
                        { title: "Legacy", subtitle: "3rd Generation", desc: "Decades of passed-down knowledge ensuring perfect results." }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-lg bg-white border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-yellow-400 transition-colors"></div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{item.title}</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{item.subtitle}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
