import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noIndex = false,
  noFollow = false,
  author = 'GEMAD',
  siteName = 'GEMAD - Geological Evaluation & Mineral Assets Development',
  locale = 'en_ZA'
}) => {
  // Set defaults
  const siteUrl = 'https://gemad.co.za'
  const defaultTitle = 'GEMAD | Geological Evaluation & Mineral Assets Development'
  const defaultDescription = 'GEMAD is a South African mineral asset development entity focused on identifying, evaluating, and advancing high-potential mineral projects into economically viable mining operations.'
  const defaultImage = `${siteUrl}/images/og-image.jpg`
  
  // Final values
  const finalTitle = title ? `${title} | GEMAD` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalOgTitle = ogTitle || finalTitle
  const finalOgDescription = ogDescription || finalDescription
  const finalOgImage = ogImage || defaultImage
  const finalOgUrl = ogUrl || `${siteUrl}${canonicalUrl || ''}`
  const finalCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}${window.location.pathname}`
  const finalKeywords = keywords || 'mining, geological evaluation, mineral assets, exploration, South Africa, critical minerals, coal, rare earth elements, base metals'
  
  // Twitter values
  const finalTwitterTitle = twitterTitle || finalTitle
  const finalTwitterDescription = twitterDescription || finalDescription
  const finalTwitterImage = twitterImage || defaultImage

  // Robots meta
  const robots = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`

  useEffect(() => {
    // Update document title
    document.title = finalTitle
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = finalDescription
      document.head.appendChild(metaDescription)
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords)
    } else {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      metaKeywords.content = finalKeywords
      document.head.appendChild(metaKeywords)
    }
    
    // Update robots
    let metaRobots = document.querySelector('meta[name="robots"]')
    if (metaRobots) {
      metaRobots.setAttribute('content', robots)
    } else {
      metaRobots = document.createElement('meta')
      metaRobots.name = 'robots'
      metaRobots.content = robots
      document.head.appendChild(metaRobots)
    }
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonical)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = finalCanonical
      document.head.appendChild(canonicalLink)
    }
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: finalOgTitle },
      { property: 'og:description', content: finalOgDescription },
      { property: 'og:image', content: finalOgImage },
      { property: 'og:url', content: finalOgUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: locale },
    ]
    
    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`)
      if (element) {
        element.setAttribute('content', tag.content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('property', tag.property)
        element.setAttribute('content', tag.content)
        document.head.appendChild(element)
      }
    })
    
    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: finalTwitterTitle },
      { name: 'twitter:description', content: finalTwitterDescription },
      { name: 'twitter:image', content: finalTwitterImage },
    ]
    
    twitterTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"]`)
      if (element) {
        element.setAttribute('content', tag.content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('name', tag.name)
        element.setAttribute('content', tag.content)
        document.head.appendChild(element)
      }
    })
    
    // Add structured data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('#structured-data')
      if (script) {
        script.textContent = JSON.stringify(structuredData)
      } else {
        script = document.createElement('script')
        script.id = 'structured-data'
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(structuredData)
        document.head.appendChild(script)
      }
    }
  }, [
    finalTitle, finalDescription, finalKeywords, robots, finalCanonical,
    finalOgTitle, finalOgDescription, finalOgImage, finalOgUrl, ogType,
    finalTwitterTitle, finalTwitterDescription, finalTwitterImage, twitterCard,
    structuredData, siteName, locale
  ])

  // This component doesn't render anything visible
  return null
}

// Default Organization Structured Data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "MiningCompany",
  "name": "GEMAD",
  "alternateName": "Geological Evaluation and Mineral Assets Development",
  "url": "https://gemad.co.za",
  "logo": "https://gemad.co.za/images/logo/logo.png",
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

// Home Page Structured Data
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "GEMAD - Geological Evaluation & Mineral Assets Development",
  "description": "South African mineral asset development entity focused on exploration, resource modelling, and project development.",
  "url": "https://gemad.co.za",
  "isPartOf": {
    "@type": "WebSite",
    "name": "GEMAD",
    "url": "https://gemad.co.za"
  }
}

// Services Page Structured Data
export const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "GEMAD Mining Services",
  "description": "Comprehensive geological and mining services from exploration to bankable studies",
  "numberOfItems": 4,
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

// Commodities Page Structured Data
export const commoditiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "GEMAD Commodity Portfolio",
  "description": "Diversified mineral portfolio including critical minerals, rare earth elements, coal, and base metals",
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Critical Minerals",
      "description": "Essential minerals for industrial growth and energy transition"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rare Earth Elements",
      "description": "Strategic projects for future technologies"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Coal",
      "description": "Evaluation and development of coal assets"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Base Metals",
      "description": "Copper, zinc, lead, nickel, and manganese exploration"
    }
  ]
}

export default SEO