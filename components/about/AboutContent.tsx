'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  ChevronRight, MapPin, Target, Users, Lightbulb, Globe,
  ArrowRight, Calendar, MessageCircle, Linkedin, Twitter,
} from 'lucide-react';
import StatsCounter from '@/components/sections/StatsCounter';
import { CONTACT_INFO } from '@/lib/constants';

// ── 4 Valeurs fondatrices
const VALUES = [
  {
    emoji: '🎯',
    title: 'Performance',
    description:
      'Des résultats mesurables, pas du vent. Chaque action est trackée, analysée et optimisée pour atteindre vos objectifs chiffrés — rien d\'autre ne compte.',
    bg: '#EFF6FF',
    color: '#2563EB',
    border: '#BFDBFE',
    Icon: Target,
  },
  {
    emoji: '🤝',
    title: 'Accompagnement',
    description:
      'On ne vous lâche pas en cours de route. De la stratégie jusqu\'au résultat final, nous sommes présents à chaque étape — disponibles, réactifs et engagés.',
    bg: '#FFF7ED',
    color: '#F97316',
    border: '#FED7AA',
    Icon: Users,
  },
  {
    emoji: '💡',
    title: 'Innovation',
    description:
      'Les meilleures pratiques du digital, constamment mises à jour. Nous intégrons les outils et méthodes les plus efficaces pour vous donner un avantage réel sur vos concurrents.',
    bg: '#F5F3FF',
    color: '#7C3AED',
    border: '#DDD6FE',
    Icon: Lightbulb,
  },
  {
    emoji: '🌍',
    title: 'Impact',
    description:
      'Contribuer à la transformation digitale de l\'Afrique, un projet à la fois. Chaque entrepreneur que nous faisons réussir renforce l\'économie et la souveraineté numérique du continent.',
    bg: '#ECFDF5',
    color: '#10B981',
    border: '#A7F3D0',
    Icon: Globe,
  },
];

// ── Compétences du fondateur
const SKILLS = [
  'Marketing Digital', 'Meta Ads', 'Développement Web',
  'SEO', 'Stratégie Digitale', 'Formation', 'Community Mgt', 'Analytics',
];

