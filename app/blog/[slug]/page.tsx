import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

// ── Config visuelle par catégorie
const CATEGORY_CFG: Record<string, {
  badge: string; badgeText: string;
  gradFrom: string; gradTo: string;
}> = {
  'Marketing Digital': { badge: '#DBEAFE', badgeText: '#1D4ED8', gradFrom: '#1E40AF', gradTo: '#3B82F6' },
  'Développement Web': { badge: '#EDE9FE', badgeText: '#6D28D9', gradFrom: '#5B21B6', gradTo: '#8B5CF6' },
  'Publicité':        { badge: '#F0E6FF', badgeText: '#7C3AED', gradFrom: '#7C3AED', gradTo: '#A78BFA' },
  'Formation':        { badge: '#FED7AA', badgeText: '#C2410C', gradFrom: '#C2410C', gradTo: '#FB923C' },
  'E-commerce':       { badge: '#D1FAE5', badgeText: '#065F46', gradFrom: '#065F46', gradTo: '#34D399' },
};
const CATEGORY_EMOJI: Record<string, string> = {
  'Marketing Digital': '📱', 'Développement Web': '💻',
  'Publicité': '🎯', 'Formation': '🎓', 'E-commerce': '🛒',
};
function getCfg(cat: string) {
  return CATEGORY_CFG[cat] ?? { badge: '#F1F5F9', badgeText: '#64748B', gradFrom: '#475569', gradTo: '#94A3B8' };
}

// ── Contenu de démonstration pour l'article mis en avant
const DEMO_CONTENT = `
<h2>Pourquoi Instagram est incontournable en 2025</h2>
<p>
  Avec plus de 2 milliards d'utilisateurs actifs dans le monde et une présence croissante en Afrique,
  Instagram reste la plateforme de référence pour les marques qui veulent construire une audience engagée.
  Mais en 2025, l'algorithme a profondément évolué — et les techniques d'hier ne fonctionnent plus.
</p>
<p>
  Nous avons analysé les comptes de nos clients sur les 12 derniers mois pour identifier ce qui fait
  réellement la différence. Voici les 5 stratégies qui génèrent les meilleurs résultats sur le marché
  africain aujourd'hui.
</p>

<h2>Stratégie 1 : Miser sur les Reels courts (moins de 30 secondes)</h2>
<p>
  L'algorithme Instagram favorise massivement les Reels, particulièrement ceux de moins de 30 secondes.
  Nos tests montrent une portée 3 à 5 fois supérieure pour ce format par rapport aux posts classiques.
  L'accroche doit se faire dans les 3 premières secondes — sinon l'utilisateur swipe.
</p>
<div class="callout">
  <p>
    💡 <strong>Astuce OPTIFLUX :</strong> Commencez chaque Reel par une question ou une affirmation surprenante.
    "Vous perdez des clients chaque jour sans le savoir" performe bien mieux que "Bonjour, aujourd'hui on va parler de..."
  </p>
</div>

<h2>Stratégie 2 : Publier aux bonnes heures selon votre audience</h2>
<p>
  L'audience africaine a des comportements spécifiques. Les pics d'activité sur Instagram en Afrique
  de l'Ouest se situent généralement entre 12h-14h et 20h-22h en semaine, avec une forte activité
  le samedi matin. Utilisez les Insights de votre compte professionnel pour affiner ces horaires selon
  votre audience spécifique.
</p>
<p>
  La régularité est plus importante que la fréquence. 3 publications par semaine de qualité
  surpassent toujours 7 publications médiocres. L'algorithme récompense la cohérence sur le long terme.
</p>

<h2>Stratégie 3 : L'engagement proactif — répondre ET commenter</h2>
<p>
  Instagram mesure votre taux d'engagement dans les 30 premières minutes après publication.
  Répondre à chaque commentaire dans cette fenêtre booste significativement la portée.
  Mais allez plus loin : commentez aussi sur des comptes de votre niche pour générer de la visibilité
  par réciprocité.
</p>

<h2>Stratégie 4 : Les Stories comme outil de fidélisation quotidien</h2>
<p>
  Les Stories disparaissent en 24h mais construisent la relation avec votre audience de façon
  unique. Utilisez-les pour montrer les coulisses, partager des témoignages clients, poser des
  questions via les sondages, et rappeler vos offres. Une marque active en Stories génère 40%
  plus de messages directs que les autres.
</p>

<h2>Stratégie 5 : Analysez et adaptez chaque semaine</h2>
<p>
  Les données ne mentent pas. Chaque dimanche, passez 15 minutes dans vos Insights pour identifier
  quel contenu a le mieux performé cette semaine — et pourquoi. Regardez la portée, les sauvegardes
  (indicateur clé de valeur) et les partages. Doublez ce qui fonctionne, abandonnez ce qui ne produit
  pas de résultats.
</p>

<h2>Conclusion</h2>
<p>
  Doubler sa visibilité sur Instagram n'est pas une question de chance — c'est le résultat d'une
  stratégie cohérente appliquée avec régularité. Commencez par implémenter une seule de ces 5
  stratégies cette semaine, mesurez les résultats, puis ajoutez la suivante.
</p>
<p>
  Si vous souhaitez être accompagné dans votre stratégie Instagram, notre équipe est là pour vous aider.
  Un appel de 30 minutes peut changer la trajectoire de votre présence digitale.
</p>
`;

// ── Génération des métadonnées dynamiques
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article introuvable' };
  return {
    title: `${post.title} — OPTIFLUX Blog`,
    description: post.excerpt,
  };
}

