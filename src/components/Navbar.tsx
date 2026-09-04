import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
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
        background: isScrolled ? 'rgba(6, 8, 15, 0.88)' : 'rgba(6, 8, 15, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: isScrolled ? '0.85rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
          }}>
            <Code2 size={22} color="#040813" strokeWidth={2.5} />
          </div>
          <div>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}>
              KOZMAK
            </span>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 600, 
              fontSize: '1.25rem', 
              letterSpacing: '-0.02em',
              color: 'var(--accent-cyan)',
              marginLeft: '4px'
            }}>
              TECH
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <a href="#services" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Services
          </a>
          <a href="#portfolio" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Case Studies
          </a>
          <a href="#ai-advantage" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            The AI Edge
          </a>
          <a href="#engine-demo" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            3D Engine Demo
          </a>
          <a href="#process" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Process
          </a>
          <a href="#micro-services" style={{ color: 'var(--accent-emerald)', fontSize: '0.92rem', fontWeight: 600, transition: 'color 0.2s' }}>
            Micro-Sprints
          </a>
          <a href="#blog" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            Blog
          </a>
          <a href="#faq" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f2fe'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            FAQ
          </a>
        </nav>

        {/* Right Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }} className="nav-actions">
          <button 
            onClick={onOpenCalculator}
            className="btn-secondary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span>Scope Estimator</span>
          </button>
          <a 
            href="#contact" 
            className="btn-primary"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
          >
            <span>Start Project</span>
            <ArrowRight size={15} />
          </a>
          
          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
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

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(6, 8, 15, 0.98)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>Services</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>Case Studies</a>
          <a href="#ai-advantage" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>The AI Edge</a>
          <a href="#engine-demo" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>3D Engine Demo</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>Process</a>
          <a href="#micro-services" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-emerald)', fontSize: '1.05rem', fontWeight: 600 }}>Micro-Sprints</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>Blog</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>FAQ</a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
            <button 
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
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .nav-actions .btn-secondary { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
