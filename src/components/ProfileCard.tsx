'use client';

import React, { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Copy, Check, Download, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ProfileCardProps {
  compact?: boolean;
}

export default function ProfileCard({ compact = false }: ProfileCardProps) {
  const { identity } = PORTFOLIO_DATA;

  const [url, setUrl] = useState<string>('https://portfolio-imen-bice.vercel.app/');
  const [copied, setCopied] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const qrRef = useRef<HTMLDivElement>(null);

  // Dimensions logiques de la photo (ratio original 640 x 924)
  const photoWidth = compact ? 132 : 180;
  const photoHeight = compact ? 191 : 260;
  const qrSize = compact ? 78 : 92;

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const current = window.location.href;
      if (current && !current.includes('localhost') && !current.includes('127.0.0.1')) {
        setUrl(current);
      }
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 400;
      canvas.height = 400;
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 20, 20, 360, 360);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `QR_Portfolio_Imen_SMATI.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  if (!isMounted) {
    return (
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        textAlign: 'center',
        minHeight: '260px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Chargement du profil...</div>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#0f172a',
      padding: compact ? '18px' : '22px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255,255,255,0.2)',
      textAlign: 'center',
      position: 'relative',
      maxWidth: compact ? '100%' : '300px',
      margin: '0 auto',
      transition: 'transform 0.3s ease'
    }}>
      {/* Top Header Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        
      
        
      </div>

      {/* Profile Photo */}
      <div
        style={{
          background: '#ffffff',
          padding: '8px',
          borderRadius: '18px',
          border: '1px solid #e2e8f0',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.04), 0 8px 20px rgba(15, 23, 42, 0.12)',
          marginBottom: '12px'
        }}
      >
        <NextImage
          src="/imensmati.jpg"
          alt="Portrait de Imen SMATI"
          width={photoWidth}
          height={photoHeight}
          priority
          style={{
            width: photoWidth,
            height: photoHeight,
            objectFit: 'cover',
            objectPosition: 'center top',
            borderRadius: '12px',
            display: 'block'
          }}
        />
      </div>

      {/* Identity caption */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: compact ? '1rem' : '1.08rem', fontWeight: '800', color: '#0f172a' }}>
          {identity.fullName}
        </div>
        <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#2563eb', marginTop: '2px' }}>
          {identity.title}
        </div>
      </div>

      {/* Separator */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)',
        margin: '0 0 12px'
      }} />

      {/* Secondary QR Code */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
        <div
          ref={qrRef}
          style={{
            background: '#ffffff',
            padding: '6px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            flexShrink: 0
          }}
        >
          <QRCodeSVG
            value={url}
            size={qrSize}
            level="H"
            marginSize={1}
            fgColor="#0a1e3f"
            bgColor="#ffffff"
          />
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: '700', color: '#1e3a8a' }}>
            <QrCode size={14} color="#64748b" />
            <span>Partager ce portfolio</span>
          </div>

          {isEditing ? (
            <div style={{ marginTop: '6px' }}>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://..."
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  borderRadius: '8px',
                  border: '1px solid #93c5fd',
                  fontSize: '0.75rem',
                  color: '#0f172a',
                  outline: 'none',
                  background: '#f8fafc'
                }}
              />
              <button
                onClick={() => setIsEditing(false)}
                style={{
                  marginTop: '6px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  background: '#2563eb',
                  color: 'white',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Valider l&apos;URL
              </button>
            </div>
          ) : (
            <>
              <p style={{
                fontSize: '0.7rem',
                color: '#64748b',
                wordBreak: 'break-all',
                lineHeight: 1.35,
                margin: '4px 0 0'
              }}>
                {url}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                style={{
                  fontSize: '0.68rem',
                  color: '#2563eb',
                  fontWeight: '600',
                  textDecoration: 'underline',
                  marginTop: '2px',
                  display: 'inline-block',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer'
                }}
              >
                Modifier l&apos;URL de publication
              </button>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div
        className="qr-card-controls"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginTop: '14px'
        }}
      >
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '8px 10px',
            background: copied ? '#059669' : '#1e293b',
            color: 'white',
            borderRadius: '10px',
            fontSize: '0.76rem',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copié !</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copier le lien</span>
            </>
          )}
        </button>

        <button
          onClick={handleDownload}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '8px 10px',
            background: '#2563eb',
            color: 'white',
            borderRadius: '10px',
            fontSize: '0.76rem',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 6px rgba(37,99,235,0.3)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Download size={14} />
          <span>Télécharger QR</span>
        </button>
      </div>
    </div>
  );
}
