import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

// Étapes du processus de travail
const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Audit & Diagnostic',
    description:
      'Nous analysons votre situation actuelle, vos objectifs et votre marché pour identifier les meilleures opportunités de croissance.',
    color: 'text-[#2563EB]',
    bg: 'bg-[#EFF6FF]',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Stratégie Sur Mesure',
    description:
      'Nous concevons une stratégie personnalisée avec des objectifs clairs et des indicateurs de performance précis (KPIs).',
    color: 'text-[#7C3AED]',
    bg: 'bg-[#F5F3FF]',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Exécution & Lancement',
    description:
      'Notre équipe exécute le plan avec rigueur — contenu, publicités, site web ou formation — selon votre calendrier.',
    color: 'text-[#F97316]',
    bg: 'bg-[#FFF7ED]',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Suivi & Optimisation',
    description:
      'Nous analysons les résultats en continu et optimisons pour maximiser votre retour sur investissement.',
    color: 'text-[#10B981]',
    bg: 'bg-[#ECFDF5]',
  },
];

// Section présentation du processus de travail
export default function ProcessSection() {
  return (
    <section className="py-24 bg-white" aria-label="Notre processus de travail">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            Comment on travaille
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] font-[var(--font-display)] mb-4">
            Un processus{' '}
            <span className="gradient-text">éprouvé</span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            4 étapes claires pour transformer votre vision en résultats concrets et mesurables.
          </p>
        </AnimatedSection>

        {/* Étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <AnimatedSection key={step.number} delay={index * 120}>
                <div className="relative group">
                  {/* Ligne de connexion entre les étapes (desktop) */}
                  {index < STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(100%+16px)] w-[calc(100%-48px)] h-px bg-gradient-to-r from-[#E2E8F0] to-[#E2E8F0] z-10"
                      aria-hidden="true"
                    />
                  )}

                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
                    {/* Numéro d'étape */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${step.color}`} aria-hidden="true" />
                      </div>
                      <span className="text-3xl font-extrabold text-[#F1F5F9] font-[var(--font-display)] select-none">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-bold text-[#0B0B0B] mb-2 font-[var(--font-display)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
