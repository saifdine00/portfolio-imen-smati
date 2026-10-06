'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { UserCheck, Shield, GraduationCap, CheckCircle2, Cpu, BookOpenCheck } from 'lucide-react';

export default function AcademicProfile() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="profil" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={16} />
            <span>Synthèse & Vision</span>
          </div>
          <h2 className="section-title">Profil académique</h2>
          <p className="section-subtitle">
            Une trajectoire construite autour de l’informatique, de l’Intelligence Artificielle et de l’enseignement supérieur.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '26px'
          }}
        >
          {/* Scientific Positioning Card */}
          <div className="glass-card" style={{ borderTop: '4px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6'
                }}
              >
                <Cpu size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                  {profile.scientific.title}
                </h3>
                <span className="badge badge-primary">Recherche & Innovation</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '20px', lineHeight: 1.6 }}>
              {profile.scientific.summary}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {profile.scientific.highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2 size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pedagogical Positioning Card */}
          <div className="glass-card" style={{ borderTop: '4px solid #06b6d4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4'
                }}
              >
                <BookOpenCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                  {profile.pedagogical.title}
                </h3>
                <span className="badge badge-cyan">Enseignement ISIGK</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '20px', lineHeight: 1.6 }}>
              {profile.pedagogical.summary}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {profile.pedagogical.highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
