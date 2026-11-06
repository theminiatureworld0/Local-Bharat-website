import { projects } from "@/data/projects";

/**
 * Returns all portfolio projects
 */
export function getAllProjects() {
  return projects;
}

/**
 * Returns projects highlighted on the homepage
 */
export function getFeaturedProjects() {
  return projects.filter((p) => p.featuredOnHome);
}

/**
 * Returns a single project by slug
 * @param {string} slug 
 */
export function getProjectBySlug(slug) {
  if (!slug) return null;
  return projects.find((p) => p.slug === slug) || null;
}
