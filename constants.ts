import { NavItem, Service, Project, SocialLink } from './types';

export const USER_DATA = {
  name: "Furqan Nazir",
  role: "Graphic & Web Designer",
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
    // Hero Image (Direct Imgur Link)
    imageUrl: "https://i.imgur.com/X7AW3Hw.png", 
    link: "https://exoticjeweler.com/",
    caseStudy: "A high-converting Shopify store redesign focusing on luxury and exclusivity.",
    extendedDetails: {
      role: "Shopify Designer & Developer",
      platform: "Shopify",
      clientOverview: "Exotic Jeweler is a boutique jewelry brand specializing in rare gemstones and bespoke engagement rings. The brand is defined by its commitment to exclusivity, craftsmanship, and providing a luxury experience that rivals visiting a physical showroom.",
      challenge: "The client needed a digital storefront that could translate the tactile and emotional experience of buying fine jewelry into an online format. Challenges included overcoming the hesitation customers feel when buying high-value items online, accurately showcasing the sparkle and scale of intricate pieces, and creating a seamless path to purchase for both impulsive buyers and those requiring consultation.",
      solution: "I designed and developed a custom Shopify experience that prioritizes visual storytelling and brand immersion. By utilizing a minimalist UI, the design allows the products to take center stage. The design philosophy was 'Luxury through Simplicity'—using plenty of whitespace, elegant typography, and high-quality imagery to evoke sophistication.",
      features: [
        "Immersive Product Pages with deep-zoom & video integration",
        "Advanced Filtering & Search by metal, cut, and price",
        "Mobile-First Design optimized for smartphone conversions",
        "Trust Signals integration (Certifications, Secure Checkout, Reviews)",
        "Seamless Mega Menu navigation"
      ],
      techStack: ["Shopify (OS 2.0)", "HTML5/CSS3", "Liquid", "JavaScript", "Figma"],
      result: "The new Exotic Jeweler website delivers a premium digital experience that reflects the quality of the physical product. The site is optimized for both speed and conversion, resulting in a 40% increase in mobile conversions and providing a solid foundation for the brand's digital growth.",
      images: [
        "https://i.imgur.com/6kt9RKk.png", // Featured Product
        "https://i.imgur.com/IbxhWib.png", // Staff Pick
        "https://i.imgur.com/PSMBasj.png", // Men's Collection
        "https://i.imgur.com/11tf2td.png"  // Ring Detail
      ]
    }
  },
  {
    id: 2,
    title: "Maison De Coffee",
    category: "Branding",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "Maison De Coffee required a rebranding that spoke to a sophisticated, urban audience. I developed a minimalist visual identity centered around earthy tones and clean typography. The scope included logo design, packaging assets, and a style guide ensuring consistency across all physical and digital touchpoints."
  },
  {
    id: 3,
    title: "Velvet Interiors",
    category: "Web Design",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "Velvet Interiors needed a portfolio website that functioned as a digital showroom. I focused on large-scale imagery and whitespace to let the interior work breathe. The site is built on Next.js for speed, featuring smooth page transitions and a custom CMS integration allowing the client to easily update their projects."
  },
  {
    id: 4,
    title: "TechFlow SaaS",
    category: "UI/UX",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "Designed the dashboard interface for TechFlow, a SaaS platform for workflow automation. The challenge was displaying complex data without overwhelming the user. I utilized a card-based layout, clear data visualization, and a comprehensive design system to ensure scalability."
  },
  {
    id: 5,
    title: "Aura Skincare",
    category: "Social Media",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1556228720-1927525287f4?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "Managed the art direction and content creation for Aura Skincare's Instagram launch. I produced a series of motion graphics and product photography that emphasized the organic ingredients. The campaign increased engagement by 200% in the first month."
  },
  {
    id: 6,
    title: "Nexus Shop",
    category: "Shopify",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-41531b6563e7?q=80&w=1000&auto=format&fit=crop",
    caseStudy: "A complete Shopify setup for a tech accessories brand. This included theme customization, app integration for reviews and upselling, and a mobile-first design approach. The clean layout helped build trust and significantly reduced cart abandonment rates."
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