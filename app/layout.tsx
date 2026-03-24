import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header       from '@/components/layout/Header';
import Footer       from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import BookingModal from '@/components/shared/BookingModal';
import ScrollToTop  from '@/components/shared/ScrollToTop';
import JsonLd       from '@/components/shared/JsonLd';
import { BookingProvider } from '@/components/shared/BookingContext';

// ── Polices Google Fonts ──────────────────────────────
const outfit = Outfit({
  subsets:  ['latin'],
  variable: '--font-outfit',
  display:  'swap',
  weight:   ['400', '500', '600', '700', '800', '900'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  variable: '--font-jakarta',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
});

// ── Métadonnées racine ────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
    template: '%s — OPTIFLUX Marketing',
  },
  description:
    'Agence digitale africaine spécialisée en marketing digital, création de sites web et formation. Transformez votre business avec OPTIFLUX Marketing à Conakry, Guinée.',
  keywords: [
    'agence marketing digital Afrique',
    'création site web Conakry',
    'publicité Facebook Guinée',
    'community management Afrique de l\'Ouest',
    'formation marketing digital',
    'OPTIFLUX Marketing',
  ],
  authors: [{ name: 'Abraham Israel Camara', url: SITE_URL }],
  creator: 'OPTIFLUX Marketing',
  publisher: 'OPTIFLUX Marketing',
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-image-preview':  'large',
      'max-snippet':        -1,
      'max-video-preview':  -1,
    },
  },
  openGraph: {
    type:        'website',
    locale:      'fr_FR',
    url:         SITE_URL,
    siteName:    'OPTIFLUX Marketing',
    title:       'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
    description: 'Marketing digital, développement web et formations pour entreprises africaines. Résultats mesurables, expertise locale.',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'OPTIFLUX Marketing — Agence Digitale pour Entreprises Africaines',
    description: 'Marketing digital, développement web et formations pour entreprises africaines.',
    images:      ['/og-image.jpg'],
    creator:     '@optifluxmktg',
  },
  icons: {
    icon:             [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32',  type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16',  type: 'image/png' },
    ],
    apple:            '/apple-touch-icon.png',
    shortcut:         '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
  },
};

// ── Layout racine ─────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-[#0B0B0B] antialiased">
        <JsonLd />
        <BookingProvider>
          {/* Passer le focus aux lecteurs d'écran */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#2563EB] focus:rounded-lg focus:shadow-lg focus:font-semibold"
          >
            Aller au contenu principal
          </a>

          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />

          {/* Composants flottants */}
          <WhatsAppButton />
          <ScrollToTop />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
