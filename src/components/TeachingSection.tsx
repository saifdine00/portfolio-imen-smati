'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { BookOpen, Layers, Laptop, School, Calendar, CheckCircle2, Terminal, Cpu, Database, Network } from 'lucide-react';

export default function TeachingSection() {
  const { teaching } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'cours' | 'td' | 'tp'>('all');

  return (
    <section id="enseignement" className="section section-alternate">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <School size={16} />
            <span>Expérience Universitaire</span>
          </div>
          <h2 className="section-title">Activités pédagogiques</h2>
          <p className="section-subtitle">
            Enseignements dispensés à l’<strong>Institut Supérieur d’Informatique et de Gestion de Kairouan (ISIGK)</strong> depuis septembre 2022.
          </p>
        </div>

        {/* Institution Highlight Banner */}
        <div
          className="glass-card"
          style={{
            marginBottom: '32px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid var(--border-highlight)',
            padding: '20px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0
            }}>
              <School size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                {teaching.institution}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {teaching.period} — Cours Magistraux, Travaux Dirigés et Travaux Pratiques
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="badge badge-primary">4 Cours</span>
            <span className="badge badge-cyan">3 TD</span>
            <span className="badge badge-emerald">5 TP</span>
          </div>
        </div>

        {/* 3 Grid Columns: Cours / TD / TP */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
          className="teaching-grid"
        >
          {/* Column 1: Cours Magistraux */}
          <div className="glass-card" style={{ borderTop: '4px solid #3b82f6', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(59, 130, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6'
              }}>
                <BookOpen size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Cours</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Enseignement magistral</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {teaching.categories.cours.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  {item.description && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.4 }}>
                      {item.description}
                    </div>
                  )}
                  {item.tools && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {item.tools.map((t, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '0.72rem', padding: '2px 7px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.12)', color: 'var(--primary-light)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Travaux Dirigés (TD) */}
          <div className="glass-card" style={{ borderTop: '4px solid #06b6d4', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#06b6d4'
              }}>
                <Layers size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Travaux Dirigés (TD)</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Résolution théorique & modélisation</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {teaching.categories.td.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  {item.description && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.4 }}>
                      {item.description}
                    </div>
                  )}
                  {item.tools && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {item.tools.map((t, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '0.72rem', padding: '2px 7px', borderRadius: '4px', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--accent-cyan)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Travaux Pratiques (TP) */}
          <div className="glass-card" style={{ borderTop: '4px solid #10b981', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981'
              }}>
                <Laptop size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Travaux Pratiques (TP)</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Implémentation logicielle & labos</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {teaching.categories.tp.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  {item.description && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.4 }}>
                      {item.description}
                    </div>
                  )}
                  {item.tools && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {item.tools.map((t, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '0.72rem', padding: '2px 7px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.12)', color: '#34d399' }}>
                          {t}
                        </span>
                      ))}
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
