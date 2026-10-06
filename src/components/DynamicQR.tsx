'use client';

import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Copy, Check, Download, ExternalLink, Sparkles } from 'lucide-react';

interface DynamicQRProps {
  compact?: boolean;
}

export default function DynamicQR({ compact = false }: DynamicQRProps) {
  const [url, setUrl] = useState<string>('https://portfolio-imen-smati.vercel.app');
  const [copied, setCopied] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const qrRef = useRef<HTMLDivElement>(null);

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
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Chargement du QR Code...</div>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#0f172a',
      padding: compact ? '20px' : '26px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255,255,255,0.2)',
      textAlign: 'center',
      position: 'relative',
      maxWidth: compact ? '100%' : '340px',
      margin: '0 auto',
      transition: 'transform 0.3s ease'
    }}>
      {/* Top Header Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: '700', color: '#1e3a8a' }}>
          <QrCode size={18} color="#2563eb" />
          <span>Accès Rapide & Mobile</span>
        </div>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: '700',
          padding: '2px 8px',
          borderRadius: '999px',
          background: '#ecfdf5',
          color: '#047857',
          border: '1px solid #a7f3d0'
        }}>
          Direct
        </span>
      </div>

      {/* QR Code Container */}
      <div
        ref={qrRef}
        style={{
          background: '#ffffff',
          padding: '14px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.04)',
          marginBottom: '14px'
        }}
      >
        <QRCodeSVG
          value={url}
          size={compact ? 140 : 170}
          level="H"
          marginSize={1}
          fgColor="#0a1e3f"
          bgColor="#ffffff"
        />
      </div>

      {/* URL information & edit mode */}
      {isEditing ? (
        <div style={{ marginBottom: '12px' }}>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #93c5fd',
              fontSize: '0.82rem',
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
              fontSize: '0.75rem',
              fontWeight: '600',
              background: '#2563eb',
              color: 'white',
              borderRadius: '6px'
            }}
          >
            Valider l&apos;URL
          </button>
        </div>
      ) : (
        <div style={{ marginBottom: '14px' }}>
          <p style={{
            fontSize: '0.78rem',
            color: '#64748b',
            wordBreak: 'break-all',
            lineHeight: 1.4,
            maxHeight: '38px',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {url}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              fontSize: '0.72rem',
              color: '#2563eb',
              fontWeight: '600',
              textDecoration: 'underline',
              marginTop: '2px',
              display: 'inline-block'
            }}
          >
            Modifier l&apos;URL de publication
          </button>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px'
      }}>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '9px 12px',
            background: copied ? '#059669' : '#1e293b',
            color: 'white',
            borderRadius: '10px',
            fontSize: '0.8rem',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
            padding: '9px 12px',
            background: '#2563eb',
            color: 'white',
            borderRadius: '10px',
            fontSize: '0.8rem',
            fontWeight: '600',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 6px rgba(37,99,235,0.3)'
          }}
        >
          <Download size={14} />
          <span>Télécharger QR</span>
        </button>
      </div>
    </div>
  );
}
