'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

// ── Types
type FilterId = 'all' | 'marketing' | 'web' | 'formation';

interface Project {
  id: string;
  client: string;
  sector: string;
  category: Exclude<FilterId, 'all'>;
  title: string;
  description: string;
  tags: string[];
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  results: { value: string; label: string }[];
}

// ── Données des 6 projets
const PROJECTS: Project[] = [
  {
    id: 'mag-gallerie',
    client: 'Mag Gallerie',
    sector: 'Immobilier',
    category: 'marketing',
    title: 'Digitalisation complète d\'une agence immobilière',
    description:
      'Stratégie marketing digital complète pour booster la visibilité en ligne et générer des leads qualifiés via réseaux sociaux et Meta Ads ciblées.',
    tags: ['Community Management', 'Meta Ads', 'Contenu'],
    initials: 'MG',
    gradientFrom: '#1E40AF',
    gradientTo: '#3B82F6',
    results: [
      { value: '+150%', label: 'Visibilité' },
      { value: '+40%',  label: 'Leads qualifiés' },
      { value: '2 500+', label: 'Abonnés gagnés' },
    ],
  },
  {
    id: 'afri-mode',
    client: 'AfriMode',
    sector: 'Mode & E-commerce',
    category: 'web',
    title: 'Boutique e-commerce pour une marque de mode africaine',
    description:
      'Développement d\'une boutique en ligne premium avec galerie produits, paiement Mobile Money et tunnel de conversion optimisé pour le marché africain.',
    tags: ['E-commerce', 'UX/UI Design', 'Paiement Mobile'],
    initials: 'AM',
    gradientFrom: '#5B21B6',
    gradientTo: '#8B5CF6',
    results: [
      { value: '+200%', label: 'Ventes en ligne' },
      { value: '500+',  label: 'Commandes/mois' },
      { value: '5,8%',  label: 'Taux de conv.' },
    ],
  },
  {
    id: 'le-palmier',
    client: 'Restaurant Le Palmier',
    sector: 'Restauration',
    category: 'marketing',
    title: 'Campagne Meta Ads pour un restaurant local',
    description:
      'Stratégie et exécution de campagnes Facebook & Instagram géolocalisées avec des créatifs appétissants et une optimisation ROI continue sur 6 semaines.',
    tags: ['Meta Ads', 'Géolocalisation', 'Création visuelle'],
    initials: 'LP',
    gradientFrom: '#EA580C',
    gradientTo: '#FB923C',
    results: [
      { value: '+80%', label: 'Réservations' },
      { value: '420%', label: 'ROI' },
      { value: '-48%', label: 'Coût/client' },
    ],
  },
  {
    id: 'startup-tech-conakry',
    client: 'StartUp Tech Conakry',
    sector: 'Tech & SaaS',
    category: 'web',
    title: 'Application web de gestion sur mesure',
    description:
      'Conception et développement d\'une plateforme web complète — tableau de bord analytique, gestion de projets et CRM intégré pour optimiser toutes les opérations.',
    tags: ['Application Web', 'Dashboard', 'CRM'],
    initials: 'ST',
    gradientFrom: '#0284C7',
    gradientTo: '#38BDF8',
    results: [
      { value: '60%',   label: 'Gain de temps' },
      { value: '3',     label: 'Modules custom' },
      { value: '98%',   label: 'Satisfaction' },
    ],
  },
  {
    id: 'formation-batch-1',
    client: 'Formation Batch #1',
    sector: 'Éducation & Formation',
    category: 'formation',
    title: '25 entrepreneurs formés au marketing digital',
    description:
      'Programme intensif de 4 semaines pour 25 entrepreneurs de Conakry — de zéro à la maîtrise des réseaux sociaux, Meta Ads et stratégie de croissance digitale.',
    tags: ['Formation Marketing', 'Meta Ads', 'Community Mgt'],
    initials: 'FB',
    gradientFrom: '#059669',
    gradientTo: '#34D399',
    results: [
      { value: '25',   label: 'Entrepreneurs' },
      { value: '4',    label: 'Semaines' },
      { value: '90%',  label: 'Satisfaits' },
    ],
  },
  {
    id: 'cabinet-alpha',
    client: 'Cabinet Conseil Alpha',
    sector: 'Conseil & Expertise',
    category: 'web',
    title: 'Refonte site web + optimisation SEO',
    description:
      'Refonte complète du site web du Cabinet Alpha avec une architecture SEO solide pour dominer les résultats Google et attirer des prospects qualifiés en continu.',
    tags: ['Refonte Web', 'SEO', 'UX/UI Design'],
    initials: 'CA',
    gradientFrom: '#4338CA',
    gradientTo: '#818CF8',
    results: [
      { value: '+180%', label: 'Trafic organique' },
      { value: 'Top 3', label: 'Google' },
      { value: '95/100', label: 'PageSpeed' },
    ],
  },
];

// ── Config filtres
const FILTERS: { id: FilterId; label: string; count: number }[] = [
  { id: 'all',        label: 'Tous',              count: PROJECTS.length },
  { id: 'marketing',  label: 'Marketing Digital', count: PROJECTS.filter(p => p.category === 'marketing').length },
  { id: 'web',        label: 'Web & App',         count: PROJECTS.filter(p => p.category === 'web').length },
  { id: 'formation',  label: 'Formation',         count: PROJECTS.filter(p => p.category === 'formation').length },
];

