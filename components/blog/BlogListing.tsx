'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, ChevronRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

// ── Config visuelle par catégorie
const CATEGORY_CFG: Record<string, {
  badge: string; badgeText: string;
  gradFrom: string; gradTo: string;
}> = {
  'Marketing Digital': {
    badge: '#DBEAFE', badgeText: '#1D4ED8',
    gradFrom: '#1E40AF', gradTo: '#3B82F6',
  },
  'Développement Web': {
    badge: '#EDE9FE', badgeText: '#6D28D9',
    gradFrom: '#5B21B6', gradTo: '#8B5CF6',
  },
  'Publicité': {
    badge: '#F0E6FF', badgeText: '#7C3AED',
    gradFrom: '#7C3AED', gradTo: '#A78BFA',
  },
  'Formation': {
    badge: '#FED7AA', badgeText: '#C2410C',
    gradFrom: '#C2410C', gradTo: '#FB923C',
  },
  'E-commerce': {
    badge: '#D1FAE5', badgeText: '#065F46',
    gradFrom: '#065F46', gradTo: '#34D399',
  },
};

function getCfg(cat: string) {
  return CATEGORY_CFG[cat] ?? {
    badge: '#F1F5F9', badgeText: '#64748B',
    gradFrom: '#475569', gradTo: '#94A3B8',
  };
}

// ── Icônes emoji par catégorie (pour le placeholder visuel)
const CATEGORY_EMOJI: Record<string, string> = {
  'Marketing Digital': '📱',
  'Développement Web': '💻',
  'Publicité': '🎯',
  'Formation': '🎓',
  'E-commerce': '🛒',
};

const BATCH = 3; // articles révélés par clic "charger plus"

// ══════════════════════════════════════════
// BLOG LISTING — hero + featured + grille
// ══════════════════════════════════════════
export default function BlogListing() {
  const [visible, setVisible] = useState(BATCH);

  const featured = BLOG_POSTS[0];
  const grid     = BLOG_POSTS.slice(1);         // articles 1-6
  const shown    = grid.slice(0, visible);       // articles visibles dans la grille
  const hasMore  = visible < grid.length;
  const featCfg  = getCfg(featured.category);

  return (
    <>
      {/* ════════════════════════════════
          HERO
          ════════════════════════════════ */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-[13px] text-[#94A3B8] mb-8"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-[#2563EB] transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" aria-hidden="true" />
            <span className="text-[#0B0B0B] font-medium">Blog</span>
          </motion.nav>

          <div className="text-center max-w-[660px] mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              ✍️ Ressources gratuites
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#0B0B0B] leading-[1.05] tracking-[-0.03em] mb-5"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Le Blog{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                OPTIFLUX
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[17px] text-[#64748B] leading-relaxed"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Conseils pratiques, stratégies et tendances du marketing digital
              pour développer votre business en Afrique.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          ARTICLE MIS EN AVANT
          ════════════════════════════════ */}
      <section className="pb-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#94A3B8] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              À la une
            </p>

            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden border border-[#E2E8F0] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:border-[#CBD5E1] transition-all duration-300"
              aria-label={`Lire : ${featured.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
                {/* Image featured */}
                <div
                  className="relative h-[280px] lg:h-auto min-h-[260px] overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${featCfg.gradFrom} 0%, ${featCfg.gradTo} 100%)` }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                      backgroundSize: '22px 22px',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-white/10" aria-hidden="true" />
                  <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" aria-hidden="true" />

                  {/* Emoji icône */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[80px] opacity-30 select-none" aria-hidden="true">
                      {CATEGORY_EMOJI[featured.category] ?? '📝'}
                    </span>
                  </div>

                  {/* Badge catégorie */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.07em]"
                      style={{ backgroundColor: featCfg.badge, color: featCfg.badgeText }}
                    >
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Contenu featured */}
                <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[12px] text-[#94A3B8] mb-4" style={{ fontFamily: 'var(--font-jakarta)' }}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {formatDate(featured.publishedAt)}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {featured.readTime} min de lecture
                    </span>
                  </div>

                  <h2
                    className="text-[22px] md:text-[28px] lg:text-[32px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.02em] mb-4 group-hover:text-[#2563EB] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {featured.title}
                  </h2>

                  <p
                    className="text-[15px] text-[#64748B] leading-relaxed mb-8 line-clamp-3"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {featured.excerpt}
                  </p>

                  <span
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-[#2563EB]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    Lire l&apos;article complet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          GRILLE D'ARTICLES
          ════════════════════════════════ */}
      <section className="py-16 pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Titre de section */}
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-[20px] md:text-[26px] font-extrabold text-[#0B0B0B] tracking-[-0.015em]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Tous les articles
              <span className="ml-2 text-[16px] font-medium text-[#94A3B8]">({grid.length})</span>
            </h2>
          </div>

          {/* Grille avec AnimatePresence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {shown.map((post, i) => {
                const cfg   = getCfg(post.category);
                const emoji = CATEGORY_EMOJI[post.category] ?? '📝';
                return (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, delay: i % BATCH * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                  >
                    {/* Image placeholder */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative h-[180px] overflow-hidden shrink-0"
                      style={{ background: `linear-gradient(135deg, ${cfg.gradFrom} 0%, ${cfg.gradTo} 100%)` }}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div
                        className="absolute inset-0 opacity-[0.1]"
                        style={{
                          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                          backgroundSize: '18px 18px',
                        }}
                      />
                      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[56px] opacity-25 select-none">{emoji}</span>
                      </div>
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.07em]"
                          style={{ backgroundColor: cfg.badge, color: cfg.badgeText }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Contenu */}
                    <div className="p-5 flex flex-col flex-1">
                      <Link href={`/blog/${post.slug}`}>
                        <h3
                          className="text-[15.5px] font-bold text-[#0B0B0B] leading-snug mb-2.5 group-hover:text-[#2563EB] transition-colors duration-200 line-clamp-2"
                          style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                          {post.title}
                        </h3>
                      </Link>

                      <p
                        className="text-[13px] text-[#64748B] leading-relaxed line-clamp-2 flex-1 mb-4"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]"
                      >
                        <div
                          className="flex items-center gap-2.5 text-[11.5px] text-[#94A3B8]"
                          style={{ fontFamily: 'var(--font-jakarta)' }}
                        >
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            {post.readTime} min
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 text-[12px] font-bold text-[#2563EB] hover:gap-2 transition-all duration-150"
                          aria-label={`Lire : ${post.title}`}
                          style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                          Lire
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Charger plus */}
          <div className="flex flex-col items-center mt-12 gap-3">
            {hasMore ? (
              <motion.button
                onClick={() => setVisible((v) => v + BATCH)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-[13px] rounded-xl bg-white border border-[#E2E8F0] text-[#0B0B0B] font-semibold text-[14px] hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200 shadow-sm"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Charger {Math.min(BATCH, grid.length - visible)} article{Math.min(BATCH, grid.length - visible) > 1 ? 's' : ''} de plus
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.button>
            ) : (
              <div className="text-center py-8 px-12 bg-white rounded-2xl border border-dashed border-[#CBD5E1]">
                <p
                  className="text-[14px] font-semibold text-[#94A3B8] mb-1"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Vous avez tout lu 🎉
                </p>
                <p
                  className="text-[12.5px] text-[#CBD5E1]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Nouveaux articles publiés chaque semaine
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
