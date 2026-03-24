import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp, Code2, GraduationCap,
  ArrowRight, ChevronRight, Calendar, MessageCircle,
} from 'lucide-react';
import { SERVICES, SUB_SERVICES, CONTACT_INFO } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SubServicesGrid from '@/components/services/SubServicesGrid';
import ProcessTimeline from '@/components/services/ProcessTimeline';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'Nos Services — Marketing, Web & Formation | OPTIFLUX Marketing',
  description:
    'Marketing digital, création de sites web sur mesure et formations pratiques. Découvrez les expertises d\'OPTIFLUX Marketing pour développer votre business en Afrique.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title:       'Services OPTIFLUX Marketing — Marketing Digital, Web & Formation',
    description: 'Trois expertises complémentaires pour transformer votre présence digitale et développer votre business en Afrique.',
    url:         `${SITE_URL}/services`,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Services OPTIFLUX Marketing' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Services OPTIFLUX Marketing — Marketing, Web & Formation',
    description: 'Trois expertises pour transformer votre présence digitale en Afrique.',
    images:      ['/og-image.jpg'],
  },
};

// ── Icônes principales par service
const ICON_MAP = { TrendingUp, Code2, GraduationCap } as const;

// ── Config visuelle par couleur de service
const COLOR_CONFIG = {
  blue: {
    gradient: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
    badge:    'bg-[#DBEAFE] text-[#1E40AF]',
    number:   'text-[#BFDBFE]',
    cta:      'text-[#2563EB] hover:text-[#1D4ED8]',
    pill:     'bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE] border border-[#BFDBFE]',
    iconBg:   'bg-[#EFF6FF]',
    iconColor:'text-[#2563EB]',
    borderHover: 'hover:border-[#93C5FD]',
    anchor:   'marketing',
  },
  purple: {
    gradient: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)',
    badge:    'bg-[#EDE9FE] text-[#6D28D9]',
    number:   'text-[#DDD6FE]',
    cta:      'text-[#7C3AED] hover:text-[#6D28D9]',
    pill:     'bg-[#F5F3FF] text-[#7C3AED] hover:bg-[#EDE9FE] border border-[#DDD6FE]',
    iconBg:   'bg-[#F5F3FF]',
    iconColor:'text-[#7C3AED]',
    borderHover: 'hover:border-[#C4B5FD]',
    anchor:   'web',
  },
  orange: {
    gradient: 'linear-gradient(135deg, #C2410C 0%, #F97316 100%)',
    badge:    'bg-[#FED7AA] text-[#C2410C]',
    number:   'text-[#FDBA74]',
    cta:      'text-[#F97316] hover:text-[#EA580C]',
    pill:     'bg-[#FFF7ED] text-[#F97316] hover:bg-[#FED7AA] border border-[#FDBA74]',
    iconBg:   'bg-[#FFF7ED]',
    iconColor:'text-[#F97316]',
    borderHover: 'hover:border-[#FCA96A]',
    anchor:   'formation',
  },
} as const;

const SERVICE_LABELS = ['Marketing Digital', 'Développement Web', 'Formation & Coaching'];
const SERVICE_NUMS   = ['01', '02', '03'];