// ── Config catégories (badge visuel)
const CATEGORY_CONFIG: Record<string, { bg: string; color: string; label: string }> = {
  marketing: { bg: '#DBEAFE', color: '#1D4ED8', label: 'Marketing Digital' },
  web:       { bg: '#EDE9FE', color: '#6D28D9', label: 'Web & App' },
  formation: { bg: '#D1FAE5', color: '#065F46', label: 'Formation' },
};

// ══════════════════════════════════════════
// CARTE PROJET
// ══════════════════════════════════════════
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const badge = CATEGORY_CONFIG[project.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col"
    >
      {/* ── Gradient placeholder */}
      <div
        className="relative h-[190px] overflow-hidden shrink-0"
        style={{ background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)` }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        {/* Décoration cercles */}
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10" aria-hidden="true" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10" aria-hidden="true" />

        {/* Initiales grandes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <span
            className="text-[80px] font-extrabold text-white/[0.18] select-none leading-none"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {project.initials}
          </span>
        </div>

        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.07em]"
            style={{ backgroundColor: badge.bg, color: badge.color }}
          >
            {badge.label}
          </span>
        </div>

        {/* Client + secteur en bas */}
        <div className="absolute bottom-4 left-4 right-4">
          <p
            className="text-white/75 text-[12px] font-semibold truncate"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {project.client} · {project.sector}
          </p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-[#0B0B0B] rounded-xl font-bold text-[14px] translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Voir le détail
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </div>

      {/* ── Contenu texte */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-[15.5px] font-bold text-[#0B0B0B] leading-snug mb-2"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-[13px] text-[#64748B] leading-relaxed mb-5 line-clamp-2 flex-1"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          {project.description}
        </p>

        {/* Résultats clés */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.results.map((r) => (
            <div
              key={r.label}
              className="bg-[#F8FAFC] rounded-xl p-2.5 text-center border border-[#F1F5F9]"
            >
              <p
                className="text-[15px] font-extrabold text-[#0B0B0B] leading-none mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {r.value}
              </p>
              <p
                className="text-[10px] text-[#94A3B8] leading-tight"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {r.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#64748B] text-[11px] font-medium"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ══════════════════════════════════════════
// CONTENU PORTFOLIO — filtres + grille + CTA
// ══════════════════════════════════════════
export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        {/* Fond décoratif */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[13px] text-[#94A3B8] mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" aria-hidden="true" />
            <span className="text-[#0B0B0B] font-medium">Portfolio</span>
          </nav>

          <div className="text-center max-w-[700px] mx-auto">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              🏆 Nos réalisations
            </motion.span>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[38px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#0B0B0B] leading-[1.05] tracking-[-0.03em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Des résultats{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                concrets
              </span>
              <br />
              pour nos clients
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[17px] text-[#64748B] leading-relaxed mb-2"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Chaque projet est une histoire de transformation digitale.
              Voici ce que nous avons accompli ensemble.
            </motion.p>

            {/* Compteur */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-[13px] text-[#94A3B8] font-medium"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {PROJECTS.length} projets réalisés · 100% clients satisfaits
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Filtres + Grille ── */}
      <section className="pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs avec sliding pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="flex gap-1 p-1.5 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0] overflow-x-auto max-w-full">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className="relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 shrink-0"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {/* Sliding active pill */}
                  {activeFilter === f.id && (
                    <motion.div
                      layoutId="active-filter-pill"
                      className="absolute inset-0 bg-[#0B0B0B] rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-200 ${
                    activeFilter === f.id ? 'text-white' : 'text-[#64748B] hover:text-[#0B0B0B]'
                  }`}>
                    {f.label}
                  </span>
                  <span className={`relative z-10 min-w-[20px] h-5 flex items-center justify-center rounded-md text-[11px] font-bold transition-colors duration-200 ${
                    activeFilter === f.id
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F1F5F9] text-[#94A3B8]'
                  }`}>
                    {f.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grille animée */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Message si aucun résultat (ne devrait pas arriver avec les données actuelles) */}
          {filtered.length === 0 && (
            <p className="text-center text-[#94A3B8] py-16" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Aucun projet dans cette catégorie pour l&apos;instant.
            </p>
          )}
        </div>
      </section>

      {/* ── CTA "Votre projet pourrait être le prochain" ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
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
                {/* Icône trophée */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[28px]">
                    🚀
                  </div>
                </div>

                <h2
                  className="text-[28px] sm:text-[38px] md:text-[50px] font-extrabold text-white leading-[1.1] tracking-[-0.025em] mb-4"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Votre projet pourrait être
                  <br />
                  <span className="text-white/75">le prochain</span>
                </h2>

                <p
                  className="text-[16px] text-white/65 max-w-[480px] mx-auto leading-relaxed mb-10"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Rejoignez les entreprises qui ont transformé leur présence digitale
                  et obtenu des résultats mesurables avec OPTIFLUX.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-7 py-[14px] rounded-xl bg-white text-[#1E40AF] font-bold text-[15px] hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <Calendar className="w-[17px] h-[17px]" aria-hidden="true" />
                    Démarrer mon projet
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

                {/* Stats rapides */}
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/15">
                  {[
                    { value: '15+', label: 'Projets livrés' },
                    { value: '98%', label: 'Clients satisfaits' },
                    { value: '+150%', label: 'Croissance moyenne' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p
                        className="text-[22px] font-extrabold text-white leading-none mb-0.5"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {s.value}
                      </p>
                      <p
                        className="text-[12px] text-white/50"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
