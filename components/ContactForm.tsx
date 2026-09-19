"use client";

import { useEffect, useRef, useState } from "react";
import { FORMSUBMIT_ENDPOINT } from "@/lib/formSubmit";


// FormSubmit caps attachments at 5MB per submission.
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const MAX_ATTACHMENTS = 5;

// Photos larger than this are downscaled in the browser so phone camera shots fit under the cap.
const COMPRESS_ABOVE_BYTES = 1024 * 1024;
const MAX_IMAGE_DIMENSION = 1600;

// Returns a smaller JPEG, or the original file if resizing isn't possible or doesn't help.
async function shrinkImage(file: File): Promise<File> {
    if (file.size <= COMPRESS_ABOVE_BYTES) return file;
    try {
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(bitmap.width * scale);
        canvas.height = Math.round(bitmap.height * scale);
        canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, "image/jpeg", 0.8));
        if (!blob || blob.size >= file.size) return file;
        return new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
    } catch {
        return file;
    }
}

type Status = "idle" | "submitting" | "success" | "error";

type Attachment = { id: number; file: File; previewUrl: string };

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        _honey: ""
    });
    const [status, setStatus] = useState<Status>("idle");
    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const [attachmentError, setAttachmentError] = useState("");
    const nextAttachmentId = useRef(1);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const attachmentsRef = useRef<Attachment[]>([]);

    useEffect(() => {
        attachmentsRef.current = attachments;
    }, [attachments]);

    // Release object URLs for any previews still showing when the form unmounts.
    useEffect(() => {
        return () => attachmentsRef.current.forEach(a => URL.revokeObjectURL(a.previewUrl));
    }, []);

    const clearAttachments = () => {
        attachments.forEach(a => URL.revokeObjectURL(a.previewUrl));
        setAttachments([]);
        setAttachmentError("");
    };

    const removeAttachment = (id: number) => {
        const target = attachments.find(a => a.id === id);
        if (target) URL.revokeObjectURL(target.previewUrl);
        setAttachments(prev => prev.filter(a => a.id !== id));
        setAttachmentError("");
    };

    const addImages = async (files: File[], fallbackName?: (id: number, ext: string) => string) => {
        const images = files.filter(f => f.type.startsWith("image/"));
        if (images.length === 0) return;

        const prepared = await Promise.all(images.map(shrinkImage));

        // Read the latest attachments after the async resize so quick repeat picks don't overcount.
        const current = attachmentsRef.current;
        let total = current.reduce((sum, a) => sum + a.file.size, 0);
        let count = current.length;
        const accepted: Attachment[] = [];
        let error = "";

        for (const image of prepared) {
            if (count >= MAX_ATTACHMENTS) {
                error = `You can attach up to ${MAX_ATTACHMENTS} images.`;
                break;
            }
            if (total + image.size > MAX_ATTACHMENT_BYTES) {
                error = "Those images are too large (5MB total). Try fewer photos or call us instead.";
                break;
            }
            const id = nextAttachmentId.current++;
            const ext = image.type.split("/")[1]?.replace("jpeg", "jpg") || "png";
            // Pasted screenshots all arrive named "image.png", so give them unique names.
            const file = fallbackName ? new File([image], fallbackName(id, ext), { type: image.type }) : image;
            accepted.push({ id, file, previewUrl: URL.createObjectURL(file) });
            total += file.size;
            count += 1;
        }

        setAttachmentError(error);
        if (accepted.length) setAttachments(prev => [...prev, ...accepted]);
    };

    // Plain text pastes carry no files, so the browser handles them as usual.
    const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        addImages(Array.from(e.clipboardData.files), (id, ext) => `pasted-image-${id}.${ext}`);
    };

    const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
        addImages(Array.from(e.target.files ?? []));
        e.target.value = ""; // allow picking the same photo again after removing it
    };

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
            attachments.forEach(a => body.append("attachment", a.file, a.file.name));
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
                clearAttachments();
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
                            onPaste={handlePaste}
                            required
                            className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-slate-900"
                            placeholder="Tell us about your floor..."
                        />

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFilePick}
                            className="hidden"
                            tabIndex={-1}
                            aria-hidden="true"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-yellow-400 hover:bg-yellow-50 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.16-5.16a2.25 2.25 0 013.18 0l5.16 5.16m-1.5-1.5l1.41-1.41a2.25 2.25 0 013.18 0l2.25 2.25M3.75 20.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            Attach photos
                        </button>
                        <span className="ml-3 text-xs text-slate-400">or paste them into the message</span>

                        {attachments.length > 0 && (
                            <ul className="flex flex-wrap gap-3 pt-1">
                                {attachments.map(a => (
                                    <li key={a.id} className="relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={a.previewUrl}
                                            alt={a.file.name}
                                            className="h-20 w-20 rounded-lg border border-slate-300 object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeAttachment(a.id)}
                                            aria-label={`Remove ${a.file.name}`}
                                            className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-sm font-bold leading-none text-white hover:bg-slate-700"
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {attachmentError && (
                            <p role="alert" className="text-red-600 text-sm">{attachmentError}</p>
                        )}
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
