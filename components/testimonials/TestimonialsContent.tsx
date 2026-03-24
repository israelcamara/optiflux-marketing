'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

// ── Types
type ServiceKey = 'marketing' | 'web' | 'formation';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  service: ServiceKey;
  rating: number; // supports .5
  content: string;
  avatarFrom: string;
  avatarTo: string;
}

// ── 6 témoignages réalistes — Guinée / Afrique de l'Ouest
const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mamadou Diallo',
    title: 'Directeur Général',
    company: 'Pharmacie Centrale de Kindia',
    service: 'marketing',
    rating: 5,
    content:
      'OPTIFLUX a complètement transformé la façon dont nos clients nous trouvent. Avant, on dépendait presque uniquement du bouche-à-oreille. Aujourd\'hui, grâce à notre présence Instagram professionnelle et aux campagnes Meta Ads géolocalisées, on reçoit des dizaines de messages par jour. Le trafic en pharmacie a augmenté de 40% en moins de 2 mois. Un investissement rentabilisé en moins de 6 semaines.',
    avatarFrom: '#1E40AF',
    avatarTo: '#3B82F6',
  },
  {
    id: '2',
    name: 'Fatoumata Sylla',
    title: 'Présidente',
    company: 'Cabinet Expertise Conseils (CEC)',
    service: 'web',
    rating: 5,
    content:
      'Notre cabinet avait besoin d\'une vitrine digitale à la hauteur de notre expertise. Abraham a su comprendre nos enjeux métier et les traduire en un site web professionnel qui reflète vraiment notre sérieux. Des prospects que nous n\'aurions jamais touchés nous contactent désormais directement. Le référencement SEO nous a même positionné en première page Google pour notre secteur.',
    avatarFrom: '#5B21B6',
    avatarTo: '#8B5CF6',
  },
  {
    id: '3',
    name: 'Ibrahima Kouyaté',
    title: 'Gérant',
    company: 'Supermarché Le Progrès — Conakry',
    service: 'marketing',
    rating: 4.5,
    content:
      'On hésitait depuis des mois à franchir le pas des réseaux sociaux. OPTIFLUX nous a convaincus et on ne regrette vraiment pas. Nos publications atteignent désormais 15 000 personnes par semaine à Conakry. La fréquentation a augmenté de 35% en deux mois — surtout le weekend grâce aux posts sur nos promotions. L\'équipe est très réactive et propose toujours des créatifs percutants.',
    avatarFrom: '#C2410C',
    avatarTo: '#FB923C',
  },
  {
    id: '4',
    name: 'Aissatou Baldé',
    title: 'Fondatrice',
    company: 'Boutique Afrique Chic — Dakar',
    service: 'web',
    rating: 5,
    content:
      'Mon e-commerce était un rêve depuis des années. En 6 semaines à peine, OPTIFLUX m\'a livré un site magnifique, intuitif, avec le paiement Orange Money intégré — essentiel pour mon marché. Les premières commandes sont arrivées dès le lendemain du lancement. Aujourd\'hui j\'expédie dans 3 pays d\'Afrique de l\'Ouest et mon chiffre d\'affaires mensuel a été multiplié par 4. Un vrai partenaire, pas juste un prestataire.',
    avatarFrom: '#BE185D',
    avatarTo: '#F472B6',
  },
  {
    id: '5',
    name: 'Oumar Bah',
    title: 'Freelance & Consultant Digital',
    company: 'Indépendant — Conakry',
    service: 'formation',
    rating: 5,
    content:
      'Je suis parti de zéro absolu. En 4 semaines de formation, j\'ai acquis toutes les bases pour créer et gérer des campagnes Facebook et Instagram. Le contenu est concret, ancré dans la réalité du marché africain — pas des cours théoriques copiés de YouTube. J\'ai signé mes deux premiers clients freelance la semaine suivant la formation. Abraham enseigne avec passion et pédagogie. Ça vaut chaque franc investi.',
    avatarFrom: '#065F46',
    avatarTo: '#34D399',
  },
  {
    id: '6',
    name: 'Kadiatou Traoré',
    title: 'Responsable Communication',
    company: 'ONG Femmes & Digital — Conakry',
    service: 'formation',
    rating: 4.5,
    content:
      'La formation Canva Pro d\'OPTIFLUX a révolutionné notre communication. On produisait avant des visuels amateurs qui ne reflétaient pas notre sérieux. En 2 jours, notre équipe crée maintenant des contenus de qualité professionnelle. Notre engagement sur Instagram a triplé le mois suivant. Formation pratique, rapide et directement applicable dès le lendemain.',
    avatarFrom: '#4338CA',
    avatarTo: '#818CF8',
  },
];

