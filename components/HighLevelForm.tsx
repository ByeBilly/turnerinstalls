"use client";

import React from "react";

interface HighLevelFormProps {
    src: string;
    title?: string;
    height?: string;
}

/**
 * HighLevel Form Component
 * 
 * Embeds a HighLevel form via iframe.
 * 
 * @param src - The URL of the HighLevel form (e.g., https://api.leadconnectorhq.com/widget/form/...)
 * @param title - Optional title for accessibility
 * @param height - Height of the iframe (default: 500px)
 */
export default function HighLevelForm({ src, title = "Contact Form", height = "500px" }: HighLevelFormProps) {
    return (
        <div className="w-full h-full">
            <iframe
                src={src}
                style={{
                    width: "100%",
                    height: height,
                    border: "none",
                    borderRadius: "4px",
                }}
                id={title.toLowerCase().replace(/\s/g, "-")}
                title={title}
                scrolling="no"
            />
        </div>
    );
}
