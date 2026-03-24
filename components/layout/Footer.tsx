import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const SERVICES_LINKS = [
  { label: 'Marketing Digital',         href: '/services#marketing'  },
  { label: 'Développement Web & App',   href: '/services#web'        },
  { label: 'Formation & Coaching',      href: '/services#formation'  },
  { label: 'Publicité Meta Ads',        href: '/services#marketing'  },
  { label: 'Community Management',      href: '/services#marketing'  },
];

const LEGAL_LINKS = [
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: 'Mentions légales',             href: '/mentions-legales' },
];

const SOCIAL_ICONS = [
  { href: SOCIAL_LINKS.facebook,  Icon: Facebook,  label: 'Facebook OPTIFLUX Marketing'  },
  { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: 'Instagram OPTIFLUX Marketing' },
  { href: SOCIAL_LINKS.linkedin,  Icon: Linkedin,  label: 'LinkedIn OPTIFLUX Marketing'  },
  { href: SOCIAL_LINKS.youtube,   Icon: Youtube,   label: 'YouTube OPTIFLUX Marketing'   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white" role="contentinfo">
      {/* Corps principal */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Colonne 1 — Marque */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4"
              aria-label="OPTIFLUX Marketing — Accueil"
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg text-white text-[13px] font-black flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                aria-hidden="true"
              >
                OF
              </div>
              <span
                className="text-[19px] font-extrabold tracking-[-0.03em]"
                style={{
                  fontFamily: 'var(--font-outfit)',
                  background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                OPTIFLUX
              </span>
            </Link>
            <p
              className="text-[13.5px] text-[#94A3B8] leading-relaxed mb-5 max-w-[220px]"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Agence digitale africaine. Nous transformons vos idées en business digital rentable.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3" role="list" aria-label="Réseaux sociaux OPTIFLUX">
              {SOCIAL_ICONS.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.07] hover:bg-white/15 text-[#94A3B8] hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3
              className="text-[12px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-[#94A3B8] hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[13.5px] text-[#94A3B8] hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — Services */}
          <div>
            <h3
              className="text-[12px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Nos services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-[#94A3B8] hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3
              className="text-[12px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Contactez-nous
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[13.5px] text-[#94A3B8] hover:text-white transition-colors group"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                  aria-label={`WhatsApp : ${CONTACT_INFO.whatsapp}`}
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#25D366] group-hover:text-[#25D366]" aria-hidden="true" />
                  {CONTACT_INFO.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-[13.5px] text-[#94A3B8] hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                  aria-label={`Email : ${CONTACT_INFO.email}`}
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#60A5FA]" aria-hidden="true" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <span
                  className="flex items-center gap-2.5 text-[13.5px] text-[#94A3B8]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 text-[#F97316]" aria-hidden="true" />
                  {CONTACT_INFO.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de bas */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[12.5px] text-[#475569]"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            © {year} OPTIFLUX Marketing. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] text-[#475569] hover:text-[#94A3B8] transition-colors"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {label}
              </Link>
            ))}
            {/* Lien discret vers l'espace client */}
            <Link
              href="/espace-client"
              className="text-[12px] text-[#334155] hover:text-[#64748B] transition-colors"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Espace client
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
