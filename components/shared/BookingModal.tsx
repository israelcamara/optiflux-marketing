'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';
import { useBooking } from '@/components/shared/BookingContext';
import { BOOKING_LINK, CONTACT_INFO } from '@/lib/constants';

const BENEFITS = [
  'Appel de 30 minutes offert, sans engagement',
  'Analyse de votre situation digitale actuelle',
  'Plan d\'action personnalisé et concret',
  'Devis sur mesure à l\'issue de l\'appel',
];

const AVAILABLE_TIMES = [
  { day: 'Lun – Ven', hours: '09h – 18h' },
  { day: 'Samedi',    hours: '09h – 13h' },
];

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); },
    [closeModal],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="booking-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modale */}
          <div
            className="fixed inset-0 z-[91] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Réserver un appel stratégique gratuit"
          >
            <motion.div
              key="booking-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête dégradé */}
              <div
                className="relative px-7 pt-8 pb-6"
                style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)' }}
              >
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.07] blur-2xl pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-0 left-12 w-24 h-24 rounded-full bg-white/[0.05] blur-xl pointer-events-none" aria-hidden="true" />

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative flex items-center gap-3 mb-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h2
                    className="text-[21px] font-extrabold text-white leading-tight"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    Appel stratégique gratuit
                  </h2>
                </div>
                <p
                  className="relative text-white/70 text-[14px] pl-[52px]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Choisissez votre créneau pour 30 minutes de conseil offert
                </p>
              </div>

              {/* Corps */}
              <div className="px-7 py-6 space-y-5">
                {/* Bénéfices */}
                <ul className="space-y-2.5" aria-label="Ce qui est inclus">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-[13.5px] text-[#374151]" style={{ fontFamily: 'var(--font-jakarta)' }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <hr className="border-[#E2E8F0]" />

                {/* Placeholder calendrier */}
                <div className="rounded-xl border-2 border-dashed border-[#DBEAFE] bg-[#F8FAFF] p-5 text-center" role="region" aria-label="Calendrier de réservation">
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#DBEAFE]">
                      <Calendar className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-[13px] font-semibold text-[#2563EB] mb-1" style={{ fontFamily: 'var(--font-outfit)' }}>
                    Intégration Calendly à venir
                  </p>
                  <p className="text-[12.5px] text-[#64748B] leading-relaxed mb-4" style={{ fontFamily: 'var(--font-jakarta)' }}>
                    En attendant, réservez directement via le lien ci-dessous ou contactez-nous sur WhatsApp.
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    {AVAILABLE_TIMES.map(({ day, hours }) => (
                      <div key={day} className="text-center">
                        <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide" style={{ fontFamily: 'var(--font-outfit)' }}>
                          {day}
                        </p>
                        <div className="flex items-center gap-1 justify-center mt-0.5">
                          <Clock className="w-3 h-3 text-[#94A3B8]" aria-hidden="true" />
                          <span className="text-[12px] text-[#374151]" style={{ fontFamily: 'var(--font-jakarta)' }}>{hours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-[14px] hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                    style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', fontFamily: 'var(--font-outfit)' }}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Réserver en ligne
                  </a>
                  <a
                    href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent('Bonjour OPTIFLUX ! Je souhaite réserver un appel stratégique. Quelles sont vos disponibilités ?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[14px] border-[1.5px] border-[#E2E8F0] text-[#374151] hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#F0FDF4] transition-all duration-200"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
