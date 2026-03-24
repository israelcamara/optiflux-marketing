import type { Metadata } from 'next';
import BlogListing from '@/components/blog/BlogListing';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'Blog Marketing Digital Afrique — Conseils & Stratégies | OPTIFLUX Marketing',
  description:
    'Conseils pratiques, stratégies digitales et tendances marketing en Afrique. Instagram, Meta Ads, création de sites web, e-commerce et formations pour PME africaines.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title:       'Blog OPTIFLUX Marketing — Conseils Marketing Digital pour l\'Afrique',
    description: 'Stratégies digitales, conseils Instagram, Meta Ads et développement web pour entrepreneurs africains.',
    url:         `${SITE_URL}/blog`,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Blog OPTIFLUX Marketing — Marketing Digital Afrique' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Blog OPTIFLUX Marketing — Marketing Digital Afrique',
    description: 'Conseils pratiques et stratégies digitales pour entreprises africaines.',
    images:      ['/og-image.jpg'],
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
