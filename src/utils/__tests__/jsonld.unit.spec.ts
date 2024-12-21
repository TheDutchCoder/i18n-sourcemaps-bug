import { describe, expect, test } from 'vitest'
import {
  getAuthorLD,
  getBlogPostingLD,
  getBreadcrumbList,
  getFaq,
  getListItem,
  getOrganizationLogoLD,
  getProductJson,
  getQuestionAndAnswer,
  getReviewSnippet,
  getStructuredDataBlog,
  getStructuredDataBlogPosting,
} from '~/utils/jsonld'
import type { GhostPost, RvDetails } from '~/types'

const testRv: RvDetails = {
  DynamicPricingOptIn: true,
  HasSmartPricingApplied: true,
  IsActivated: true,
  IsInstantBook: true,
  Id: 'string',
  DefaultPrice: 100,
  OriginalPrice: 90,
  Guests: 2,
  Length: 20,
  ListAddOns: [],
  Location: {
    Latitude: 74.10,
    Longitude: 23.09,
    City: 'Ottawa',
    Country: 'CA',
    State: 'ON',
    Timezone: 'GMT+5',
  },
  HitchSize: '4',
  HitchWeight: 200,
  InteriorFeatures: [],
  IsChargeMileage: true,
  IsGenerator: true,
  Make: 'My Make',
  RVBrandOther: 'Other Brand',
  Model: 'My Model',
  MonthlyDiscount: 20,
  OwnerId: 12345,
  OwnerAvatar: '/path/to/avatar.jpg',
  OwnerLastName: 'Ownerson',
  OwnerFirstName: 'Owner',
  OwnerScore: 5,
  OwnerVerified: true,
  OwnerAbout: 'I am Owner Ownerson',
  OwnerCreatedAt: '2024-01-01',
  ParkAmenities: [],
  Photos: [],
  RentalType: 'TravelTrailer',
  RenterRating: 5,
  RVDescription: 'Description',
  RVName: 'RV Name',
  RVNumber: 1,
  RVType: 'ClassA',
  Slideouts: 1,
  Weight: 2000,
  WeeklyDiscount: 20,
  Year: 2023,
  MinimumTripLength: 2,
  Calendars: [],
  IsInsured: true,
  AliasName: 'rv_alias',
  RenterCategoryRatings: [],
  Reviews: [],
  RVSellingDate: '2025-01-01',
  IsFeatured: true,
  CleaningFee: 50,
  SecurityDeposit: 1000,
  SurchargePerExtraKM: 0.10,
  DailyKMAllowed: 500,
  FreeHoursPerDay: 2,
  ChargePerHourOver: 1.50,
  DeliveryInstructions: 'Delivery Instructions',
  Tour3DUrl: '/path/to/tour',
  InsideLeadDays: 1,
  OutsideLeadDays: 1,
  Timezone: 'GMT+5',
  IsDeliveryOnly: false,
  CheckInAvailabilityDays: [],
  BedKing: 2,
  BedQueen: 2,
  BedDinette: 2,
  BedSofa: 2,
  BedBunkTwin: 2,
  BedBunkDouble: 2,
  SeatbeltThreePoint: 2,
  SeatbeltTwoPoint: 2,
  FuelType: 'Diesel',
  IsSuperHostActive: true,
  AllowOnlyExperiencedSimilarRV: false,
  AllowFestivalEventsParticipation: 'Yes',
  AllowCrossBorderTravel: true,
  BookingSeasonStart: 1,
  BookingSeasonEnd: 10,
  DeliveryCentsPerDistanceUnit: 100,
  DeliveryMaxDistance: 500,
  DeliveryMinimumCostCents: 2000,
  CheckInStartTime: 1,
  CheckInEndTime: 9,
  CheckoutStartTime: 2,
  CheckoutEndTime: 10,
  Country: 'CA',
} as RvDetails

