import React from 'react';
import { microServicesData } from '../data/microservices';
import { Zap, Clock, DollarSign, Check, ArrowRight } from 'lucide-react';

interface MicroServicesSectionProps {
  onSelectMicroService: (serviceName: string) => void;
}

export const MicroServicesSection: React.FC<MicroServicesSectionProps> = ({ onSelectMicroService }) => {
  return (
    <section id="micro-services" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill emerald">
            <Zap size={14} />
            <span>High-Velocity Engagements</span>
          </div>
          <h2>
            Rapid Micro-Sprints &{' '}
            <span className="gradient-text-aurora">Targeted Tech Services</span>
          </h2>
          <p>
            Need urgent engineering firepower without committing to a multi-month contract? We offer fixed-scope, rapid turnaround micro-sprints backed by senior architects.
          </p>
        </div>

        {/* Grid of Micro Services */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}>
          {microServicesData.map((service) => (
            <div 
              key={service.id}
              className="glass-card interactive-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-emerald)',
                    background: 'rgba(0, 223, 137, 0.1)',
                    border: '1px solid rgba(0, 223, 137, 0.25)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px'
                  }}>
                    {service.badge}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {service.description}
                </p>

                {/* Timeline & Price Highlights */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '0.65rem',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.25rem'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      <Clock size={12} color="var(--accent-cyan)" />
                      <span>TURNAROUND</span>
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      {service.turnaround}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      <DollarSign size={12} color="var(--accent-emerald)" />
                      <span>FIXED RANGE</span>
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      {service.priceRange}
                    </div>
                  </div>
                </div>

                {/* Deliverables List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                    What You Get:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        <div style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: 'rgba(0, 242, 254, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={10} color="var(--accent-cyan)" strokeWidth={2.5} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--card-border)'
              }}>
                <button
                  type="button"
                  onClick={() => onSelectMicroService(service.title)}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.75rem', fontSize: '0.88rem' }}
                >
                  <span>Book This Micro-Sprint</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
