import React from 'react';
import { Compass, Code, ShieldCheck, CheckCircle2, Workflow } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Blueprint & Architecture Modeling',
      icon: <Compass size={24} color="var(--accent-cyan)" />,
      timeline: 'Sprint 0 (Days 1–5)',
      description: 'We tear down requirements into formal system diagrams, database schemas, API specs, and multi-platform deployment targets. No ambiguities.'
    },
    {
      step: '02',
      title: 'AI-Accelerated Core Engineering',
      icon: <Code size={24} color="var(--accent-blue)" />,
      timeline: 'Sprints 1–2 (Weeks 2–4)',
      description: 'Senior engineers execute at 5x speed using advanced AI automation to assemble boilerplate, focusing 100% of human brainpower on complex business logic, 3D math, and security.'
    },
    {
      step: '03',
      title: 'Multi-Platform Hardening & Security Audit',
      icon: <ShieldCheck size={24} color="var(--accent-purple)" />,
      timeline: 'Sprint 3 (Weeks 5–6)',
      description: 'Cross-platform testing on physical devices (macOS, Windows, iOS, Android), load-testing with simulated concurrent users, and strict penetration security scans.'
    },
    {
      step: '04',
      title: 'Production Launch & Full IP Handover',
      icon: <CheckCircle2 size={24} color="var(--accent-emerald)" />,
      timeline: 'Sprint 4 (Week 7+)',
      description: 'Zero-downtime deployment to your cloud or app stores. Complete source code handover, documentation, and optional 24/7 SLA infrastructure monitoring.'
    }
  ];

  return (
    <section id="process" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill emerald">
            <Workflow size={14} />
            <span>The Engineering Lifecycle</span>
          </div>
          <h2>
            From Concept to Production in{' '}
            <span className="gradient-text-cyan">Four High-Velocity Sprints</span>
          </h2>
          <p>
            Transparent, predictable, and rigorous. We combine agile velocity with military-grade architectural planning.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          position: 'relative'
        }}>
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {s.icon}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'rgba(255, 255, 255, 0.15)'
                  }}>
                    {s.step}
                  </span>
                </div>

                <div style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.5rem'
                }}>
                  {s.timeline}
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#fff' }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                color: 'var(--accent-emerald)',
                fontFamily: 'var(--font-mono)'
              }}>
                <CheckCircle2 size={13} />
                <span>Strict Delivery Gate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
