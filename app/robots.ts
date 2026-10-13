import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/business'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            // /api/og serves the share-card images; X/Twitter's crawler obeys
            // robots.txt, so it must stay reachable despite the /api/ block.
            allow: ['/', '/api/og'],
            // Internal tools and form/API endpoints. The AI discovery files
            // (/llms.txt, /ai.json, ...) are served via rewrites from their own
            // public paths, so blocking /api/ does not hide them.
            disallow: ['/private/', '/api/', '/pumpposts', '/bridge/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    }
}
