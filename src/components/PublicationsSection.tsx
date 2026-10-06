'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Publication } from '@/data/portfolioData';
import { BookOpen, Award, FileCode, Check, Copy, ExternalLink, Sparkles, Star } from 'lucide-react';

export default function PublicationsSection() {
  const journals = PORTFOLIO_DATA.publications.filter(p => p.type === 'journal');
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
    <section id="publications" className="section section-alternate">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={16} />
            <span>Revues Internationales Q1</span>
          </div>
          <h2 className="section-title">Publications scientifiques</h2>
          <p className="section-subtitle">
            Articles parus dans des revues internationales de premier rang (Premier Quartile — Q1) avec forts facteurs d&apos;impact.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {journals.map((pub) => {
            const isAI3D = pub.id === 'pr-2025';

            return (
              <div
                key={pub.id}
                className="glass-card"
                style={{
                  borderLeft: isAI3D ? '5px solid #f59e0b' : '5px solid #3b82f6',
                  padding: '30px'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-gold" style={{ fontWeight: '800' }}>
                      <Star size={13} />
                      {pub.ranking}
                    </span>
                    {pub.impactFactor && (
                      <span className="badge badge-primary" style={{ fontWeight: '700' }}>
                        {pub.impactFactor}
                      </span>
                    )}
                    <span className="badge badge-cyan">
                      {pub.dateStr || pub.year}
                    </span>
                  </div>

                  {/* Actions: BibTeX button */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setOpenBibtexId(openBibtexId === pub.id ? null : pub.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      <FileCode size={14} />
                      <span>{openBibtexId === pub.id ? 'Masquer BibTeX' : 'BibTeX'}</span>
                    </button>
                    <button
                      onClick={() => copyBibtex(pub)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: copiedId === pub.id ? '#059669' : 'var(--bg-tertiary)',
                        border: '1px solid var(--border-medium)',
                        color: copiedId === pub.id ? 'white' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      {copiedId === pub.id ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedId === pub.id ? 'Copié !' : 'Citer'}</span>
                    </button>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  {pub.title}
                </h3>

                <div style={{ fontSize: '0.98rem', color: '#38bdf8', fontWeight: '700', marginBottom: '10px' }}>
                  {pub.venue}
                </div>

                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  <strong>Auteurs : </strong>
                  {pub.authors.map((author, aIdx) => {
                    const isImen = author.toLowerCase().includes('imen');
                    return (
                      <span key={aIdx}>
                        {isImen ? (
                          <strong style={{ color: 'var(--primary-light)', textDecoration: 'underline' }}>
                            {author}
                          </strong>
                        ) : (
                          author
                        )}
                        {aIdx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </div>

                {pub.abstract && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '14px' }}>
                    {pub.abstract}
                  </p>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {pub.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'var(--bg-tertiary)',
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* BibTeX drawer */}
                {openBibtexId === pub.id && (
                  <div
                    style={{
                      marginTop: '16px',
                      padding: '14px',
                      background: '#090d16',
                      borderRadius: '10px',
                      border: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#a5f3fc',
                      overflowX: 'auto',
                      whiteSpace: 'pre'
                    }}
                  >
                    {pub.bibtex}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
