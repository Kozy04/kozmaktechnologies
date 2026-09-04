import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'desktop-development',
    title: 'Desktop Software Engineering',
    iconName: 'Monitor',
    badge: 'Native & Electron',
    tagline: 'High-performance desktop applications built for heavy workloads and offline resilience.',
    description: 'We develop ultra-responsive native and Electron desktop applications with deep OS integrations, local hardware acceleration, encrypted SQLite/SQLCipher databases, and seamless auto-updating.',
    deliverables: [
      'Electron & C++ Native Desktop Apps',
      'Encrypted Local Storage & File Vaults',
      'Hardware-Accelerated Compute & Drivers',
      'Enterprise Distribution & Code Signing'
    ],
    platforms: ['Windows', 'macOS', 'Linux'],
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'web-platforms',
    title: 'Web Platforms & Cloud SaaS',
    iconName: 'Globe',
    badge: 'Enterprise SaaS',
    tagline: 'Hyper-scalable, resilient web platforms designed to handle millions of requests with zero downtime.',
    description: 'Full-stack engineering from modern reactive frontends to distributed microservices. We architect robust database schemas, secure API gateways, and ultra-fast interfaces optimized for maximum SEO and conversion.',
    deliverables: [
      'Modern TypeScript & Next.js Platforms',
      'High-Throughput Microservice Architecture',
      'Fintech & Cross-Border Payment Rails',
      'Strict Zero-Trust Security & RBAC'
    ],
    platforms: ['Cloud', 'Edge', 'Web Browsers'],
    gradient: 'from-cyan-400 to-emerald-400'
  },
  {
    id: 'mobile-development',
    title: 'Cross-Platform Mobile Apps',
    iconName: 'Smartphone',
    badge: 'iOS & Android',
    tagline: 'Fluid 120 FPS mobile experiences engineered for both consumer delight and enterprise operations.',
    description: 'We craft production-grade mobile applications with silky-smooth animations, offline-first sync protocols, push notification infrastructure, biometric security, and native device module bridges.',
    deliverables: [
      'React Native & Flutter Architecture',
      'Offline-First Data Synchronization',
      'Biometric Security & Mobile Wallets',
      'App Store & Google Play Optimization'
    ],
    platforms: ['iOS', 'Android', 'Tablets'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'game-development',
    title: '3D Game Engines & Interactive',
    iconName: 'Gamepad2',
    badge: 'Proprietary 3D',
    tagline: 'Custom 3D engines, immersive browser graphics, and cross-platform games.',
    description: 'From our proprietary KozEngine (Nexus 3D) to bespoke WebGL/WebGPU experiences and Unity games. We handle spatial math, real-time shaders, custom physics, and interactive 3D simulations.',
    deliverables: [
      'Custom WebGL & WebGPU 3D Engines',
      'Cross-Platform Games (Mobile, Web, PC)',
      'Spatial 3D Math & Custom Physics',
      'Shader Programming & 60 FPS Profiling'
    ],
    platforms: ['Web 3D', 'PC', 'Mobile Games'],
    gradient: 'from-amber-400 to-red-500'
  },
  {
    id: 'ai-integration',
    title: 'AI Systems & Computer Vision',
    iconName: 'Cpu',
    badge: 'Vision & Agents',
    tagline: 'Real-world AI implementations that automate complex workflows and process sensory data.',
    description: 'We integrate computer vision, multimodal document processing, intelligent vector search, and autonomous agent loops into mission-critical production workflows like SmartRename AI.',
    deliverables: [
      'Computer Vision & Asset Recognition',
      'Multimodal Document Classification',
      'Autonomous Agent Workflows',
      'Custom LLM Fine-Tuning & Vector RAG'
    ],
    platforms: ['Cloud AI', 'Edge Inferencing', 'APIs'],
    gradient: 'from-pink-500 to-purple-600'
  }
];
