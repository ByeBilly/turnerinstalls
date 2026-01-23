"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    items: FAQItem[];
}

export default function FAQSection({ title = "Common Questions", items }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-yellow-500/30' : 'bg-transparent hover:bg-white/5'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                            >
                                <span className={`font-semibold text-lg ${openIndex === index ? 'text-yellow-400' : 'text-white'}`}>
                                    {item.question}
                                </span>
                                <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-yellow-400' : 'text-gray-500'}`}>
                                    +
                                </span>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                        {item.answer}
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
