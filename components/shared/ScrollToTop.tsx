'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollUp}
          aria-label="Remonter en haut de la page"
          className="fixed bottom-24 right-5 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] shadow-md hover:text-[#2563EB] hover:border-[#2563EB] hover:shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ bottom: 'calc(max(1.5rem, env(safe-area-inset-bottom, 1.5rem)) + 4rem)' }}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
