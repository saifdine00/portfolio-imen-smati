'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import ProfileCard from './ProfileCard';
import { Award, BookOpen, GraduationCap, Sparkles, School, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { identity } = PORTFOLIO_DATA;

  return (
    <section
      style={{
        position: 'relative',
        padding: '70px 0 65px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #07152b 0%, #0b254d 50%, #0f356b 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
      className="hero"
    >
      {/* Decorative background glow lights */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.45fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Academic Credentials */}
          <div>
            {/* Kicker badge */}
            

            {/* Name */}
            <h1
              style={{
                fontSize: '3.4rem',
                fontWeight: '900',
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '14px',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}
              className="hero-title"
            >
              {identity.fullName}
            </h1>

            {/* Title & Affiliation Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <GraduationCap size={20} color="#38bdf8" />
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>
                  {identity.title}
                </span>
                
              </div>
              <div style={{ fontSize: '0.95rem', color: '#93c5fd', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <School size={16} color="#93c5fd" />
                <span>Laboratoire CRISTAL — Pôle GRIFT — ENSI</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '4px' }}>
                Enseignement à l&apos;Institut Supérieur d&apos;Informatique et de Gestion de Kairouan (ISIGK)
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: '#e2e8f0',
                lineHeight: 1.65,
                maxWidth: '680px',
                marginBottom: '24px',
                opacity: 0.95
              }}
            >
              {identity.bio}
            </p>

            {/* Keyword Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '28px'
              }}
            >
              {identity.keywords.map((kw, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 13px',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#f8fafc',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Sparkles size={12} color="#38bdf8" />
                  {kw}
                </span>
              ))}
            </div>

            {/* Quick Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#publications" className="btn btn-primary">
                <BookOpen size={18} />
                <span>Voir les Publications (Q1)</span>
              </a>
              <a href="#enseignement" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}>
                <School size={18} />
                <span>Activités ISIGK</span>
              </a>
              <a href="#recherche" className="btn btn-accent">
                <ShieldCheck size={18} />
                <span>Système AI3D</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card (QR code secondaire) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProfileCard />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
