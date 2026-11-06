import { siteConfig } from "@/config/siteConfig";

/**
 * Generates default and page-specific metadata for Next.js App Router
 */
export function constructMetadata({
  title,
  description,
  image = "/images/hero/hero-main.webp",
  canonicalUrl,
  noIndex = false,
}) {
  const fullTitle = title 
    ? `${title} | ${siteConfig.businessName}`
    : `${siteConfig.businessName} | ${siteConfig.tagline}`;
    
  const metaDescription = description || siteConfig.description;
  const url = canonicalUrl ? `${siteConfig.websiteUrl}${canonicalUrl}` : siteConfig.websiteUrl;
  const ogImage = image.startsWith("http") ? image : `${siteConfig.websiteUrl}${image}`;

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: url,
      siteName: siteConfig.businessName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    verification: siteConfig.googleSiteVerification ? {
      google: siteConfig.googleSiteVerification,
    } : undefined,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
  };
}

/**
 * Returns JSON-LD structured data for LocalBusiness & Organization
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "alternateName": siteConfig.shortBusinessName,
    "description": siteConfig.description,
    "url": siteConfig.websiteUrl,
    "telephone": siteConfig.phoneNumberRaw,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.city,
      "addressRegion": siteConfig.state,
      "addressCountry": siteConfig.country,
      "postalCode": siteConfig.postalCode,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "areaServed": siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      "name": area
    })),
    "knowsAbout": [
      "Local Business Discovery India",
      "Tier 2 and Tier 3 Cities Commerce",
      "Custom Quotation Marketplace",
      "Verified Local Vendors & Artisans",
      "Home Improvement & Custom Work",
      "Printing and Commercial Packaging",
      "Local Furniture & Stonework"
    ]
  };
}

/**
 * Returns JSON-LD structured data for WebSite
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.businessName,
    "alternateName": siteConfig.shortBusinessName,
    "url": siteConfig.websiteUrl,
    "description": siteConfig.description,
  };
}

/**
 * Returns JSON-LD structured data for BreadcrumbList
 * @param {Array<{name: string, item: string}>} items 
 */
export function getBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.websiteUrl}${item.item}`,
    })),
  };
}

/**
 * Returns JSON-LD structured data for a single Product / Offering
 * @param {object} product 
 */
export function getProductSchema(product) {
  if (!product) return null;
  const imageUrl = product.images?.[0]?.startsWith("http")
    ? product.images[0]
    : `${siteConfig.websiteUrl}${product.images?.[0] || ""}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": imageUrl,
    "description": product.description || product.shortDescription,
    "category": product.category,
    "material": product.material,
    "brand": {
      "@type": "Brand",
      "name": product.vendor || siteConfig.businessName,
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "description": product.priceEstimate || "Price upon custom quotation."
    }
  };
}