// ── Config badge service
const SERVICE_BADGE: Record<ServiceKey, { bg: string; color: string; label: string }> = {
  marketing: { bg: '#DBEAFE', color: '#1D4ED8', label: 'Marketing Digital' },
  web:       { bg: '#EDE9FE', color: '#6D28D9', label: 'Web & App' },
  formation: { bg: '#D1FAE5', color: '#065F46', label: 'Formation' },
};

// ── Stats bande
const STATS = [
  { value: '35+',  label: 'Clients accompagnés' },
  { value: '15+',  label: 'Projets livrés' },
  { value: '98%',  label: 'Taux de satisfaction' },
  { value: '2+',   label: 'Années d\'expérience' },
];

// ══════════════════════════════════════════
// ÉTOILES — supporte les demi-étoiles
// ══════════════════════════════════════════
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = rating >= n ? 1 : rating >= n - 0.5 ? 0.5 : 0;
        return (
          <div key={n} className="relative w-[15px] h-[15px]">
            {/* Star vide (fond) */}
            <svg viewBox="0 0 20 20" className="absolute inset-0 w-full h-full" fill="#E2E8F0" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {/* Star pleine (clippée selon fill) */}
            {fill > 0 && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <svg viewBox="0 0 20 20" className="w-[15px] h-[15px]" fill="#FBBF24" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ══════════════════════════════════════════
// CARTE TÉMOIGNAGE
// ══════════════════════════════════════════
function TestimonialCard({ t, delay = 0 }: { t: Testimonial; delay?: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const badge  = SERVICE_BADGE[t.service];

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className="bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Top : étoiles + badge service */}
      <div className="flex items-center justify-between mb-5">
        <Stars rating={t.rating} />
        <span
          className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.07em]"
          style={{ backgroundColor: badge.bg, color: badge.color }}
        >
          {badge.label}
        </span>
      </div>

      {/* Guillemet déco */}
      <div
        className="text-[56px] font-serif leading-none mb-1 select-none"
        style={{ color: '#EFF6FF', fontFamily: 'Georgia, serif', lineHeight: '0.8' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Contenu */}
      <blockquote
        className="text-[14.5px] text-[#374151] leading-[1.8] mb-6"
        style={{ fontFamily: 'var(--font-jakarta)' }}
      >
        {t.content}
      </blockquote>

      {/* Auteur */}
      <figcaption className="flex items-center gap-3.5 pt-5 border-t border-[#F1F5F9]">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[15px] shrink-0 shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${t.avatarFrom} 0%, ${t.avatarTo} 100%)`,
            fontFamily: 'var(--font-outfit)',
          }}
          aria-hidden="true"
        >
          {t.name.charAt(0)}
        </div>
        <div>
          <p
            className="text-[14px] font-bold text-[#0B0B0B] leading-tight"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {t.name}
          </p>
          <p
            className="text-[12px] text-[#94A3B8] leading-snug"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            {t.title} · {t.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

// ══════════════════════════════════════════
// PAGE TÉMOIGNAGES — contenu complet
// ══════════════════════════════════════════
export default function TestimonialsContent() {
  const refStats = useRef<HTMLDivElement>(null);
  const refCta   = useRef<HTMLDivElement>(null);
  const inStats  = useInView(refStats, { once: true, amount: 0.3 });
  const inCta    = useInView(refCta,   { once: true, amount: 0.3 });

  const col1 = [TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[4]];
  const col2 = [TESTIMONIALS[1], TESTIMONIALS[3], TESTIMONIALS[5]];

  return (
    <>
      {/* ════════════════════════════════
          1. HERO
          ════════════════════════════════ */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, #FBBF24 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-[13px] text-[#94A3B8] mb-8"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" aria-hidden="true" />
            <span className="text-[#0B0B0B] font-medium">Témoignages</span>
          </motion.nav>

          <div className="text-center max-w-[680px] mx-auto">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              ⭐ Avis clients
            </motion.span>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[38px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#0B0B0B] leading-[1.05] tracking-[-0.03em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Ils nous font{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                confiance
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[17px] text-[#64748B] leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Des entrepreneurs et dirigeants d&apos;Afrique de l&apos;Ouest témoignent
              de leur expérience avec OPTIFLUX. Des résultats réels, des histoires authentiques.
            </motion.p>

            {/* Social proof bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex flex-col sm:flex-row items-center gap-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-7 py-4"
            >
              {/* Avatars empilés */}
              <div className="flex -space-x-2.5">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.id}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})`,
                      zIndex: TESTIMONIALS.length - i,
                      fontFamily: 'var(--font-outfit)',
                    }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                ))}
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start mb-0.5">
                  <Stars rating={5} />
                  <span className="text-[14px] font-bold text-[#0B0B0B]" style={{ fontFamily: 'var(--font-outfit)' }}>
                    5.0
                  </span>
                </div>
                <p className="text-[12.5px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  6 clients satisfaits · 100% recommandent
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          2. GRILLE MASONRY
          ════════════════════════════════ */}
      <section className="py-16 pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop : 2 colonnes masonry */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 items-start">
            {/* Colonne gauche */}
            <div className="flex flex-col gap-6">
              {col1.map((t, i) => (
                <TestimonialCard key={t.id} t={t} delay={i * 0.1} />
              ))}
            </div>
            {/* Colonne droite (décalée visuellement) */}
            <div className="flex flex-col gap-6 md:mt-8">
              {col2.map((t, i) => (
                <TestimonialCard key={t.id} t={t} delay={i * 0.1 + 0.05} />
              ))}
            </div>
          </div>

          {/* Mobile : 1 colonne */}
          <div className="md:hidden flex flex-col gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} t={t} delay={i * 0.06} />
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          3. BANDE RÉSULTATS CONCRETS
          ════════════════════════════════ */}
      <section ref={refStats} className="bg-[#0B0B0B] py-16 md:py-20 overflow-hidden relative">
        {/* Déco fond */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inStats ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 mb-3"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Résultats concrets
            </span>
            <h2
              className="text-[26px] md:text-[36px] font-extrabold text-white tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Des chiffres qui{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                parlent d&apos;eux-mêmes
              </span>
            </h2>
          </motion.div>

          {/* 4 stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inStats ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative text-center"
              >
                {/* Séparateur vertical desktop */}
                {i > 0 && (
                  <div
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/10"
                    aria-hidden="true"
                  />
                )}

                <p
                  className="text-[48px] md:text-[56px] font-extrabold leading-none mb-2"
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #F97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[13px] text-white/50 font-medium"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          4. CTA — Rejoignez nos clients
          ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={refCta}
            initial={{ opacity: 0, y: 30 }}
            animate={inCta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div
              className="relative rounded-3xl overflow-hidden text-center px-8 py-16 md:px-16 md:py-20"
              style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 45%, #7C3AED 100%)' }}
            >
              {/* Déco */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                  }}
                />
                <div className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-white/[0.07] blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/[0.06] blur-3xl" />
              </div>

              <div className="relative">
                {/* Avatars empilés (réassurance) */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex -space-x-2.5">
                    {TESTIMONIALS.slice(0, 4).map((t, i) => (
                      <div
                        key={t.id}
                        className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-[13px] font-bold"
                        style={{
                          background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})`,
                          zIndex: 4 - i,
                          fontFamily: 'var(--font-outfit)',
                        }}
                        aria-hidden="true"
                      >
                        {t.name.charAt(0)}
                      </div>
                    ))}
                    <div
                      className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/20 flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                      aria-hidden="true"
                    >
                      +2
                    </div>
                  </div>
                </div>

                <h2
                  className="text-[28px] sm:text-[38px] md:text-[50px] font-extrabold text-white leading-[1.1] tracking-[-0.025em] mb-4"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Rejoignez nos clients
                  <br />
                  <span className="text-white/75">satisfaits</span>
                </h2>

                <p
                  className="text-[16px] text-white/65 max-w-[480px] mx-auto leading-relaxed mb-10"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Votre histoire de succès pourrait être la prochaine.
                  Un appel de 30 minutes suffit pour définir comment
                  OPTIFLUX peut transformer votre business digital.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-7 py-[14px] rounded-xl bg-white text-[#1E40AF] font-bold text-[15px] hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <Calendar className="w-[17px] h-[17px]" aria-hidden="true" />
                    Réserver mon appel gratuit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>

                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-[13px] rounded-xl border-[1.5px] border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/55 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <MessageCircle className="w-[17px] h-[17px]" aria-hidden="true" />
                    Discuter sur WhatsApp
                  </a>
                </div>

                <p
                  className="mt-6 text-[12.5px] text-white/40"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  ✓ Appel 100% gratuit &nbsp;·&nbsp; ✓ Aucun engagement &nbsp;·&nbsp; ✓ Réponse sous 2h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
