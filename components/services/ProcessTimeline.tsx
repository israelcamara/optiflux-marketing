'use client';

import { useRef } from 'react';
import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';

// Map des icônes process
const ICON_MAP = { Search, Lightbulb, Rocket, BarChart3 } as const;

// Couleurs de chaque étape
const STEP_COLORS = [
  { ring: 'ring-[#2563EB]', bg: 'bg-[#EFF6FF]', icon: 'text-[#2563EB]', num: 'text-[#2563EB]', line: '#2563EB' },
  { ring: 'ring-[#7C3AED]', bg: 'bg-[#F5F3FF]', icon: 'text-[#7C3AED]', num: 'text-[#7C3AED]', line: '#7C3AED' },
  { ring: 'ring-[#F97316]', bg: 'bg-[#FFF7ED]', icon: 'text-[#F97316]', num: 'text-[#F97316]', line: '#F97316' },
  { ring: 'ring-[#10B981]', bg: 'bg-[#ECFDF5]', icon: 'text-[#10B981]', num: 'text-[#10B981]', line: '#10B981' },
];

// ══════════════════════════════════════════
// TIMELINE PROCESSUS — desktop horiz. / mobile vert.
// ══════════════════════════════════════════
export default function ProcessTimeline() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref}>
      {/* ── VERSION DESKTOP — horizontal ── */}
      <div className="hidden md:block relative">
        {/* Ligne de connexion en fond */}
        <div className="absolute top-9 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] bg-[#E2E8F0]" aria-hidden="true">
          {/* Remplissage animé de la ligne */}
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #F97316, #10B981)' }}
            initial={{ scaleX: 0, originX: '0%' }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
          />
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon  = ICON_MAP[step.iconName as keyof typeof ICON_MAP];
            const color = STEP_COLORS[i];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Cercle numéroté */}
                <div
                  className={`relative z-10 w-[72px] h-[72px] rounded-full ${color.bg} ring-2 ${color.ring} ring-offset-2 flex flex-col items-center justify-center mb-5 shadow-sm`}
                >
                  <Icon className={`w-6 h-6 ${color.icon}`} aria-hidden="true" />
                </div>

                {/* Numéro + titre */}
                <p className={`text-[11px] font-bold uppercase tracking-[0.12em] ${color.num} mb-1`}
                  style={{ fontFamily: 'var(--font-outfit)' }}>
                  Étape {step.number}
                </p>
                <h3 className="text-[17px] font-bold text-[#0B0B0B] mb-2"
                  style={{ fontFamily: 'var(--font-outfit)' }}>
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-[#64748B] leading-relaxed"
                  style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── VERSION MOBILE — verticale ── */}
      <div className="md:hidden space-y-0">
        {PROCESS_STEPS.map((step, i) => {
          const Icon  = ICON_MAP[step.iconName as keyof typeof ICON_MAP];
          const color = STEP_COLORS[i];
          const isLast = i === PROCESS_STEPS.length - 1;

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 + 0.2 }}
              className="flex gap-5"
            >
              {/* Colonne gauche : cercle + ligne */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${color.bg} ring-2 ${color.ring} ring-offset-1 flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${color.icon}`} aria-hidden="true" />
                </div>
                {!isLast && (
                  <motion.div
                    className="w-[2px] flex-1 mt-2 mb-2 rounded-full min-h-[40px]"
                    style={{ background: `linear-gradient(to bottom, ${color.line}, ${STEP_COLORS[i+1].line})` }}
                    initial={{ scaleY: 0, originY: '0%' }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.5 }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Contenu */}
              <div className={`pb-8 ${isLast ? 'pb-0' : ''}`}>
                <p className={`text-[11px] font-bold uppercase tracking-[0.1em] ${color.num} mb-0.5`}
                  style={{ fontFamily: 'var(--font-outfit)' }}>
                  Étape {step.number}
                </p>
                <h3 className="text-[16px] font-bold text-[#0B0B0B] mb-1.5"
                  style={{ fontFamily: 'var(--font-outfit)' }}>
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-[#64748B] leading-relaxed"
                  style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
