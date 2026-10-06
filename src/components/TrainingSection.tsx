'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Award, GraduationCap, Users, Calendar, CheckCircle2, Clock, Globe, Shield } from 'lucide-react';

export default function TrainingSection() {
  const { trainingsAndOutreach } = PORTFOLIO_DATA;

  return (
    <section id="formations" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={16} />
            <span>Développement Continu</span>
          </div>
          <h2 className="section-title">Formation continue et rayonnement</h2>
          <p className="section-subtitle">
            Certifications techniques, perfectionnement pédagogique et participation active aux manifestations scientifiques internationales.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '26px'
          }}
        >
          {/* Card 1: Formations Continues */}
          <div className="glass-card" style={{ borderTop: '4px solid #3b82f6', padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6'
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                  Formations Certifiantes
                </h3>
                <span className="badge badge-primary">Pédagogie & IA avancée</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {trainingsAndOutreach.trainings.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {item.title}
                    </div>
                    {item.duration && (
                      <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                        <Clock size={11} />
                        {item.duration}
                      </span>
                    )}
                    {item.year && (
                      <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                        {item.year}
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '0.84rem', color: '#60a5fa', fontWeight: '600' }}>
                    {item.organization}
                  </div>

                  {item.description && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Manifestations et Responsabilités */}
          <div className="glass-card" style={{ borderTop: '4px solid #06b6d4', padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4'
                }}
              >
                <Users size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                  Manifestations & Responsabilités
                </h3>
                <span className="badge badge-cyan">Organisation & Volontariat</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {trainingsAndOutreach.eventsAndRoles.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {item.title}
                    </div>
                    {item.year && (
                      <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                        {item.year}
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '0.84rem', color: '#38bdf8', fontWeight: '600' }}>
                    {item.organization}
                  </div>

                  {item.role && (
                    <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700' }}>
                      ★ {item.role}
                    </div>
                  )}

                  {item.description && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
