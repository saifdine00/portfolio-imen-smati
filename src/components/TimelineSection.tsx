'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, School, UserCheck, CheckCircle, Sparkles } from 'lucide-react';

export default function TimelineSection() {
  const { cursus } = PORTFOLIO_DATA;

  return (
    <section id="cursus" className="section section-alternate">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={16} />
            <span>Diplômes & Cursus</span>
          </div>
          <h2 className="section-title">Cursus universitaire</h2>
          <p className="section-subtitle">
            Progression continue de la statistique et analyse de l’information vers l’informatique et l’Intelligence Artificielle de pointe.
          </p>
        </div>

        {/* Timeline container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '3px',
              background: 'linear-gradient(to bottom, #3b82f6, #06b6d4, #10b981)',
              borderRadius: '999px'
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {cursus.map((item, index) => {
              const isDoctorate = index === 0;
              const isMaster = index === 1;

              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '28px',
                    position: 'relative'
                  }}
                  className="timeline-item"
                >
                  {/* Circle dot marker */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: isDoctorate ? '#3b82f6' : isMaster ? '#06b6d4' : '#10b981',
                      border: '4px solid var(--bg-secondary)',
                      boxShadow: `0 0 0 2px ${isDoctorate ? '#3b82f6' : isMaster ? '#06b6d4' : '#10b981'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0,
                      zIndex: 2
                    }}
                  >
                    {isDoctorate ? <GraduationCap size={20} /> : isMaster ? <Award size={20} /> : <School size={18} />}
                  </div>

                  {/* Card Content */}
                  <div className="glass-card" style={{ flex: 1, padding: '24px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: '800',
                          color: isDoctorate ? '#60a5fa' : isMaster ? '#38bdf8' : '#34d399',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.degree}
                      </span>
                      <span
                        className={`badge ${isDoctorate ? 'badge-gold' : isMaster ? 'badge-primary' : 'badge-emerald'}`}
                        style={{ fontWeight: '700' }}
                      >
                        <Award size={13} />
                        {item.mention}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {item.field}
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <School size={15} color="var(--primary-light)" />
                        <span>{item.institution}</span>
                      </div>
                      {item.director && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <UserCheck size={15} color="#38bdf8" />
                          <span>Direction : <strong>{item.director}</strong></span>
                        </div>
                      )}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '14px' }}>
                      {item.description}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                            <CheckCircle size={14} color="#10b981" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skill tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: 'var(--bg-tertiary)',
                            fontSize: '0.78rem',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .timeline-line {
            left: 15px !important;
          }
          .timeline-item {
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
