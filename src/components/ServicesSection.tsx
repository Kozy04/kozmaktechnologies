import React from 'react';
import { servicesData } from '../data/services';
import { Monitor, Globe, Smartphone, Gamepad2, Cpu, Check, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={28} color="var(--accent-cyan)" />,
  Globe: <Globe size={28} color="var(--accent-blue)" />,
  Smartphone: <Smartphone size={28} color="var(--accent-purple)" />,
  Gamepad2: <Gamepad2 size={28} color="var(--accent-amber)" />,
  Cpu: <Cpu size={28} color="var(--accent-magenta)" />
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Layers size={14} />
            <span>Full-Spectrum Engineering Capabilities</span>
          </div>
          <h2>
            Specialized Development for{' '}
            <span className="gradient-text-cyan">Desktop, Web, Mobile & Games</span>
          </h2>
          <p>
            We eliminate the need to coordinate between multiple disjointed agencies. From low-level desktop architectures to high-concurrency cloud backends and 3D engines, we deliver end-to-end.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}>
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="glass-card interactive-hover"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {iconMap[service.iconName]}
                  </div>
                  <span style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 242, 254, 0.1)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(0, 242, 254, 0.2)'
                  }}>
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: '#fff' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--accent-blue)', marginBottom: '1rem', fontWeight: 500 }}>
                  {service.tagline}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                    Key Deliverables
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: 'rgba(0, 242, 254, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={11} color="var(--accent-cyan)" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Supported Platforms Strip */}
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}>
                <span>Supported Targets:</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {service.platforms.map((p, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      color: '#cbd5e1',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
