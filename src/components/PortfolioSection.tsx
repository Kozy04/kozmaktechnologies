import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { Project, ProjectCategory } from '../types';
import { ExternalLink, Layers, ArrowUpRight, Sparkles, X } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForQuote?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & Vision' },
    { key: 'web', label: 'Web Platforms' },
    { key: 'games', label: '3D Game Engines' },
    { key: 'mobile', label: 'Mobile & Fintech' },
    { key: 'desktop', label: 'Desktop Software' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill purple">
            <Layers size={14} />
            <span>Featured Case Studies & Software</span>
          </div>
          <h2>
            Proven Engineering in the Field —{' '}
            <span className="gradient-text-purple">Real Platforms We've Built</span>
          </h2>
          <p>
            Explore our production applications, custom 3D engines, intelligent vision platforms, and enterprise solutions.
          </p>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                style={{
                  background: selectedCategory === cat.key 
                    ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.25) 0%, rgba(121, 40, 202, 0.25) 100%)' 
                    : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === cat.key ? '#fff' : 'var(--text-secondary)',
                  border: selectedCategory === cat.key 
                    ? '1px solid var(--accent-cyan)' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === cat.key ? '0 0 15px rgba(0, 242, 254, 0.25)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card"
              style={{
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onClick={() => setActiveModalProject(project)}
            >
              {/* Project Image Preview with Tag */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '240px',
                overflow: 'hidden',
                backgroundColor: '#0a0d18',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    background: 'rgba(6, 8, 15, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    color: 'var(--accent-cyan)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600
                  }}>
                    {project.badge}
                  </span>
                  <span style={{
                    background: 'rgba(6, 8, 15, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* External link indicator if live */}
                {project.liveUrl && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(6, 8, 15, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <ArrowUpRight size={16} />
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <h3 style={{ fontSize: '1.45rem', color: '#fff' }}>{project.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: '0.65rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '1.25rem',
                    textAlign: 'center'
                  }}>
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#cbd5e1',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>Explore Architecture Details</span>
                    <ArrowUpRight size={14} />
                  </span>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        fontSize: '0.8rem',
                        color: '#cbd5e1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: 'rgba(0, 242, 254, 0.1)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(0, 242, 254, 0.25)'
                      }}
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Deep-Dive Modal */}
        {activeModalProject && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(4, 6, 12, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveModalProject(null)}
          >
            <div 
              className="glass-card"
              style={{
                maxWidth: '780px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid rgba(0, 242, 254, 0.4)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div style={{
                borderRadius: '0.85rem',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                maxHeight: '320px'
              }}>
                <img 
                  src={activeModalProject.image} 
                  alt={activeModalProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Modal Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span className="badge-pill" style={{ marginBottom: 0 }}>{activeModalProject.badge}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{activeModalProject.categoryLabel}</span>
                </div>

                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
                  {activeModalProject.title}
                </h3>

                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {activeModalProject.detailedCase}
                </p>

                {/* Key Metrics in Modal */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {activeModalProject.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Breakdown */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                    Engineered With
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeModalProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'rgba(0, 242, 254, 0.08)',
                          color: '#fff',
                          border: '1px solid rgba(0, 242, 254, 0.25)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '0.8rem 1.5rem' }}
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectProjectForQuote) {
                        onSelectProjectForQuote(activeModalProject.title);
                      }
                      setActiveModalProject(null);
                    }}
                    className="btn-primary"
                    style={{ padding: '0.8rem 1.5rem' }}
                  >
                    <Sparkles size={16} />
                    <span>Build a Similar Platform with Kozmak</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