const ghostPostList: GhostPost[] = [
  {
    html: '<p>Some HTML Post1</p>',
    meta_title: 'Meta Title Post1',
    meta_description: 'Meta Description Post1',
    published_at: '2024-05-10T16:01:59.712Z',
    updated_at: '2024-05-10T16:01:59.712Z',
    title: 'Title Post1',
    feature_image: 'https://www.image.com/Image1.jpg',
    slug: 'slug1',
    tags: [],
    authors: [],
    primary_author: {
      name: 'John Doe',
      profile_image: 'https://www.image.com/JohnDoe.jpg',
      url: 'https://ghost.rvezy.com:443/JohnDoe',
    },
    primary_tag: {
      name: 'Tag1',
    },
  },
  {
    html: '<p>Some HTML Post2</p>',
    meta_title: 'Meta Title Post2',
    meta_description: 'Meta Description Post2',
    published_at: '2024-05-10T16:01:59.712Z',
    updated_at: '2024-05-10T16:01:59.712Z',
    feature_image: 'https://www.image.com/Image2.jpg',
    slug: 'slug2',
    tags: [],
    authors: [],
    primary_author: {
      name: 'Team RVezy',
      profile_image: 'https://www.image.com/TeamRVezy.jpg',
      url: 'https://ghost.rvezy.com:443/TeamRVezy',
    },
    primary_tag: {
      name: 'Tag2',
    },
  },
] as GhostPost[]

