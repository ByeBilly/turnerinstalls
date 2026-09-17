"use client";

import { useState } from "react";

// FormSubmit requires the destination mailbox in the endpoint itself.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/liam@turnerinstalls.com.au";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        _honey: ""
    });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Honeypot tripped: pretend success and drop the submission silently.
        if (formData._honey) {
            setStatus("success");
            return;
        }

        setStatus("submitting");

        try {
            const body = new FormData();
            body.append("name", formData.name);
            body.append("email", formData.email);
            body.append("message", formData.message);
            body.append("_honey", formData._honey);
            body.append("_captcha", "false");
            body.append("_subject", "New enquiry from turnerinstalls.com.au");

            const response = await fetch(FORMSUBMIT_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "", _honey: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Contact form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="bg-white rounded-xl p-2">
            <h2 className="text-2xl font-black mb-6 text-slate-900">Send us a message</h2>

            {status === "success" ? (
                <div
                    role="status"
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <p className="text-lg font-bold text-slate-900">
                        Success! Your message has been sent to Liam.
                    </p>
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-slate-900"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-slate-900"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-slate-900"
                            placeholder="Tell us about your floor..."
                        />
                    </div>

                    {/* Honeypot field: hidden from real users, bots tend to fill it in */}
                    <input
                        type="text"
                        id="_honey"
                        name="_honey"
                        value={formData._honey}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                    />

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-yellow-400 text-slate-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-300 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "error" && (
                        <p className="text-red-600 text-center text-sm">
                            Something went wrong. Please try calling us instead.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}
