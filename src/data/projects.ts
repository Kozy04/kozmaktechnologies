import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'smartrename-ai',
    title: 'SmartRename AI',
    category: 'ai',
    categoryLabel: 'AI & Computer Vision',
    badge: 'Live Platform',
    description: 'Autonomous computer vision system that instantly scans, identifies visual contents, and intelligently renames files while structuring them into custom hierarchical folders.',
    detailedCase: 'Engineered as a high-speed web application for media teams and digital asset managers. Uses multimodal vision models to extract semantic context from files and automatically organize thousands of unorganized assets in seconds.',
    image: '/images/smartrename_preview.jpg',
    liveUrl: 'https://smartrenameai.online',
    techStack: ['TypeScript', 'Node.js', 'Vision AI', 'React', 'Cloud Storage'],
    metrics: [
      { label: 'Time Saved', value: '94%' },
      { label: 'Accuracy', value: '99.2%' },
      { label: 'Throughput', value: '10k+ files/hr' }
    ],
    featured: true
  },
  {
    id: 'zinter',
    title: 'Zinter',
    category: 'web',
    categoryLabel: 'Enterprise Platform',
    badge: 'Live Platform',
    description: 'Enterprise omnichannel digital connectivity, messaging orchestration, and business operations platform built for high-throughput African enterprise infrastructure.',
    detailedCase: 'Engineered to handle millions of unified customer touchpoints across SMS, WhatsApp, USSD, and high-frequency Web APIs with 99.98% uptime and enterprise verification.',
    image: '/images/zinter_preview.jpg',
    liveUrl: 'https://zinter.com.ng',
    techStack: ['TypeScript', 'Distributed APIs', 'Enterprise Messaging', 'React', 'PostgreSQL'],
    metrics: [
      { label: 'Messages Routed', value: '1.2M+' },
      { label: 'Uptime SLA', value: '99.98%' },
      { label: 'Verified Reach', value: 'Pan-African' }
    ],
    featured: true
  },
  {
    id: 'kozengine',
    title: 'KozEngine (Nexus 3D)',
    category: 'games',
    categoryLabel: 'Game Engine & 3D',
    badge: 'Proprietary Tech',
    description: 'High-performance proprietary 3D game engine engineered from scratch for cross-platform deployment across Mobile, Web (WebGL/WebGPU), and PC.',
    detailedCase: 'Features custom rendering pipelines, physics integration, dynamic scene hierarchy, visual shader node graphs, and low-latency asset management optimized for responsive 60 FPS gameplay on any device.',
    image: '/images/kozengine_preview.jpg',
    techStack: ['JavaScript', 'WebGL 2.0', 'C# / Native', '3D Math', 'Physics Engine'],
    metrics: [
      { label: 'Target Frame Rate', value: '60 FPS' },
      { label: 'Platform Reach', value: 'Web, Mobile, PC' },
      { label: 'Engine Size', value: '< 15MB Core' }
    ],
    featured: true
  },
  {
    id: 'nexafi',
    title: 'NexaFi',
    category: 'mobile',
    categoryLabel: 'Fintech & DeFi',
    badge: 'DeFi Neobank',
    description: 'AI-Powered DeFi Neobank and cross-border financial rail engineered for emerging markets, offering multi-currency wallets, instant remittance, and AI FX rate optimization.',
    detailedCase: 'Built with bank-grade encryption, real-time fiat-to-stablecoin liquidity routing, and seamless mobile UX for friction-free cross-border commerce.',
    image: '/images/nexafi_preview.jpg',
    techStack: ['TypeScript', 'React Native', 'DeFi Protocols', 'Next.js', 'Zero-Knowledge Auth'],
    metrics: [
      { label: 'Settlement Time', value: '< 15s' },
      { label: 'Security Level', value: 'Bank-Grade' },
      { label: 'Currencies', value: 'USD, NGN, KES +' }
    ],
    featured: true
  },
  {
    id: 'vaultstream-edms',
    title: 'VaultStream EDMS',
    category: 'desktop',
    categoryLabel: 'Desktop & Enterprise',
    badge: 'Enterprise Security',
    description: 'Enterprise Electronic Document Management System (EDMS) with compliance-ready encryption, automated OCR indexing, and blockchain-verified audit logs.',
    detailedCase: 'Designed for enterprise organizations requiring ironclad regulatory compliance, document retention policies, role-based encryption, and sub-second full-text document discovery across millions of records.',
    image: '/images/vaultstream_preview.jpg',
    techStack: ['TypeScript', 'Electron', 'Encrypted Vaults', 'OCR Engines', 'SQL Cipher'],
    metrics: [
      { label: 'Search Speed', value: '< 80ms' },
      { label: 'Encryption', value: 'AES-256 GCM' },
      { label: 'Compliance', value: 'SOC2 / GDPR' }
    ],
    featured: false
  },
  {
    id: 'nuvral',
    title: 'Nuvral',
    category: 'web',
    categoryLabel: 'B2B SaaS / Growth',
    badge: 'Growth Engine',
    description: 'Intelligent customer acquisition software engineered for businesses looking to aggressively expand their customer base with predictive lead scoring and automated pipeline workflows.',
    detailedCase: 'Combines multi-channel prospect intent signals, automated email nurturing sequences, and live conversion funnel telemetry into a unified command center.',
    image: '/images/nuvral_preview.jpg',
    techStack: ['TypeScript', 'Full-stack Next.js', 'Pipeline Telemetry', 'Redis', 'Machine Learning'],
    metrics: [
      { label: 'Pipeline Velocity', value: '+47%' },
      { label: 'Lead Conversion', value: '3.8x' },
      { label: 'Integrations', value: '25+ CRMs' }
    ],
    featured: false
  }
];