describe('JSONLD formatters', () => {
  describe('getProductJson', () => {
    test('returns a valid JSONLD product', () => {
      const path = '/path'
      const image = 'image'
      const productJson = getProductJson({ rv: testRv, path, image })

      expect(productJson).toEqual({
        '@type': 'Product',
        'name': 'RV Name, Ottawa, ON',
        'brand': {
          '@type': 'Brand',
          'name': 'RVezy',
        },
        'offers': {
          '@type': 'Offer',
          'price': 100,
          'priceCurrency': 'CAD',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rvezy.com/path',
        },
        'productID': '1',
        'description': 'Description',
        'image': 'image',
      })
    })

    test('returns a valid JSONLD product (no name)', () => {
      const path = '/path'
      const image = 'image'
      const productJson = getProductJson({ rv: { ...testRv, RVName: null }, path, image })

      expect(productJson).toEqual({
        '@type': 'Product',
        'name': 'Unnamed RV, Ottawa, ON',
        'brand': {
          '@type': 'Brand',
          'name': 'RVezy',
        },
        'offers': {
          '@type': 'Offer',
          'price': 100,
          'priceCurrency': 'CAD',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rvezy.com/path',
        },
        'productID': '1',
        'description': 'Description',
        'image': 'image',
      })
    })

    test('returns a valid JSONLD product (no location)', () => {
      const path = '/path'
      const image = 'image'
      const productJson = getProductJson({ rv: { ...testRv, Location: null }, path, image })

      expect(productJson).toEqual({
        '@type': 'Product',
        'name': 'RV Name',
        'brand': {
          '@type': 'Brand',
          'name': 'RVezy',
        },
        'offers': {
          '@type': 'Offer',
          'price': 100,
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rvezy.com/path',
        },
        'productID': '1',
        'description': 'Description',
        'image': 'image',
      })
    })

    test('returns a valid JSONLD product (no description)', () => {
      const path = '/path'
      const image = 'image'
      const productJson = getProductJson({ rv: { ...testRv, RVDescription: null }, path, image })

      expect(productJson).toEqual({
        '@type': 'Product',
        'name': 'RV Name, Ottawa, ON',
        'brand': {
          '@type': 'Brand',
          'name': 'RVezy',
        },
        'offers': {
          '@type': 'Offer',
          'price': 100,
          'priceCurrency': 'CAD',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rvezy.com/path',
        },
        'productID': '1',
        'description': '',
        'image': 'image',
      })
    })
  })

  describe('getQuestionAndAnswer', () => {
    test('returns a valid JSONLD question and answer', () => {
      const question = 'Question'
      const answer = 'Answer'
      const questionAndAnswer = getQuestionAndAnswer({ question, answer })

      expect(questionAndAnswer).toEqual({
        '@type': 'Question',
        'name': 'Question',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Answer',
        },
      })
    })
  })

  describe('getFaq', () => {
    test('returns a valid JSONLD FAQ page', () => {
      const questions = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
      ]
      const faq = getFaq({ questions })

      expect(faq).toEqual({
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Question 1',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Answer 1',
            },
          },
          {
            '@type': 'Question',
            'name': 'Question 2',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Answer 2',
            },
          },
        ],
      })
    })
  })

  describe('getListItem', () => {
    test('returns a valid JSONLD ListItem', () => {
      const position = 1
      const name = 'test'
      const item = '/test/test'
      expect(getListItem({ position, name, item })).toEqual({
        '@type': 'ListItem',
        'position': 1,
        'name': 'test',
        'item': '/test/test',
      })
    })
  })

  describe('getBreadcrumbList', () => {
    test('returns a valid JSONLD BreadcrumbList', () => {
      const itemListElement = [
        getListItem({ position: 1, name: 'test', item: '/test/test' }),
        getListItem({ position: 2, name: 'test2', item: '/test/test2' }),
      ]
      expect(getBreadcrumbList({ itemListElement })).toEqual({
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'test',
            'item': '/test/test',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'test2',
            'item': '/test/test2',
          },
        ],
      })
    })
  })

  describe('getReviewSnippet', () => {
    test('returns a valid JSONLD AggregateRating', () => {
      const aggregateReview = {
        rating: 4.5,
        reviewCount: 10,
        updatedAt: '2024-05-10T16:01:59.712Z',
      }
      expect(getReviewSnippet({ aggregateReview })).toEqual({
        '@type': 'Product',
        'name': 'RVezy',
        'brand': {
          '@type': 'Organization',
          'name': 'RVezy',
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': 4.5,
          'bestRating': '5',
          'reviewCount': 10,
        },
      })
    })

    test('returns null when no AggregateRating is available', () => {
      const aggregateReview = null
      expect(getReviewSnippet({ aggregateReview })).toEqual({
        '@type': 'Product',
        'name': 'RVezy',
        'brand': {
          '@type': 'Organization',
          'name': 'RVezy',
        },
      })
    })
  })

  describe('getStructuredDataBlog', () => {
    test('returns a valid Blog type inside @graph', () => {
      expect(getStructuredDataBlog({ postList: ghostPostList, staticAssetsUrl: 'https://www.static.com', routeUrl: '/blog', baseUrl: 'https://base.url.com' })).toEqual({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Blog',
            '@id': 'https://www.rvezy.com/blog/',
            'mainEntityOfPage': 'https://www.rvezy.com/blog/',
            'name': 'The RVezy Blog',
            'description': 'RV posting and travel tips, stories, and more.',
            'publisher': {
              '@type': 'Organization',
              'name': 'RVezy',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
              },
            },
            'blogPost': [
              {
                '@type': 'BlogPosting',
                'headline': 'Meta Title Post1',
                'description': 'Meta Description Post1',
                'datePublished': '2024-05-10T16:01:59.712Z',
                'dateModified': '2024-05-10T16:01:59.712Z',
                'author': {
                  '@type': 'Person',
                  'name': 'John Doe',
                  'image': 'https://www.image.com/JohnDoe.jpg',
                  'url': 'https://base.url.com/JohnDoe',

                },
                'publisher': {
                  '@type': 'Organization',
                  'name': 'RVezy',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
                  },
                },
                'image': {
                  '@type': 'ImageObject',
                  'url': 'https://www.image.com/Image1.jpg',
                },
                'mainEntityOfPage': {
                  '@type': 'WebPage',
                  'url': 'https://www.rvezy.com/blog/slug1',
                },
              },
              {
                '@type': 'BlogPosting',
                'headline': 'Meta Title Post2',
                'description': 'Meta Description Post2',
                'datePublished': '2024-05-10T16:01:59.712Z',
                'dateModified': '2024-05-10T16:01:59.712Z',
                'author': {
                  '@type': 'Organization',
                  'name': 'Team RVezy',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
                  },
                  'url': 'https://base.url.com/TeamRVezy',
                },
                'publisher': {
                  '@type': 'Organization',
                  'name': 'RVezy',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
                  },
                },
                'image': {
                  '@type': 'ImageObject',
                  'url': 'https://www.image.com/Image2.jpg',
                },
                'mainEntityOfPage': {
                  '@type': 'WebPage',
                  'url': 'https://www.rvezy.com/blog/slug2',
                },
              },
            ],
          },
        ],
      })
    })
  })

  describe('getStructuredDataBlogPosting', () => {
    test('returns a valid Blog type inside @graph', () => {
      expect(getStructuredDataBlogPosting({ post: ghostPostList[0], staticAssetsUrl: 'https://www.static.com', routeUrl: '/blog', baseUrl: 'https://base.url.com' })).toEqual({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            'headline': 'Meta Title Post1',
            'description': 'Meta Description Post1',
            'datePublished': '2024-05-10T16:01:59.712Z',
            'dateModified': '2024-05-10T16:01:59.712Z',
            'author': {
              '@type': 'Person',
              'name': 'John Doe',
              'image': 'https://www.image.com/JohnDoe.jpg',
              'url': 'https://base.url.com/JohnDoe',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'RVezy',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
              },
            },
            'image': {
              '@type': 'ImageObject',
              'url': 'https://www.image.com/Image1.jpg',
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              'url': 'https://www.rvezy.com/blog',
            },
          },
        ],
      })
    })
  })

  describe('getBlogPostingLD', () => {
    test('returns a valid JSONLD blog posting', () => {
      const blogPostingLd = getBlogPostingLD(ghostPostList[0], 'https://www.static.com', '/blog', 'https://base.url.com')
      expect(blogPostingLd).toEqual({
        '@type': 'BlogPosting',
        'headline': 'Meta Title Post1',
        'description': 'Meta Description Post1',
        'datePublished': '2024-05-10T16:01:59.712Z',
        'dateModified': '2024-05-10T16:01:59.712Z',
        'author': {
          '@type': 'Person',
          'name': 'John Doe',
          'image': 'https://www.image.com/JohnDoe.jpg',
          'url': 'https://base.url.com/JohnDoe',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'RVezy',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
          },
        },
        'image': {
          '@type': 'ImageObject',
          'url': 'https://www.image.com/Image1.jpg',
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          'url': 'https://www.rvezy.com/blog',
        },
      })
    })

    test('returns a valid JSONLD blog posting (meta_title undefined)', () => {
      const blogPostingLd = getBlogPostingLD({ ...ghostPostList[0], meta_title: undefined }, 'https://www.static.com', '/blog', 'https://base.url.com')
      expect(blogPostingLd).toEqual({
        '@type': 'BlogPosting',
        'headline': 'Title Post1',
        'description': 'Meta Description Post1',
        'datePublished': '2024-05-10T16:01:59.712Z',
        'dateModified': '2024-05-10T16:01:59.712Z',
        'author': {
          '@type': 'Person',
          'name': 'John Doe',
          'image': 'https://www.image.com/JohnDoe.jpg',
          'url': 'https://base.url.com/JohnDoe',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'RVezy',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
          },
        },
        'image': {
          '@type': 'ImageObject',
          'url': 'https://www.image.com/Image1.jpg',
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          'url': 'https://www.rvezy.com/blog',
        },
      })
    })
  })

  describe('getAuthorLD', () => {
    test('returns a valid JSONLD persona', () => {
      const blogPostingLd = getAuthorLD(ghostPostList[0], 'https://www.static.com', 'https://base.url.com')
      expect(blogPostingLd).toEqual({
        '@type': 'Person',
        'name': 'John Doe',
        'image': 'https://www.image.com/JohnDoe.jpg',
        'url': 'https://base.url.com/JohnDoe',
      })
    })

    test('returns a valid JSONLD organization', () => {
      const blogPostingLd = getAuthorLD(ghostPostList[1], 'https://www.static.com', 'https://base.url.com')
      expect(blogPostingLd).toEqual({
        '@type': 'Organization',
        'name': 'Team RVezy',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
        },
        'url': 'https://base.url.com/TeamRVezy',
      })
    })
  })

  describe('getOrganizationLogoLD', () => {
    test('returns a valid JSONLD ImageObject', () => {
      const blogPostingLd = getOrganizationLogoLD('https://www.static.com')
      expect(blogPostingLd).toEqual({
        '@type': 'ImageObject',
        'url': 'https://www.static.com/assets/images/logo-rvezy.svg',
      })
    })
  })
})
