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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">{title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-yellow-500/50 hover:shadow-lg transition-all group">
                            <div className="absolute -top-6 left-6 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xl font-bold text-yellow-600 shadow-sm group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
