'use client';

import { useRef } from 'react';
import { Calendar, MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { useBooking } from '@/components/shared/BookingContext';

// Points de réassurance sous les CTAs
const REASSURANCES = [
  '✓ Appel gratuit, sans engagement',
  '✓ Réponse sous 2h sur WhatsApp',
  '✓ Devis personnalisé offert',
];

// ══════════════════════════════════════════
// SECTION CTA FINALE
// ══════════════════════════════════════════
export default function CTASection() {
  const ref       = useRef<HTMLDivElement>(null);
  const inView    = useInView(ref, { once: true, amount: 0.3 });
  const { openModal } = useBooking();

  return (
    <section className="bg-[#F8FAFC] py-24 md:py-28" aria-label="Prise de contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Bloc principal */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 40%, #7C3AED 100%)' }}
          >
            {/* ── Éléments décoratifs de fond ── */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {/* Grands cercles flous */}
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/[0.07] blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/[0.06] blur-3xl" />
              <div className="absolute top-1/2 left-1/3 w-64 h-64 -translate-y-1/2 rounded-full bg-white/[0.04] blur-2xl" />

              {/* Pattern de points */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Ligne décorative diagonale */}
              <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10 rotate-[20deg] translate-x-40" />
            </div>

            {/* ── Contenu ── */}
            <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex justify-center mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                  <Zap className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
                  <span
                    className="text-[12px] font-semibold text-white/90 uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    Prêt à passer à la vitesse supérieure ?
                  </span>
                </div>
              </motion.div>

              {/* Titre */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[30px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-extrabold text-white leading-[1.1] tracking-[-0.025em] mb-5"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Parlons de votre projet
                <br />
                <span className="text-white/75">dès aujourd&apos;hui</span>
              </motion.h2>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.55 }}
                className="text-[17px] text-white/70 max-w-[500px] mx-auto leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Un appel de 30 minutes suffit pour définir votre stratégie et voir
                comment nous pouvons transformer votre business digital.
              </motion.p>

              {/* Boutons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.55 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
              >
                {/* CTA primaire — ouvre la modale */}
                <button
                  onClick={openModal}
                  className="group flex items-center gap-2.5 px-7 py-[14px] rounded-xl bg-white text-[#1E40AF] font-bold text-[15px] hover:bg-white/95 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                  aria-label="Ouvrir le formulaire de réservation d'appel gratuit"
                >
                  <Calendar className="w-[17px] h-[17px]" aria-hidden="true" />
                  Réserver un appel gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>

                {/* CTA secondaire — contour blanc */}
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-7 py-[13px] rounded-xl border-[1.5px] border-white/35 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/60 transition-all duration-200 backdrop-blur-sm"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  <MessageCircle className="w-[17px] h-[17px]" aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>
              </motion.div>

              {/* Réassurances */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              >
                {REASSURANCES.map((r) => (
                  <span
                    key={r}
                    className="text-[12.5px] text-white/55"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {r}
                  </span>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
