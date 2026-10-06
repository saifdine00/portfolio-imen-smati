'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AcademicProfile from '@/components/AcademicProfile';
import TimelineSection from '@/components/TimelineSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import CommunicationsSection from '@/components/CommunicationsSection';
import TeachingSection from '@/components/TeachingSection';
import TrainingSection from '@/components/TrainingSection';
import StatsPerspectivesSection from '@/components/StatsPerspectivesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Ambient background glow gradient */}
      <div className="ambient-gradient" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Live Dynamic QR Code */}
      <Hero />

      {/* Academic Profile */}
      <AcademicProfile />

      {/* University Cursus */}
      <TimelineSection />

      {/* Scientific Research & AI3D */}
      <ResearchSection />

      {/* Q1 Publications */}
      <PublicationsSection />

      {/* Communications & Springer Chapter */}
      <CommunicationsSection />

      {/* Teaching Activities at ISIGK */}
      <TeachingSection />

      {/* Continuous Training & Scientific Outreach */}
      <TrainingSection />

      {/* Summary Stats & Perspectives */}
      <StatsPerspectivesSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
