import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/constants';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url:             SITE_URL,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    {
      url:             `${SITE_URL}/services`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${SITE_URL}/portfolio`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/a-propos`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    {
      url:             `${SITE_URL}/temoignages`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    {
      url:             `${SITE_URL}/blog`,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/contact`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
  ];

  // Pages blog dynamiques
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url:             `${SITE_URL}/blog/${post.slug}`,
    lastModified:    new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority:        0.6,
  }));

  return [...staticPages, ...blogPages];
}
