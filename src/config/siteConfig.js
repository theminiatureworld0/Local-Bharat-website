/**
 * Site Configuration
 * Central configuration file for brand identity, contact information,
 * social links, and SEO settings for Local Bharat.
 */

// Dynamically determine the live production site URL
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://localbharat.in";
};

export const siteConfig = {
  // Brand Details
  businessName: "Local Bharat",
  shortBusinessName: "Local Bharat",
  tagline: "Discover Local. Grow Local.",
  edition: "Version 3.0 • Local Business Discovery, Growth & Commerce Platform",
  description: "Digital platform connecting local businesses, service providers, manufacturers, and artisans in India's Tier-2 & Tier-3 cities with customers through digital storefronts, structured quotations, verified leads, and commerce tools.",
  
  // Contact Information (Matched with user's profile and support line)
  phoneNumber: "+91 73852 37358",
  phoneNumberRaw: "+917385237358",
  whatsappNumber: "+917385237358",
  email: "support@localbharat.com",
  
  // Primary Launch Location (Mansarovar, Jaipur)
  locality: "Mansarovar",
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  postalCode: "302020",
  serviceAreas: ["Mansarovar", "Malviya Nagar", "Vaishali Nagar", "Sanganer", "Jaipur", "Pune", "Tier 2 & 3 Hubs"],
  
  // Visual Assets
  logo: "/images/icons/logo.svg",
  favicon: "/favicon.svg",
  
  // Brand Colors
  colors: {
    primary: "#B5532F",
    pressed: "#7A2E17",
    hover: "#D9743F",
    accent: "#D8A97C",
    background: "#F3E9DC",
    card: "#FBF6EE",
    border: "#E4D3BD",
    mainText: "#2E1A12",
    secondaryText: "#7B5C4B",
    success: "#5E7F6E",
  },

  // Social Media Links
  instagramUrl: "https://instagram.com/localbharat",
  facebookUrl: "https://facebook.com/localbharat",
  googleMapsUrl: "https://maps.google.com/?q=Mansarovar+Jaipur",
  websiteUrl: getBaseUrl(),
  
  // Form Submission Endpoint
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",

  // Google Search Console Verification code
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export default siteConfig;
