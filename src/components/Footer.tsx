'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, School, GraduationCap, Heart, QrCode } from 'lucide-react';

export default function Footer() {
  const { identity } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040d18',
        color: '#f8fafc',
        padding: '50px 0 35px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#ffffff', marginBottom: '4px' }}>
              {identity.fullName}
            </div>
            <div style={{ fontSize: '0.92rem', color: '#93c5fd', fontWeight: '600' }}>
              {identity.title} — {identity.affiliations[0]}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '620px', marginTop: '8px' }}>
              Portfolio académique préparé pour le concours national de recrutement au grade de Maître Assistant en Informatique.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Haut de page</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.8rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} Dr. Imen SMATI. Tous droits réservés.
          </div>
          <div>
            ENSI — Laboratoire CRISTAL — Pôle GRIFT & ISIGK
          </div>
        </div>
      </div>
    </footer>
  );
}
