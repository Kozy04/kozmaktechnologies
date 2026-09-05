import React from 'react';
import { XCircle, CheckCircle2, ShieldAlert, Cpu, Rocket, ArrowRight } from 'lucide-react';

interface AiAdvantageSectionProps {
  onAuditRequest: () => void;
}

export const AiAdvantageSection: React.FC<AiAdvantageSectionProps> = ({ onAuditRequest }) => {
  return (
    <section id="ai-advantage" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill purple">
            <Cpu size={14} />
            <span>The AI Disruption & Engineering Truth</span>
          </div>
          <h2>
            Why Pure AI Generation Fails at Scale —{' '}
            <span className="gradient-text-purple">And Why You Need Kozmak</span>
          </h2>
          <p>
            AI tools have democratized writing code. But shipping a real business requires rock-solid architecture, low-level performance, cross-platform stability, and hardened security.
          </p>
        </div>

        {/* Side-by-side Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {/* Card 1: The Raw AI / Vibe Coding Trap */}
          <div className="glass-card" style={{
            borderColor: 'rgba(239, 68, 68, 0.35)',
            background: 'var(--card-bg)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldAlert size={20} color="#ef4444" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#ef4444' }}>The "Raw AI / Vibe-Coding" Trap</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Surface-level prototypes without foundations</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Fragile Architecture:</strong> Brittle, copy-pasted boilerplate filled with silent memory leaks and race conditions.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Security Vulnerabilities:</strong> Exposed API keys, missing authorization checks, and flawed SQL/data models.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Single-Platform Silos:</strong> Limited to web templates; unable to engineer custom 3D game engines or native desktop software.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Breaks Under Traffic:</strong> Collapses as soon as the app reaches concurrency or complex transactional flows.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: The Kozmak Engineering Standard */}
          <div className="glass-card" style={{
            borderColor: 'var(--card-border-glow)',
            background: 'var(--card-bg)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0, 242, 254, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Rocket size={20} color="var(--accent-cyan)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>The Kozmak Engineering Standard</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI Velocity + Senior Systems Engineering</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>5x Accelerated Velocity:</strong> We harness state-of-the-art AI tooling to eliminate boilerplate, shipping MVPs in weeks not months.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Hardcore Systems Rigor:</strong> Production-grade data schemas, encrypted vaults (AES-256), and rigorous unit/load test suites.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>True Multi-Platform Mastery:</strong> Seamless architecture across Desktop (Electron/Native), Web, Mobile (iOS/Android), and 3D Game Engines.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Investor & Enterprise Ready:</strong> Clean, maintainable, fully documented intellectual property that your in-house team can scale forever.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lead Magnet Banner: Free AI Code Audit */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border-glow)',
          borderRadius: '1.25rem',
          padding: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          boxShadow: 'var(--card-shadow)'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--accent-cyan)', 
              fontSize: '0.85rem', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em' 
            }}>
              ⭐ Inbound Founder Diagnostic
            </span>
            <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              Built a Prototype with AI That is Hitting a Wall?
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Request our <strong style={{ color: 'var(--text-main)' }}>Free 12-Point AI Prototype & Production Readiness Audit</strong>. We inspect your code, detect security liabilities, review multi-platform viability, and provide a concrete production roadmap.
            </p>
          </div>
          <button 
            onClick={onAuditRequest}
            className="btn-primary" 
            style={{ padding: '0.95rem 1.85rem', flexShrink: 0 }}
          >
            <span>Claim Free Architecture Audit</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
