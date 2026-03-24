'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT_INFO } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Variantes d'animation Framer Motion
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: '100%', opacity: 0.5 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, damping: 28, stiffness: 300 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' as const },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.07 + i * 0.055, duration: 0.25, ease: 'easeOut' as const },
  }),
};

// Menu mobile avec animation slide-in depuis la droite
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation mobile"
        >
          {/* Overlay foncé */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panneau coulissant */}
          <motion.div
            className="absolute top-0 right-0 h-full w-[310px] bg-white flex flex-col shadow-2xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            {/* ── EN-TÊTE ── */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#F1F5F9]">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2.5"
                aria-label="OPTIFLUX Marketing"
              >
                <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                  <span
                    className="text-white font-extrabold text-[11px]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    OF
                  </span>
                </div>
                <div className="flex flex-col leading-[1.1]">
                  <span
                    className="text-[14px] font-extrabold tracking-tight text-[#0B0B0B]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    OPTIFLUX
                  </span>
                  <span
                    className="text-[9px] font-light tracking-[0.18em] uppercase text-[#2563EB]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    Marketing
                  </span>
                </div>
              </Link>

              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-4 h-4 text-[#64748B]" />
              </button>
            </div>

            {/* ── NAVIGATION ── */}
            <nav className="flex-1 overflow-y-auto px-4 pt-6 pb-4" aria-label="Navigation mobile">
              <ul className="space-y-1" role="list">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li key={item.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[14px] font-medium transition-all duration-150 group ${
                          isActive
                            ? 'bg-[#EFF6FF] text-[#2563EB]'
                            : 'text-[#0B0B0B] hover:bg-[#F8FAFC] hover:text-[#2563EB]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                            isActive ? 'text-[#2563EB]' : 'text-[#CBD5E1]'
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Séparateur */}
              <div className="my-5 h-px bg-[#F1F5F9]" aria-hidden="true" />

              {/* Infos de contact rapides */}
              <div className="space-y-2 px-1">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] text-[#64748B] hover:bg-[#F0FDF4] hover:text-[#16A34A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
                  {CONTACT_INFO.whatsapp}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                  {CONTACT_INFO.email}
                </a>
              </div>
            </nav>

            {/* ── CTA BAS ── */}
            <div className="px-4 pb-8 pt-4 border-t border-[#F1F5F9] space-y-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gradient-bg text-white text-[14px] font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Réserver un appel gratuit
              </Link>
              <p className="text-center text-[11px] text-[#94A3B8]">
                Consultation gratuite · Sans engagement
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
