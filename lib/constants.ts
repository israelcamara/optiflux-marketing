// Données du site OPTIFLUX Marketing
import type { Service, Testimonial, Project, BlogPost, Stat, NavItem, SubServiceItem, ProcessStep } from '@/types';

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Témoignages', href: '/temoignages' },
];

// Statistiques clés (page d'accueil)
export const STATS: Stat[] = [
  { value: 15,  suffix: '+',  label: 'Projets réalisés',                prefix: ''  },
  { value: 98,  suffix: '%',  label: 'Clients satisfaits',              prefix: ''  },
  { value: 150, suffix: '%',  label: 'Croissance moyenne des clients',  prefix: '+' },
  { value: 3,   suffix: '',   label: 'Domaines d\'expertise',           prefix: ''  },
];

// Services
export const SERVICES: Service[] = [
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description:
      'Développez votre présence en ligne et atteignez vos clients cibles grâce à des stratégies digitales performantes et mesurables.',
    features: [
      'Gestion des réseaux sociaux (Community Management)',
      'Publicité Facebook & Instagram (Meta Ads)',
      'Création de contenu (visuels, vidéos)',
      'Stratégie de croissance digitale',
      'Monétisation de vos comptes',
    ],
    icon: 'TrendingUp',
    category: 'marketing',
    color: 'blue',
  },
  {
    id: 'web',
    title: 'Développement Web & App',
    description:
      'Des sites web et applications sur mesure, conçus pour convertir vos visiteurs en clients et refléter l\'excellence de votre marque.',
    features: [
      'Création de sites web sur mesure',
      'Développement d\'applications web',
      'Landing pages optimisées conversion',
      'Intégration de systèmes de paiement',
      'Maintenance & optimisation SEO',
    ],
    icon: 'Code2',
    category: 'web',
    color: 'purple',
  },
  {
    id: 'formation',
    title: 'Formation & Coaching',
    description:
      'Montez en compétences avec nos formations pratiques animées par des experts. Du marketing au code, transformez votre carrière.',
    features: [
      'Marketing digital (débutant → avancé)',
      'Design avec Canva (pro)',
      'Montage vidéo avec CapCut',
      'Web coding (HTML, CSS, React)',
      'Coaching personnalisé 1-1',
    ],
    icon: 'GraduationCap',
    category: 'formation',
    color: 'orange',
  },
];

// Projets Portfolio
export const PROJECTS: Project[] = [
  {
    id: 'mag-gallerie',
    client: 'Mag Gallerie',
    sector: 'Immobilier',
    title: 'Digitalisation complète d\'une agence immobilière',
    description:
      'Accompagnement de Mag Gallerie dans sa transformation digitale complète : stratégie marketing, création de contenu professionnel et gestion des réseaux sociaux pour booster leur visibilité et générer des leads qualifiés.',
    tags: ['Marketing Digital', 'Community Management', 'Meta Ads'],
    results: [
      { label: 'Visibilité en 3 mois', value: '+150%' },
      { label: 'Leads qualifiés',      value: '+40%'  },
      { label: 'Engagement réseaux',   value: '+200%' },
      { label: 'Abonnés gagnés',       value: '2 500+'},
    ],
  },
  {
    id: 'ayoka-fashion',
    client: 'AYOKA Fashion',
    sector: 'Mode & E-commerce',
    title: 'Boutique en ligne haut de gamme pour une marque de mode africaine',
    description:
      'Conception et développement d\'une boutique e-commerce moderne pour AYOKA Fashion, une marque de prêt-à-porter africain. Intégration paiement mobile, galerie produits et tunnel de conversion optimisé.',
    tags: ['Développement Web', 'E-commerce', 'UX/UI Design'],
    results: [
      { label: 'Ventes en 2 mois',      value: '+60%'  },
      { label: 'Commandes / mois',      value: '500+'  },
      { label: 'Taux de conversion',    value: '4,2%'  },
      { label: 'Panier moyen',          value: '85 000 GNF' },
    ],
  },
  {
    id: 'saveur-conakry',
    client: 'Le Saveur de Conakry',
    sector: 'Restauration',
    title: 'Campagne Meta Ads pour un restaurant local à Conakry',
    description:
      'Stratégie et exécution complète de campagnes publicitaires Facebook & Instagram pour Le Saveur de Conakry. Ciblage géolocalisé, créations visuelles appétissantes et optimisation continue du budget.',
    tags: ['Meta Ads', 'Community Management', 'Création de contenu'],
    results: [
      { label: 'Réservations en 6 sem.', value: '+200%' },
      { label: 'Retour sur investissement', value: '380%' },
      { label: 'Coût par réservation',  value: '-55%'  },
      { label: 'Nouveaux clients',      value: '320+'  },
    ],
  },
];

