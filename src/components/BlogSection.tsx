import React, { useState, useEffect } from 'react';
import type { BlogPost } from '../types';
import { initialBlogPosts } from '../data/blog';
import { BlogUploadModal } from './BlogUploadModal';
import { BookOpen, PlusCircle, Search, ArrowRight, Clock, User, Sparkles, X, Share2, Check } from 'lucide-react';

interface BlogSectionProps {
  onContactAuthor?: (articleTitle: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onContactAuthor }) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Load custom blog posts from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('kozmak_blog_posts');
      if (stored) {
        const customPosts: BlogPost[] = JSON.parse(stored);
        if (Array.isArray(customPosts) && customPosts.length > 0) {
          // Merge custom posts at the front
          setPosts([...customPosts, ...initialBlogPosts]);
        }
      }
    } catch (e) {
      console.error('Failed to parse localStorage blog posts:', e);
    }
  }, []);

  const handlePostCreated = (newPost: BlogPost) => {
    try {
      const existingStored = localStorage.getItem('kozmak_blog_posts');
      const existingArray: BlogPost[] = existingStored ? JSON.parse(existingStored) : [];
      const updated = [newPost, ...existingArray];
      localStorage.setItem('kozmak_blog_posts', JSON.stringify(updated));
      setPosts([newPost, ...posts]);
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      setPosts([newPost, ...posts]);
    }
  };

  const categories = ['All', 'AI Engineering', 'Game Dev & 3D', 'Fintech & Web3', 'Architecture'];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill emerald">
            <BookOpen size={14} />
            <span>Engineering Insights & Thought Leadership</span>
          </div>
          <h2>
            The Kozmak Engineering{' '}
            <span className="gradient-text-cyan">Blog & Playbook</span>
          </h2>
          <p>
            Architectural teardowns, performance blueprints, and real-world post-mortems on AI scalability, 3D engines, and fintech infrastructure.
          </p>

          {/* Action Bar: Search, Category Filters, and Upload Button */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2.5rem'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '240px', flex: '1 1 260px', maxWidth: '400px' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search articles by keyword or tag..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '2.6rem', fontSize: '0.88rem' }}
              />
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat 
                      ? 'rgba(0, 242, 254, 0.2)' 
                      : 'var(--card-bg)',
                    color: selectedCategory === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    border: selectedCategory === cat 
                      ? '1px solid var(--accent-cyan)' 
                      : '1px solid var(--card-border)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Upload / Creator Button */}
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="btn-secondary"
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.88rem',
                borderColor: 'var(--accent-emerald)',
                color: 'var(--accent-emerald)'
              }}
            >
              <PlusCircle size={16} />
              <span>Upload Article (.md)</span>
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredPosts.map(post => (
            <div 
              key={post.id}
              className="glass-card interactive-hover"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onClick={() => setActiveArticle(post)}
            >
              {/* Cover Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '210px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-tertiary)'
              }}>
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(6, 8, 15, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  color: 'var(--accent-cyan)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {post.category}
                </span>
                {post.isCustom && (
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 223, 137, 0.85)',
                    color: '#040813',
                    fontWeight: 700,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    NEWLY PUBLISHED
                  </span>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 style={{ fontSize: '1.28rem', color: 'var(--text-main)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {post.summary}
                  </p>
                </div>

                {/* Tags & Action */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {post.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-secondary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <span>Read Full Blueprint</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {activeArticle && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--modal-overlay)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 2200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveArticle(null)}
          >
            <div 
              className="glass-card"
              style={{
                maxWidth: '820px',
                width: '100%',
                maxHeight: '92vh',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid rgba(0, 242, 254, 0.4)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
                padding: '2.5rem'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="badge-pill" style={{ marginBottom: 0 }}>
                  {activeArticle.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={handleCopyShare}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--card-border)',
                      color: copiedLink ? 'var(--accent-emerald)' : 'var(--text-main)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer'
                    }}
                  >
                    {copiedLink ? <Check size={14} /> : <Share2 size={14} />}
                    <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                  </button>

                  <button
                    onClick={() => setActiveArticle(null)}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-main)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Title & Metadata */}
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {activeArticle.title}
              </h1>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                paddingBottom: '1.5rem',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)' }}>
                  <User size={15} color="var(--accent-cyan)" />
                  {activeArticle.author}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={15} />
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Cover Banner */}
              <div style={{
                borderRadius: '0.85rem',
                overflow: 'hidden',
                maxHeight: '340px',
                marginBottom: '2rem',
                border: '1px solid var(--card-border)'
              }}>
                <img 
                  src={activeArticle.coverImage} 
                  alt={activeArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Article Content Formatted */}
              <div style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                whiteSpace: 'pre-wrap',
                marginBottom: '2.5rem'
              }}>
                {activeArticle.content}
              </div>

              {/* Article Bottom Call to Action */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(121, 40, 202, 0.12) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Need Production Architecture for This?
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    Our engineering leads can implement or audit this exact solution for your platform.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => {
                    if (onContactAuthor) {
                      onContactAuthor(activeArticle.title);
                    }
                    setActiveArticle(null);
                  }}
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.65rem', fontSize: '0.92rem' }}
                >
                  <Sparkles size={16} />
                  <span>Consult With Kozmak Engineers</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Upload Modal */}
        <BlogUploadModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          onPostCreated={handlePostCreated}
        />

      </div>
    </section>
  );
};
