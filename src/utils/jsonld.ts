/**
 * This file exposes frequently used JSONLD formatting utilities.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */
import type {
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  Graph,
  ImageObject,
  ListItem,
  Organization,
  Person,
  Product,
  Question,
} from 'schema-dts'

import type {
  GhostPost,
  JSONLDAggregateReview,
  JSONLDBreadcrumbList,
  JSONLDGhostPost,
  JSONLDGhostPostList,
  JSONLDListItem,
  JSONLDProduct,
  JSONLDQuestionAndAnswer,
  JSONLDQuestions,
} from '~/types'
import type { COUNTRY_SHORTS } from '~/constants'

/**
 * Generates a JSONLD schema for an RV.
 */
export function getProductJson({ rv, path, image }: JSONLDProduct): Product {
  const rvName = rv.RVName || 'Unnamed RV'
  const city = rv.Location?.City || ''
  const state = rv.Location?.State || ''
  const hasLocation = city && state

  return {
    '@type': 'Product',
    'name': `${escapeDoubleQuotes(rvName)}${hasLocation ? `, ${city}, ${state}` : ''}`,
    'brand': {
      '@type': 'Brand',
      'name': 'RVezy',
    },
    'offers': {
      '@type': 'Offer',
      'price': rv.DefaultPrice,
      'priceCurrency': hasLocation ? lookupCountryCodeToCurrencyCode(rv.Location?.Country as COUNTRY_SHORTS) : 'USD',
      'availability': 'https://schema.org/InStock',
      'url': `https://www.rvezy.com${path}`,
    },
    'productID': String(rv.RVNumber),
    'description': escapeDoubleQuotes(rv.RVDescription || ''),
    image,
  }
}

/**
 * Generates a Question and Answer object for JSONLD.
 */
export function getQuestionAndAnswer({ question, answer }: JSONLDQuestionAndAnswer): Question {
  return {
    '@type': 'Question',
    'name': question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': answer,
    },
  }
}

/**
 * Generates a JSONLD schema for FAQs.
 */
export function getFaq({ questions }: JSONLDQuestions): FAQPage {
  return {
    '@type': 'FAQPage',
    'mainEntity': questions.map(getQuestionAndAnswer),
  }
}

/**
 * Generates a JSONLD schema for a ListItem.
 */
export function getListItem({ position, name, item }: JSONLDListItem): ListItem {
  return {
    '@type': 'ListItem',
    position,
    name,
    item,
  }
}

/**
 * Generates a JSONLD schema for a BreadcrumbList.
 */
export function getBreadcrumbList({ itemListElement }: JSONLDBreadcrumbList): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': itemListElement,
  }
}

/**
 * Generates a JSONLD schema for an aggregate review.
 */
export function getReviewSnippet({ aggregateReview }: JSONLDAggregateReview): Product {
  const baseSchema: Product = {
    '@type': 'Product',
    'name': 'RVezy',
    'brand': {
      '@type': 'Organization',
      'name': 'RVezy',
    },
  }

  if (!aggregateReview) {
    return baseSchema
  }

  const ratingSchema: Product = {
    ...baseSchema,
    aggregateRating: {
      '@type': 'AggregateRating',
      'ratingValue': aggregateReview.rating,
      'bestRating': '5',
      'reviewCount': aggregateReview.reviewCount,
    },
  }

  return ratingSchema
}

/**
 * Generates a JSONLD schema for a blog posting.
 */
export function getStructuredDataBlogPosting({ post, staticAssetsUrl, routeUrl, baseUrl }: JSONLDGhostPost): Graph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBlogPostingLD(post, staticAssetsUrl, routeUrl, baseUrl),
    ],
  }
}

/**
 * Generates a JSONLD schema for a blog.
 */
export function getStructuredDataBlog({ postList, staticAssetsUrl, routeUrl, baseUrl }: JSONLDGhostPostList): Graph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `https://www.rvezy.com${routeUrl}/`,
        'mainEntityOfPage': `https://www.rvezy.com${routeUrl}/`,
        'name': 'The RVezy Blog',
        'description': 'RV posting and travel tips, stories, and more.',
        'publisher': {
          '@type': 'Organization',
          'name': 'RVezy',
          'logo': getOrganizationLogoLD(staticAssetsUrl),
        },
        'blogPost': postList.map((post) => {
          return getBlogPostingLD(post, staticAssetsUrl, `${routeUrl}/${post.slug}`, baseUrl)
        }),
      },
    ],
  }
}

export function getBlogPostingLD(post: GhostPost, staticAssetsUrl: string, routeUrl: string, baseUrl: string): BlogPosting {
  return {
    '@type': 'BlogPosting',
    'headline': post.meta_title || post.title,
    'description': post.meta_description,
    'datePublished': post.published_at,
    'dateModified': post.updated_at,
    'author': getAuthorLD(post, staticAssetsUrl, baseUrl),
    'publisher': {
      '@type': 'Organization',
      'name': 'RVezy',
      'logo': getOrganizationLogoLD(staticAssetsUrl),
    },
    'image': {
      '@type': 'ImageObject',
      'url': post.feature_image,
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      'url': `https://www.rvezy.com${routeUrl}`,
    },
  }
}

export function getAuthorLD(post: GhostPost, staticAssetsUrl: string, baseUrl: string): Organization | Person {
  if (post.primary_author?.name?.includes('RVezy')) {
    return {
      '@type': 'Organization',
      'name': post.primary_author?.name,
      'logo': getOrganizationLogoLD(staticAssetsUrl),
      'url': post.primary_author.url?.replace('https://ghost.rvezy.com:443', baseUrl),
    }
  }
  else {
    return {
      '@type': 'Person',
      'name': post.primary_author.name,
      'image': post.primary_author.profile_image,
      'url': post.primary_author.url?.replace('https://ghost.rvezy.com:443', baseUrl),
    }
  }
}

export function getOrganizationLogoLD(staticAssetsUrl: string): ImageObject {
  return {
    '@type': 'ImageObject',
    'url': `${staticAssetsUrl}/assets/images/logo-rvezy.svg`,
  }
}
