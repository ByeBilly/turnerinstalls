import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/business'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            // Share-card images live at /og (outside /api/) because Facebook's
            // crawler treated "Disallow: /api/" as blocking them, even with an
            // explicit Allow, and showed links without a preview image.
            allow: '/',
            // Internal tools and form/API endpoints. The AI discovery files
            // (/llms.txt, /ai.json, ...) are served via rewrites from their own
            // public paths, so blocking /api/ does not hide them.
            disallow: ['/private/', '/api/', '/pumpposts', '/bridge/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    }
}
