import React from "react";

interface SpecItem {
    icon: string;
    title: string;
    description: string;
}

interface TechSpecsProps {
    title: string;
    description: React.ReactNode;
    features: SpecItem[];
}

export default function TechSpecs({ title, description, features }: TechSpecsProps) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div>
                        <div className="h-px w-20 bg-yellow-500 mb-8"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{title}</h2>
                        <div className="text-gray-600 text-lg leading-relaxed mb-6">
                            {description}
                        </div>
                    </div>
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-xl flex gap-4 items-start hover:border-yellow-500/50 hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-colors shadow-sm">
                                    {feature.icon as React.ReactNode}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-gray-900">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
