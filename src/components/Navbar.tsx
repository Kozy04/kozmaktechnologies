import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2, Sparkles, Sun, Moon } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        padding: isScrolled ? '0.75rem 0' : '1.1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '9px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
          }}>
            <Code2 size={20} color="#040813" strokeWidth={2.5} />
          </div>
          <div>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.2rem', 
              letterSpacing: '-0.02em',
              color: 'var(--text-main)'
            }}>
              KOZMAK
            </span>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 700, 
              fontSize: '1.2rem', 
              letterSpacing: '-0.02em',
              color: 'var(--accent-cyan)',
              marginLeft: '4px'
            }}>
              TECH
            </span>
          </div>
        </a>

        {/* Standard Clean Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#portfolio" className="nav-link">
            Case Studies
          </a>
          <a href="#engine-demo" className="nav-link">
            3D Engine
          </a>
          <a href="#micro-services" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Micro-Sprints</span>
            <span style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              background: 'rgba(0, 223, 137, 0.15)',
              color: 'var(--accent-emerald)',
              padding: '0.1rem 0.4rem',
              borderRadius: '9999px',
              fontWeight: 700
            }}>
              48h
            </span>
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </nav>

        {/* Right Actions: Theme Toggle + Estimator + Start Project */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="nav-actions">
          {/* Theme Toggle Button */}
          <button 
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} color="var(--accent-amber)" />
            ) : (
              <Moon size={18} color="var(--accent-purple)" />
            )}
          </button>

          {/* Scope Estimator Quick Link */}
          <button 
            type="button"
            onClick={onOpenCalculator}
            className="btn-secondary"
            style={{ padding: '0.6rem 1.15rem', fontSize: '0.85rem' }}
          >
            <Sparkles size={15} color="var(--accent-cyan)" />
            <span>Scope Estimator</span>
          </button>

          {/* Primary CTA */}
          <a 
            href="#contact" 
            className="btn-primary"
            style={{ padding: '0.6rem 1.35rem', fontSize: '0.85rem', flexShrink: 0 }}
          >
            <span>Start Project</span>
            <ArrowRight size={14} />
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.4rem'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--nav-bg)',
          borderBottom: '1px solid var(--nav-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Theme Appearance</span>
            <button 
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun size={17} color="var(--accent-amber)" /> : <Moon size={17} color="var(--accent-purple)" />}
            </button>
          </div>

          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 500 }}>Services</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 500 }}>Case Studies</a>
          <a href="#engine-demo" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 500 }}>3D Engine</a>
          <a href="#micro-services" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-emerald)', fontSize: '1.05rem', fontWeight: 600 }}>Micro-Sprints (48h)</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 500 }}>Engineering Blog</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 500 }}>FAQ</a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
            <button 
              type="button"
              onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
              className="btn-secondary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={16} color="var(--accent-cyan)" />
              <span>Scope Estimator</span>
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Start Project</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--accent-cyan);
        }
        @media (max-width: 980px) {
          .desktop-nav { display: none !important; }
          .nav-actions .btn-secondary { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
