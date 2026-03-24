import type { Metadata } from 'next';
import PortfolioContent from '@/components/portfolio/PortfolioContent';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'Portfolio & Réalisations — Cas Clients | OPTIFLUX Marketing',
  description:
    '+150% de visibilité, +200% de réservations, +60% de ventes. Découvrez les résultats concrets d\'OPTIFLUX Marketing pour des entreprises africaines.',
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title:       'Portfolio OPTIFLUX Marketing — Réalisations & Résultats Clients',
    description: 'Découvrez comment OPTIFLUX a généré +150% de visibilité, +60% de ventes et +200% de réservations pour des entreprises africaines.',
    url:         `${SITE_URL}/portfolio`,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Portfolio OPTIFLUX Marketing — Résultats Clients' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Portfolio OPTIFLUX Marketing — Résultats Clients',
    description: '+150% de visibilité, +60% de ventes pour des entreprises africaines.',
    images:      ['/og-image.jpg'],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
