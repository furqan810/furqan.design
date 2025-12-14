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
  year: string; // Added year
  imageUrl: string;
  link?: string; // Added link for external projects
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string; // Added label for text-based links
}