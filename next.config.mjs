/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;