// Témoignages
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Moussa Camara',
    role: 'Fondateur',
    company: 'AYOKA Fashion',
    content:
      'Avant OPTIFLUX, j\'avais une belle marque mais zéro présence en ligne. En 6 semaines, j\'avais un site e-commerce professionnel, des pages réseaux actives et mes premières ventes en ligne. Abraham comprend vraiment les enjeux des entrepreneurs africains.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Aïssatou Bah',
    role: 'Gérante',
    company: 'Le Saveur de Conakry',
    content:
      'Nos réservations ont bondi de 200% en moins de 2 mois grâce aux campagnes Meta Ads pilotées par OPTIFLUX. Le ciblage était parfait — nos tables se remplissent désormais dès qu\'on publie une offre. Un ROI exceptionnel pour notre restaurant.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sékou Kouyaté',
    role: 'Freelance & Créateur de contenu',
    company: 'Indépendant',
    content:
      'La formation marketing digital d\'OPTIFLUX m\'a permis de passer de 0 à mes premiers clients en 3 semaines. Les modules sont concrets, directement applicables. Aujourd\'hui je gère des campagnes pour 4 clients grâce à ce que j\'ai appris.',
    rating: 5,
  },
];

// Articles de blog
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: '5-strategies-visibilite-instagram-2025',
    title: '5 stratégies pour doubler votre visibilité sur Instagram en 2025',
    excerpt:
      'Instagram évolue rapidement. Découvrez les 5 stratégies que nous utilisons pour nos clients africains pour exploser leur portée organique et attirer de nouveaux clients cette année.',
    content: 'full',
    category: 'Marketing Digital',
    publishedAt: '2025-01-20',
    readTime: 7,
  },
  {
    id: '2',
    slug: 'entreprise-site-web-2025',
    title: 'Pourquoi votre entreprise a besoin d\'un site web en 2025',
    excerpt:
      'En 2025, ne pas avoir de site web, c\'est laisser vos concurrents prendre vos clients. Voici pourquoi un site professionnel est désormais indispensable — et comment en tirer parti.',
    content: '',
    category: 'Développement Web',
    publishedAt: '2025-01-12',
    readTime: 5,
  },
  {
    id: '3',
    slug: 'guide-meta-ads-premiere-campagne',
    title: 'Guide complet : lancer sa première campagne Meta Ads',
    excerpt:
      'Facebook et Instagram Ads peuvent sembler complexes. Voici le guide pas-à-pas pour créer, lancer et optimiser votre première campagne avec un budget maîtrisé.',
    content: '',
    category: 'Publicité',
    publishedAt: '2025-01-05',
    readTime: 9,
  },
  {
    id: '4',
    slug: 'canva-communication-visuelle',
    title: 'Comment Canva peut transformer votre communication visuelle',
    excerpt:
      'Pas besoin d\'être graphiste pour créer des visuels professionnels. Canva est l\'outil que toutes les PME africaines devraient maîtriser — voici comment l\'exploiter au maximum.',
    content: '',
    category: 'Formation',
    publishedAt: '2024-12-28',
    readTime: 4,
  },
  {
    id: '5',
    slug: 'ecommerce-afrique-opportunites-defis',
    title: 'E-commerce en Afrique : opportunités et défis en 2025',
    excerpt:
      'Le commerce en ligne explose sur le continent africain. Mais lancer une boutique e-commerce réussie demande de comprendre les spécificités du marché local. Tout ce qu\'il faut savoir.',
    content: '',
    category: 'E-commerce',
    publishedAt: '2024-12-15',
    readTime: 6,
  },
  {
    id: '6',
    slug: 'erreurs-digitalisation-entreprise',
    title: 'Les erreurs à éviter quand on digitalise son entreprise',
    excerpt:
      'La transformation digitale est souvent mal abordée. Voici les 7 erreurs les plus fréquentes que font les entrepreneurs africains — et comment les éviter pour ne pas perdre temps et argent.',
    content: '',
    category: 'Marketing Digital',
    publishedAt: '2024-12-08',
    readTime: 6,
  },
  {
    id: '7',
    slug: 'community-management-pme-africaines',
    title: 'Community Management : les clés du succès pour les PME africaines',
    excerpt:
      'Gérer vos réseaux sociaux efficacement ne s\'improvise pas. Stratégie éditoriale, fréquence de publication, engagement : tout ce qu\'il faut savoir pour bâtir une communauté active.',
    content: '',
    category: 'Marketing Digital',
    publishedAt: '2024-11-28',
    readTime: 5,
  },
];

