import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Keep favicon explicitly crawlable for search result branding.
        allow: ['/favicon.ico', '/'],
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    host: 'https://afritechbridge.online',
    sitemap: 'https://afritechbridge.online/sitemap.xml',
  }
}
