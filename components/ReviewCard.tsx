import React from "react";

interface ReviewProps {
    name: string;
    suburb?: string;
    service: string;
    rating: number;
    comment: string;
    date: string;
}

export default function ReviewCard({ name, suburb, service, rating, comment, date }: ReviewProps) {
    return (
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl hover:border-yellow-500/30 transition-colors h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-bold text-white text-lg">{name}</h3>
                    {suburb && <p className="text-xs text-gray-500 uppercase tracking-wider">{suburb}</p>}
                </div>
                <div className="flex gap-1 text-yellow-500 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < rating ? "★" : "☆"}</span>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <span className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-yellow-500 font-mono">
                    {service}
                </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                "{comment}"
            </p>

            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-600">
                {date}
            </div>
        </div>
    );
}
