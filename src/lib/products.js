import { products } from "@/data/products";

/**
 * Returns all products from the catalog
 */
export function getAllProducts() {
  return products;
}

/**
 * Returns a single product by its unique slug
 * @param {string} slug 
 */
export function getProductBySlug(slug) {
  if (!slug) return null;
  return products.find((p) => p.slug === slug) || null;
}

/**
 * Returns all products belonging to a category slug
 * @param {string} categorySlug 
 */
export function getProductsByCategory(categorySlug) {
  if (!categorySlug) return [];
  return products.filter((p) => p.category === categorySlug);
}

/**
 * Returns products flagged as featured
 * @param {number} limit 
 */
export function getFeaturedProducts(limit = 6) {
  const featured = products.filter((p) => p.featured);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Returns related products from the same category, excluding the current product
 * @param {object} currentProduct 
 * @param {number} limit 
 */
export function getRelatedProducts(currentProduct, limit = 3) {
  if (!currentProduct) return [];
  const related = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );
  return related.slice(0, limit);
}

/**
 * Returns the count of products in a given category
 * @param {string} categorySlug 
 */
export function getCategoryProductCount(categorySlug) {
  if (!categorySlug) return 0;
  return products.filter((p) => p.category === categorySlug).length;
}
