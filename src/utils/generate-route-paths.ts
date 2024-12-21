import type { LocationQuery } from 'vue-router'

/**
 * Generates a path object from a slug and query that represents the an RV rentals page.
 *
 * @param {string} slug The slug to use for the RV rental.
 * @param {LocationQuery} query The query to use for the RV rental.
 *
 * @example generateRvPath('slug', {}) // { name: 'rv-rental', params: { alias: 'slug' }, query: {} }
 */
export const generateRvPath = (slug: string, query: LocationQuery) => {
  return {
    name: 'rv-rental',
    params: { alias: slug },
    query,
  }
}
