import React from 'react';
import { Code2, Mail, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      background: 'var(--bg-secondary)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Col */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Code2 size={20} color="#040813" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)' }}>
                KOZMAK <span style={{ color: 'var(--accent-cyan)' }}>TECH</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Next-generation software engineering agency. Combining cutting-edge AI acceleration with senior systems architecture across Desktop, Web, Mobile, and 3D Game Engines.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <Mail size={15} color="var(--accent-cyan)" />
              <a href="mailto:info@kozmaktechnologies.com" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>
                info@kozmaktechnologies.com
              </a>
            </div>
          </div>

          {/* Platforms We Build */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Engineering Pillars
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Desktop Native & Electron</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Web Platforms & Cloud SaaS</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>iOS & Android Mobile Apps</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>3D Game Engines & WebGL</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Computer Vision & AI Workflows</a></li>
            </ul>
          </div>

          {/* Live Ecosystem / Products */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Live Platform Showcase
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <a 
                  href="https://smartrenameai.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>SmartRename AI</span>
                  <ExternalLink size={12} />
                </a>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>smartrenameai.online</div>
              </li>
              <li>
                <a 
                  href="https://zinter.com.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Zinter Platform</span>
                  <ExternalLink size={12} />
                </a>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>zinter.com.ng</div>
              </li>
              <li>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>KozEngine (Nexus 3D)</span>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Proprietary 3D Game Engine</div>
              </li>
              <li>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>NexaFi Neobank</span>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI-Powered Emerging Markets DeFi</div>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Scope */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Get In Touch
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Ready to launch your project with battle-tested systems engineering?
            </p>
            <a href="#contact" className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem', display: 'inline-flex' }}>
              <span>Book Architecture Session</span>
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{
          borderTop: '1px solid var(--card-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Kozmak Technologies (kozmaktechnologies.com). All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button 
              onClick={scrollToTop}
              className="btn-secondary"
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.78rem',
                gap: '0.35rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
