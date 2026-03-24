'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';

const WA_MESSAGE = encodeURIComponent(
  'Bonjour OPTIFLUX ! Je suis intéressé(e) par vos services.\nPouvez-vous m\'en dire plus ?'
);
const WA_HREF = `${CONTACT_INFO.whatsappLink}?text=${WA_MESSAGE}`;

// Icône SVG WhatsApp officielle
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Apparaît après 1.5s (laisse la page charger)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2"
          style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
        >
          {/* Bulle tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 8, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                role="tooltip"
                className="relative mr-1 px-4 py-2.5 rounded-xl bg-white shadow-lg border border-[#E2E8F0] whitespace-nowrap"
              >
                <p className="text-[13px] font-semibold text-[#0B0B0B]" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Discutons de votre projet !
                </p>
                {/* Flèche pointant vers le bouton */}
                <div
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-[#E2E8F0] rotate-45"
                  aria-hidden="true"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton WhatsApp */}
          <motion.a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter OPTIFLUX sur WhatsApp — Discutons de votre projet"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #25D366, #1DA851)',
              boxShadow: '0 6px 24px rgba(37, 211, 102, 0.45)',
            }}
          >
            <WhatsAppIcon className="w-7 h-7" />

            {/* Pulsation verte */}
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: 'rgba(37, 211, 102, 0.3)', animationDuration: '2s' }}
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
