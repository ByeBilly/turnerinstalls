import { MetadataRoute } from 'next';
import { suburbs } from '@/data/suburbs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://turnerinstalls.com.au';

    // 1. Static Pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/services',
        '/commercial',
        '/services/floor-preparation',
        '/services/subfloor-levelling',
        '/services/diamond-grinding',
        '/services/carpet-removal',
        '/services/timber-flooring'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Dynamic Location Pages (The "Twin Engine")
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

    return [...staticPages, ...locationPages];
}
