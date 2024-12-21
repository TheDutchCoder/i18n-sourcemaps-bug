import type { $Fetch, NitroFetchRequest } from 'nitropack'

import type {
  GhostPages,
  GhostPosts,
  GhostPostsByAuthorParams,
  GhostPostsForBlogParams,
  GhostTagsList,
} from '~/types'

/**
 * A collection of methods to call the Ghost API endpoints with.
 */
export const ghostRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  getPage: (slug: string) => fetch<GhostPages>(`/pages/${slug}/`, {
    params: {
      limit: 1,
    },
  }),

  getPosts: (slug: string) => fetch<GhostPosts>(`/posts/slug/${slug}`, {
    params: {
      include: 'tags,authors',
    },
  }),

  getPost: (slug: string) => fetch<GhostPosts>(`/posts/slug/${slug}`, {
    params: {
      include: 'tags,authors',
      limit: 1,
    },
  }),

  getPostsByAuthor: (params: ComputedRef<GhostPostsByAuthorParams>) => fetch<GhostPosts>('/posts/', {
    params: {
      include: 'tags,authors',
      filter: params.value.filter,
      page: params.value.pageNumber ?? 1,
      limit: params.value.limit ?? 12,
    },
  }),

  getPostsByTag: (tag: string) => fetch<GhostPosts>('/posts/', {
    params: {
      include: 'tags,authors',
      filter: `tag:${tag}`,
    },
  }),

  getPostsForBlog: (params: ComputedRef<GhostPostsForBlogParams>) => fetch<GhostPosts>('/posts/', {
    params: {
      include: 'tags,authors',
      filter: params.value.filter,
      page: params.value.pageNumber ?? 1,
      limit: params.value.limit ?? 10,
    },
  }),

  getTags: () => fetch<GhostTagsList>('/tags/', {
    params: {
      include: 'count.posts',
      limit: 'all',
      filter: 'visibility:public',
    },
  }),
})
