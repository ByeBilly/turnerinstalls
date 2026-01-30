import { MetadataRoute } from 'next'
import { suburbs } from '@/data/suburbs'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://turnerinstalls.com.au'

    // Define static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/residential',
        '/commercial',
        '/services/floor-preparation',
        '/services/concrete-grinding',
        '/services/floor-levelling',
        '/services/moisture-barriers',
        '/services/subfloor-repairs',
        '/services/adhesive-removal',
        '/services/epoxy-removal',
        '/services/industrial-prep',
        '/locations/brisbane',
        '/locations/gold-coast',
        '/locations/sunshine-coast',
        '/locations/toowoomba',
        '/locations/gympie',
        '/services',
        '/reviews',
        '/privacy-policy',
    ]

    const fullRoutes = [
        ...staticRoutes,
        ...suburbs.map(s => `/locations/${s.region}/${s.slug}`)
    ]

    return fullRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
