import { MetadataRoute } from 'next';
import { suburbs } from '@/data/suburbs';
import { flooringInstallationSuburbs } from '@/data/flooringInstallationSuburbs';
import { getAllBlogSlugs } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.turnerinstalls.com.au';

    // 1. Static Pages + AI Discovery Files
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/services',
        '/service-areas',
        '/blog',
        '/flooring-installation-brisbane',
        '/residential',
        '/commercial',
        '/reviews',
        '/privacy-policy',
        '/llm.txt',
        '/llms.txt',
        '/ai.txt',
        '/ai.json',
        '/brand.txt',
        '/identity.json',
        '/locations/brisbane',
        '/locations/gold-coast',
        '/locations/gympie',
        '/locations/ipswich',
        '/locations/sunshine-coast',
        '/locations/toowoomba',
        '/services/floor-preparation',
        '/services/subfloor-repairs',
        '/services/concrete-grinding',
        '/services/adhesive-removal',
        '/services/epoxy-removal',
        '/services/floor-levelling',
        '/services/industrial-prep',
        '/services/industrial-surface-prep',
        '/services/moisture-barriers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Flooring Installation suburb pages (Oxley catchment)
    const flooringInstallationPages = flooringInstallationSuburbs.map((suburb) => ({
        url: `${baseUrl}/flooring-installation/${suburb.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Blog posts
    const blogPages = getAllBlogSlugs().map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 4. Dynamic Location Pages (The "Twin Engine")
    const locationPages = suburbs.flatMap((suburb) => {
        const suburbPath = `/locations/${suburb.region}/${suburb.slug}`;

        return [
            // Engine 1: Suburb Home
            {
                url: `${baseUrl}${suburbPath}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.9, // High priority for local domination
            },
            // Engine 2: Floor Prep Specialist
            {
                url: `${baseUrl}${suburbPath}/floor-preparation`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.9, // High priority for "money keywords"
            }
        ];
    });

    return [...staticPages, ...flooringInstallationPages, ...blogPages, ...locationPages];
}
