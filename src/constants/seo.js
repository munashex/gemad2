// src/constants/seo.js

export const SITE_URL = 'https://gemad.co.za'
export const SITE_NAME = 'GEMAD - Geological Evaluation & Mineral Assets Development'
export const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`

// Organization Structured Data (for all pages)
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "MiningCompany",
  "name": "GEMAD",
  "alternateName": "Geological Evaluation and Mineral Assets Development",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo/logo.png`,
  "description": "GEMAD is a South African mineral asset development entity focused on identifying, evaluating, and advancing high-potential mineral projects into economically viable mining operations.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No.15, Mareu Buildings, No.5 Samuel Road",
    "addressLocality": "Delmas",
    "addressRegion": "Mpumalanga",
    "postalCode": "2210",
    "addressCountry": "ZA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+27 12 004 3942",
    "contactType": "customer service",
    "email": "info@gemad.co.za",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/g-e-m-a-d/"
  ],
  "knowsAbout": [
    "Geological Evaluation",
    "Mineral Exploration",
    "Resource Modelling",
    "Mine Planning",
    "Critical Minerals",
    "Coal Mining",
    "Rare Earth Elements",
    "Base Metals",
    "Project Development"
  ]
}

// Home Page SEO
export const homeSEO = {
  title: 'Home',
  description: 'GEMAD is a South African mineral asset development entity focused on identifying, evaluating, and advancing high-potential mineral projects into economically viable mining operations. From geological evaluation to bankable mineral assets.',
  keywords: 'mining, geological evaluation, mineral assets, exploration, South Africa, critical minerals, coal, rare earth elements, base metals, mineral development',
  canonicalUrl: '/',
  ogTitle: 'GEMAD | Geological Evaluation & Mineral Assets Development',
  ogDescription: 'South African mineral asset development entity specializing in exploration, resource modelling, and project development. Transform your mineral opportunity into a bankable asset.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "WebPage",
        "name": "GEMAD - Home",
        "description": "South African mineral asset development entity focused on exploration, resource modelling, and project development.",
        "url": SITE_URL,
        "isPartOf": {
          "@type": "WebSite",
          "name": "GEMAD",
          "url": SITE_URL
        }
      }
    ]
  }
}

// About Page SEO
export const aboutSEO = {
  title: 'About Us',
  description: 'Learn about GEMAD - Geological Evaluation and Mineral Assets Development. We are a 100% black-owned South African mining company specializing in exploration, technical advisory, and project development.',
  keywords: 'about GEMAD, mineral assets development, South African mining company, geological evaluation, mining services South Africa',
  canonicalUrl: '/about',
  ogTitle: 'About GEMAD | Geological Evaluation & Mineral Assets Development',
  ogDescription: 'GEMAD operates as both a technical authority and a mineral asset developer, specializing in the acquisition, evaluation, advancement, and development of strategic mineral assets.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "AboutPage",
        "name": "About GEMAD",
        "description": "Geological Evaluation and Mineral Assets Development — representing the full spectrum of technical and project development services required to unlock mineral value responsibly and sustainably.",
        "url": `${SITE_URL}/about`,
        "isPartOf": {
          "@type": "WebSite",
          "name": "GEMAD",
          "url": SITE_URL
        }
      }
    ]
  }
}

// Services Page SEO
export const servicesSEO = {
  title: 'Services',
  description: 'GEMAD provides comprehensive geological evaluation, exploration, resource modelling, mineral asset development, and project advisory services. From grassroots exploration to bankable feasibility studies.',
  keywords: 'geological evaluation, exploration services, resource modelling, mineral asset development, project advisory, mining services, feasibility studies, SAMREC compliant',
  canonicalUrl: '/services',
  ogTitle: 'Our Services | GEMAD Mining Services',
  ogDescription: 'Full spectrum of technical and project development services required to unlock mineral value responsibly and sustainably — from grassroots exploration to bankable feasibility studies.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "ItemList",
        "name": "GEMAD Mining Services",
        "description": "Comprehensive geological and mining services from exploration to bankable studies",
        "numberOfItems": 4,
        "url": `${SITE_URL}/services`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Geological Evaluation & Exploration",
            "description": "Exploration and geological evaluation services for mineral resource identification"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resource Modelling & Estimation",
            "description": "3D geological modelling and mineral resource estimation"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mineral Asset Development",
            "description": "Mine design, planning, and feasibility studies"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Project Evaluation & Advisory",
            "description": "Technical due diligence and investment advisory services"
          }
        ]
      }
    ]
  }
}