// ══════════════════════════════════════════
// PAGE À PROPOS
// ══════════════════════════════════════════
export default function AboutContent() {
  // refs pour useInView par section
  const refHistoire  = useRef<HTMLDivElement>(null);
  const refFounder   = useRef<HTMLDivElement>(null);
  const refValeurs   = useRef<HTMLDivElement>(null);
  const refCta       = useRef<HTMLDivElement>(null);

  const inHistoire = useInView(refHistoire, { once: true, amount: 0.2 });
  const inFounder  = useInView(refFounder,  { once: true, amount: 0.15 });
  const inValeurs  = useInView(refValeurs,  { once: true, amount: 0.15 });
  const inCta      = useInView(refCta,      { once: true, amount: 0.3 });

  return (
    <>
      {/* ════════════════════════════════
          1. HERO
          ════════════════════════════════ */}
      <section className="relative pt-36 pb-24 bg-white overflow-hidden">
        {/* Déco fond */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-[13px] text-[#94A3B8] mb-8"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" aria-hidden="true" />
            <span className="text-[#0B0B0B] font-medium">À propos</span>
          </motion.nav>

          <div className="max-w-[820px]">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              ✦ Notre ADN
            </motion.span>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[42px] sm:text-[54px] lg:text-[70px] font-extrabold text-[#0B0B0B] leading-[1.03] tracking-[-0.03em] mb-6"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              À propos
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 55%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                d&apos;OPTIFLUX
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[18px] text-[#64748B] leading-relaxed mb-10 max-w-[620px]"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Une agence née d&apos;une conviction : les entreprises africaines méritent
              une excellence digitale pensée pour leur réalité, portée par des experts
              qui comprennent leurs enjeux.
            </motion.p>

            {/* 3 quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: <MapPin className="w-3.5 h-3.5" />, label: 'Conakry, Guinée' },
                { icon: '📅', label: 'Fondée en 2024' },
                { icon: '🌍', label: 'Vision panafricaine' },
              ].map((fact, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-[13px] font-medium"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  <span className="text-[#94A3B8]">{fact.icon}</span>
                  {fact.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          2. NOTRE HISTOIRE
          ════════════════════════════════ */}
      <section ref={refHistoire} className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── Texte gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inHistoire ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] text-[11px] font-bold uppercase tracking-[0.12em] mb-5"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Notre histoire
              </span>

              <h2
                className="text-[30px] md:text-[40px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.025em] mb-8"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Pourquoi{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  OPTIFLUX
                </span>{' '}
                existe
              </h2>

              <div className="space-y-5 text-[15.5px] text-[#64748B] leading-[1.8]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                <p>
                  OPTIFLUX Marketing est né d&apos;un constat simple mais troublant : en Afrique,
                  des milliers d&apos;entrepreneurs brillants peinent à faire décoller leur business
                  digital — non pas par manque de talent ou d&apos;ambition, mais faute d&apos;un
                  accompagnement vraiment adapté à leurs réalités.
                </p>
                <p>
                  Fondée à Conakry en 2024, l&apos;agence a été construite autour d&apos;une triple
                  expertise — marketing digital, développement web et formation — pour offrir
                  un suivi complet, de la stratégie à l&apos;exécution. Car la transformation
                  digitale ne se limite pas à un site web ou quelques posts Instagram :
                  c&apos;est un écosystème entier à construire.
                </p>
                <p>
                  Notre mission dépasse le cadre du business. Chaque PME que nous aidons à
                  croître, chaque entrepreneur que nous formons, chaque campagne qui génère
                  des résultats réels — c&apos;est un pas de plus vers une Afrique économiquement
                  plus forte et plus souveraine dans l&apos;économie numérique mondiale.
                </p>
              </div>
            </motion.div>

            {/* ── Illustration droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inHistoire ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative"
            >
              {/* Carte principale gradient */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)' }}
              >
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                    backgroundSize: '22px 22px',
                  }}
                  aria-hidden="true"
                />
                {/* Cercles déco */}
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/[0.08]" aria-hidden="true" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/[0.07]" aria-hidden="true" />

                <div className="relative p-8 md:p-10">
                  {/* Header card */}
                  <div className="flex items-center gap-2 mb-7">
                    <span className="text-xl">📍</span>
                    <span className="text-white/75 text-[13.5px] font-semibold" style={{ fontFamily: 'var(--font-outfit)' }}>
                      Conakry, Guinée — 2024
                    </span>
                  </div>

                  {/* Mission statement */}
                  <blockquote
                    className="text-white text-[20px] md:text-[22px] font-bold leading-snug tracking-[-0.01em] mb-8"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    &ldquo;Démocratiser l&apos;excellence digitale pour chaque entrepreneur africain.&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-white/20 mb-7" />

                  {/* Achievements */}
                  <div className="space-y-3.5">
                    {[
                      '15+ projets livrés avec succès',
                      '3 domaines d\'expertise complémentaires',
                      'Impact mesurable pour chaque client',
                      'Présence en Afrique de l\'Ouest',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 10 10" className="w-3 h-3" aria-hidden="true">
                            <polyline
                              points="1,5 4,8 9,2"
                              fill="none"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-white/75 text-[14px]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte flottante stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inHistoire ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -right-4 md:-right-6 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] p-4 w-44"
              >
                <p
                  className="text-[30px] font-extrabold text-[#0B0B0B] leading-none mb-0.5"
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  +150%
                </p>
                <p className="text-[12px] text-[#64748B]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  Croissance moyenne clients
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          3. LE FONDATEUR
          ════════════════════════════════ */}
      <section ref={refFounder} className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Titre de section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inFounder ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span
              className="inline-block px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Qui sommes-nous
            </span>
            <h2
              className="text-[28px] md:text-[38px] font-extrabold text-[#0B0B0B] tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Le{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                fondateur
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">

            {/* ── Colonne gauche : profil */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inFounder ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div
                  className="w-[120px] h-[120px] rounded-full flex items-center justify-center text-white font-extrabold text-[36px] shadow-[0_8px_32px_rgba(37,99,235,0.3)]"
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)',
                  }}
                  aria-label="Initiales Abraham Israel Camara"
                >
                  AI
                </div>
                {/* Anneau décoratif */}
                <div
                  className="absolute -inset-[3px] rounded-full opacity-30"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED, #F97316)' }}
                  aria-hidden="true"
                />
                <div className="absolute -inset-[3px] rounded-full bg-white -z-10" aria-hidden="true" />
                {/* Dot en ligne */}
                <div
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white"
                  style={{ background: '#10B981' }}
                  aria-hidden="true"
                />
              </div>

              {/* Nom & titre */}
              <h3
                className="text-[20px] font-extrabold text-[#0B0B0B] mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Abraham Israel Camara
              </h3>
              <p
                className="text-[14px] font-semibold text-[#2563EB] mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Fondateur &amp; Directeur Stratégique
              </p>
              <p
                className="text-[13px] text-[#94A3B8] mb-6 flex items-center gap-1"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Conakry, Guinée
              </p>

              {/* Réseaux sociaux */}
              <div className="flex items-center gap-2.5 mb-8">
                <a
                  href="https://linkedin.com/in/abraham-israel-camara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB] hover:border-[#BFDBFE] transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/optifluxmktg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#F0F9FF] hover:text-[#0284C7] hover:border-[#BAE6FD] transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#64748B] text-[11px] font-medium"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Colonne droite : bio + citation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inFounder ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Bio */}
              <div className="space-y-5 text-[15.5px] text-[#64748B] leading-[1.85] mb-10" style={{ fontFamily: 'var(--font-jakarta)' }}>
                <p>
                  Abraham Israel Camara est entrepreneur et expert en stratégie digitale.
                  Convaincu du potentiel transformateur du numérique, il a fondé OPTIFLUX
                  Marketing pour combler le fossé entre les entreprises africaines et les
                  meilleures pratiques digitales mondiales.
                </p>
                <p>
                  Avec une expertise transversale en marketing digital, développement web
                  et coaching entrepreneurial, il accompagne aujourd&apos;hui des entrepreneurs
                  et PME d&apos;Afrique de l&apos;Ouest dans leur transformation digitale —
                  de la première stratégie à la croissance mesurable.
                </p>
                <p>
                  Sa philosophie : aller au fond des choses. Des résultats concrets,
                  un suivi personnalisé et une totale transparence à chaque étape.
                  Pas de promesses en l&apos;air — uniquement des actions qui impactent
                  réellement votre business.
                </p>
              </div>

              {/* Citation */}
              <div
                className="relative rounded-2xl p-7 md:p-8 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
              >
                {/* Déco fond */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)' }}
                  aria-hidden="true" />

                {/* Guillemet décoratif */}
                <div
                  className="absolute top-5 right-7 text-[80px] font-serif leading-none text-white/[0.07] select-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </div>

                <div className="relative">
                  {/* Ligne colorée */}
                  <div
                    className="w-10 h-[3px] rounded-full mb-5"
                    style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }}
                    aria-hidden="true"
                  />

                  <blockquote
                    className="text-[17px] md:text-[19px] text-white font-semibold leading-[1.65] mb-5 tracking-[-0.005em]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    &ldquo;L&apos;Afrique regorge de talents et d&apos;ambition.
                    Ce qu&apos;il manque souvent, c&apos;est l&apos;accès aux bons outils
                    et aux bonnes stratégies. OPTIFLUX existe pour combler ce fossé —
                    et j&apos;y consacre toute mon énergie.&rdquo;
                  </blockquote>

                  <footer className="text-[13px] text-white/50" style={{ fontFamily: 'var(--font-jakarta)' }}>
                    — Abraham Israel Camara, Fondateur OPTIFLUX Marketing
                  </footer>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          4. NOS VALEURS
          ════════════════════════════════ */}
      <section ref={refValeurs} className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inValeurs ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] text-[11px] font-bold uppercase tracking-[0.12em] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Ce qui nous guide
            </span>
            <h2
              className="text-[28px] md:text-[42px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.025em] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Nos{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                valeurs fondatrices
              </span>
            </h2>
            <p
              className="text-[16px] text-[#64748B] max-w-[500px] mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Ce qui guide chaque décision, chaque projet et chaque interaction
              avec nos clients.
            </p>
          </motion.div>

          {/* Grille 2×2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inValeurs ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                className="group bg-white rounded-2xl border hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                style={{ borderColor: v.border }}
              >
                {/* Barre supérieure colorée */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${v.color}, ${v.color}99)` }} />

                <div className="p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    {/* Emoji + icône */}
                    <div
                      className="shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-0.5 text-[22px] group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: v.bg }}
                    >
                      <span role="img" aria-hidden="true">{v.emoji}</span>
                    </div>

                    <div>
                      <h3
                        className="text-[17px] font-bold text-[#0B0B0B] mb-2"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="text-[14px] text-[#64748B] leading-relaxed"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                      >
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          5. CHIFFRES CLÉS (réutilisation)
          ════════════════════════════════ */}
      <StatsCounter />

      {/* ════════════════════════════════
          6. CTA — Envie de travailler ensemble ?
          ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={refCta}
            initial={{ opacity: 0, y: 30 }}
            animate={inCta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center p-8 md:p-12 lg:p-16 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC]">

              {/* Texte gauche */}
              <div>
                <span
                  className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#2563EB] mb-3"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Travaillons ensemble
                </span>
                <h2
                  className="text-[28px] md:text-[40px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.025em] mb-5"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Envie de travailler{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    ensemble ?
                  </span>
                </h2>
                <p
                  className="text-[15.5px] text-[#64748B] leading-relaxed"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Un appel de 30 minutes suffit pour comprendre vos enjeux et voir
                  si nous sommes le bon partenaire pour vous aider à atteindre vos objectifs.
                  C&apos;est gratuit, sans engagement — et ça peut tout changer.
                </p>
              </div>

              {/* Boutons droite */}
              <div className="flex flex-col gap-3.5">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2.5 px-7 py-[15px] rounded-xl font-bold text-[15px] text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(37,99,235,0.35)]"
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)',
                  }}
                >
                  <Calendar className="w-[17px] h-[17px]" aria-hidden="true" />
                  Réserver un appel gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>

                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-[14px] rounded-xl border-[1.5px] border-[#E2E8F0] text-[#0B0B0B] font-semibold text-[15px] hover:border-[#CBD5E1] hover:bg-white transition-all duration-200"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  <MessageCircle className="w-[17px] h-[17px]" aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>

                <p
                  className="text-center text-[12.5px] text-[#94A3B8] mt-1"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  ✓ Réponse en moins de 2h &nbsp;·&nbsp; ✓ Aucun engagement &nbsp;·&nbsp; ✓ 100% gratuit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
