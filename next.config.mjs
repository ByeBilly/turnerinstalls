import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    // react-leaflet's MapContainer doesn't support React 18/19 Strict Mode's
    // dev-only double-invoke of the mount cycle — it throws "Map container
    // is already initialized" on the second invoke. Strict Mode is dev-only
    // (no effect on the production build); this only disables the extra
    // dev-time double-render safety check app-wide to work around that.
    reactStrictMode: false,
    turbopack: {
        root: __dirname,
    },
    async redirects() {
        return [
            {
                source: '/socialsync/:path*',
                destination: '/pumpposts/:path*',
                permanent: true,
            },
            {
                source: '/roadara/:path*',
                destination: '/pumpposts/:path*',
                permanent: true,
            },
            {
                source: '/services/industrial-prep',
                destination: '/services/industrial-surface-prep',
                statusCode: 301,
            },
        ];
    },
    async rewrites() {
        return [
            { source: "/llms.txt", destination: "/api/llms-txt" },
            { source: "/ai.txt", destination: "/api/ai-txt" },
            { source: "/ai.json", destination: "/api/ai-json" },
            { source: "/brand.txt", destination: "/api/brand-txt" },
            { source: "/identity.json", destination: "/api/identity-json" },
        ];
    },
};

export default nextConfig;
