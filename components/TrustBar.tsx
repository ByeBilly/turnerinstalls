import React from 'react';

export default function TrustBar() {
    return (
        <section className="bg-slate-50 border-y border-slate-200 py-6">
            <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 text-center md:text-left">

                {/* 5 Star Rated */}
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400">
                        {'★★★★★'.split('').map((star, i) => (
                            <span key={i} className="text-xl">{star}</span>
                        ))}
                    </div>
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">
                        5-Star Rated Service
                    </span>
                </div>

                {/* Licensed */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.746 3.746 0 0121 12z" />
                        </svg>
                    </div>
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">
                        Fully Licensed & Insured
                    </span>
                </div>

                {/* Guarantee */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.033a2.626 2.626 0 00-3.714-3.714l-3.033 2.496m0 0l-1.577-4.083a2.626 2.626 0 00-1.082-.916c-.053.473.09.957.378 1.346l1.205 1.621m-1.205-1.621l-3.713 3.715a2.626 2.626 0 001.077 4.148l4.085 1.576L11.42 15.17z" />
                        </svg>
                    </div>
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">
                        Expert Site Preparation
                    </span>
                </div>

            </div>
        </section>
    );
}
