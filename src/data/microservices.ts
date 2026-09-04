import type { MicroService } from '../types';

export const microServicesData: MicroService[] = [
  {
    id: 'ai-audit',
    title: 'AI Code Audit & Production Hardening',
    category: 'Security & Scale',
    turnaround: '3 – 5 Business Days',
    priceRange: '$1,500 – $3,500',
    badge: 'Most Popular',
    description: 'We audit your AI-generated codebase (Cursor, Claude, v0), eliminate race conditions, secure exposed API keys, fix N+1 database leaks, and deliver a production-ready roadmap.',
    deliverables: [
      'Full 12-point security vulnerability report',
      'Database query & index optimization plan',
      'Refactored authentication & RBAC boundary',
      '60-minute executive architectural walkthrough'
    ],
    idealFor: 'Founders with working AI prototypes ready for investor or beta testing.'
  },
  {
    id: 'perf-tuning',
    title: 'API & Database Performance Sprint',
    category: 'Optimization',
    turnaround: '48 Hours',
    priceRange: '$1,200 – $2,500',
    badge: 'Rapid 48h Sprint',
    description: 'Slow endpoints or sluggish page loads killing user conversion? We profile bottlenecks, add Redis caching, optimize Postgres queries, and slash latency by up to 80%.',
    deliverables: [
      'Live server latency & bottleneck profiling',
      'Redis query caching layer implementation',
      'Postgres composite indexing & connection pooling',
      'Before & after load testing benchmark report'
    ],
    idealFor: 'Growing SaaS apps experiencing slowdowns under traffic spikes.'
  },
  {
    id: 'desktop-electron-wrapper',
    title: 'Cross-Platform Desktop Packaging & Code Signing',
    category: 'Desktop Systems',
    turnaround: '48 – 72 Hours',
    priceRange: '$950 – $1,800',
    badge: 'Desktop Ready',
    description: 'Turn your existing Web or SaaS application into a blazingly fast native desktop application for Windows (.msi/.exe) and macOS (.dmg) with auto-updates and Apple notarization.',
    deliverables: [
      'Production-ready Electron / Tauri desktop bundle',
      'Windows & Apple Developer code signing setup',
      'Native OS notifications, tray icons & shortcuts',
      'Automated GitHub Releases auto-updater pipeline'
    ],
    idealFor: 'Web SaaS products wanting an official desktop presence.'
  },
  {
    id: '3d-webgl-hero',
    title: 'Interactive 3D WebGL / Canvas Hero Experience',
    category: '3D & Graphics',
    turnaround: '3 – 5 Business Days',
    priceRange: '$1,500 – $3,800',
    badge: 'High Impact',
    description: 'Add an unforgettable, silky-smooth 60 FPS interactive 3D model, particle simulator, or product configurator directly to your website to double visitor engagement.',
    deliverables: [
      'Lightweight, zero-bloat 3D WebGL/Three.js scene',
      'Custom shaders, lighting, and mouse/touch controls',
      '60 FPS performance optimization for mobile browsers',
      'Easy drop-in React/HTML embed package'
    ],
    idealFor: 'Tech startups wanting a jaw-dropping, award-winning homepage.'
  },
  {
    id: 'payment-integration',
    title: 'Payment Gateway & Multi-Currency Integration',
    category: 'Fintech',
    turnaround: '3 – 4 Business Days',
    priceRange: '$1,400 – $2,800',
    badge: 'Fintech Ready',
    description: 'Integrate bulletproof payments, subscriptions, or cross-border settlement into your app using Stripe, Paystack, Flutterwave, or stablecoin Web3 rails.',
    deliverables: [
      'PCI-compliant checkout & webhook listeners',
      'Recurring subscription & invoice generation engine',
      'Multi-currency support (USD, NGN, GBP, EUR)',
      'Automated failed payment & dunning handling'
    ],
    idealFor: 'Any platform ready to monetize and accept international payments.'
  },
  {
    id: 'app-store-submission',
    title: 'App Store & Google Play Launch Sprint',
    category: 'Mobile Launch',
    turnaround: '48 Hours',
    priceRange: '$850 – $1,500',
    badge: 'Fast Track',
    description: 'Bypass App Store rejection headaches. We handle Apple App Store & Google Play developer console setup, privacy policies, screenshot assets, and compliance guidelines.',
    deliverables: [
      'App Store Review compliance audit & fixes',
      'Apple notarization & Google Play AAB build setup',
      'Privacy policy & data safety declaration support',
      'Guaranteed approval assistance through review cycles'
    ],
    idealFor: 'Teams ready to ship iOS/Android apps without dealing with store rejections.'
  }
];
