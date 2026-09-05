import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { X, UploadCloud, FileText, Check, Eye, Code, Download } from 'lucide-react';

interface BlogUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostCreated: (post: BlogPost) => void;
}

export const BlogUploadModal: React.FC<BlogUploadModalProps> = ({ isOpen, onClose, onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<BlogPost['category']>('AI Engineering');
  const [summary, setSummary] = useState('');
  const [author, setAuthor] = useState('Kozmak Systems Team');
  const [readTime, setReadTime] = useState('5 min read');
  const [coverImage, setCoverImage] = useState('/images/smartrename_preview.jpg');
  const [tagsInput, setTagsInput] = useState('Engineering, AI, Scalability');
  const [content, setContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [fileName, setFileName] = useState('');

  if (!isOpen) return null;

  // Handle file drop or selection (.md or .txt)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        // Simple auto-parsing of markdown
        const lines = text.split('\n');
        let parsedTitle = '';
        let contentStart = 0;

        for (let i = 0; i < lines.length; i++) {
          const trimmed = lines[i].trim();
          if (trimmed.startsWith('# ') && !parsedTitle) {
            parsedTitle = trimmed.replace('# ', '');
            contentStart = i + 1;
            break;
          }
        }

        if (parsedTitle) {
          setTitle(parsedTitle);
        } else {
          setTitle(file.name.replace(/\.[^/.]+$/, ''));
        }

        const remainingContent = lines.slice(contentStart).join('\n').trim();
        setContent(remainingContent || text);

        // Auto extract first paragraph as summary if not set
        if (!summary) {
          const firstPara = remainingContent.split('\n\n')[0] || '';
          setSummary(firstPara.slice(0, 180) + '...');
        }
      }
    };
    reader.readAsText(file);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Please provide at least a title and article content.');
      return;
    }

    const newPost: BlogPost = {
      id: 'custom-' + Date.now(),
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category,
      summary: summary || content.slice(0, 150) + '...',
      content,
      author: author || 'Kozmak Engineering Team',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      readTime: readTime || '5 min read',
      coverImage: coverImage || '/images/smartrename_preview.jpg',
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      isCustom: true
    };

    onPostCreated(newPost);
    onClose();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# ${title}\n\n**Category:** ${category} | **Author:** ${author} | **Date:** ${new Date().toLocaleDateString()}\n\n${summary ? `> ${summary}\n\n` : ''}${content}`;
    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'article'}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'var(--modal-overlay)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 2100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}
    onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          maxWidth: '860px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid rgba(0, 242, 254, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--card-border)',
            color: 'var(--text-main)',
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

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(0, 242, 254, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={18} color="var(--accent-cyan)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', margin: 0 }}>
              Publish New Technical Article
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Upload Markdown (.md) file or draft your article directly
            </span>
          </div>
        </div>

        {/* File Drag / Select Zone */}
        <div style={{
          border: '2px dashed rgba(0, 242, 254, 0.3)',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          textAlign: 'center',
          background: 'rgba(0, 242, 254, 0.03)',
          margin: '1.25rem 0',
          position: 'relative'
        }}>
          <input 
            type="file" 
            accept=".md,.txt,.markdown" 
            onChange={handleFileUpload}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer'
            }}
          />
          <UploadCloud size={32} color="var(--accent-cyan)" style={{ margin: '0 auto 0.5rem' }} />
          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
            {fileName ? `Uploaded File: ${fileName}` : 'Drop a Markdown (.md) or Text file here to auto-fill'}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Supports GitHub Flavored Markdown with code blocks, headings, and quotes
          </div>
        </div>

        {/* Mode Toggle: Edit vs Preview */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => setPreviewMode(false)}
              style={{
                background: !previewMode ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                color: !previewMode ? 'var(--accent-cyan)' : 'var(--text-muted)',
                border: !previewMode ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Code size={13} />
              <span>Editor</span>
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode(true)}
              style={{
                background: previewMode ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                color: previewMode ? 'var(--accent-cyan)' : 'var(--text-muted)',
                border: previewMode ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Eye size={13} />
              <span>Live Preview</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleDownloadMarkdown}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer'
            }}
          >
            <Download size={13} />
            <span>Export as .md</span>
          </button>
        </div>

        {/* Form Body or Preview */}
        {previewMode ? (
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--card-border)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            minHeight: '340px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7
          }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
              {title || 'Article Title Preview'}
            </h2>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--accent-cyan)', marginBottom: '1.25rem' }}>
              <span>{category}</span> • <span>{author}</span> • <span>{readTime}</span>
            </div>
            {summary && (
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                {summary}
              </p>
            )}
            <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.95rem' }}>
              {content || 'Your markdown content preview will appear here...'}
            </div>
          </div>
        ) : (
          <form onSubmit={handlePublish} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                ARTICLE TITLE *
              </label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Architecting Zero-Downtime Microservices in 2026" 
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  CATEGORY
                </label>
                <select value={category} onChange={e => setCategory(e.target.value as any)}>
                  <option value="AI Engineering">AI Engineering</option>
                  <option value="Game Dev & 3D">Game Dev & 3D</option>
                  <option value="Fintech & Web3">Fintech & Web3</option>
                  <option value="Architecture">Architecture</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  AUTHOR
                </label>
                <input 
                  type="text" 
                  placeholder="Kozmak Systems Team" 
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  ESTIMATED READ TIME
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 6 min read" 
                  value={readTime}
                  onChange={e => setReadTime(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                EXCERPT / SUMMARY
              </label>
              <textarea 
                rows={2} 
                placeholder="Brief summary of the insights for search engines and preview cards..." 
                value={summary}
                onChange={e => setSummary(e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                ARTICLE CONTENT (MARKDOWN / TEXT) *
              </label>
              <textarea 
                rows={9} 
                required 
                placeholder="Write your article in Markdown. Headings (###), bullet points, and code blocks (```) are supported..." 
                value={content}
                onChange={e => setContent(e.target.value)}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  TAGS (COMMA SEPARATED)
                </label>
                <input 
                  type="text" 
                  placeholder="AI, WebGL, Fintech, Security" 
                  value={tagsInput}
                  onChange={e => setTagsInput(e.target.value)}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  COVER IMAGE PRESET
                </label>
                <select value={coverImage} onChange={e => setCoverImage(e.target.value)}>
                  <option value="/images/smartrename_preview.jpg">SmartRename AI (Vision / Modern)</option>
                  <option value="/images/kozengine_preview.jpg">KozEngine (3D Viewport / Shaders)</option>
                  <option value="/images/nexafi_preview.jpg">NexaFi (Fintech / Neobank)</option>
                  <option value="/images/zinter_preview.jpg">Zinter (Enterprise Operations)</option>
                  <option value="/images/vaultstream_preview.jpg">VaultStream (Security / Vaults)</option>
                  <option value="/images/nuvral_preview.jpg">Nuvral (Growth / Telemetry)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ flex: 1, padding: '0.9rem' }}
              >
                <Check size={16} />
                <span>Publish Article to Blog Feed</span>
              </button>
              <button 
                type="button" 
                onClick={onClose}
                className="btn-secondary" 
                style={{ padding: '0.9rem 1.5rem' }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
