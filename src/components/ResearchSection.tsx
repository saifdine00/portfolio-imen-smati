'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ShieldCheck, Cpu, Layers, Sparkles, HelpCircle, Compass, Network, Award, CheckCircle } from 'lucide-react';

export default function ResearchSection() {
  const { research } = PORTFOLIO_DATA;

  return (
    <section id="recherche" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={16} />
            <span>Recherche & Contributions</span>
          </div>
          <h2 className="section-title">Activités scientifiques</h2>
          <p className="section-subtitle">
            De l’étude de la robustesse des classifieurs de contours à la vérification multimodale et la certification formelle.
          </p>
        </div>

        {/* 2-column grid for Problematic & Approach */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* Problematic Card */}
          <div className="glass-card" style={{ borderLeft: '4px solid #ef4444' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444'
              }}>
                <HelpCircle size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                {research.problematic.title}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
              {research.problematic.description}
            </p>
          </div>

          {/* Approach Card */}
          <div className="glass-card" style={{ borderLeft: '4px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(59, 130, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6'
              }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                {research.approach.title}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
              {research.approach.description}
            </p>
          </div>
        </div>

        {/* Featured Flagship Research System: AI3D */}
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 33, 58, 0.9) 0%, rgba(11, 43, 85, 0.85) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.35), 0 0 30px rgba(59, 130, 246, 0.15)',
            marginBottom: '32px',
            padding: '34px'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.85rem' }}>
                  <Award size={14} />
                  Article Majeur Revue Q1 (IF ≈ 8.0)
                </span>
                <span className="badge badge-cyan">Système AI3D</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: '4px' }}>
                {research.ai3d.title}
              </h3>
              <div style={{ fontSize: '0.92rem', color: '#93c5fd', fontStyle: 'italic' }}>
                {research.ai3d.fullTitle}
              </div>
            </div>
          </div>

          <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '22px' }}>
            {research.ai3d.description}
          </p>

          {/* Interactive visual flow cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginTop: '20px'
            }}
          >
            {research.ai3d.keyStrengths.map((str, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <CheckCircle size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: '500' }}>{str}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-column grid for DeepGCSS and Overall Contribution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {/* DeepGCSS Card */}
          <div className="glass-card" style={{ borderTop: '4px solid #10b981' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981'
              }}>
                <Layers size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {research.deepgcss.title}
                </h3>
                <span className="badge badge-emerald">Revue Q1 (IF ≈ 6.0)</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '16px' }}>
              {research.deepgcss.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {research.deepgcss.keyStrengths.map((str, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  <CheckCircle size={14} color="#10b981" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Contribution Card */}
          <div className="glass-card" style={{ borderTop: '4px solid #8b5cf6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8b5cf6'
              }}>
                <Network size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                {research.contribution.title}
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '16px' }}>
              {research.contribution.description}
            </p>

            <div style={{
              background: 'var(--bg-tertiary)',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div><strong>Piliers scientifiques :</strong></div>
              <div>• Classification de formes géométriques & invariants de courbure</div>
              <div>• Réseaux neuronaux profonds & robustesse formelle</div>
              <div>• Certification conjointe et vérification multimodale (2D/3D)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
