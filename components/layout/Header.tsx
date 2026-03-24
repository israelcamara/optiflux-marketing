'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { useBooking } from '@/components/shared/BookingContext';

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const pathname                       = usePathname();
  const { openModal }                  = useBooking();
  const headerRef                      = useRef<HTMLElement>(null);

  // Détecte le scroll pour activer le fond frosted
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile lors d'un changement de route
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Piège le focus dans le menu mobile (accessibilité)
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="OPTIFLUX Marketing — Retour à l'accueil"
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg text-white text-[12px] font-black"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                aria-hidden="true"
              >
                OF
              </div>
              <span
                className="text-[18px] font-extrabold tracking-[-0.03em]"
                style={{
                  fontFamily: 'var(--font-outfit)',
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                OPTIFLUX
              </span>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_ITEMS.map(({ label, href }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 ${
                      active
                        ? 'text-[#2563EB] bg-[#EFF6FF]'
                        : 'text-[#374151] hover:text-[#2563EB] hover:bg-[#F8FAFC]'
                    }`}
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-[13px] font-medium text-[#64748B] hover:text-[#0B0B0B] transition-colors px-2 py-2"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Contact
              </Link>
              <button
                onClick={openModal}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13.5px] font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  fontFamily: 'var(--font-outfit)',
                  boxShadow: '0 3px 14px rgba(37, 99, 235, 0.3)',
                }}
                aria-label="Ouvrir le formulaire de réservation d'appel"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Réserver un appel
              </button>
            </div>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-[#F1F5F9] transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Tiroir */}
            <motion.nav
              key="mobile-menu"
              id="mobile-menu"
              role="navigation"
              aria-label="Menu de navigation mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
              className="fixed top-16 left-4 right-4 z-25 bg-white rounded-2xl shadow-xl border border-[#F1F5F9] p-5 lg:hidden z-[25]"
            >
              <ul className="space-y-1 mb-4" role="list">
                {NAV_ITEMS.map(({ label, href }) => {
                  const active = pathname === href || (href !== '/' && pathname.startsWith(href));
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
                          active
                            ? 'text-[#2563EB] bg-[#EFF6FF]'
                            : 'text-[#374151] hover:bg-[#F8FAFC]'
                        }`}
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                        aria-current={active ? 'page' : undefined}
                      >
                        {label}
                        {active && <ChevronDown className="w-4 h-4 -rotate-90 text-[#2563EB]" aria-hidden="true" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-[#F1F5F9] pt-4 space-y-2.5">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#374151] text-[14px] font-semibold hover:bg-[#F8FAFC] transition-all"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Contact
                </Link>
                <button
                  onClick={() => { setMobileOpen(false); openModal(); }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white text-[14px] font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    fontFamily: 'var(--font-outfit)',
                  }}
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Réserver un appel gratuit
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
