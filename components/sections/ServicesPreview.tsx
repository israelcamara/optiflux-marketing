'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { TrendingUp, Code2, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

// ── Map icônes
const ICON_MAP = {
  TrendingUp,
  Code2,
  GraduationCap,
} as const;

// ── Configuration visuelle par couleur de service
const THEME = {
  blue: {
    iconBg:       'bg-[#EFF6FF]',
    iconColor:    'text-[#2563EB]',
    borderHover:  'hover:border-[#93C5FD]',
    shadowHover:  'hover:shadow-[0_16px_48px_rgba(37,99,235,0.14)]',
    linkColor:    'text-[#2563EB] group-hover/link:text-[#1D4ED8]',
    dotGradient:  'from-[#2563EB] to-[#3B82F6]',
    tagBg:        'bg-[#EFF6FF] text-[#1D4ED8]',
    gradientTop:  'from-[#2563EB]/10 via-[#3B82F6]/5 to-transparent',
    checkColor:   'text-[#2563EB]',
  },
  purple: {
    iconBg:       'bg-[#F5F3FF]',
    iconColor:    'text-[#7C3AED]',
    borderHover:  'hover:border-[#C4B5FD]',
    shadowHover:  'hover:shadow-[0_16px_48px_rgba(124,58,237,0.14)]',
    linkColor:    'text-[#7C3AED] group-hover/link:text-[#6D28D9]',
    dotGradient:  'from-[#7C3AED] to-[#8B5CF6]',
    tagBg:        'bg-[#F5F3FF] text-[#6D28D9]',
    gradientTop:  'from-[#7C3AED]/10 via-[#8B5CF6]/5 to-transparent',
    checkColor:   'text-[#7C3AED]',
  },
  orange: {
    iconBg:       'bg-[#FFF7ED]',
    iconColor:    'text-[#F97316]',
    borderHover:  'hover:border-[#FDBA74]',
    shadowHover:  'hover:shadow-[0_16px_48px_rgba(249,115,22,0.14)]',
    linkColor:    'text-[#F97316] group-hover/link:text-[#EA6B00]',
    dotGradient:  'from-[#F97316] to-[#FB923C]',
    tagBg:        'bg-[#FFF7ED] text-[#C2410C]',
    gradientTop:  'from-[#F97316]/10 via-[#FB923C]/5 to-transparent',
    checkColor:   'text-[#F97316]',
  },
} as const;

// ── Variantes d'animation pour les cartes (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 44 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as [number,number,number,number] },
  },
};

// ══════════════════════════════════════════
// SECTION APERÇU DES SERVICES
// ══════════════════════════════════════════
export default function ServicesPreview() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef,  { once: true, amount: 0.5 });
  const cardsInView  = useInView(cardsRef,   { once: true, amount: 0.15 });
  const ctaInView    = useInView(ctaRef,     { once: true, amount: 0.8 });

  return (
    <section className="bg-white py-24 md:py-28" aria-label="Aperçu de nos services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── EN-TÊTE ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Nos expertises
          </span>

          <h2
            className="text-[32px] md:text-[42px] lg:text-[50px] font-extrabold text-[#0B0B0B] tracking-[-0.025em] leading-[1.1] mb-5"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Ce qu&apos;on fait{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              de mieux
            </span>
          </h2>

          <p
            className="text-[17px] text-[#64748B] max-w-[540px] mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            Une expertise complète pour votre croissance digitale — marketing,
            web et formation sous un même toit.
          </p>
        </motion.div>

        {/* ── GRILLE DES CARTES ── */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-12"
        >
          {SERVICES.map((service) => {
            const Icon  = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            const theme = THEME[service.color as keyof typeof THEME];

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className={`group relative bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${theme.borderHover} ${theme.shadowHover}`}
              >
                {/* Bandeau dégradé en haut de la carte */}
                <div
                  className={`h-[5px] w-full bg-gradient-to-r ${theme.dotGradient}`}
                  aria-hidden="true"
                />

                {/* Corps de la carte */}
                <div className="p-7 lg:p-8 flex flex-col flex-1">

                  {/* Icône */}
                  <div className={`w-[52px] h-[52px] rounded-2xl ${theme.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-[26px] h-[26px] ${theme.iconColor}`} aria-hidden="true" />
                  </div>

                  {/* Titre */}
                  <h3
                    className="text-[20px] font-bold text-[#0B0B0B] mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description courte */}
                  <p
                    className="text-[14.5px] text-[#64748B] leading-[1.7] mb-6 flex-1"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {service.description}
                  </p>

                  {/* Features — 3 premières avec icône check */}
                  <ul className="space-y-2.5 mb-7" role="list">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          className={`w-[15px] h-[15px] ${theme.checkColor} mt-[3px] shrink-0`}
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span
                          className="text-[13.5px] text-[#4B5563] leading-snug"
                          style={{ fontFamily: 'var(--font-jakarta)' }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li
                        className="text-[12px] text-[#94A3B8] pl-[22px]"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                      >
                        +{service.features.length - 3} autres prestations
                      </li>
                    )}
                  </ul>

                  {/* Lien CTA de la carte */}
                  <Link
                    href="/services"
                    className={`group/link inline-flex items-center gap-1.5 text-[14px] font-semibold mt-auto ${theme.linkColor} transition-colors duration-150`}
                    aria-label={`En savoir plus sur ${service.title}`}
                  >
                    En savoir plus
                    <ArrowRight
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </Link>

                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── CTA DE SECTION ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-[1.5px] border-[#2563EB] text-[#2563EB] font-semibold text-[15px] hover:bg-[#2563EB] hover:text-white transition-all duration-200 hover:shadow-[0_6px_24px_rgba(37,99,235,0.28)] hover:scale-[1.02] active:scale-[0.98]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Découvrir tous nos services
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
