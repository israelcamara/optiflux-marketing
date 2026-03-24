// Types TypeScript pour OPTIFLUX Marketing

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: 'marketing' | 'web' | 'formation';
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Project {
  id: string;
  client: string;
  sector: string;
  title: string;
  description: string;
  tags: string[];
  results: { label: string; value: string }[];
  image?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: number;
  image?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
