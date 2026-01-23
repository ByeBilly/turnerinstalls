import React from "react";

interface Step {
    title: string;
    description: string;
}

interface ProcessStepsProps {
    title: string;
    steps: Step[];
}

export default function ProcessSteps({ title, steps }: ProcessStepsProps) {
    return (
        <section className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 border border-white/10 rounded-xl bg-black hover:border-yellow-500/30 transition-colors group">
                            <div className="absolute -top-6 left-6 w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold text-yellow-500 group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mt-8 mb-4">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
