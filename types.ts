import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string; // Added ID for numbering
  title: string;
  description: string;
  tags: string[]; // Added tags for more detail
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
  images: string[]; // Gallery images
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  link?: string;
  caseStudy: string; // Brief description/Fallback
  extendedDetails?: ProjectDetails; // Optional rich content
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}