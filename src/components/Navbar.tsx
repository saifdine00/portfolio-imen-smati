'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Printer, GraduationCap, ChevronRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profil');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['profil', 'cursus', 'publications', 'communications', 'enseignement', 'formations', 'bilan'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { id: 'profil', label: 'Profil' },
    { id: 'cursus', label: 'Cursus' },
    { id: 'publications', label: 'Publications' },
    { id: 'communications', label: 'Communications' },
    { id: 'enseignement', label: 'Enseignement' },
    { id: 'formations', label: 'Formations' },
    { id: 'bilan', label: 'Bilan' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        background: scrolled
          ? (theme === 'dark' ? 'rgba(7, 17, 30, 0.88)' : 'rgba(255, 255, 255, 0.88)')
          : (theme === 'dark' ? 'rgba(7, 17, 30, 0.6)' : 'rgba(255, 255, 255, 0.6)'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-medium)' : 'transparent'}`,
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Name */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
              fontWeight: '800',
              fontSize: '1.1rem'
            }}
          >
            IS
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--text-primary)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              {PORTFOLIO_DATA.identity.fullName}
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              Docteur en Informatique — ENSI
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'none',
            gap: '4px',
            alignItems: 'center',
            background: 'var(--bg-glass)',
            padding: '4px 6px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'white' : 'var(--text-secondary)',
                  background: isActive ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  boxShadow: isActive ? '0 2px 8px rgba(37, 99, 235, 0.35)' : 'none'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right controls: Print, Theme, Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Print CV / Dossier button */}
          

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-secondary)',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#3b82f6" />}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '20px 24px',
            boxShadow: '0 20px 30px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'white' : 'var(--text-primary)',
                  background: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.03)',
                  textDecoration: 'none'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} opacity={0.6} />
              </a>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .print-btn-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
