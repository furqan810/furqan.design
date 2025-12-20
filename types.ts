import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectDetails {
  role: string;
  platform: string;
  clientOverview: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  result: string;
  images: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  link?: string;
  caseStudy: string;
  extendedDetails?: ProjectDetails;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}