"use client";

import { useEffect } from "react";

/**
 * HighLevel Web Chat Widget Component
 *
 * This component injects the HighLevel web chat script on all pages.
 *
 * Setup Instructions:
 * 1. Log into your HighLevel account
 * 2. Navigate to Sites → Chat Widget
 * 3. Copy the web chat script snippet
 * 4. Paste it into NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET in your .env.local file
 *
 * If NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET is not set, this component renders nothing.
 */
export default function HighLevelChat() {
  useEffect(() => {
    const webchatSnippet = process.env.NEXT_PUBLIC_GHL_WEBCHAT_SNIPPET;

    if (!webchatSnippet) {
      // Silently fail if env var is not set - this allows the site to work without HighLevel
      return;
    }

    // Create a script element and inject the HighLevel web chat snippet
    const script = document.createElement("script");
    script.innerHTML = webchatSnippet;
    script.async = true;

    // Append to document body
    document.body.appendChild(script);

    // Cleanup function to remove script on unmount (though typically not needed for chat widgets)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}

