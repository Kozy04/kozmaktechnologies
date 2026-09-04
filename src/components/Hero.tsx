import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Layers, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  return (
    <section className="section-wrapper" style={{ paddingTop: '8.5rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 3.5rem' }}>
          
          {/* Top Pill */}
          <div className="badge-pill">
            <span className="pulsing-dot"></span>
            <span>Next-Gen Multi-Platform Engineering Agency</span>
          </div>

          {/* Main Headline */}
          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 5.2vw, 4.1rem)', 
            lineHeight: 1.12, 
            marginBottom: '1.5rem',
            fontWeight: 800
          }}>
            We Engineer Production Software Across{' '}
            <span className="gradient-text-aurora">Desktop, Web, Mobile & 3D Games</span>
          </h1>

          {/* Subtitle */}
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.28rem)', 
            color: 'var(--text-secondary)', 
            maxWidth: '740px', 
            margin: '0 auto 2.5rem',
            lineHeight: 1.65
          }}>
            Anyone can prompt an AI to generate code. We build the <strong style={{ color: '#fff' }}>hardcore engineering architecture</strong> that makes it secure, scalable, and cross-platform—delivering high-performance software at 5x speed.
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <button 
              onClick={onOpenCalculator}
              className="btn-primary" 
              style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}
            >
              <Sparkles size={19} />
              <span>Calculate Project Scope & Budget</span>
              <ArrowRight size={17} />
            </button>
            <a 
              href="#portfolio" 
              className="btn-secondary"
              style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
            >
              <span>Explore Featured Works</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            padding: '1.25rem',
            background: 'rgba(13, 19, 35, 0.45)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <Terminal size={20} color="var(--accent-cyan)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Native Systems</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Electron, C#, WebGL</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <Layers size={20} color="var(--accent-blue)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Multi-Platform</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Desktop, Web & Mobile</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <ShieldCheck size={20} color="var(--accent-emerald)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>Hardened Security</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bank-Grade Encryption</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <Cpu size={20} color="var(--accent-magenta)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>AI-Accelerated</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>5x Delivery Velocity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Concept Graphic */}
        <div style={{
          position: 'relative',
          maxWidth: '1080px',
          margin: '0 auto',
          borderRadius: '1.5rem',
          padding: '0.5rem',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.3) 0%, rgba(121, 40, 202, 0.3) 50%, rgba(0, 223, 137, 0.2) 100%)',
          boxShadow: '0 25px 60px -15px rgba(0, 242, 254, 0.25)'
        }}>
          <div style={{
            position: 'relative',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#07090e',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <img 
              src="/images/kozmak_hero.jpg" 
              alt="Kozmak Technologies Multi-Platform Unified Engineering Architecture" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'brightness(0.96) contrast(1.05)',
                transition: 'transform 0.5s ease'
              }}
            />
            
            {/* Overlay Badges */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              right: '1.25rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(6, 8, 15, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '0.85rem',
              padding: '0.85rem 1.25rem',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="pulsing-dot" style={{ color: 'var(--accent-emerald)' }}></span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                  PLATFORM CORE: OPERATIONAL
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <span>Web Apps</span> • <span>Mobile</span> • <span>Desktop Native</span> • <span>KozEngine 3D</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
