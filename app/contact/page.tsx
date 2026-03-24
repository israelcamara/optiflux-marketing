import type { Metadata } from 'next';
import { Calendar, MessageCircle, Mail, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optiflux-marketing.com';

export const metadata: Metadata = {
  title: 'Contact & Réservation — OPTIFLUX Marketing',
  description:
    'Réservez un appel stratégique gratuit avec OPTIFLUX Marketing. 30 minutes pour transformer votre projet digital. Sans engagement, réponse sous 2h.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title:       'Contactez OPTIFLUX Marketing — Appel stratégique gratuit',
    description: 'Réservez 30 minutes avec notre équipe pour analyser votre projet et définir votre stratégie digitale.',
    url:         `${SITE_URL}/contact`,
    type:        'website',
    images:      [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contactez OPTIFLUX Marketing' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Contactez OPTIFLUX Marketing — Appel stratégique gratuit',
    description: 'Réservez 30 minutes pour transformer votre projet digital.',
    images:      ['/og-image.jpg'],
  },
};

// Ce qui est couvert lors de l'appel
const CALL_POINTS = [
  'Analyse de votre situation actuelle',
  'Identification des opportunités de croissance',
  'Présentation de notre approche',
  'Plan d\'action personnalisé',
];

// Page de contact et prise de rendez-vous
export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
              Commençons
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0B0B] font-[var(--font-display)] mb-5">
              Parlons de votre
              <br />
              <span className="gradient-text">projet digital</span>
            </h1>
            <p className="text-lg text-[#64748B] max-w-xl mx-auto">
              Un appel de 30 minutes suffit pour définir votre stratégie. Gratuit, sans engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Options de contact */}
      <section className="py-12 pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Appel stratégique */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-[#2563EB]" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#0B0B0B] font-[var(--font-display)] mb-3">
                  Réserver un appel stratégique
                </h2>
                <p className="text-[#64748B] mb-6 leading-relaxed">
                  30 minutes pour analyser votre situation et définir ensemble la meilleure stratégie digitale pour votre business.
                </p>

                {/* Ce qu'on couvre */}
                <ul className="space-y-3 mb-8" role="list">
                  {CALL_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-[#64748B]">
                      <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bouton Calendly */}
                <a
                  href="#calendly"
                  className="flex items-center justify-center gap-2 w-full py-4 gradient-bg text-white rounded-xl font-semibold hover:opacity-90 hover:shadow-[var(--shadow-brand)] transition-all duration-200"
                  aria-label="Réserver un appel stratégique sur Calendly"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  Choisir un créneau
                </a>

                <p className="text-center text-xs text-[#94A3B8] mt-3">
                  Gratuit · Sans engagement · Réponse sous 24h
                </p>
              </div>
            </AnimatedSection>

            {/* WhatsApp & Email */}
            <AnimatedSection delay={150}>
              <div className="space-y-6 h-full flex flex-col">
                {/* WhatsApp */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#16A34A]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B0B0B] font-[var(--font-display)] mb-1">WhatsApp</h3>
                      <p className="text-sm text-[#64748B] mb-3">
                        Envoyez-nous un message directement. Nous répondons en moins de 2h pendant les heures ouvrées.
                      </p>
                      <a
                        href={CONTACT_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16A34A] hover:underline"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        Écrire sur WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B0B0B] font-[var(--font-display)] mb-1">Email</h3>
                      <p className="text-sm text-[#64748B] mb-3">
                        Pour les demandes formelles ou les projets complexes nécessitant un brief détaillé.
                      </p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:underline"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Espace client */}
                <div className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-2xl border border-[#DDD6FE] p-7 flex-1">
                  <h3 className="font-bold text-[#0B0B0B] font-[var(--font-display)] mb-2">
                    Espace Client
                  </h3>
                  <p className="text-sm text-[#64748B] mb-3">
                    Suivez l&apos;avancement de vos projets, accédez à vos livrables et communiquez avec votre équipe.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-lg text-xs font-semibold text-[#7C3AED] border border-[#DDD6FE]">
                    Bientôt disponible
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Widget Calendly placeholder */}
          <AnimatedSection delay={300} className="mt-10">
            <div id="calendly" className="bg-white rounded-3xl border border-[#E2E8F0] p-10 text-center">
              <Calendar className="w-10 h-10 text-[#CBD5E1] mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold text-[#0B0B0B] font-[var(--font-display)] mb-2">
                Calendrier de réservation
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-sm mx-auto">
                Le widget Calendly sera intégré ici. En attendant, contactez-nous via WhatsApp ou email pour fixer un rendez-vous.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
