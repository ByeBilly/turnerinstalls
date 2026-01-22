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
    // Create a script element and inject the HighLevel web chat snippet
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID || "");
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

