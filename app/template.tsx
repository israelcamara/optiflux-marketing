'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// template.tsx crée une nouvelle instance à chaque navigation
// (contrairement à layout.tsx qui préserve l'état)
// → parfait pour les transitions de page
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
