import { NavItem, Service, Project, SocialLink } from './types';

export const USER_DATA = {
  name: "Furqan Nazir",
  role: "Graphic & E-commerce Expert",
  location: "Based in Barcelona, Spain",
  email: "work.furqannazir@gmail.com",
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
    title: "Design & Branding",
    description: "Captivating visuals that tell your brand story and grab attention.",
    tags: ["Logo Design", "Web Banners", "Social Media Kits", "Flyers & Posters"]
  },
  {
    id: "02",
    title: "Shopify Development",
    description: "High-converting stores built from the ground up to drive sales.",
    tags: ["Complete Store Setup", "Theme Customization", "App Integration", "Speed Optimization"]
  },
  {
    id: "03",
    title: "E-commerce Management",
    description: "Strategic growth and professional management of Amazon and eBay stores.",
    tags: ["Amazon/eBay Management", "Product Research", "Dropshipping Strategy", "Multi-channel Listing"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 4,
    title: "Bhojan Byte",
    category: "Logo Design",
    year: "2025",
    imageUrl: "https://i.imgur.com/ciyhdVb.png", // After image as main cover
    caseStudy: "Pivoting a food-tech startup's brand identity from a 'generic restaurant' look to a sophisticated SaaS and technology consulting powerhouse.",
    extendedDetails: {
      role: "Brand Identity Designer",
      platform: "Branding & SaaS Strategy",
      clientOverview: "Bhojan Byte is a technology consulting firm providing digital infrastructure for the food industry, offering online ordering platforms, POS systems, and operational tools.",
      challenge: "The initial design (seen in 'Before') felt too much like a consumer-facing restaurant. The client needed to communicate their core identity as a software provider, moving away from a 'food outlet' look to a 'SaaS and Innovation' feel.",
      solution: "I pivoted the identity toward Structured Geometry. The new logo (seen in 'After') reimagines the primary icon as an isometric 'Data Stack' representing server infrastructure. I shifted to a Deep Navy and Slate Blue palette to evoke professional trust and security.",
      features: [
        "Geometric Visual Identity",
        "B2B Brand Positioning",
        "Custom Iconography",
        "Corporate Color Strategy"
      ],
      techStack: ["Adobe Illustrator", "Figma", "Brand Strategy", "SaaS Visual Language"],
      result: "A high-end identity that successfully communicates innovation and efficiency, positioning the brand as a leader in food-sector digital transformation.",
      images: [
        "https://i.imgur.com/ciyhdVb.png", // Final Result (After)
        "https://i.imgur.com/tbEzdMW.png"  // Initial Concept (Before)
      ]
    }
  },
  {
    id: 1,
    title: "Exotic Jeweler",
    category: "Shopify Design",
    year: "2025",
    imageUrl: "https://i.imgur.com/X7AW3Hw.png", 
    link: "https://exoticjeweler.com/",
    caseStudy: "A high-converting Shopify store redesign focusing on luxury and exclusivity.",
    extendedDetails: {
      role: "Shopify Designer & Developer",
      platform: "Shopify",
      clientOverview: "Exotic Jeweler is a boutique jewelry brand specializing in rare gemstones and bespoke engagement rings.",
      challenge: "The client needed a digital storefront that could translate the tactile and emotional experience of buying fine jewelry into an online format.",
      solution: "I designed and developed a custom Shopify experience that prioritizes visual storytelling and brand immersion.",
      features: [
        "Immersive Product Pages",
        "Advanced Filtering & Search",
        "Mobile-First Design",
        "Secure Checkout Integration"
      ],
      techStack: ["Shopify (OS 2.0)", "Liquid", "JavaScript", "Figma"],
      result: "Mobile conversions increased by 40% in the first quarter post-launch.",
      images: [
        "https://i.imgur.com/6kt9RKk.png",
        "https://i.imgur.com/IbxhWib.png",
        "https://i.imgur.com/PSMBasj.png",
        "https://i.imgur.com/11tf2td.png"
      ]
    }
  },
  {
    id: 2,
    title: "Maison De Coffee",
    category: "Branding",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "Comprehensive branding for a premium coffee house, including logo design and social media identity."
  },
  {
    id: 3,
    title: "E-com Multi-Store",
    category: "Store Management",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "Full-scale management of Amazon and eBay stores for a tech accessory retailer, optimizing product listings and inventory."
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/furqannazir.me/",
    label: "Instagram"
  },
  {
    platform: "Behance",
    url: "https://www.behance.net/furqannazir",
    label: "Behance"
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