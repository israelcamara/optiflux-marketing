import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'OPTIFLUX Marketing',
  alternateName: 'OPTIFLUX',
  description:
    'Agence de marketing digital, développement web et formation pour entreprises africaines. Basée à Conakry, Guinée.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.svg`,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/og-image.jpg`,
  telephone: CONTACT_INFO.whatsapp,
  email: CONTACT_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Conakry',
    addressLocality: 'Conakry',
    addressRegion: 'Conakry',
    addressCountry: 'GN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.6412,
    longitude: -13.5784,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.youtube,
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services OPTIFLUX Marketing',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Digital',
          description:
            'Gestion des réseaux sociaux, publicité Meta Ads, création de contenu et stratégie de croissance digitale.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Web & Application',
          description:
            'Création de sites web sur mesure, applications web, landing pages et intégration de systèmes de paiement.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Formation & Coaching Digital',
          description:
            'Formations en marketing digital, design Canva, montage vidéo CapCut, développement web et coaching personnalisé.',
        },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Abraham Israel Camara',
    jobTitle: 'Fondateur & Directeur',
    worksFor: { '@id': `${SITE_URL}/#organization` },
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 9.6412,
      longitude: -13.5784,
    },
    geoRadius: '5000',
    description: 'Afrique de l\'Ouest, Guinée et diaspora africaine',
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
