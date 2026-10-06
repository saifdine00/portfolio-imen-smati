'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Publication } from '@/data/portfolioData';
import { Presentation, BookOpen, Award, FileCode, Copy, Check, Star, Globe } from 'lucide-react';

export default function CommunicationsSection() {
  const commsAndChapters = PORTFOLIO_DATA.publications.filter(p => p.type !== 'journal');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openBibtexId, setOpenBibtexId] = useState<string | null>(null);

  const copyBibtex = async (pub: Publication) => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="communications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Presentation size={16} />
            <span>Conférences & Ouvrages</span>
          </div>
          <h2 className="section-title">Communications et chapitre d’ouvrage</h2>
          <p className="section-subtitle">
            Communications orales lors de conférences internationales majeures (dont IEEE ICIP Classe A) et chapitre d’ouvrage scientifique Springer.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '22px' }}>
          {commsAndChapters.map((item) => {
            const isICIP = item.id === 'icip-2022';
            const isSpringer = item.type === 'book_chapter';

            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  borderTop: isICIP ? '4px solid #f59e0b' : isSpringer ? '4px solid #8b5cf6' : '4px solid #3b82f6',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                    <span
                      className={`badge ${isICIP ? 'badge-gold' : isSpringer ? 'badge-purple' : 'badge-primary'}`}
                      style={{ fontWeight: '700' }}
                    >
                      {isICIP && <Star size={12} />}
                      {item.ranking}
                    </span>
                    <span className="badge badge-cyan">{item.year}</span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>

                  <div style={{ fontSize: '0.88rem', color: 'var(--primary-light)', fontWeight: '600', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Globe size={14} />
                    <span>{item.venue}</span>
                  </div>

                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                    <strong>Auteurs : </strong>
                    {item.authors.map((author, aIdx) => {
                      const isImen = author.toLowerCase().includes('imen');
                      return (
                        <span key={aIdx}>
                          {isImen ? <strong style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>{author}</strong> : author}
                          {aIdx < item.authors.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </div>

                  {item.abstract && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '14px' }}>
                      {item.abstract}
                    </p>
                  )}
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'var(--bg-tertiary)',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      onClick={() => setOpenBibtexId(openBibtexId === item.id ? null : item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '5px 10px',
                        borderRadius: '6px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.76rem',
                        fontWeight: '600'
                      }}
                    >
                      <FileCode size={13} />
                      <span>{openBibtexId === item.id ? 'Masquer' : 'BibTeX'}</span>
                    </button>
                    <button
                      onClick={() => copyBibtex(item)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '5px 10px',
                        borderRadius: '6px',
                        background: copiedId === item.id ? '#059669' : 'var(--bg-tertiary)',
                        border: '1px solid var(--border-medium)',
                        color: copiedId === item.id ? 'white' : 'var(--text-secondary)',
                        fontSize: '0.76rem',
                        fontWeight: '600'
                      }}
                    >
                      {copiedId === item.id ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedId === item.id ? 'Copié !' : 'Citer'}</span>
                    </button>
                  </div>

                  {openBibtexId === item.id && (
                    <div
                      style={{
                        marginTop: '12px',
                        padding: '10px',
                        background: '#090d16',
                        borderRadius: '8px',
                        border: '1px solid var(--border-medium)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: '#a5f3fc',
                        overflowX: 'auto',
                        whiteSpace: 'pre'
                      }}
                    >
                      {item.bibtex}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
