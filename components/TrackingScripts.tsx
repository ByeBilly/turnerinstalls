"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, eventName: string, parameters?: Record<string, string>) => void;
  }
}

const GA_MEASUREMENT_ID = "G-T6ZG4K0J3W";
const GTM_CONTAINER_ID = "GTM-NMJJSS86";
const BOT_USER_AGENT_PATTERN =
  /googlebot|google-inspectiontool|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|pinterest|semrushbot|ahrefsbot|mj12bot|dotbot/i;

function isBotUserAgent(userAgent: string) {
  return BOT_USER_AGENT_PATTERN.test(userAgent);
}

function installScript(id: string, src: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function cleanPhone(value: string | null) {
  return String(value || "")
    .replace(/^tel:/i, "")
    .replace(/[^\d+]/g, "");
}

function isLiamNumber(href: string | null) {
  return ["0413592054", "+61413592054", "61413592054"].includes(cleanPhone(href));
}

export default function TrackingScripts() {
  useEffect(() => {
    if (isBotUserAgent(window.navigator.userAgent)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args) {
      window.dataLayer?.push(args);
    };

    window.gtag("js", new Date().toISOString());
    window.gtag("config", GA_MEASUREMENT_ID);

    installScript(
      "ga4-script",
      `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    );

    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    installScript(
      "gtm-script",
      `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`,
    );

    function trackCallClick(link: HTMLAnchorElement) {
      const payload = {
        event: "call_liam_click",
        phone_number: "0413592054",
        link_text: (link.textContent || "").trim().slice(0, 120),
        page_path: window.location.pathname,
        page_url: window.location.href,
      };

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
      window.gtag?.("event", "call_liam_click", {
        phone_number: payload.phone_number,
        link_text: payload.link_text,
        page_path: payload.page_path,
      });

      try {
        const body = JSON.stringify(payload);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            "/api/call-liam-click",
            new Blob([body], { type: "application/json" }),
          );
        } else {
          fetch("/api/call-liam-click", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body,
            keepalive: true,
          });
        }
      } catch {}
    }

    function onClick(event: MouseEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="tel:"]')
          : null;

      if (target && isLiamNumber(target.getAttribute("href"))) {
        trackCallClick(target);
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
