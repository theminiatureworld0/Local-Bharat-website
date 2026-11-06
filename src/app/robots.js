import { siteConfig } from "@/config/siteConfig";

export default function robots() {
  const baseUrl = siteConfig.websiteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