// ── Routes statiques
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// ══════════════════════════════════════════
// PAGE ARTICLE
// ══════════════════════════════════════════
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const cfg        = getCfg(post.category);
  const emoji      = CATEGORY_EMOJI[post.category] ?? '📝';
  const isFeatured = post.content === 'full';
  const related    = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallback   = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3 - related.length);
  const relatedAll = [...related, ...fallback].slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Barre de retour + breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] text-[#64748B] hover:text-[#0B0B0B] transition-colors group"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* ── Hero article */}
      <section className="pt-12 pb-10">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Catégorie */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] mb-5"
            style={{ backgroundColor: cfg.badge, color: cfg.badgeText }}
          >
            <Tag className="w-3 h-3" aria-hidden="true" />
            {post.category}
          </span>

          {/* Titre */}
          <h1
            className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#0B0B0B] leading-tight tracking-[-0.025em] mb-6"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {post.title}
          </h1>

          {/* Métadonnées */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#94A3B8] mb-2 pb-6 border-b border-[#F1F5F9]"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            <span className="flex items-center gap-1.5">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, #1E40AF, #7C3AED)', fontFamily: 'var(--font-outfit)' }}
                aria-hidden="true"
              >
                AI
              </div>
              Abraham Israel Camara
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime} min de lecture
            </span>
          </div>
        </div>
      </section>

      {/* ── Image hero */}
      <section className="pb-10">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative h-[240px] md:h-[340px] rounded-2xl overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${cfg.gradFrom} 0%, ${cfg.gradTo} 100%)` }}
          >
            <div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                backgroundSize: '22px 22px',
              }}
              aria-hidden="true"
            />
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/10" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-white/10" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[90px] opacity-20 select-none" aria-hidden="true">{emoji}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corps de l'article */}
      <section className="pb-16">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Extrait mis en avant */}
          <div
            className="rounded-xl p-5 mb-8 border-l-4"
            style={{ borderColor: cfg.gradFrom, backgroundColor: cfg.badge + '55' }}
          >
            <p
              className="text-[15px] font-medium text-[#0B0B0B] leading-relaxed"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Contenu */}
          {isFeatured ? (
            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: DEMO_CONTENT }}
            />
          ) : (
            <div className="space-y-5 text-[15.5px] text-[#374151] leading-[1.85]" style={{ fontFamily: 'var(--font-jakarta)' }}>
              <p>
                Cet article est en cours de rédaction. Revenez bientôt pour découvrir le contenu complet
                sur <strong className="text-[#0B0B0B]">{post.title}</strong>.
              </p>
              <p>
                En attendant, retrouvez nos conseils directement sur nos réseaux sociaux, ou contactez-nous
                pour obtenir des recommandations personnalisées adaptées à votre situation.
              </p>

              {/* Placeholder visuel */}
              <div className="grid grid-cols-1 gap-4 my-8">
                {['Introduction & contexte', 'Les points clés à retenir', 'Comment l\'appliquer à votre business', 'Conseils d\'experts OPTIFLUX'].map((section, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                      style={{ background: `linear-gradient(135deg, ${cfg.gradFrom}, ${cfg.gradTo})`, fontFamily: 'var(--font-outfit)' }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-[14px] text-[#64748B] font-medium" style={{ fontFamily: 'var(--font-outfit)' }}>
                      {section}
                    </p>
                    <div className="ml-auto flex gap-1">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="h-2 rounded-full bg-[#E2E8F0]"
                          style={{ width: `${[48, 32, 56][j]}px` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[13.5px] text-[#94A3B8] italic">
                📅 Publication prévue prochainement — abonnez-vous à notre newsletter pour être notifié.
              </p>
            </div>
          )}

          {/* CTA inline */}
          <div
            className="mt-12 rounded-2xl p-7 md:p-8 text-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${cfg.gradFrom} 0%, ${cfg.gradTo} 100%)` }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p
                className="text-[18px] font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Besoin d&apos;aide pour appliquer ces conseils ?
              </p>
              <p
                className="text-[14px] text-white/70 mb-6"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Un appel de 30 minutes avec notre équipe peut tout changer.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B0B0B] rounded-xl font-bold text-[14px] hover:bg-white/95 transition-colors shadow-lg"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Réserver un appel gratuit
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Carte auteur */}
          <div className="mt-10 flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-extrabold text-[18px] shrink-0 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #7C3AED 100%)',
                fontFamily: 'var(--font-outfit)',
              }}
              aria-hidden="true"
            >
              AI
            </div>
            <div>
              <p
                className="text-[14px] font-bold text-[#0B0B0B] mb-0.5"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Abraham Israel Camara
              </p>
              <p
                className="text-[12px] text-[#2563EB] font-semibold mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Fondateur & Directeur Stratégique — OPTIFLUX Marketing
              </p>
              <p
                className="text-[13px] text-[#64748B] leading-relaxed"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Expert en stratégie digitale, Abraham partage chaque semaine ses meilleures
                pratiques pour aider les entrepreneurs africains à réussir leur transformation digitale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles connexes */}
      {relatedAll.length > 0 && (
        <section className="py-14 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-[20px] font-extrabold text-[#0B0B0B] mb-8 tracking-[-0.015em]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Articles connexes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedAll.map((rel) => {
                const rcfg = getCfg(rel.category);
                return (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div
                      className="h-[100px] relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${rcfg.gradFrom}, ${rcfg.gradTo})` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[36px] opacity-20 select-none" aria-hidden="true">
                          {CATEGORY_EMOJI[rel.category] ?? '📝'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.07em]"
                        style={{ color: rcfg.badgeText }}
                      >
                        {rel.category}
                      </span>
                      <h3
                        className="text-[13.5px] font-bold text-[#0B0B0B] leading-snug mt-1 mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {rel.title}
                      </h3>
                      <p
                        className="text-[11.5px] text-[#94A3B8] flex items-center gap-1"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                      >
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {rel.readTime} min
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
