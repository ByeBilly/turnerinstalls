"use client";

import React, { useState } from 'react';
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface AuthShieldProps {
    onSuccess: () => void;
}

export default function AuthShield({ onSuccess }: AuthShieldProps) {
    const [step, setStep] = useState<'email' | 'code'>('email');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [verificationToken, setVerificationToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRequestCode = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/pumpposts/auth', {
                method: 'POST',
                body: JSON.stringify({ action: 'REQUEST_CODE', email }),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();

            if (response.ok) {
                setVerificationToken(data.verificationToken);
                setStep('code');
            } else {
                setError(data.error || "Failed to request code.");
            }
        } catch (err) {
            setError("Connectivity issue. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/pumpposts/auth', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'VERIFY_CODE',
                    email,
                    code,
                    verificationToken
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();

            if (response.ok) {
                onSuccess();
            } else {
                setError(data.error || "Invalid code.");
            }
        } catch (err) {
            setError("Verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-5">
            <div className="w-full max-w-md">
                {/* Branding Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40 rotate-12">
                        <ShieldCheck className="w-10 h-10 text-white -rotate-12" />
                    </div>
                </div>

                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">PumpPosts Internal</h2>
                        <p className="text-zinc-400 text-sm">
                            {step === 'email'
                                ? "Enter your authorized email to continue."
                                : `Confirm the code sent to ${email}`}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs text-center font-medium">
                            {error}
                        </div>
                    )}

                    {step === 'email' ? (
                        <form onSubmit={handleRequestCode} className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="liam@turnerinstalls.com"
                                    className="w-full bg-black border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-800"
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                    <>
                                        Request Access Code
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyCode} className="space-y-4">
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                                <input
                                    type="text"
                                    required
                                    maxLength={6}
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="Enter 6-digit code"
                                    className="w-full bg-black border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-center tracking-[1em] font-mono text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-indigo-600/20"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify & Access Dashboard"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep('email')}
                                className="w-full text-zinc-500 text-xs font-medium hover:text-white transition-colors py-2"
                            >
                                Use a different email
                            </button>
                        </form>
                    )}

                    <div className="mt-8 flex items-center gap-2 justify-center py-3 border-t border-white/5">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Secured by PumpPosts Engine</span>
                    </div>
                </div>

                <p className="text-center mt-6 text-zinc-600 text-[11px] leading-relaxed">
                    This is a protected administrative area. <br />
                    Unauthorized access attempts are logged.
                </p>
            </div>
        </div>
    );
}
