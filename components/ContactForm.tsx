"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const webhookUrl = process.env.NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL;

            if (!webhookUrl) {
                console.warn("GHL Webhook URL not set");
                // For demo purposes, simulate success
                await new Promise(resolve => setTimeout(resolve, 1000));
                setStatus("success");
                return;
            }

            // Map Service Type to HighLevel Custom Field Value
            const serviceTypeMapping: Record<string, string> = {
                "vinyl_plank": "Vinyl Plank Installation",
                "hybrid": "Hybrid Flooring",
                "timber": "Timber Flooring",
                "carpet_removal": "Carpet Removal",
                "floor_prep": "Floor Preparation / Levelling",
                "commercial": "Commercial Project"
            };

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    flooring_type: formData.serviceType, // Map to GHL Custom Field
                    service_name: serviceTypeMapping[formData.serviceType] || "General Enquiry", // Readable name
                    source: "Turner Installs Website",
                    timestamp: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", serviceType: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        if (status === "success") {
            const script = document.createElement("script");
            script.src = "https://api.inurpc.com/js/form_embed.js";
            script.async = true;
            document.body.appendChild(script);
            return () => {
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
            }
        }
    }, [status]);

    return (
        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            {status === "success" ? (
                <div className="bg-white rounded-xl overflow-hidden">
                    <div className="p-6 text-center border-b border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Message Received!</h3>
                        <p className="text-gray-600 text-sm">Select a time below for your Free Measure & Quote.</p>
                    </div>
                    <iframe
                        src={process.env.NEXT_PUBLIC_GHL_CALENDAR_URL}
                        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '650px' }}
                        scrolling="no"
                        id="ghl-calendar-embed"
                    />
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
                                placeholder="0400 000 000"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="serviceType" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Service Needed</label>
                            <select
                                id="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                required
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors appearance-none text-gray-300"
                            >
                                <option value="" disabled>Select a Service...</option>
                                <option value="vinyl_plank">Vinyl Plank Installation</option>
                                <option value="hybrid">Hybrid Flooring</option>
                                <option value="timber">Timber Flooring</option>
                                <option value="floor_prep">Floor Preparation / Levelling</option>
                                <option value="carpet_removal">Carpet Removal</option>
                                <option value="commercial">Commercial Project</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Project Details</label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
                            placeholder="Tell us about your floor..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-yellow-400 text-black font-bold text-lg py-4 rounded-xl hover:bg-yellow-300 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? "Sending..." : "Send Request"}
                    </button>
                    {status === "error" && (
                        <p className="text-red-400 text-center text-sm">Something went wrong. Please try calling us instead.</p>
                    )}
                </form>
            )}
        </div>
    );
}
