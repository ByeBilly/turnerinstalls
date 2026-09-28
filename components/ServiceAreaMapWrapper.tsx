"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ServiceAreaMap = dynamic(() => import("@/components/ServiceAreaMap"), {
  ssr: false,
  loading: () => <MapPlaceholder />,
});

function MapPlaceholder() {
  return <div className="h-[500px] w-full animate-pulse rounded-2xl border border-gray-200 bg-gray-100" />;
}

/**
 * Leaflet + map tiles are a large chunk of JS and network that sits well below
 * the fold on the homepage. Mounting it only once the placeholder nears the
 * viewport keeps it out of the initial load, which was competing with the
 * hero image (the homepage's LCP element) on mobile.
 */
export default function ServiceAreaMapWrapper() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return <div ref={ref}>{visible ? <ServiceAreaMap /> : <MapPlaceholder />}</div>;
}
