import type { Metadata } from 'next';
import EspaceClientContent from '@/components/espace-client/EspaceClientContent';

export const metadata: Metadata = {
  title: 'Espace Client — OPTIFLUX Marketing',
  description: 'Accès réservé aux clients OPTIFLUX. Suivez vos projets, rapports et ressources partagées. Bientôt disponible.',
  robots: { index: false, follow: false },
};

export default function EspaceClientPage() {
  return <EspaceClientContent />;
}
