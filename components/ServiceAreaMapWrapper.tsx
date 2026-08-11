"use client";

import dynamic from "next/dynamic";

const ServiceAreaMap = dynamic(() => import("@/components/ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full animate-pulse rounded-2xl border border-gray-200 bg-gray-100" />
  ),
});

export default function ServiceAreaMapWrapper() {
  return <ServiceAreaMap />;
}
