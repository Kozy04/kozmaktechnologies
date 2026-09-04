import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [platform, setPlatform] = useState('Web & Cloud Platform');
  const [budget, setBudget] = useState('$5k - $15k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prev => prev ? `${prev}\n\n${prefilledMessage}` : prefilledMessage);
    }
  }, [prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link as resilient client-side submission
    const subject = encodeURIComponent(`Project Inquiry: ${name} (${company || 'New Project'}) - [${platform}]`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company / Project: ${company || 'N/A'}\n` +
      `Target Platform: ${platform}\n` +
      `Budget Range: ${budget}\n\n` +
      `Project Details & Scope:\n${message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Trigger default mail client
      window.location.href = `mailto:info@kozmaktechnologies.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill emerald">
            <Mail size={14} />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2>
            Let's Engineer Your Vision into{' '}
            <span className="gradient-text-aurora">Reality</span>
          </h2>
          <p>
            Have a new product, complex multi-platform requirement, or an AI prototype that needs production hardening? Talk directly to our lead architects.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="glass-card" style={{ marginBottom: '1.5rem', borderColor: 'rgba(0, 242, 254, 0.25)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: '#fff' }}>
                  Direct Contact & Delivery SLA
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Submissions are routed directly to our senior engineering leads at <strong style={{ color: 'var(--accent-cyan)' }}>info@kozmaktechnologies.com</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 242, 254, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Mail size={16} color="var(--accent-cyan)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Official Inquiries</div>
                      <a 
                        href="mailto:info@kozmaktechnologies.com" 
                        style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'underline', textDecorationColor: 'rgba(0, 242, 254, 0.4)' }}
                      >
                        info@kozmaktechnologies.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 223, 137, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Clock size={16} color="var(--accent-emerald)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Response Window</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Under 12 Hours Guaranteed</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(121, 40, 202, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ShieldCheck size={16} color="var(--accent-purple)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mutual NDA Protection</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>100% Confidential IP Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Box */}
              <div className="glass-card">
                <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} color="var(--accent-cyan)" />
                  <span>What Happens Next?</span>
                </h4>
                <ol style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <li>We review your technical specifications or existing codebase.</li>
                  <li>We schedule a 30-minute high-level architecture session.</li>
                  <li>You receive a sprint-by-sprint scope, timeline, and firm quote.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card" style={{
            padding: '2.25rem',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: 'rgba(11, 16, 32, 0.88)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 223, 137, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}>
                  <CheckCircle2 size={36} color="var(--accent-emerald)" />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Inquiry Dispatched!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Your submission has been prepared for <strong>info@kozmaktechnologies.com</strong>. Your email client should open automatically, or you can email us directly anytime.
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#cbd5e1'
                }}>
                  <div><strong>To:</strong> info@kozmaktechnologies.com</div>
                  <div><strong>Subject:</strong> Project Inquiry: {name}</div>
                  <div><strong>Target:</strong> {platform}</div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ width: '100%' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.25rem' }}>
                  Project Scoping Form
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Directly dispatched to <strong style={{ color: 'var(--accent-cyan)' }}>info@kozmaktechnologies.com</strong>
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      YOUR NAME *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alex Vance" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      WORK EMAIL *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@company.com" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      COMPANY / STARTUP
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Nexus Corp" 
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      TARGET PLATFORM
                    </label>
                    <select value={platform} onChange={e => setPlatform(e.target.value)}>
                      <option>Web Platform / Cloud SaaS</option>
                      <option>Cross-Platform Mobile (iOS & Android)</option>
                      <option>Desktop Native / Electron Application</option>
                      <option>3D Game Engine / WebGL Experience</option>
                      <option>AI Vision & Multi-Modal Workflows</option>
                      <option>Full Multi-Platform Suite</option>
                      <option>AI Prototype Audit & Hardening</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    ESTIMATED BUDGET
                  </label>
                  <select value={budget} onChange={e => setBudget(e.target.value)}>
                    <option>$5,000 – $15,000 (MVP / AI Hardening Sprint)</option>
                    <option>$15,000 – $35,000 (Full-Scale Multi-Platform Product)</option>
                    <option>$35,000+ (Enterprise Platform / Custom 3D Engine)</option>
                    <option>Undetermined / Need Architectural Scoping</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    PROJECT DETAILS & OBJECTIVES *
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell us what you're building, key requirements, or existing repo/prototype status..." 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary" 
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Submit to info@kozmaktechnologies.com'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
