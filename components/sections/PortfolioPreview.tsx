'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';

// ── Couleurs de fond dégradé pour chaque projet (placeholder visuel)
const PROJECT_GRADIENTS = [
  'from-[#2563EB] via-[#7C3AED] to-[#4F46E5]',   // Mag Gallerie — bleu-violet
  'from-[#DB2777] via-[#E11D48] to-[#9D174D]',    // AYOKA Fashion — rose-rouge
  'from-[#F97316] via-[#EAB308] to-[#D97706]',    // Le Saveur — orange-ambre
];

// ── Icônes emoji par secteur
const PROJECT_ICONS = ['🏢', '👗', '🍽️'];

// ── Badge couleur par index
const BADGE_COLORS = [
  'bg-[#EFF6FF] text-[#1D4ED8]',
  'bg-[#FDF2F8] text-[#BE185D]',
  'bg-[#FFF7ED] text-[#C2410C]',
];

// ── Résultat mis en avant (1er résultat du projet)
function KeyResult({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span
        className="text-[26px] sm:text-[30px] font-extrabold text-white leading-none"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {value}
      </span>
      <span className="text-[11px] text-white/70 mt-0.5">{label}</span>
    </div>
  );
}

// ── Carte projet
function ProjectCard({
  project,
  gradient,
  icon,
  badge,
  large = false,
  delay = 0,
  inView,
}: {
  project: typeof PROJECTS[0];
  gradient: string;
  icon: string;
  badge: string;
  large?: boolean;
  delay?: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${large ? 'min-h-[380px] lg:min-h-[460px]' : 'min-h-[200px] lg:min-h-[218px]'}`}
    >
      {/* Fond dégradé coloré */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-[1.03]`} />

      {/* Pattern de points décoratif */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Overlay sombre au hover + bouton "Voir le projet" */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-[#0B0B0B] font-semibold text-[13px] shadow-lg hover:bg-[#F8FAFC] transition-colors"
            aria-label={`Voir le projet ${project.client}`}
          >
            Voir le projet
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
        {/* Header : icône + badge catégorie */}
        <div className="flex items-start justify-between gap-3 mb-auto">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-[18px]">
            {icon}
          </div>
          <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm bg-white/90 text-[#0B0B0B]`}>
            {project.tags[0]}
          </span>
        </div>

        {/* Info bas de carte */}
        <div className="mt-6">
          {/* Client + titre */}
          <p className="text-white/70 text-[12px] font-medium mb-1 uppercase tracking-wide">
            {project.client} · {project.sector}
          </p>
          <h3
            className={`text-white font-bold leading-snug mb-4 ${large ? 'text-[18px] lg:text-[22px]' : 'text-[15px]'}`}
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {project.title}
          </h3>

          {/* Résultats clés */}
          <div className={`flex items-center gap-5 ${large ? 'flex-wrap' : ''}`}>
            {project.results.slice(0, large ? 2 : 1).map((r) => (
              <KeyResult key={r.label} value={r.value} label={r.label} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ══════════════════════════════════════════
// SECTION APERÇU PORTFOLIO
// ══════════════════════════════════════════
export default function PortfolioPreview() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const headerRef    = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });

  const [large, ...smalls] = PROJECTS;

  return (
    <section className="bg-[#F8FAFC] py-24 md:py-28" aria-label="Aperçu de nos réalisations">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── EN-TÊTE ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[12px] font-semibold uppercase tracking-[0.12em] mb-4 shadow-sm"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Portfolio
            </span>
            <h2
              className="text-[32px] md:text-[42px] lg:text-[50px] font-extrabold text-[#0B0B0B] tracking-[-0.025em] leading-[1.1]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Nos réalisations{' '}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                parlent d&apos;elles-mêmes
              </span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#D1D5DB] text-[#374151] text-[14px] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all duration-200"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Tous les projets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* ── GRILLE ASYMÉTRIQUE ── */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5">

          {/* Carte principale (grande — 3/5 de la largeur) */}
          <div className="lg:col-span-3">
            <ProjectCard
              project={large}
              gradient={PROJECT_GRADIENTS[0]}
              icon={PROJECT_ICONS[0]}
              badge={BADGE_COLORS[0]}
              large
              delay={0}
              inView={inView}
            />
          </div>

          {/* 2 petites cartes empilées (2/5 de la largeur) */}
          <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-5">
            {smalls.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                gradient={PROJECT_GRADIENTS[i + 1]}
                icon={PROJECT_ICONS[i + 1]}
                badge={BADGE_COLORS[i + 1]}
                large={false}
                delay={0.12 + i * 0.1}
                inView={inView}
              />
            ))}
          </div>

        </div>

        {/* ── CTA CENTRÉ ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-[1.5px] border-[#2563EB] text-[#2563EB] font-semibold text-[15px] hover:bg-[#2563EB] hover:text-white transition-all duration-200 hover:shadow-[0_6px_24px_rgba(37,99,235,0.28)] hover:scale-[1.02] active:scale-[0.98]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Voir tous nos projets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
