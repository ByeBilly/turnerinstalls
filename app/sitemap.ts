import { MetadataRoute } from 'next';
import { floorPreparationSuburbs, suburbs } from '@/data/suburbs';
import { flooringInstallationSuburbs } from '@/data/flooringInstallationSuburbs';
import { blogPosts } from '@/data/blogPosts';
import { BASE_URL } from '@/lib/business';

// Bump this when service/location page copy is actually edited, rather than
// letting every build stamp `lastmod` with the current instant — a lastmod
// that changes on every deploy regardless of content changes tells crawlers
// nothing about real freshness.
const CONTENT_LAST_UPDATED = new Date('2026-09-15');

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = BASE_URL;

    // 1. Static public pages.
    // AI discovery files are intentionally available at their public URLs,
    // but they are not submitted as page URLs in the XML sitemap.
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
        '/locations/brisbane',
        '/locations/gold-coast',
        '/locations/gympie',
        '/locations/ipswich',
        '/locations/sunshine-coast',
        '/locations/toowoomba',
        '/services/floor-preparation',
        '/services/subfloor-repairs',
        '/services/concrete-grinding',
        '/services/floor-levelling-concrete-grinding',
        '/services/adhesive-removal',
        '/services/epoxy-removal',
        '/services/floor-levelling',
        '/services/industrial-surface-prep',
        '/services/moisture-barriers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Flooring Installation suburb pages (Oxley catchment)
    const flooringInstallationPages = flooringInstallationSuburbs.map((suburb) => ({
        url: `${baseUrl}/flooring-installation/${suburb.slug}`,
        lastModified: CONTENT_LAST_UPDATED,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Blog posts — real per-post date instead of "now", so freshness
    // signals reflect when a post actually last changed.
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 4. Suburb home pages (curated suburbs.ts list only).
    const locationPages = suburbs.map((suburb) => {
        const suburbPath = `/locations/${suburb.region}/${suburb.slug}`;

        return {
            url: `${baseUrl}${suburbPath}`,
            lastModified: CONTENT_LAST_UPDATED,
            changeFrequency: 'weekly' as const,
            priority: 0.9, // High priority for local domination
        };
    });

    // 5. Floor preparation suburb pages — the full merged list (curated
    // suburbs.ts + every flooringInstallationSuburbs entry), since floor prep
    // is offered everywhere flooring installation is.
    const floorPreparationPages = floorPreparationSuburbs.map((suburb) => {
        const suburbPath = `/locations/${suburb.region}/${suburb.slug}`;

        return {
            url: `${baseUrl}${suburbPath}/floor-preparation`,
            lastModified: CONTENT_LAST_UPDATED,
            changeFrequency: 'weekly' as const,
            priority: 0.9, // High priority for "money keywords"
        };
    });

    return [...staticPages, ...flooringInstallationPages, ...blogPages, ...locationPages, ...floorPreparationPages];
}
