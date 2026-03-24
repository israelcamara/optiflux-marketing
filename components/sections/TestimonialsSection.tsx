'use client';

import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';

// ── Couleur d'accent par témoignage
const CARD_ACCENTS = [
  { avatarFrom: '#2563EB', avatarTo: '#3B82F6', quoteTint: '#DBEAFE', starBg: '#EFF6FF' },
  { avatarFrom: '#DB2777', avatarTo: '#F472B6', quoteTint: '#FCE7F3', starBg: '#FDF2F8' },
  { avatarFrom: '#F97316', avatarTo: '#FB923C', quoteTint: '#FED7AA', starBg: '#FFF7ED' },
];

// ── Tags de contexte par témoignage
const CONTEXT_TAGS = [
  '🌐 Création de site',
  '📣 Meta Ads',
  '🎓 Formation',
];

// ── Composant étoiles
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-[14px] h-[14px] ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-[#E2E8F0]'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ══════════════════════════════════════════
// SECTION TÉMOIGNAGES
// ══════════════════════════════════════════
export default function TestimonialsSection() {
  const headerRef    = useRef<HTMLDivElement>(null);
  const cardsRef     = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const cardsInView  = useInView(cardsRef,  { once: true, amount: 0.15 });

  return (
    <section className="bg-white py-24 md:py-28" aria-label="Témoignages clients">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── EN-TÊTE ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Témoignages
          </span>
          <h2
            className="text-[32px] md:text-[42px] lg:text-[50px] font-extrabold text-[#0B0B0B] tracking-[-0.025em] leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Ce que disent{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              nos clients
            </span>
          </h2>
          <p
            className="text-[17px] text-[#64748B] max-w-[480px] mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            Des résultats concrets, des histoires vraies. Voici ce que nos clients disent de leur expérience.
          </p>
        </motion.div>

        {/* ── GRILLE 3 COLONNES ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            const tag    = CONTEXT_TAGS[i % CONTEXT_TAGS.length];

            return (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 0.61, 0.36, 1] }}
                className="group relative bg-white rounded-2xl border border-[#E2E8F0] p-7 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden"
              >
                {/* Liseret coloré en haut */}
                <div
                  className="absolute top-0 left-0 right-0 h-[4px]"
                  style={{ background: `linear-gradient(90deg, ${accent.avatarFrom}, ${accent.avatarTo})` }}
                  aria-hidden="true"
                />

                {/* Tag de contexte + étoiles */}
                <div className="flex items-center justify-between mb-5 mt-1">
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: accent.starBg, color: accent.avatarFrom }}
                  >
                    {tag}
                  </span>
                  <Stars rating={t.rating} />
                </div>

                {/* Guillemet décoratif */}
                <Quote
                  className="w-7 h-7 mb-3 shrink-0"
                  style={{ color: accent.quoteTint }}
                  aria-hidden="true"
                />

                {/* Texte du témoignage */}
                <blockquote
                  className="text-[14.5px] text-[#1E293B] leading-[1.75] flex-1 mb-6"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Auteur */}
                <figcaption className="flex items-center gap-3 border-t border-[#F1F5F9] pt-5">
                  {/* Avatar initiales */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px] shrink-0"
                    style={{ background: `linear-gradient(135deg, ${accent.avatarFrom}, ${accent.avatarTo})` }}
                    aria-hidden="true"
                  >
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[14px] text-[#0B0B0B] leading-snug"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[12px] text-[#94A3B8]"
                      style={{ fontFamily: 'var(--font-jakarta)' }}
                    >
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>

              </motion.figure>
            );
          })}
        </div>

        {/* ── NOTE GLOBALE ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mt-10 py-4 px-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] w-fit mx-auto"
        >
          <div className="flex items-center gap-0.5" aria-label="Note globale : 5 sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <span
            className="text-[13px] font-semibold text-[#0B0B0B]"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            5/5
          </span>
          <span className="w-px h-4 bg-[#E2E8F0]" aria-hidden="true" />
          <span
            className="text-[13px] text-[#64748B]"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            Basé sur {TESTIMONIALS.length} avis clients
          </span>
        </motion.div>

      </div>
    </section>
  );
}