// ── Sous-services détaillés (page /services)
export const SUB_SERVICES: Record<string, SubServiceItem[]> = {
  marketing: [
    {
      id: 'social',
      iconName: 'Users',
      title: 'Gestion des réseaux sociaux',
      description:
        'Community management professionnel sur Facebook, Instagram et LinkedIn. Planning éditorial, création de posts, interaction avec votre audience et croissance organique durable.',
    },
    {
      id: 'meta-ads',
      iconName: 'Megaphone',
      title: 'Publicité Meta Ads',
      description:
        'Campagnes Facebook & Instagram ciblées avec des créatifs percutants. Nous optimisons en continu pour maximiser votre ROI et attirer des prospects qualifiés au meilleur coût.',
    },
    {
      id: 'content',
      iconName: 'ImageIcon',
      title: 'Création de contenu',
      description:
        'Visuels professionnels, vidéos courtes, stories et reels. Un contenu qui engage, qui reflète l\'identité de votre marque et incite à l\'action.',
    },
    {
      id: 'strategy',
      iconName: 'Target',
      title: 'Stratégie de croissance',
      description:
        'Plan d\'action digital sur mesure avec objectifs clairs, KPIs définis et calendrier de mise en œuvre progressif. Une roadmap pour passer du point A au point B.',
    },
    {
      id: 'monetize',
      iconName: 'BadgeDollarSign',
      title: 'Monétisation des comptes',
      description:
        'Transformez votre audience en source de revenus. Partenariats, affiliation, vente directe — nous identifions les meilleures opportunités selon votre profil et vos objectifs.',
    },
  ],
  web: [
    {
      id: 'website',
      iconName: 'Globe',
      title: 'Sites web sur mesure',
      description:
        'Conception et développement de sites professionnels, rapides et optimisés SEO. Design unique, expérience utilisateur soignée et code propre pour durer dans le temps.',
    },
    {
      id: 'webapp',
      iconName: 'Layers',
      title: 'Applications web',
      description:
        'Développement d\'applications web fonctionnelles et évolutives — dashboards, outils métier, plateformes e-commerce — parfaitement adaptées à vos processus business.',
    },
    {
      id: 'landing',
      iconName: 'MousePointerClick',
      title: 'Landing pages conversion',
      description:
        'Pages d\'atterrissage conçues pour convertir. Structure persuasive, copywriting impactant et tests A/B pour maximiser votre taux de conversion et rentabiliser vos ads.',
    },
    {
      id: 'payment',
      iconName: 'CreditCard',
      title: 'Intégration paiement',
      description:
        'Mise en place de solutions de paiement Mobile Money (Orange, MTN) et international (Stripe, PayPal). Votre boutique encaisse partout, en toute sécurité.',
    },
    {
      id: 'seo',
      iconName: 'SearchCheck',
      title: 'Maintenance & SEO',
      description:
        'Suivi technique, mises à jour régulières et optimisation pour Google. Votre site reste performant, sécurisé et bien positionné pour attirer du trafic organique gratuit.',
    },
  ],
  formation: [
    {
      id: 'mktg-training',
      iconName: 'BookOpen',
      title: 'Formation Marketing Digital',
      description:
        'Programme complet du débutant à l\'autonomie : réseaux sociaux, publicité en ligne, analytics et stratégie. Ateliers pratiques avec des cas réels pour une progression rapide.',
    },
    {
      id: 'canva',
      iconName: 'Palette',
      title: 'Design avec Canva',
      description:
        'Maîtrisez Canva pour créer des visuels professionnels sans être graphiste. Posts, affiches, présentations, branding — tout faire vous-même en quelques heures de formation.',
    },
    {
      id: 'capcut',
      iconName: 'Film',
      title: 'Montage vidéo CapCut',
      description:
        'Créez des vidéos engageantes pour TikTok, Reels et YouTube Shorts avec CapCut. Effets, sous-titres, transitions, musique — les clés pour produire du contenu viral.',
    },
    {
      id: 'webcode',
      iconName: 'Code',
      title: 'Web Coding',
      description:
        'Initiez-vous au développement web : HTML, CSS, JavaScript et bases de React. Formation progressive avec des projets concrets pour acquérir une vraie compétence en 30 jours.',
    },
    {
      id: 'coaching',
      iconName: 'UserCheck',
      title: 'Coaching personnalisé 1-1',
      description:
        'Séances individuelles adaptées à votre rythme et vos objectifs. Accompagnement direct par Abraham pour débloquer vos points faibles et accélérer votre progression.',
    },
  ],
};