// ══════════════════════════════════════════
// PAGE SERVICES
// ══════════════════════════════════════════
export default function ServicesPage() {
  return (
    <>
      {/* ════════════════════════════════
          HERO — breadcrumb + titre + ancres
          ════════════════════════════════ */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        {/* Fond décoratif */}
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
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <AnimatedSection>
            <nav className="flex items-center gap-1.5 text-[13px] text-[#94A3B8] mb-8" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Accueil</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" aria-hidden="true" />
              <span className="text-[#0B0B0B] font-medium">Services</span>
            </nav>
          </AnimatedSection>

          <div className="max-w-[760px]">
            {/* Badge */}
            <AnimatedSection delay={50}>
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                ⚡ Nos expertises
              </span>
            </AnimatedSection>

            {/* Titre */}
            <AnimatedSection delay={100}>
              <h1
                className="text-[38px] sm:text-[50px] lg:text-[62px] font-extrabold text-[#0B0B0B] leading-[1.05] tracking-[-0.03em] mb-6"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Tout ce qu&apos;il vous faut
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #F97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  pour réussir en ligne
                </span>
              </h1>
            </AnimatedSection>

            {/* Sous-titre */}
            <AnimatedSection delay={150}>
              <p
                className="text-[17px] text-[#64748B] leading-relaxed mb-10 max-w-[560px]"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Une triple expertise — marketing digital, développement web et
                formation — pour accompagner chaque étape de votre transformation digitale.
              </p>
            </AnimatedSection>

            {/* Ancres vers les sections */}
            <AnimatedSection delay={200}>
              <div className="flex flex-wrap gap-3">
                {SERVICES.map((s, i) => {
                  const cfg = COLOR_CONFIG[s.color as keyof typeof COLOR_CONFIG];
                  return (
                    <a
                      key={s.id}
                      href={`#${cfg.anchor}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13.5px] font-semibold transition-all duration-200 ${cfg.pill}`}
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full`}
                        style={{ background: 'currentColor' }} />
                      {SERVICE_LABELS[i]}
                    </a>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICES DÉTAILLÉS — 3 sections
          ════════════════════════════════ */}
      {SERVICES.map((service, idx) => {
        const IconComp = ICON_MAP[service.icon as keyof typeof ICON_MAP];
        const cfg      = COLOR_CONFIG[service.color as keyof typeof COLOR_CONFIG];
        const subItems = SUB_SERVICES[service.category] ?? [];
        const isEven   = idx % 2 === 1; // alterne bg

        return (
          <section
            key={service.id}
            id={cfg.anchor}
            className={`py-20 md:py-28 scroll-mt-20 ${isEven ? 'bg-[#F8FAFC]' : 'bg-white'}`}
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

              {/* En-tête de section */}
              <AnimatedSection>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

                  <div className="flex items-start gap-5">
                    {/* Icône principale */}
                    <div
                      className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: cfg.gradient }}
                    >
                      <IconComp className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>

                    <div>
                      {/* Numéro + badge */}
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-[0.12em] ${cfg.cta}`}
                          style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                          Service {SERVICE_NUMS[idx]}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${cfg.badge}`}
                          style={{ fontFamily: 'var(--font-outfit)' }}>
                          {service.category === 'marketing' ? '5 prestations'
                            : service.category === 'web' ? '5 prestations'
                            : '5 formations'}
                        </span>
                      </div>

                      {/* Titre */}
                      <h2
                        className="text-[28px] md:text-[36px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.02em]"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* CTA section */}
                  <Link
                    href="/contact"
                    className={`shrink-0 inline-flex items-center gap-2 text-[14px] font-semibold ${cfg.cta} transition-colors`}
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    Démarrer ce service
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>

                {/* Description */}
                <p
                  className="text-[16px] text-[#64748B] leading-relaxed max-w-[680px] mb-10"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {service.description}
                </p>
              </AnimatedSection>

              {/* Grille des sous-services */}
              <SubServicesGrid
                items={subItems}
                iconBg={cfg.iconBg}
                iconColor={cfg.iconColor}
                borderHover={cfg.borderHover}
              />

            </div>
          </section>
        );
      })}

      {/* ════════════════════════════════
          NOTRE PROCESSUS — 4 étapes
          ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection>
            <div className="text-center mb-14">
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] text-[12px] font-bold uppercase tracking-[0.1em] mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Comment on travaille
              </span>
              <h2
                className="text-[30px] md:text-[42px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.02em] mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Notre méthode en{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  4 étapes claires
                </span>
              </h2>
              <p
                className="text-[16px] text-[#64748B] max-w-[520px] mx-auto leading-relaxed"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Un processus structuré, transparent et orienté résultats —
                du premier contact jusqu&apos;à la mesure de vos performances.
              </p>
            </div>
          </AnimatedSection>

          <ProcessTimeline />

        </div>
      </section>

      {/* ════════════════════════════════
          CTA FINALE — Quel service ?
          ════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
              style={{ background: 'linear-gradient(135deg, #0B0B0B 0%, #1E293B 100%)' }}
            >
              {/* Déco fond */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#2563EB]/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#7C3AED]/20 blur-3xl" />
              </div>

              {/* Contenu */}
              <div className="relative">
                <p
                  className="text-[12px] font-bold uppercase tracking-[0.15em] text-white/50 mb-3"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Passons à l&apos;action
                </p>
                <h2
                  className="text-[28px] sm:text-[36px] md:text-[46px] font-extrabold text-white leading-[1.1] tracking-[-0.025em] mb-4"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Quel service vous intéresse ?
                </h2>
                <p
                  className="text-[16px] text-white/60 max-w-[480px] mx-auto leading-relaxed mb-10"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Discutons de votre projet en 30 minutes — c&apos;est gratuit,
                  sans engagement, et ça change tout.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  {/* RDV */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-7 py-[14px] rounded-xl bg-white text-[#0B0B0B] font-bold text-[15px] hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <Calendar className="w-[17px] h-[17px]" aria-hidden="true" />
                    Réserver un appel gratuit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>

                  {/* WhatsApp */}
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-[13px] rounded-xl border-[1.5px] border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <MessageCircle className="w-[17px] h-[17px]" aria-hidden="true" />
                    Écrire sur WhatsApp
                  </a>
                </div>

                {/* Réassurances */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 mt-8">
                  {['✓ Réponse en moins de 2h', '✓ Appel 100% gratuit', '✓ Aucun engagement'].map((r) => (
                    <span
                      key={r}
                      className="text-[12.5px] text-white/40"
                      style={{ fontFamily: 'var(--font-jakarta)' }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
