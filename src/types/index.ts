export type ProjectCategory = 'all' | 'web' | 'mobile' | 'desktop' | 'games' | 'ai';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge: string;
  description: string;
  detailedCase: string;
  image: string;
  liveUrl?: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  tagline: string;
  description: string;
  deliverables: string[];
  platforms: string[];
  gradient: string;
}

export interface MicroService {
  id: string;
  title: string;
  category: string;
  turnaround: string;
  priceRange: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  badge: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'AI Engineering' | 'Game Dev & 3D' | 'Fintech & Web3' | 'Architecture' | 'General';
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  isCustom?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface CalculatorState {
  platform: string;
  appType: string;
  complexity: string;
  aiIntegration: boolean;
  timeline: string;
}
