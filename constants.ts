import { NavItem, Service, Project, SocialLink } from './types';

export const USER_DATA = {
  name: "Furqan Nazir",
  role: "Graphic & Web Designer",
  location: "Based in Barcelona, Spain",
  email: "work.furqannazir@gamil.com",
  whatsapp: "+34637635459",
  copyrightYear: new Date().getFullYear(),
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: "01",
    title: "Brand Identity",
    description: "Creating distinct visual systems that define brands.",
    tags: ["Logo Design", "Visual Language", "Brand Guidelines"]
  },
  {
    id: "02",
    title: "Digital Design",
    description: "Crafting intuitive and impactful digital experiences.",
    tags: ["Web Design", "UI/UX", "Landing Pages"]
  },
  {
    id: "03",
    title: "E-Commerce",
    description: "Building robust online stores that convert.",
    tags: ["Shopify", "WooCommerce", "Store Setup"]
  },
  {
    id: "04",
    title: "Content Creation",
    description: "Visual assets tailored for social growth.",
    tags: ["Social Media", "Art Direction", "Motion"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Exotic Jeweler",
    category: "Shopify Design",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop",
    link: "https://exoticjeweler.com/"
  },
  {
    id: 2,
    title: "Maison De Coffee",
    category: "Branding",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Velvet Interiors",
    category: "Web Design",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "TechFlow SaaS",
    category: "UI/UX",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Aura Skincare",
    category: "Social Media",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1556228720-1927525287f4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Nexus Shop",
    category: "Shopify",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-41531b6563e7?q=80&w=1000&auto=format&fit=crop",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/furqannazir.me/",
    label: "Instagram"
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/furqannazir.me",
    label: "Facebook"
  },
  {
    platform: "Adobe Stock",
    url: "https://stock.adobe.com/contributor/209595192/Furqan",
    label: "Adobe Stock"
  },
];