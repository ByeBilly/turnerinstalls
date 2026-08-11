import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
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
