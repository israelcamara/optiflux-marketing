'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { useBooking } from '@/components/shared/BookingContext';

// Clients / partenaires dans la bande défilante
const MARQUEE_CLIENTS = [
  { name: 'Mag Gallerie',       icon: '🏢' },
  { name: 'TechStart Dakar',    icon: '💡' },
  { name: 'FK Boutique Mode',   icon: '👗' },
  { name: 'BeautyHub Africa',   icon: '✨' },
  { name: 'Immo Express',       icon: '🏠' },
  { name: 'Studio Créatif',     icon: '🎨' },
  { name: 'E-Biz Conakry',      icon: '📦' },
  { name: 'AgriTech Africa',    icon: '🌿' },
];

// Métriques de confiance rapides
const METRICS = [
  { value: '50+',  label: 'projets livrés' },
  { value: '35+',  label: 'clients satisfaits' },
  { value: '+150%', label: 'visibilité moy.' },
];

// Helper : fade-up avec délai
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] as [number,number,number,number] },
});

// ─────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const { openModal } = useBooking();

  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden bg-white"
      style={{ minHeight: '92vh' }}
      aria-label="Section principale"
    >

      {/* ══════════════════════════════════
          FOND DÉCORATIF
      ══════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">

        {/* Grille de points subtile */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '38px 38px',
            opacity: 0.03,
          }}
        />

        {/* Orbe bleu — coin haut droit */}
        <div
          className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(37,99,235,0.13) 0%, transparent 65%)' }}
        />

        {/* Orbe violet — coin bas gauche */}
        <div
          className="absolute -bottom-32 -left-32 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 40% 60%, rgba(124,58,237,0.11) 0%, transparent 65%)' }}
        />

        {/* Lueur centrale très douce */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(37,99,235,0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* ══════════════════════════════════
          CONTENU CENTRAL
      ══════════════════════════════════ */}
      <div className="relative flex-1 flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
          <div className="max-w-[820px] mx-auto text-center">

            {/* ── BADGE ── */}
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' as const }}
              className="flex justify-center mb-7"
            >
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white"
                style={{
                  background: 'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #2563EB 0%, #7C3AED 100%) border-box',
                  border: '1.5px solid transparent',
                  boxShadow: '0 2px 16px rgba(37,99,235,0.13)',
                }}
              >
                <span className="text-[15px] leading-none" role="img" aria-label="fusée">🚀</span>
                <span
                  className="text-[13px] font-semibold text-[#2563EB]"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Agence de marketing digital
                </span>
                <span className="dot-pulse w-[7px] h-[7px] rounded-full bg-[#2563EB]" aria-hidden="true" />
              </div>
            </motion.div>

            {/* ── TITRE PRINCIPAL ── */}
            <motion.h1
              {...fadeUp(0.18)}
              className="mb-7 text-[#0B0B0B] font-extrabold tracking-[-0.03em] leading-[1.07]"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(40px, 7vw, 78px)',
              }}
            >
              Nous transformons{' '}
              <br className="hidden sm:block" />
              vos idées en{' '}
              <span className="relative inline-block whitespace-nowrap">
                {/* Mot en dégradé */}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  business digital
                </span>
                {/* Soulignement animé */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
                    width: '100%',
                  }}
                  initial={{ scaleX: 0, originX: '0%' }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' as const }}
                  aria-hidden="true"
                />
              </span>
              {' '}rentable
            </motion.h1>

            {/* ── SOUS-TITRE ── */}
            <motion.div {...fadeUp(0.36)} className="mb-10">
              <p
                className="text-[17px] md:text-[18.5px] text-[#64748B] leading-[1.75] mb-1"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Sites web · Applications · Marketing digital · Formation
              </p>
              <p
                className="text-[14.5px] md:text-[15.5px] text-[#94A3B8] leading-relaxed max-w-[560px] mx-auto"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Un accompagnement complet pour digitaliser et développer
                votre activité en Afrique.
              </p>
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
            >
              {/* Bouton primaire — ouvre la modale de réservation */}
              <button
                onClick={openModal}
                className="group relative flex items-center gap-2 px-7 py-[14px] rounded-xl text-white font-semibold text-[15px] overflow-hidden transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #6D28D9 100%)',
                  boxShadow: '0 6px 28px rgba(37,99,235,0.38), inset 0 1px 0 rgba(255,255,255,0.15)',
                  fontFamily: 'var(--font-outfit)',
                }}
                aria-label="Ouvrir le formulaire de réservation d'appel stratégique gratuit"
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.08] transition-colors duration-200 rounded-xl" aria-hidden="true" />
                <Calendar className="relative z-10 w-[17px] h-[17px]" aria-hidden="true" />
                <span className="relative z-10">Réserver un appel gratuit</span>
                <ArrowRight
                  className="relative z-10 w-[17px] h-[17px] group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden="true"
                />
              </button>

              {/* Bouton secondaire outline */}
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 px-7 py-[13px] rounded-xl border-[1.5px] border-[#D1D5DB] text-[#374151] font-semibold text-[15px] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF]/60 transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
              >
                Voir nos réalisations
                <ArrowRight
                  className="w-[17px] h-[17px] text-[#9CA3AF] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>

            {/* ── MÉTRIQUES RAPIDES ── */}
            <motion.div
              {...fadeUp(0.64)}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
            >
              {METRICS.map((m, i) => (
                <div key={i} className="flex items-baseline gap-1.5">
                  <span
                    className="text-[18px] font-extrabold text-[#0B0B0B]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {m.value}
                  </span>
                  <span className="text-[12.5px] text-[#94A3B8]">{m.label}</span>
                  {i < METRICS.length - 1 && (
                    <span className="ml-6 text-[#E2E8F0]" aria-hidden="true">|</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Note WhatsApp discrète */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mt-3 text-[12px] text-[#CBD5E1]"
            >
              Ou écrivez-nous sur{' '}
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#16A34A] transition-colors underline decoration-dotted"
              >
                WhatsApp
              </a>
              {' '}· Réponse sous 2h
            </motion.p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          BANDE MARQUEE CLIENTS
      ══════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.7 }}
        className="relative w-full shrink-0"
        role="region"
        aria-label="Ils nous font confiance"
      >
        {/* Ligne supérieure */}
        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, #E2E8F0 20%, #E2E8F0 80%, transparent)' }}
          aria-hidden="true"
        />

        <div className="relative overflow-hidden bg-[#FAFBFC] py-[18px]">
          {/* Masque fondu gauche */}
          <div
            className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #FAFBFC 20%, transparent)' }}
            aria-hidden="true"
          />
          {/* Masque fondu droit */}
          <div
            className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #FAFBFC 20%, transparent)' }}
            aria-hidden="true"
          />

          {/* Label */}
          <p className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.14em] text-[#CBD5E1] font-semibold z-20 hidden lg:block">
            Ils nous font confiance
          </p>

          {/* Track défilant — on duplique pour la boucle infinie */}
          <div className="marquee-track" aria-hidden="true">
            {[...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS].map((client, i) => (
              <div key={i} className="flex items-center gap-8 mx-6 shrink-0">
                <div className="flex items-center gap-2.5 opacity-45 hover:opacity-75 transition-opacity duration-200">
                  {/* Icône placeholder */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-[14px] bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1]"
                  >
                    {client.icon}
                  </div>
                  <span
                    className="text-[13px] font-semibold text-[#64748B] whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {client.name}
                  </span>
                </div>
                {/* Séparateur */}
                <span className="text-[#E2E8F0] text-[18px] select-none">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ligne inférieure */}
        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, #E2E8F0 20%, #E2E8F0 80%, transparent)' }}
          aria-hidden="true"
        />
      </motion.div>

    </section>
  );
}
