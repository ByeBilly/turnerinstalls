import React from "react";

interface FeatureItem {
    label: string;
    sublabel?: string;
}

interface FeaturesGridProps {
    title: string;
    subtitle?: string;
    features: FeatureItem[];
    columns?: 2 | 3 | 4;
}

export default function FeaturesGrid({ title, subtitle, features, columns = 3 }: FeaturesGridProps) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4"
    };

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-200">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
                    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className={`grid ${gridCols[columns]} gap-6`}>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">{feature.label}</div>
                                {feature.sublabel && <div className="text-xs text-gray-500">{feature.sublabel}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