// ── Étapes du processus de travail (page /services)
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    iconName: 'Search',
    title: 'Découverte',
    description:
      'Appel de 30 min pour comprendre votre activité, vos objectifs et les défis actuels. Audit de votre présence digitale existante.',
  },
  {
    number: '02',
    iconName: 'Lightbulb',
    title: 'Stratégie',
    description:
      'Conception d\'une feuille de route sur mesure avec des KPIs clairs, un budget optimisé et un calendrier de mise en œuvre réaliste.',
  },
  {
    number: '03',
    iconName: 'Rocket',
    title: 'Exécution',
    description:
      'Mise en œuvre rigoureuse du plan — contenu, campagnes, développement — avec des rapports d\'avancement hebdomadaires.',
  },
  {
    number: '04',
    iconName: 'BarChart3',
    title: 'Résultats',
    description:
      'Analyse des performances, optimisation continue et reporting transparent. Nous ajustons jusqu\'à atteindre et dépasser vos objectifs.',
  },
];

// Informations de contact
export const CONTACT_INFO = {
  whatsapp: '+224 620 975 273',
  whatsappLink: 'https://wa.me/224620975273',
  email: 'optifluxmarketing@gmail.com',
  location: 'Conakry, Guinée',
};

// Réseaux sociaux
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/optifluxmarketing',
  instagram: 'https://instagram.com/optifluxmarketing',
  linkedin: 'https://linkedin.com/company/optifluxmarketing',
  youtube: 'https://youtube.com/@optifluxmarketing',
};

// Lien Calendly / Cal.com
export const BOOKING_LINK = 'https://cal.com/optiflux'; // À remplacer avec le vrai lien
