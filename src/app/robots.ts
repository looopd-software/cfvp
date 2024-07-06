import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    host: 'https://cfvp.com.ar',
    sitemap: 'https://cfvp.com.ar/sitemap.xml',
  };
}
