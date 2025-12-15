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

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  link?: string;
  caseStudy: string; // New field for the document/description
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}