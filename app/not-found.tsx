import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page introuvable (404) — OPTIFLUX Marketing',
  description: 'Oops ! La page que vous cherchez n\'existe pas. Revenez à l\'accueil d\'OPTIFLUX Marketing.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 py-20 text-center"
      role="main"
      aria-label="Page introuvable"
    >
      {/* Illustration décorative */}
      <div className="relative mb-8 select-none" aria-hidden="true">
        {/* Grands cercles de fond */}
        <div
          className="absolute -inset-12 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, #7C3AED 100%)' }}
        />
        {/* Texte 404 décoratif */}
        <div
          className="relative text-[120px] sm:text-[160px] font-black leading-none tracking-[-0.04em]"
          style={{
            fontFamily:                'var(--font-outfit)',
            background:                'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            WebkitBackgroundClip:      'text',
            WebkitTextFillColor:       'transparent',
            backgroundClip:            'text',
            opacity:                   0.15,
          }}
        >
          404
        </div>
        {/* Emoji centré */}
        <div className="absolute inset-0 flex items-center justify-center text-[64px] sm:text-[80px]">
          🔍
        </div>
      </div>

      {/* Titre */}
      <h1
        className="text-[28px] sm:text-[36px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.025em] mb-3"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        Page introuvable
      </h1>

      {/* Description */}
      <p
        className="text-[16px] text-[#64748B] leading-relaxed max-w-[380px] mb-8"
        style={{ fontFamily: 'var(--font-jakarta)' }}
      >
        Cette page a peut-être été déplacée ou n&apos;existe pas. Pas de panique —
        retournez à l&apos;accueil et découvrez comment OPTIFLUX peut vous aider.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-[14.5px] hover:opacity-90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-md"
          style={{
            background:    'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            fontFamily:    'var(--font-outfit)',
            boxShadow:     '0 4px 20px rgba(37, 99, 235, 0.3)',
          }}
        >
          ← Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E2E8F0] text-[#374151] font-semibold text-[14.5px] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all duration-200"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Nous contacter
        </Link>
      </div>

      {/* Liens rapides */}
      <div className="mt-10">
        <p
          className="text-[12.5px] text-[#94A3B8] mb-3 uppercase tracking-wide"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Pages populaires
        </p>
        <nav aria-label="Liens rapides" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {[
            { label: 'Nos services',     href: '/services'     },
            { label: 'Portfolio',        href: '/portfolio'    },
            { label: 'À propos',         href: '/a-propos'     },
            { label: 'Blog',             href: '/blog'         },
            { label: 'Témoignages',      href: '/temoignages'  },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[13.5px] text-[#64748B] hover:text-[#2563EB] transition-colors"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
