import type { Metadata } from 'next';
import HeroSection         from '@/components/sections/HeroSection';
import StatsCounter        from '@/components/sections/StatsCounter';
import ServicesPreview     from '@/components/sections/ServicesPreview';
import PortfolioPreview    from '@/components/sections/PortfolioPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection          from '@/components/sections/CTASection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
  description:
    'Transformez votre business avec OPTIFLUX Marketing : marketing digital, sites web et formations pour entreprises africaines. Résultats mesurables, expertise locale.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:       'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
    description: 'Marketing digital, développement web et formations. Des résultats mesurables pour les entrepreneurs africains.',
    url:         SITE_URL,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'OPTIFLUX Marketing — Agence Digitale Africaine' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
    description: 'Marketing digital, développement web et formations pour entrepreneurs africains.',
    images:      ['/og-image.jpg'],
  },
};

// Page d'accueil — structure complète en 6 sections
export default function HomePage() {
  return (
    <>
      {/* 1. Hero — accroche principale + marquee clients */}
      <HeroSection />

      {/* 2. Chiffres clés — compteurs animés */}
      <StatsCounter />

      {/* 3. Services — aperçu des 3 expertises */}
      <ServicesPreview />

      {/* 4. Portfolio — 3 cas clients (grille asymétrique) */}
      <PortfolioPreview />

      {/* 5. Témoignages — 3 avis clients */}
      <TestimonialsSection />

      {/* 6. CTA finale — réserver un appel */}
      <CTASection />
    </>
  );
}
