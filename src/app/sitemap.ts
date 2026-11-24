import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.strovainsaat.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL, // Anasayfa
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/hizmetler`, // Hizmetler
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projeler`, // Projeler
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/hakkimizda`, // Hakkımızda
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/iletisim`, // İletişim
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
