'use client';

import { useRef } from 'react';
import {
  Users, Megaphone, Image, Target, BadgeDollarSign,
  Globe, Layers, MousePointerClick, CreditCard, SearchCheck,
  BookOpen, Palette, Film, Code, UserCheck,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import type { SubServiceItem } from '@/types';

// 'ImageIcon' in constants → imported as Image from lucide-react
const ICON_MAP = {
  Users,
  Megaphone,
  ImageIcon: Image,
  Target,
  BadgeDollarSign,
  Globe,
  Layers,
  MousePointerClick,
  CreditCard,
  SearchCheck,
  BookOpen,
  Palette,
  Film,
  Code,
  UserCheck,
} as const;

interface Props {
  items: SubServiceItem[];
  iconBg: string;
  iconColor: string;
  borderHover: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
} as const;

const card = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const } },
} as const;

export default function SubServicesGrid({ items, iconBg, iconColor, borderHover }: Props) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {items.map((svc) => {
        const Icon = ICON_MAP[svc.iconName as keyof typeof ICON_MAP];
        return (
          <motion.div
            key={svc.id}
            variants={card}
            className={`group bg-white rounded-2xl border border-[#E2E8F0] p-6 ${borderHover} hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] transition-all duration-300`}
          >
            {/* Icône */}
            <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {Icon && <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />}
            </div>

            {/* Titre */}
            <h3
              className="text-[15px] font-bold text-[#0B0B0B] mb-2 leading-snug"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              {svc.title}
            </h3>

            {/* Description */}
            <p
              className="text-[13px] text-[#64748B] leading-relaxed"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {svc.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
