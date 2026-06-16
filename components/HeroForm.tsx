"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type TrackingWindow = Window &
    typeof globalThis & {
        dataLayer?: unknown[];
        gtag?: (command: string, eventName: string, parameters: Record<string, string>) => void;
    };

export default function HeroForm({ location }: { location?: string }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "" // Added Email field
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const trackFastQuoteSubmit = () => {
        const trackingWindow = window as TrackingWindow;
        const eventPayload = {
            event: "fast_quote_submit",
            form_id: "hero_fast_quote",
            source: location ? `Turner Installs Homepage Hero - ${location}` : "Turner Installs Homepage Hero",
            page_path: window.location.pathname,
            page_url: window.location.href,
            contact_method: formData.phone.trim() && formData.email.trim()
                ? "phone_email"
                : formData.phone.trim()
                    ? "phone"
                    : "email"
        };

        trackingWindow.dataLayer = trackingWindow.dataLayer || [];
        trackingWindow.dataLayer.push(eventPayload);

        if (typeof trackingWindow.gtag === "function") {
            trackingWindow.gtag("event", "fast_quote_submit", {
                form_id: eventPayload.form_id,
                source: eventPayload.source,
                page_path: eventPayload.page_path,
                contact_method: eventPayload.contact_method
            });
        }

        try {
            const body = JSON.stringify(eventPayload);
            if (navigator.sendBeacon) {
                navigator.sendBeacon("/api/fast-quote-submit", new Blob([body], { type: "application/json" }));
            } else {
                fetch("/api/fast-quote-submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body,
                    keepalive: true
                });
            }
        } catch (error) {}
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        // VALIDATION: Phone OR Email required
        if (!formData.phone.trim() && !formData.email.trim()) {
            setErrorMessage("Please enter a phone number or email so we can contact you.");
            return;
        }

        setStatus("submitting");

        try {
            // NORMALIZE PHONE: Remove spaces
            const normalizedPhone = formData.phone.replace(/\s+/g, '');

            // CONSTRUCT STANDARD PAYLOAD
            const payload = {
                schema_version: 1,
                event: "lead.submitted",
                occurred_at: new Date().toISOString(),
                lead: {
                    name: formData.name,
                    phone: normalizedPhone,
                    email: formData.email
                },
                meta: {
                    form_id: "hero_fast_quote",
                    source: location ? `Turner Installs Homepage Hero - ${location}` : "Turner Installs Homepage Hero",
                    page_url: window.location.href
                },
                custom_fields: {
                    service_name: "Fast Callback Request",
                    message: "Callback requested from Homepage Hero.",
                    flooring_type: "Not Specified"
                },
                raw: { ...formData, location }
            };

            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                trackFastQuoteSubmit();
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-yellow-400 max-w-sm ml-auto h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 text-3xl">✓</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Received!</h3>
                <p className="text-slate-600">Liam will be in touch shortly.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-yellow-400 max-w-sm ml-auto">
            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">Fast Quote</h3>
            <p className="text-slate-500 text-sm mb-6">Enter your details and Liam will call you back as soon as he can.</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {errorMessage && (
                    <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-200 font-semibold">
                        {errorMessage}
                    </div>
                )}

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all text-slate-900"
                        placeholder="Your Name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all text-slate-900"
                            placeholder="0400 000 000"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email <span className="text-slate-400 font-normal lowercase">(optional)</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all text-slate-900"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded uppercase tracking-wide hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? "Sending..." : (
                        <>
                            Get Callback <span className="text-yellow-400">→</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
