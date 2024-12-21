import { getCity, getDefaultPrice, getFormattedDescription, getFormattedName, getNumber, getState } from '../rvs'
import { CountryCodeToCurrencyCode } from '~/lib/enums'

/** @deprecated use jsonld.ts instead */
export const getProductJson = ({ rv, path, image }) => ({
  '@type': 'Product',
  'name': `${getFormattedName(rv)} ${getCity(rv)}, ${getState(rv)}`,
  'brand': {
    '@type': 'Organization',
    'name': 'RVezy',
  },
  'offers': {
    '@type': 'Offer',
    'price': `${parseInt(getDefaultPrice(rv))}`,
    'priceCurrency': CountryCodeToCurrencyCode(rv.Location.Country),
    'availability': 'https://schema.org/InStock',
    'url': `https://www.rvezy.com${path}`,
  },
  'productId': getNumber(rv),
  'description': getFormattedDescription(rv),
  image,
})

/** @deprecated use jsonld.ts instead */
export const getAnswer = ({ answer }) => ({
  '@type': 'Answer',
  'text': answer,
})

/** @deprecated use jsonld.ts instead */
export const getQuestion = ({ question, answer }) => ({
  '@type': 'Question',
  'name': question,
  'acceptedAnswer': getAnswer({ answer }),
})

/** @deprecated use jsonld.ts instead */
export const getFaq = ({ questions }) => ({
  '@type': 'FAQPage',
  'mainEntity': questions.map(getQuestion),
})

/** @deprecated use jsonld.ts instead */
export const getItemListElement = ({ position, name, item }) => ({
  '@type': 'ListItem',
  position,
  name,
  item,
})

/** @deprecated use jsonld.ts instead */
export const getBreadcrumbList = ({ itemList }) => ({
  '@type': 'BreadcrumbList',
  'itemListElement': itemList,
})

/** @deprecated use jsonld.ts instead */
export const getReviewSnippet = (aggregateReview) => {
  if (!aggregateReview) return

  return {
    '@type': 'Product',
    'name': 'RVezy',
    'brand': {
      '@type': 'Organization',
      'name': 'RVezy',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': aggregateReview.rating,
      'bestRating': '5',
      'reviewCount': aggregateReview.reviewCount,
    },
  }
}
