'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, ArrowRight, Bell, BarChart3, MessageSquare, FolderOpen } from 'lucide-react';
import Link from 'next/link';

const UPCOMING_FEATURES = [
  { icon: BarChart3,    label: 'Tableau de bord de vos projets en cours'       },
  { icon: FolderOpen,  label: 'Accès à vos rapports et livrables'              },
  { icon: MessageSquare, label: 'Messagerie avec votre équipe dédiée'          },
  { icon: Bell,        label: 'Notifications sur l\'avancement de vos projets' },
];

export default function EspaceClientContent() {
  const [email, setEmail]           = useState('');
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError('Veuillez entrer votre adresse email.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Adresse email invalide.');
      return;
    }
    setLoading(true);
    setError('');
    // Simulation d'envoi (à remplacer par l'appel API)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">

        {/* Icône principale */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div
            className="flex items-center justify-center w-20 h-20 rounded-2xl shadow-lg"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }}
            role="img"
            aria-label="Icône espace client sécurisé"
          >
            <Lock className="w-9 h-9 text-white" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[28px] sm:text-[32px] font-extrabold text-[#0B0B0B] text-center leading-tight tracking-[-0.025em] mb-3"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Espace Client
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] text-[#64748B] text-center leading-relaxed mb-7"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Votre espace personnel arrive bientôt. Suivez vos projets, accédez à vos
          rapports et communiquez avec votre équipe dédiée.
        </motion.p>

        {/* Fonctionnalités à venir */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl border border-[#E2E8F0] p-5 mb-6"
          role="region"
          aria-label="Fonctionnalités à venir"
        >
          <p
            className="text-[11.5px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-3"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Ce qui vous attend
          </p>
          <ul className="space-y-3">
            {UPCOMING_FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)' }}
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4 text-[#2563EB]" />
                </div>
                <span
                  className="text-[13.5px] text-[#374151]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Formulaire d'inscription */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl border border-[#E2E8F0] p-5"
          role="region"
          aria-label="Inscription à la liste d'attente"
        >
          {submitted ? (
            <div className="text-center py-3">
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-10 h-10 text-[#22C55E]" aria-hidden="true" />
              </div>
              <p
                className="text-[15px] font-semibold text-[#0B0B0B] mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Vous êtes sur la liste !
              </p>
              <p
                className="text-[13.5px] text-[#64748B]"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Nous vous préviendrons dès que l&apos;espace client sera disponible.
              </p>
            </div>
          ) : (
            <>
              <p
                className="text-[14px] font-semibold text-[#0B0B0B] mb-1"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Soyez notifié en avant-première
              </p>
              <p
                className="text-[13px] text-[#64748B] mb-4"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                Inscrivez-vous pour être parmi les premiers à accéder à votre espace.
              </p>
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="waitlist-email" className="sr-only">
                  Adresse email
                </label>
                <div className="flex gap-2">
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="votre@email.com"
                    autoComplete="email"
                    required
                    className="flex-1 px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-[13.5px] text-[#0B0B0B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#DBEAFE] transition-all"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                    aria-invalid={!!error}
                    aria-describedby={error ? 'waitlist-error' : undefined}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-[13px] font-semibold hover:opacity-90 active:scale-[0.97] transition-all disabled:opacity-70"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                      fontFamily: 'var(--font-outfit)',
                      minWidth: 44,
                    }}
                    aria-label="S'inscrire à la liste d'attente"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {error && (
                  <p
                    id="waitlist-error"
                    role="alert"
                    className="mt-2 text-[12.5px] text-red-500"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {error}
                  </p>
                )}
              </form>
            </>
          )}
        </motion.div>

        {/* Lien retour */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#64748B] hover:text-[#2563EB] transition-colors"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