// Commodities Page SEO
export const commoditiesSEO = {
  title: 'Commodities',
  description: 'Explore GEMAD\'s diversified mineral portfolio including critical minerals, rare earth elements, coal, and base metals. Strategic mineral development for industrial growth and energy transition.',
  keywords: 'critical minerals, rare earth elements, coal mining, base metals, copper, zinc, lead, nickel, manganese, mineral portfolio, South Africa commodities',
  canonicalUrl: '/commodities',
  ogTitle: 'Our Commodities | GEMAD Mineral Portfolio',
  ogDescription: 'GEMAD is building a diversified portfolio of high-quality mineral assets spanning critical minerals, rare earth elements, coal, and base metals.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "ItemList",
        "name": "GEMAD Commodity Portfolio",
        "description": "Diversified mineral portfolio including critical minerals, rare earth elements, coal, and base metals",
        "numberOfItems": 4,
        "url": `${SITE_URL}/commodities`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Critical Minerals",
            "description": "Essential minerals for industrial growth, renewable energy technologies, and future global supply chains"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Rare Earth Elements",
            "description": "Strategic projects essential for future technologies and the global energy transition"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Coal",
            "description": "Evaluation and development of coal assets with strong geological and economic potential"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Base Metals",
            "description": "Copper, zinc, lead, nickel, and manganese exploration and evaluation"
          }
        ]
      }
    ]
  }
}

// Contact Page SEO
export const contactSEO = {
  title: 'Contact Us',
  description: 'Get in touch with GEMAD for mineral exploration, development, and advisory services. Contact our team in Delmas, South Africa for partnership opportunities.',
  keywords: 'contact GEMAD, mining consultation, mineral project inquiries, Delmas mining, South Africa mining contact',
  canonicalUrl: '/contact',
  ogTitle: 'Contact GEMAD | Mineral Asset Development Experts',
  ogDescription: 'Ready to advance your mineral project? Reach out to our team — we\'re here to discuss exploration, development, and partnership opportunities.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "ContactPage",
        "name": "Contact GEMAD",
        "description": "Get in touch with GEMAD for mineral exploration, development, and advisory services",
        "url": `${SITE_URL}/contact`,
        "isPartOf": {
          "@type": "WebSite",
          "name": "GEMAD",
          "url": SITE_URL
        }
      }
    ]
  }
}

// Social Responsibility Page SEO
export const socialResponsibilitySEO = {
  title: 'Social Responsibility',
  description: 'GEMAD is committed to Environmental, Social, and Governance (ESG) principles. ISO 9001, ISO 14001, and ISO 45001 certified with focus on community development and sustainable mining practices.',
  keywords: 'ESG mining, environmental stewardship, social responsibility mining, governance mining, ISO certified mining, sustainable mining South Africa',
  canonicalUrl: '/social-responsibility',
  ogTitle: 'Social Responsibility | GEMAD ESG Commitment',
  ogDescription: 'At GEMAD, Environmental, Social, and Governance (ESG) principles form an integral part of our mineral asset development strategy.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "WebPage",
        "name": "GEMAD Social Responsibility",
        "description": "Environmental, Social, and Governance (ESG) principles in mineral asset development",
        "url": `${SITE_URL}/social-responsibility`,
        "isPartOf": {
          "@type": "WebSite",
          "name": "GEMAD",
          "url": SITE_URL
        }
      }
    ]
  }
}

// Team Page SEO
export const teamSEO = {
  title: 'Our Team',
  description: 'Meet the experienced professionals driving GEMAD\'s vision for sustainable mineral asset development across Africa. Geologists, mining engineers, and project development experts.',
  keywords: 'mining team, geologists South Africa, mining engineers, Pr.Sci.Nat, mineral exploration experts, GEMAD team',
  canonicalUrl: '/team',
  ogTitle: 'Our Team | GEMAD Leadership & Experts',
  ogDescription: 'Meet the experienced professionals driving GEMAD\'s vision for sustainable mineral asset development across Africa.',
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "AboutPage",
        "name": "GEMAD Team",
        "description": "Experienced geologists, mining engineers, exploration specialists, and project developers",
        "url": `${SITE_URL}/team`,
        "isPartOf": {
          "@type": "WebSite",
          "name": "GEMAD",
          "url": SITE_URL
        }
      }
    ]
  }
}

// 404 Page SEO
export const notFoundSEO = {
  title: 'Page Not Found',
  description: 'The page you\'re looking for doesn\'t exist or has been moved. Return to GEMAD homepage to explore our mining services and mineral portfolio.',
  keywords: '404, page not found, GEMAD',
  canonicalUrl: '/404',
  noIndex: true,
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      {
        "@type": "WebPage",
        "name": "Page Not Found",
        "description": "The requested page could not be found",
        "url": `${SITE_URL}/404`
      }
    ]
  }
}