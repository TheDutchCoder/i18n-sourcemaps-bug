import { describe, expect, test } from 'vitest'
import { pathMatcher } from '~/utils/path-matcher'
import { IRoutePatternMatcherEnum } from '~/types/interfaces/IRouteManager'

// Helper functions
const shouldNotMatchHomepage = (pattern: IRoutePatternMatcherEnum) => {
  return !(pathMatcher(pattern, '/') || pathMatcher(pattern, '/fr'))
}

const shouldNotMatchBlog = (pattern: IRoutePatternMatcherEnum) => {
  return !(
    pathMatcher(pattern, '/blog')
    || pathMatcher(pattern, '/fr/blogue')
    || pathMatcher(pattern, '/blog/best-rv-trip-planners')
    || pathMatcher(pattern, '/fr/blogue/best-rv-trip-planners')
  )
}

const shouldNotMatchPoi = (pattern: IRoutePatternMatcherEnum) => {
  return !(
    pathMatcher(pattern, '/destination/canada/ontario/sudbury/rv-rentals')
    || pathMatcher(pattern, '/destination/canada/quebec/laval/rv-rentals')
    || pathMatcher(pattern, '/destination/united-states/ohio/rv-rentals')
    || pathMatcher(pattern, '/destination/etats-unis/texas/mineral-wells/rv-rentals/classe-b')
  )
}

const shouldNotMatchBlogAndPoi = (pattern: IRoutePatternMatcherEnum) => {
  return shouldNotMatchBlog(pattern) && shouldNotMatchPoi(pattern)
}

