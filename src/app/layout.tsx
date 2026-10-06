import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Imen SMATI — Portfolio académique | Docteur en Informatique',
  description: "Portfolio académique d'Imen SMATI — Docteur en Informatique, recherche en robustesse, certification formelle des classifieurs de contours et vérification multimodale (ENSI / CRISTAL / GRIFT), enseignement supérieur (ISIGK).",
  keywords: [
    'Imen SMATI',
    'Docteur en Informatique',
    'Maître Assistant',
    'CRISTAL',
    'ENSI',
    'ISIGK',
    'Intelligence Artificielle',
    'Deep Learning',
    'Robustesse IA',
    'Certification',
    'Classifieurs de contours',
    'AI3D',
    'DeepGCSS'
  ],
  authors: [{ name: 'Dr. Imen SMATI' }],
  creator: 'Dr. Imen SMATI',
  openGraph: {
    title: 'Imen SMATI — Portfolio académique | Docteur en Informatique',
    description: "Portfolio académique d'Imen SMATI — Docteur en Informatique, recherche en robustesse et certification des classifieurs de contours, enseignement supérieur.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Portfolio académique — Dr. Imen SMATI'
  }
};

export const viewport: Viewport = {
  themeColor: '#07111e',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="dark">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
