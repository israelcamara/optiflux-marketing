# OPTIFLUX Marketing — Site Web Officiel

Site web officiel de l'agence OPTIFLUX Marketing, spécialisée en marketing digital, développement web et formation pour les entrepreneurs africains.

---

## Stack technique

| Technologie         | Version  | Usage                         |
|---------------------|----------|-------------------------------|
| Next.js             | 16.x     | Framework React (App Router)  |
| React               | 19.x     | UI                            |
| TypeScript          | 5.x      | Typage statique               |
| Tailwind CSS        | 4.x      | Styles (CSS-first via @theme) |
| Framer Motion       | 12.x     | Animations                    |
| Lucide React        | 1.x      | Icônes                        |

---

## Structure du projet

```
optifluxlarketing.com/
├── app/
│   ├── layout.tsx               # Layout racine (fonts, header, footer, providers)
│   ├── template.tsx             # Transitions de page (Framer Motion)
│   ├── page.tsx                 # Page d'accueil
│   ├── not-found.tsx            # Page 404 personnalisée
│   ├── sitemap.ts               # Sitemap dynamique
│   ├── a-propos/page.tsx
│   ├── blog/page.tsx + [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── espace-client/page.tsx   # Pas dans la nav (footer uniquement)
│   ├── portfolio/page.tsx
│   ├── services/page.tsx
│   └── temoignages/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Header sticky avec modale réservation
│   │   └── Footer.tsx           # Footer avec lien espace client discret
│   ├── sections/                # Sections page d'accueil
│   └── shared/
│       ├── BookingContext.tsx   # Context React pour la modale
│       ├── BookingModal.tsx     # Modale prise de rendez-vous
│       ├── JsonLd.tsx           # Schema.org LocalBusiness
│       ├── ScrollToTop.tsx      # Bouton retour en haut
│       └── WhatsAppButton.tsx   # Bouton flottant WhatsApp
│
├── lib/constants.ts             # Toutes les données du site
├── public/
│   ├── favicon.svg              # Favicon "OF" dégradé bleu/violet
│   ├── robots.txt
│   └── site.webmanifest
├── .env.example                 # Variables d'environnement (modèle)
└── types/index.ts               # Types TypeScript
```

---

## Installation et démarrage en local

### Prérequis
- Node.js 18.17+ ou 20+

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-username/optifluxlarketing.com.git
cd optifluxlarketing.com

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Éditez .env.local avec vos valeurs réelles

# 4. Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Autres commandes

```bash
npm run build    # Build de production
npm run start    # Démarrer en mode production
npm run lint     # Vérification ESLint
```

---

## Déploiement sur Vercel

### Étapes

1. Poussez votre code sur GitHub :
   ```bash
   git add .
   git commit -m "feat: site OPTIFLUX Marketing prêt pour production"
   git push origin main
   ```

2. Allez sur [vercel.com](https://vercel.com) → **New Project**

3. Importez votre dépôt GitHub

4. Ajoutez les **variables d'environnement** :

   | Nom                           | Valeur                              |
   |-------------------------------|-------------------------------------|
   | `NEXT_PUBLIC_SITE_URL`        | `https://optiflux-marketing.com`    |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `224620975273`                      |
   | `NEXT_PUBLIC_CALENDLY_URL`    | `https://calendly.com/optiflux`     |

5. Cliquez **Deploy** — Vercel détecte Next.js automatiquement.

### Domaine personnalisé

Dans Vercel → **Settings** → **Domains**, ajoutez votre domaine et configurez les DNS selon les instructions.

---

## Personnalisation rapide

Tout le contenu éditorial est dans `lib/constants.ts` :
- `CONTACT_INFO` — numéro WhatsApp, email, adresse
- `BOOKING_LINK` — votre lien Calendly/Cal.com
- `SERVICES`, `PROJECTS`, `TESTIMONIALS`, `BLOG_POSTS` — contenu des pages

---

## Fondateur

**Abraham Israel Camara** — Fondateur & Directeur OPTIFLUX Marketing
📍 Conakry, Guinée | 📱 +224 620 975 273 | 📧 optifluxmarketing@gmail.com
