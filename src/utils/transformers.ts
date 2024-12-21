import type {
  GhostPages,
  GhostPosts,
  GhostTagsList,
  GhostTagTransformed,
  Nullable,
} from '~/types'

import type {
  RvUnifiedSearchResponse,
  SearchPhotosList,
} from '~/types/rental-api-aliases'

/**
 * Adds a table of contents to the Ghost Post's HTML.
 *
 * @param {GhostPosts} data - The Ghost posts data.
 * @returns {GhostPosts} The transformed Ghost posts data.
 *
 * @example transformGhostPost(data)
 */
export const transformGhostPost = (data: GhostPosts) => {
  if (data.posts?.[0]?.html) {
    data.posts[0].html += '<div id="toc"></div>'
  }

  return data
}

/**
 * Adds a heading and table of contents to the Ghost Page's HTML.
 *
 * @param {GhostPages} data - The Ghost pages data.
 * @returns {GhostPages} The transformed Ghost pages data.
 *
 * @example transformGhostPage(data)
 */
export const transformGhostPage = (data: GhostPages) => {
  const page = data.pages?.[0]

  if (page) {
    page.feature_image = page.feature_image ?? 'https://cdn-s.rvezy.com/cms/ghost-default-image.png'

    page.html = `<h1>${page.title}</h1>${page.html}<div id="toc"></div>`
  }

  return data
}

/**
 * Transforms the tags that come from Ghost and into a sorted, human-readable list.
 *
 * @param {GhostTagsList} data - The Ghost tags list data.
 * @param {(key: string) => boolean} te - The translation function.
 * @returns {GhostTagTransformed[]} The transformed Ghost tags list data.
 *
 * @example transformGhostTags(data, te)
 */
export const transformGhostTags = (data: GhostTagsList, te: (key: string) => boolean): GhostTagTransformed[] => {
  return (data.tags || []).sort((a, b) => {
    return ((b.count?.posts ?? 0) - (a.count?.posts ?? 0)) || 0
  })
    .filter((tag) => tag.slug !== 'en' && tag.slug !== 'fr' && te(`tags.${tag.slug}`))
    .map((tag) => ({
      text: `${tag.name} (${tag.count?.posts})`,
      value: tag.slug,
    }))
}

/**
 * Transforms the Ghost API response to only the author on the root.
 *
 * @param {GhostPosts} data - The Ghost posts data.
 * @returns {GhostPosts} The transformed Ghost posts data.
 *
 * @example transformGhostPostsByAuthor(data)
 */
export const transformGhostPostsByAuthor = (data: GhostPosts) => {
  return {
    posts: data.posts,
    meta: data.meta,
    author: data.posts?.[0]?.primary_author,
  }
}

/**
 * Swaps the first two photos around and returns the photos.
 *
 * @param {SearchPhotosList | null | undefined} rvPhotos - The RV photos data.
 * @returns {SearchPhotosList | null | undefined} The transformed RV photos data.
 *
 * @example swapPhotos(rvPhotos)
 */
function swapPhotos(rvPhotos: Nullable<SearchPhotosList | undefined>) {
  if (rvPhotos && rvPhotos?.length > 1) {
    [rvPhotos[0], rvPhotos[1]] = [rvPhotos[1], rvPhotos[0]]
  }

  return rvPhotos
}

/**
 * Transforms the RV results by swapping the photos of the popular RVs if they
 * are also featured.
 *
 * @param {RvUnifiedSearchResponse} data - The RVezy API response data.
 * @returns {RvUnifiedSearchResponse} The transformed RVezy API response data.
 *
 * @example transformRVs(data)
 */
export const transformRVs = (data: RvUnifiedSearchResponse) => {
  if (data.PopularRVs?.ListRVs?.length && data.FeaturedRVs?.ListRVs?.length) {
    const featuredRVsIds = new Set(data.FeaturedRVs.ListRVs.map((rv) => rv.Id))

    data.PopularRVs.ListRVs.forEach((popularRV) => {
      if (featuredRVsIds.has(popularRV.Id) && popularRV.Photos && popularRV.Photos.length > 1) {
        popularRV.Photos = swapPhotos(popularRV.Photos)
      }
    })
  }

  return data
}

/**
 * Transforms the RVezy API response to only include the Featured RVs.
 *
 * @param {RvUnifiedSearchResponse} data - The RVezy API response data.
 * @returns {RvUnifiedSearchResponse} The transformed RVezy API response data.
 *
 * @example transformFeaturedRVs(data)
 */
export const transformFeaturedRVs = (data: RvUnifiedSearchResponse) => {
  return data.FeaturedRVs
}

/**
 * Transforms the RVezy API response to only include the Popular RVs.
 *
 * @param {RvUnifiedSearchResponse} data - The RVezy API response data.
 * @returns {RvUnifiedSearchResponse} The transformed RVezy API response data.
 *
 * @example transformPopularRVs(data)
 */
export const transformPopularRVs = (data: RvUnifiedSearchResponse) => {
  return data.PopularRVs
}
