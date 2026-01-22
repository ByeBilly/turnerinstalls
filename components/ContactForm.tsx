"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
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

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    source: "Turner Installs Website",
                    timestamp: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            {status === "success" ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl text-center">
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>Thanks for reaching out. Liam or the team will get back to you shortly.</p>
                    <button onClick={() => setStatus("idle")} className="mt-4 text-sm underline hover:text-green-300">Send another</button>
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
