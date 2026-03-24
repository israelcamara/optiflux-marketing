import type { Metadata } from 'next';
import TestimonialsContent from '@/components/testimonials/TestimonialsContent';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'Témoignages Clients — Avis & Résultats | OPTIFLUX Marketing',
  description:
    'Des résultats réels, des témoignages authentiques. Découvrez comment OPTIFLUX Marketing a transformé le business d\'entrepreneurs en Afrique de l\'Ouest.',
  alternates: { canonical: `${SITE_URL}/temoignages` },
  openGraph: {
    title:       'Témoignages Clients OPTIFLUX Marketing — Avis Authentiques',
    description: 'Des entrepreneurs africains témoignent de leurs résultats avec OPTIFLUX Marketing. Avis réels, chiffres vérifiables.',
    url:         `${SITE_URL}/temoignages`,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Témoignages clients OPTIFLUX Marketing' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Témoignages Clients — OPTIFLUX Marketing',
    description: 'Des résultats réels et des avis authentiques d\'entrepreneurs africains.',
    images:      ['/og-image.jpg'],
  },
};

export default function TemoignagesPage() {
  return <TestimonialsContent />;
}