describe('pathMatcher()', () => {
  test('Blog', () => {
    const pattern = IRoutePatternMatcherEnum.Blog

    expect(pathMatcher(pattern, '/blog')).toBe(true)
    expect(pathMatcher(pattern, '/fr/blogue')).toBe(true)
    expect(pathMatcher(pattern, '/blog/best-rv-trip-planners')).toBe(true)
    expect(pathMatcher(pattern, '/fr/blogue/best-rv-trip-planners')).toBe(true)

    expect(pathMatcher(pattern, '/blogue')).toBe(false)
    expect(pathMatcher(pattern, '/fr/blog')).toBe(false)

    expect(shouldNotMatchHomepage(pattern)).toBe(true)
    expect(shouldNotMatchPoi(pattern)).toBe(true)
  })

  test('Author', () => {
    const pattern = IRoutePatternMatcherEnum.Author

    expect(pathMatcher(pattern, '/author/meagan')).toBe(true)
    expect(pathMatcher(pattern, '/fr/auteur/meagan')).toBe(true)
    expect(pathMatcher(pattern, '/author/team-rvezy')).toBe(true)
    expect(pathMatcher(pattern, '/fr/auteur/team-rvezy')).toBe(true)

    expect(pathMatcher(pattern, '/author')).toBe(false)
    expect(pathMatcher(pattern, '/fr/auteur')).toBe(false)
    expect(pathMatcher(pattern, '/auteur')).toBe(false)
    expect(pathMatcher(pattern, '/fr/author')).toBe(false)
    expect(pathMatcher(pattern, '/author/')).toBe(false)
    expect(pathMatcher(pattern, '/fr/auteur/')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Category', () => {
    const pattern = IRoutePatternMatcherEnum.Category

    expect(pathMatcher(pattern, '/category/testimonials')).toBe(true)
    expect(pathMatcher(pattern, '/category/rv-rental-business-tips')).toBe(true)
    expect(pathMatcher(pattern, '/category/product-reviews')).toBe(true)
    expect(pathMatcher(pattern, '/fr/categorie/voyages-et-destinations-vr')).toBe(true)

    expect(pathMatcher(pattern, '/category')).toBe(false)
    expect(pathMatcher(pattern, '/fr/categorie')).toBe(false)
    expect(pathMatcher(pattern, '/categorie')).toBe(false)
    expect(pathMatcher(pattern, '/fr/category')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('About', () => {
    const pattern = IRoutePatternMatcherEnum.About

    expect(pathMatcher(pattern, '/about')).toBe(true)
    expect(pathMatcher(pattern, '/fr/a-propos')).toBe(true)
    expect(pathMatcher(pattern, '/a-propos')).toBe(false)
    expect(pathMatcher(pattern, '/fr/about')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Careers', () => {
    const pattern = IRoutePatternMatcherEnum.Careers

    expect(pathMatcher(pattern, '/careers')).toBe(true)
    expect(pathMatcher(pattern, '/fr/careers')).toBe(true)

    expect(pathMatcher(pattern, '/careers/spotlight-data-analyst')).toBe(true)
    expect(pathMatcher(pattern, '/careers/spotlight-trust-and-safety')).toBe(true)
    expect(pathMatcher(pattern, '/careers/spotlight-owner-success')).toBe(true)

    expect(pathMatcher(pattern, '/fr/careers/spotlight-data-analyst')).toBe(true)
    expect(pathMatcher(pattern, '/fr/careers/spotlight-trust-and-safety')).toBe(true)
    expect(pathMatcher(pattern, '/fr/careers/spotlight-owner-success')).toBe(true)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Affiliates', () => {
    const pattern = IRoutePatternMatcherEnum.Affiliates

    expect(pathMatcher(pattern, '/affiliates')).toBe(true)
    expect(pathMatcher(pattern, '/fr/affilies')).toBe(true)
    expect(pathMatcher(pattern, '/affilies')).toBe(false)
    expect(pathMatcher(pattern, '/fr/affiliates')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Reviews', () => {
    const pattern = IRoutePatternMatcherEnum.Reviews

    expect(pathMatcher(pattern, '/reviews')).toBe(true)
    expect(pathMatcher(pattern, '/fr/evaluations')).toBe(true)
    expect(pathMatcher(pattern, '/evaluations')).toBe(false)
    expect(pathMatcher(pattern, '/fr/reviews')).toBe(false)

    expect(pathMatcher(pattern, '/reviews/renter/965712?noReview=true')).toBe(false)
    expect(pathMatcher(pattern, '/reviews/renter/965712')).toBe(false)
    expect(pathMatcher(pattern, 'fr/evaluations/renter/965712?noReview=true')).toBe(false)
    expect(pathMatcher(pattern, 'fr/evaluations/renter/965712')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('AppDownload', () => {
    const pattern = IRoutePatternMatcherEnum.AppDownload

    expect(pathMatcher(pattern, '/app-download')).toBe(true)
    expect(pathMatcher(pattern, '/fr/telecharger-application')).toBe(true)
    expect(pathMatcher(pattern, '/telecharger-application')).toBe(false)
    expect(pathMatcher(pattern, '/fr/app-download')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Superhost', () => {
    const pattern = IRoutePatternMatcherEnum.Superhost

    expect(pathMatcher(pattern, '/superhost')).toBe(true)
    expect(pathMatcher(pattern, '/fr/superhotes')).toBe(true)
    expect(pathMatcher(pattern, '/superhotes')).toBe(false)
    expect(pathMatcher(pattern, '/fr/superhost')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('HowItWorks', () => {
    const pattern = IRoutePatternMatcherEnum.HowItWorks

    expect(pathMatcher(pattern, '/how-it-works')).toBe(true)
    expect(pathMatcher(pattern, '/fr/comment-ca-fonctionne')).toBe(true)
    expect(pathMatcher(pattern, '/comment-ca-fonctionne')).toBe(false)
    expect(pathMatcher(pattern, '/fr/how-it-works')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Delivery', () => {
    const pattern = IRoutePatternMatcherEnum.Delivery

    expect(pathMatcher(pattern, '/rv-delivery')).toBe(true)
    expect(pathMatcher(pattern, '/fr/livraison-vr')).toBe(true)
    expect(pathMatcher(pattern, '/livraison-vr')).toBe(false)
    expect(pathMatcher(pattern, '/fr/rv-delivery')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('InsuranceAndProtection', () => {
    const pattern = IRoutePatternMatcherEnum.InsuranceAndProtection

    expect(pathMatcher(pattern, '/insurance-and-protection')).toBe(true)
    expect(pathMatcher(pattern, '/fr/assurances-et-protection')).toBe(true)
    expect(pathMatcher(pattern, '/assurances-et-protection')).toBe(false)
    expect(pathMatcher(pattern, '/fr/insurance-and-protection')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('TrustAndSafety', () => {
    const pattern = IRoutePatternMatcherEnum.TrustAndSafety

    expect(pathMatcher(pattern, '/trust-and-safety')).toBe(true)
    expect(pathMatcher(pattern, '/fr/confiance-et-securite')).toBe(true)
    expect(pathMatcher(pattern, '/confiance-et-securite')).toBe(false)
    expect(pathMatcher(pattern, '/fr/trust-and-safety')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('ServiceFees', () => {
    const pattern = IRoutePatternMatcherEnum.ServiceFees

    expect(pathMatcher(pattern, '/service-fees')).toBe(true)
    expect(pathMatcher(pattern, '/fr/frais-de-service')).toBe(true)
    expect(pathMatcher(pattern, '/frais-de-service')).toBe(false)
    expect(pathMatcher(pattern, '/fr/service-fees')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('TermsService', () => {
    const pattern = IRoutePatternMatcherEnum.TermsService

    expect(pathMatcher(pattern, '/terms-service')).toBe(true)
    expect(pathMatcher(pattern, '/fr/termes-utilisation')).toBe(true)
    expect(pathMatcher(pattern, '/termes-utilisation')).toBe(false)
    expect(pathMatcher(pattern, '/fr/terms-service')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('PrivacyPolicy', () => {
    const pattern = IRoutePatternMatcherEnum.PrivacyPolicy

    expect(pathMatcher(pattern, '/privacy-policy')).toBe(true)
    expect(pathMatcher(pattern, '/fr/politique-de-confidentialite')).toBe(true)
    expect(pathMatcher(pattern, '/politique-de-confidentialite')).toBe(false)
    expect(pathMatcher(pattern, '/fr/privacy-policy')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('HomePage', () => {
    const pattern = IRoutePatternMatcherEnum.HomePage

    expect(pathMatcher(pattern, '/')).toBe(true)
    expect(pathMatcher(pattern, '/fr')).toBe(true)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('SearchPage', () => {
    const pattern = IRoutePatternMatcherEnum.SearchPage

    expect(pathMatcher(pattern, '/rv-search')).toBe(true)
    expect(pathMatcher(pattern, '/fr/recherche-vr')).toBe(true)
    expect(pathMatcher(pattern, '/recherche-vr')).toBe(false)
    expect(pathMatcher(pattern, '/fr/rv-search')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('Profile', () => {
    const pattern = IRoutePatternMatcherEnum.Profile

    expect(pathMatcher(pattern, '/profile/64747')).toBe(true)
    expect(pathMatcher(pattern, '/fr/profile/64747')).toBe(true)
    expect(pathMatcher(pattern, '/profile/145635')).toBe(true)
    expect(pathMatcher(pattern, '/fr/profile/145635')).toBe(true)

    expect(pathMatcher(pattern, '/profile')).toBe(false)
    expect(pathMatcher(pattern, '/fr/profil')).toBe(false)
    expect(pathMatcher(pattern, '/profile/')).toBe(false)
    expect(pathMatcher(pattern, '/fr/profil/')).toBe(false)
    expect(pathMatcher(pattern, '/profil')).toBe(false)
    expect(pathMatcher(pattern, '/fr/profile')).toBe(false)

    expect(shouldNotMatchBlogAndPoi(pattern)).toBe(true)
  })

  test('POI', () => {
    const pattern = IRoutePatternMatcherEnum.NewPoi

    expect(pathMatcher(pattern, '/rv-rentals/destination/canada/ontario/sudbury')).toBe(true)
    expect(pathMatcher(pattern, '/rv-rentals/destination/canada/quebec/laval')).toBe(true)
    expect(pathMatcher(pattern, '/rv-rentals/destination/united-states/ohio')).toBe(true)
    expect(pathMatcher(pattern, '/fr/locations-vr/classe-b/destination/etats-unis/texas/mineral-wells')).toBe(true)

    // should match coamground's POI page
    expect(pathMatcher(pattern, '/rv-rentals/destination/canada/quebec/cantley/camping-cantley')).toBe(true)
    expect(pathMatcher(pattern, '/rv-rentals/class-b/destination/canada/quebec/cantley/camping-cantley')).toBe(true)
    expect(pathMatcher(pattern, '/fr/locations-vr/destination/canada/quebec/cantley/camping-cantley')).toBe(true)
    expect(pathMatcher(pattern, '/fr/locations-vr/classe-b/destination/canada/quebec/cantley/camping-cantley')).toBe(
      true,
    )

    // should not match campground pages
    expect(pathMatcher(pattern, '/destination/canada/quebec/cantley/camping-cantley')).toBe(false)
    expect(pathMatcher(pattern, '/destination/canada/quebec/gatineau/campgrounds')).toBe(false)
    expect(pathMatcher(pattern, '/fr/destination/canada/quebec/cantley/camping-cantley')).toBe(false)
    expect(pathMatcher(pattern, '/fr/destination/canada/quebec/gatineau/campings')).toBe(false)

    expect(pathMatcher(pattern, '/destination')).toBe(false)

    expect(shouldNotMatchHomepage(pattern)).toBe(true)
    expect(shouldNotMatchBlog(pattern)).toBe(true)
  })
})
