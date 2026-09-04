import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <HelpCircle size={14} />
            <span>Common Inquiries</span>
          </div>
          <h2>
            Frequently Asked{' '}
            <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p>
            Transparent answers regarding our engineering standards, AI philosophy, multi-platform capabilities, and engagement structure.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.75rem',
                  border: isOpen ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(0, 242, 254, 0.08)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px'
                    }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>
                      {item.question}
                    </h3>
                  </div>

                  <div style={{
                    color: isOpen ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#cbd5e1',
                    fontSize: '0.95rem',
                    lineHeight: 1.7
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
