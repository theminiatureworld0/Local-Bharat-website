import { siteConfig } from "@/config/siteConfig";
import { getAllProducts } from "@/lib/products";
import { getAllCategories } from "@/lib/categories";

export default function sitemap() {
  const baseUrl = siteConfig.websiteUrl;
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Category Pages
  const categories = getAllCategories();
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/collections/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Product Pages
  const products = getAllProducts();
  const productRoutes = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
