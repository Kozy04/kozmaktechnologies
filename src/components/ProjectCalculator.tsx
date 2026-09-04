import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ProjectCalculatorProps {
  onApplySpecToContact: (specSummary: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onApplySpecToContact }) => {
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'desktop' | 'games' | 'ai' | 'fullsuite'>('web');
  const [stage, setStage] = useState<'scratch' | 'scaling' | 'ai-rescue'>('scratch');
  const [features, setFeatures] = useState<string[]>(['auth', 'realtime']);

  const toggleFeature = (featId: string) => {
    if (features.includes(featId)) {
      setFeatures(features.filter(f => f !== featId));
    } else {
      setFeatures([...features, featId]);
    }
  };

  // Dynamic pricing & timeline calculation logic
  const calculateEstimate = () => {
    let baseWeeks = 4;
    let basePriceMin = 5000;
    let basePriceMax = 9500;

    // Platform weights
    if (platform === 'mobile') {
      baseWeeks += 2;
      basePriceMin += 3000;
      basePriceMax += 5000;
    } else if (platform === 'desktop') {
      baseWeeks += 3;
      basePriceMin += 4000;
      basePriceMax += 7000;
    } else if (platform === 'games') {
      baseWeeks += 4;
      basePriceMin += 6000;
      basePriceMax += 11000;
    } else if (platform === 'ai') {
      baseWeeks += 3;
      basePriceMin += 5000;
      basePriceMax += 8500;
    } else if (platform === 'fullsuite') {
      baseWeeks += 6;
      basePriceMin += 12000;
      basePriceMax += 22000;
    }

    // Stage weights
    if (stage === 'ai-rescue') {
      // AI prototype hardening sprint is faster but specialized
      baseWeeks = Math.max(3, baseWeeks - 1);
      basePriceMin += 1500;
      basePriceMax += 3000;
    } else if (stage === 'scaling') {
      baseWeeks += 1;
      basePriceMin += 2500;
      basePriceMax += 4500;
    }

    // Features weights
    const featureCost = features.length * 1200;
    const featureWeeks = Math.floor(features.length * 0.4);

    const totalMin = basePriceMin + featureCost;
    const totalMax = basePriceMax + featureCost * 1.5;
    const totalWeeks = baseWeeks + featureWeeks;

    return {
      weeks: totalWeeks,
      minPrice: totalMin.toLocaleString(),
      maxPrice: totalMax.toLocaleString(),
      sprints: Math.ceil(totalWeeks / 2)
    };
  };

  const estimate = calculateEstimate();

  const handleGenerate = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00f2fe', '#7928ca', '#00df89']
    });
  };

  const handleApplyToContact = () => {
    const summary = `Estimated Scope: ${platform.toUpperCase()} (${stage === 'ai-rescue' ? 'AI Prototype Hardening' : stage}) with features: [${features.join(', ')}]. Estimated timeline: ${estimate.weeks} weeks (~$${estimate.minPrice} - $${estimate.maxPrice}).`;
    onApplySpecToContact(summary);
  };

  return (
    <section id="calculator" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Calculator size={14} />
            <span>Interactive Scope & Budget Estimator</span>
          </div>
          <h2>
            Calculate Your Architecture, Timeline &{' '}
            <span className="gradient-text-cyan">Investment</span>
          </h2>
          <p>
            Get an instant, transparent engineering assessment for your Web, Mobile, Desktop, Game, or AI project.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="glass-card" style={{
          maxWidth: '1060px',
          margin: '0 auto',
          padding: '2.5rem',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 25px 60px -15px rgba(0, 242, 254, 0.12)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Left Column: Interactive Selectors */}
            <div>
              {/* Step 1: Target Platform */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  1. Target Platform / Architecture
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                  {[
                    { id: 'web', label: 'Web Platform / SaaS' },
                    { id: 'mobile', label: 'Cross-Platform Mobile' },
                    { id: 'desktop', label: 'Desktop (Electron/Native)' },
                    { id: 'games', label: '3D Game / Engine' },
                    { id: 'ai', label: 'AI Vision & Workflows' },
                    { id: 'fullsuite', label: 'Multi-Platform Suite' }
                  ].map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => { setPlatform(p.id as any); handleGenerate(); }}
                      style={{
                        padding: '0.75rem 0.85rem',
                        borderRadius: '0.65rem',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        textAlign: 'left',
                        background: platform === p.id ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: platform === p.id ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: platform === p.id ? '#fff' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Project Phase */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  2. Project Stage
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { id: 'scratch', title: 'New Concept / Greenfield MVP', desc: 'From architecture blueprint to production release' },
                    { id: 'ai-rescue', title: 'AI Prototype Hardening & Rescue', desc: 'Fixing vulnerabilities, scaling architecture, and adding native features' },
                    { id: 'scaling', title: 'Existing Platform Scaling', desc: 'Refactoring legacy code, performance optimization, and new features' }
                  ].map(s => (
                    <div
                      key={s.id}
                      onClick={() => { setStage(s.id as any); handleGenerate(); }}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.65rem',
                        background: stage === s.id ? 'rgba(121, 40, 202, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: stage === s.id ? '1px solid var(--accent-purple)' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: stage === s.id ? '#fff' : '#cbd5e1' }}>
                        {s.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {s.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Architecture Capabilities */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  3. Key Architectural Requirements
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {[
                    { id: 'auth', label: 'Auth & RBAC Vault' },
                    { id: 'realtime', label: 'Real-time WebSockets / APIs' },
                    { id: 'payments', label: 'Fintech / DeFi Rails' },
                    { id: '3d-engine', label: 'WebGL 3D / Shader Engine' },
                    { id: 'vision-ai', label: 'Computer Vision / ML Pipeline' },
                    { id: 'offline', label: 'Encrypted Offline Storage' }
                  ].map(f => {
                    const isSelected = features.includes(f.id);
                    return (
                      <div
                        key={f.id}
                        onClick={() => { toggleFeature(f.id); handleGenerate(); }}
                        style={{
                          padding: '0.6rem 0.8rem',
                          borderRadius: '0.5rem',
                          background: isSelected ? 'rgba(0, 223, 137, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                          border: isSelected ? '1px solid var(--accent-emerald)' : '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          color: isSelected ? '#fff' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <div style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '3px',
                          background: isSelected ? 'var(--accent-emerald)' : 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {isSelected && <Check size={11} color="#040813" strokeWidth={3} />}
                        </div>
                        <span>{f.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Live Calculated Estimate Card */}
            <div style={{
              background: 'rgba(8, 14, 28, 0.85)',
              borderRadius: '1.25rem',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                    Engineered Specification
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    background: 'rgba(0, 223, 137, 0.12)',
                    color: 'var(--accent-emerald)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    AI-ACCELERATED
                  </span>
                </div>

                {/* Estimated Timeline */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Estimated Time to Production
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#fff' }}>
                      {estimate.weeks}
                    </span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>Weeks</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                      ({estimate.sprints} Sprints)
                    </span>
                  </div>
                </div>

                {/* Estimated Budget Range */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Estimated Investment Range (USD)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>
                      ${estimate.minPrice}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>—</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>
                      ${estimate.maxPrice}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    *Includes full source code handover, automated test suites, and deployment setup.
                  </span>
                </div>

                {/* Architectural Inclusions */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                    Included in Architecture
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} color="var(--accent-cyan)" />
                      <span>Dedicated Senior Systems Architect & Lead Engineer</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} color="var(--accent-cyan)" />
                      <span>Zero Technical Debt & Modular Microservice Structure</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={14} color="var(--accent-cyan)" />
                      <span>Continuous Integration & Automated Test Coverage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyToContact}
                className="btn-primary"
                style={{ width: '100%', padding: '0.95rem', fontSize: '0.95rem' }}
              >
                <Sparkles size={16} />
                <span>Request Formal Proposal For This Spec</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
