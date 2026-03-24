'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { STATS } from '@/lib/constants';

// ── Icônes emoji par stat (dans l'ordre du tableau STATS)
const STAT_ICONS = ['🎯', '😊', '📈', '💡'];

// ── Couleurs d'accent par stat
const STAT_ACCENTS = [
  { from: '#2563EB', to: '#3B82F6' },   // bleu — Projets
  { from: '#10B981', to: '#34D399' },   // vert  — Clients satisfaits
  { from: '#7C3AED', to: '#A78BFA' },   // violet — Croissance
  { from: '#F97316', to: '#FB923C' },   // orange — Domaines
];

// ── Hook compteur animé (easeOut cubique)
function useCounter(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // cubic easeOut
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, active]);

  return count;
}

// ── Composant d'un seul compteur
function StatCard({
  stat,
  icon,
  accent,
  active,
  index,
}: {
  stat: typeof STATS[0];
  icon: string;
  accent: { from: string; to: string };
  active: boolean;
  index: number;
}) {
  const count = useCounter(stat.value, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative flex flex-col items-center text-center px-4 py-2"
    >
      {/* Icône emoji */}
      <span
        className="text-2xl mb-4 block"
        role="img"
        aria-hidden="true"
      >
        {icon}
      </span>

      {/* Valeur animée */}
      <div
        className="text-[52px] sm:text-[60px] lg:text-[68px] font-extrabold leading-none mb-3 tabular-nums"
        style={{
          fontFamily: 'var(--font-outfit)',
          background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        aria-label={`${stat.prefix ?? ''}${stat.value}${stat.suffix}`}
      >
        {stat.prefix}{count}{stat.suffix}
      </div>

      {/* Barre de couleur décorative */}
      <motion.div
        className="h-[3px] rounded-full mb-3 w-10"
        style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
        initial={{ scaleX: 0, originX: '50%' }}
        animate={active ? { scaleX: 1 } : {}}
        transition={{ duration: 0.55, delay: index * 0.12 + 0.3 }}
        aria-hidden="true"
      />

      {/* Label */}
      <p
        className="text-[14px] text-[#64748B] font-medium leading-snug max-w-[130px]"
        style={{ fontFamily: 'var(--font-jakarta)' }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

// ══════════════════════════════════════════
// SECTION CHIFFRES CLÉS
// ══════════════════════════════════════════
export default function StatsCounter() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section
      className="bg-[#F8FAFC] py-20 md:py-24 overflow-hidden"
      aria-label="Nos chiffres clés"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[12px] font-semibold uppercase tracking-[0.12em] mb-4 shadow-sm"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            En chiffres
          </span>
          <h2
            className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold text-[#0B0B0B] tracking-tight"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Des résultats qui{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              parlent d&apos;eux-mêmes
            </span>
          </h2>
        </motion.div>

        {/* Grille des 4 compteurs */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-0"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="relative">
              {/* Séparateur vertical sur desktop */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#E2E8F0]"
                  aria-hidden="true"
                />
              )}
              <StatCard
                stat={stat}
                icon={STAT_ICONS[i]}
                accent={STAT_ACCENTS[i]}
                active={inView}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Note de bas de section */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center text-[12.5px] text-[#CBD5E1] mt-10"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Mesurés sur l&apos;ensemble de nos missions clients · Mis à jour régulièrement
        </motion.p>

      </div>
    </section>
  );
}
