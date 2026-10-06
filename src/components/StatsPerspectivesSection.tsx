'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { BarChart3, TrendingUp, Sparkles, Compass, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';

export default function StatsPerspectivesSection() {
  const { stats, perspectives } = PORTFOLIO_DATA;

  return (
    <section id="bilan" className="section section-alternate">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BarChart3 size={16} />
            <span>Synthèse & Avenir</span>
          </div>
          <h2 className="section-title">Bilan et perspectives</h2>
          <p className="section-subtitle">
            Indicateurs clés du dossier scientifique et pédagogique et orientations futures de recherche et d’enseignement.
          </p>
        </div>

        {/* 3 Stats Cards in grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                textAlign: 'center',
                padding: '28px 20px',
                borderTop: idx === 0 ? '4px solid #f59e0b' : idx === 1 ? '4px solid #3b82f6' : idx === 2 ? '4px solid #8b5cf6' : '4px solid #10b981'
              }}
            >
              <div
                style={{
                  fontSize: '3.4rem',
                  fontWeight: '900',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '10px'
                }}
              >
                {st.value}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {st.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {st.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Perspectives Card */}
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(13, 27, 46, 0.95) 100%)',
            border: '1px solid var(--border-highlight)',
            padding: '34px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8'
              }}
            >
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                {perspectives.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {perspectives.summary}
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginTop: '20px'
            }}
          >
            {/* Research Vision */}
            <div
              style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '14px',
                padding: '20px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <ShieldCheck size={18} color="#38bdf8" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {perspectives.researchVision.title}
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {perspectives.researchVision.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedagogical Vision */}
            <div
              style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '14px',
                padding: '20px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <GraduationCap size={18} color="#10b981" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {perspectives.pedagogicalVision.title}
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {perspectives.pedagogicalVision.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
