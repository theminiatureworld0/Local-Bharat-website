import { categories } from "@/data/categories";
import { getCategoryProductCount } from "@/lib/products";

/**
 * Returns all 6 business categories
 */
export function getAllCategories() {
  return categories.map((cat) => ({
    ...cat,
    productCount: getCategoryProductCount(cat.slug),
  }));
}

/**
 * Returns a category by its slug
 * @param {string} slug 
 */
export function getCategoryBySlug(slug) {
  if (!slug) return null;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return null;
  return {
    ...category,
    productCount: getCategoryProductCount(category.slug),
  };
}
