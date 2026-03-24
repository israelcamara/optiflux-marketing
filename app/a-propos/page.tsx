import type { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'À Propos — Notre Histoire & Mission | OPTIFLUX Marketing',
  description:
    'Découvrez OPTIFLUX Marketing, fondée par Abraham Israel Camara à Conakry. Notre mission : démocratiser l\'excellence digitale pour les entrepreneurs africains.',
  alternates: { canonical: `${SITE_URL}/a-propos` },
  openGraph: {
    title:       'À Propos d\'OPTIFLUX Marketing — Abraham Israel Camara',
    description: 'Notre mission : démocratiser l\'excellence digitale pour les entrepreneurs africains. Découvrez notre histoire et notre équipe.',
    url:         `${SITE_URL}/a-propos`,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Équipe OPTIFLUX Marketing — Fondateur Abraham Israel Camara' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'À Propos d\'OPTIFLUX Marketing',
    description: 'Notre mission : démocratiser l\'excellence digitale pour les entrepreneurs africains.',
    images:      ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
