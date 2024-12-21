import { describe, expect, test } from 'vitest'
import {
  transformFeaturedRVs,
  transformGhostPage,
  transformGhostPost,
  transformGhostPostsByAuthor,
  transformGhostTags,
  transformPopularRVs,
  transformRVs,
} from '~/utils/transformers'
import type { GhostPosts } from '~/types'
import type { RvUnifiedSearchResponse } from '~/types/rental-api-aliases'

describe('transformers', () => {
  describe('transformGhostPost', () => {
    const ghostPosts: GhostPosts = {
      posts: [
        {
          authors: [{ name: 'Author 1' }, { name: 'Author 2' }],
          tags: [{ name: 'Tag 1' }, { name: 'Tag 2' }],
          html: '<p>This is the content of the post.</p>',
          primary_author: { name: 'Author 1' },
          primary_tag: { name: 'Tag 1' },
        },
      ],
    }

    const ghostPostsNoPost: GhostPosts = {
      posts: [],
    }

    test('should add a table of contents if there is a post', () => {
      expect(transformGhostPost(ghostPosts)).toEqual({
        posts: [
          {
            ...ghostPosts?.posts?.[0],
            html: '<p>This is the content of the post.</p><div id="toc"></div>',
          },
        ],
      })
    })

    test('should not transform when there is no post', () => {
      expect(transformGhostPost(ghostPostsNoPost)).toEqual(ghostPostsNoPost)
    })
  })

  describe('transformGhostPage', () => {
    const ghostPages = {
      pages: [
        {
          title: 'Page 1',
          feature_image: 'https://cdn-s.rvezy.com/cms/image.png',
          html: '<p>This is the content of the page.</p>',
        },
      ],
    }

    const ghostPagesNoImage = {
      pages: [
        {
          title: 'Page 1',
          html: '<p>This is the content of the page.</p>',
        },
      ],
    }

    const ghostPagesNoPage = {
      pages: [],
    }

    test('should add a table of contents if there is a page', () => {
      expect(transformGhostPage(ghostPages)).toEqual({
        pages: [
          {
            ...ghostPages?.pages?.[0],
            feature_image: 'https://cdn-s.rvezy.com/cms/image.png',
            html: '<h1>Page 1</h1><p>This is the content of the page.</p><div id="toc"></div>',
          },
        ],
      })
    })

    test('should add a default image if there is no feature image', () => {
      expect(transformGhostPage(ghostPagesNoImage)).toEqual({
        pages: [
          {
            ...ghostPages?.pages?.[0],
            feature_image: 'https://cdn-s.rvezy.com/cms/ghost-default-image.png',
            html: '<h1>Page 1</h1><p>This is the content of the page.</p><div id="toc"></div>',
          },
        ],
      })
    })

    test('should not transform when there is no page', () => {
      expect(transformGhostPage(ghostPagesNoPage)).toEqual(ghostPagesNoPage)
    })
  })

  describe('transformGhostTags', () => {
    const ghostTags = {
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          slug: 'tag-1',
          count: {
            posts: 1,
          },
        },
        {
          id: '2',
          name: 'Tag 2',
          slug: 'tag-2',
          count: {
            posts: 8,
          },
        },
        {
          id: '100',
          name: 'EN',
          slug: 'en',
        },
        {
          id: '101',
          name: 'FR',
          slug: 'fr',
        },
        {
          id: '3',
          name: 'Tag 3',
          slug: 'tag-3',
          count: {
            posts: 3,
          },
        },
      ],
    }

    test('should add a table of contents if there is a page', () => {
      expect(transformGhostTags(ghostTags, () => true)).toEqual([
        {
          text: 'Tag 2 (8)',
          value: 'tag-2',
        },
        {
          text: 'Tag 3 (3)',
          value: 'tag-3',
        },
        {
          text: 'Tag 1 (1)',
          value: 'tag-1',
        },
      ])
    })
  })

  describe('transformGhostPostsByAuthor', () => {
    const ghostPosts: GhostPosts = {
      posts: [{
        authors: [{
          name: 'Author 1',
        }],
        tags: [{
          name: 'Tag 1',
        }],
        primary_author: {
          name: 'Author 1',
        },
        primary_tag: {
          name: 'Tag 1',
        },
      }],
      meta: {
        pagination: {
          next: 2,
        },
      },
    }

    test('should return the posts, emtadata, and author', () => {
      expect(transformGhostPostsByAuthor(ghostPosts)).toEqual({
        posts: ghostPosts.posts,
        meta: ghostPosts.meta,
        author: {
          name: 'Author 1',
        },
      })
    })
  })

  describe('transformRVs', () => {
    test('swaps photos of RVs in both featured and popular results', () => {
      const RV1_ORIGINAL = {
        AveragePrice: 100,
        Id: '1',
        AverageRating: 0,
        DefaultPrice: 0,
        Distance: 0,
        HasDelivery: false,
        InstabookOwnerOptedIn: false,
        IsDeliveryOnly: false,
        IsFeatured: false,
        IsShortStay: false,
        IsSuperHostActive: false,
        NumberOfReview: 0,
        OriginalPrice: 0,
        OwnerId: 0,
        Photos: [{
          Order: 1,
          Path: '/photo1.webp',
        }, {
          Order: 2,
          Path: '/photo2.webp',
        }, {
          Order: 3,
          Path: '/photo3.webp',
        }],
      }

      const RV2_ORIGINAL = {
        AveragePrice: 100,
        Id: '1',
        AverageRating: 0,
        DefaultPrice: 0,
        Distance: 0,
        HasDelivery: false,
        InstabookOwnerOptedIn: false,
        IsDeliveryOnly: false,
        IsFeatured: false,
        IsShortStay: false,
        IsSuperHostActive: false,
        NumberOfReview: 0,
        OriginalPrice: 0,
        OwnerId: 0,
        Photos: [{
          Order: 1,
          Path: '/photo1.webp',
        }, {
          Order: 2,
          Path: '/photo2.webp',
        }, {
          Order: 3,
          Path: '/photo3.webp',
        }],
      }

      const RV1_TRANSFORMED = {
        AveragePrice: 100,
        Id: '1',
        AverageRating: 0,
        DefaultPrice: 0,
        Distance: 0,
        HasDelivery: false,
        InstabookOwnerOptedIn: false,
        IsDeliveryOnly: false,
        IsFeatured: false,
        IsShortStay: false,
        IsSuperHostActive: false,
        NumberOfReview: 0,
        OriginalPrice: 0,
        OwnerId: 0,
        Photos: [{
          Order: 2,
          Path: '/photo2.webp',
        }, {
          Order: 1,
          Path: '/photo1.webp',
        }, {
          Order: 3,
          Path: '/photo3.webp',
        }],
      }

      const RV2_TRANSFORMED = {
        AveragePrice: 100,
        Id: '1',
        AverageRating: 0,
        DefaultPrice: 0,
        Distance: 0,
        HasDelivery: false,
        InstabookOwnerOptedIn: false,
        IsDeliveryOnly: false,
        IsFeatured: false,
        IsShortStay: false,
        IsSuperHostActive: false,
        NumberOfReview: 0,
        OriginalPrice: 0,
        OwnerId: 0,
        Photos: [{
          Order: 2,
          Path: '/photo2.webp',
        }, {
          Order: 1,
          Path: '/photo1.webp',
        }, {
          Order: 3,
          Path: '/photo3.webp',
        }],
      }

      const apiResponse: RvUnifiedSearchResponse = {
        FeaturedRVs: {
          TotalRVs: 2,
          ListRVs: [RV1_ORIGINAL, RV2_ORIGINAL],
        },
        PopularRVs: {
          TotalRVs: 2,
          ListRVs: [RV1_ORIGINAL, RV2_ORIGINAL],
        },
      }

      const transformedApiResponse: RvUnifiedSearchResponse = {
        FeaturedRVs: {
          TotalRVs: 2,
          ListRVs: [RV1_TRANSFORMED, RV2_TRANSFORMED],
        },
        PopularRVs: {
          TotalRVs: 2,
          ListRVs: [RV1_ORIGINAL, RV2_ORIGINAL],
        },
      }

      expect(transformRVs(apiResponse)).toEqual(transformedApiResponse)
    })
  })

  describe('transformFeauredRVs', () => {
    test('returns only featured RVs from the API response', () => {
      const apiResponse: RvUnifiedSearchResponse = {
        FeaturedRVs: {
          Id: '1',
          TotalRVs: 1,
          ListRVs: [{
            AveragePrice: 100,
            Id: '1',
            AverageRating: 0,
            DefaultPrice: 0,
            Distance: 0,
            HasDelivery: false,
            InstabookOwnerOptedIn: false,
            IsDeliveryOnly: false,
            IsFeatured: false,
            IsShortStay: false,
            IsSuperHostActive: false,
            NumberOfReview: 0,
            OriginalPrice: 0,
            OwnerId: 0,
          }],
        },
        PopularRVs: {
          Id: '2',
          TotalRVs: 0,
          ListRVs: [],
        },
      }

      expect(transformFeaturedRVs(apiResponse)).toEqual(apiResponse.FeaturedRVs)
    })
  })

  describe('transformPopularRVs', () => {
    test('returns only popular RVs from the API response', () => {
      const apiResponse: RvUnifiedSearchResponse = {
        PopularRVs: {
          Id: '1',
          TotalRVs: 1,
          ListRVs: [{
            AveragePrice: 100,
            Id: '1',
            AverageRating: 0,
            DefaultPrice: 0,
            Distance: 0,
            HasDelivery: false,
            InstabookOwnerOptedIn: false,
            IsDeliveryOnly: false,
            IsFeatured: false,
            IsShortStay: false,
            IsSuperHostActive: false,
            NumberOfReview: 0,
            OriginalPrice: 0,
            OwnerId: 0,
          }],
        },
        FeaturedRVs: {
          Id: '2',
          TotalRVs: 0,
          ListRVs: [],
        },
      }

      expect(transformPopularRVs(apiResponse)).toEqual(apiResponse.PopularRVs)
    })
  })
})
