/**
 * We probably shouldn't mix pure types and code that generates JS in one file.
 * I'd rather see .d.ts files for pure types, and .ts for files that generate
 * JS.
 */
export interface IRouteManager {
  Routes: Array<IRoute>
  RedirectRoutes: Array<IRoutePatternMatcherEnum>
}

export interface IRoute {
  Pattern: IRoutePatternMatcherEnum
  ReleaseGroup: IRouteReleaseGroupEnum
}

export enum IRouteReleaseGroupEnum {
  Alpha = 'Alpha',
  Beta = 'Beta',
  Control = 'Control',
}

// preceding '/fr'
// ^(?:/fr)?

// /**
// (?:/[^/\s]+)+

// **/
// (?:[^/\s]+/)+

// ? 0..1
// * 0..n
// + 1..n

export enum IRoutePatternMatcherEnum {
  Blog = '^/(blog|fr/blogue)(?:/[^/\\s]+)*$',
  Author = '^/(author|fr/auteur)(?:/[^/\\s]+)+$',
  Category = '^/(category|fr/categorie)(?:/[^/\\s]+)+$',
  About = '^/(about|fr/a-propos)$',
  Careers = '^(?:/fr)?/careers(?:/[^/\\s]+)*$',
  Affiliates = '^/(affiliates|fr/affilies)$',
  Reviews = '^/(reviews|fr/evaluations)$',
  AppDownload = '^/(app-download|fr/telecharger-application)$',
  Superhost = '^/(superhost|fr/superhotes)$',
  HowItWorks = '^/(how-it-works|fr/comment-ca-fonctionne)$',
  Delivery = '^/(rv-delivery|fr/livraison-vr)$',
  InsuranceAndProtection = '^/(insurance-and-protection|fr/assurances-et-protection)$',
  TrustAndSafety = '^/(trust-and-safety|fr/confiance-et-securite)$',
  ServiceFees = '^/(service-fees|fr/frais-de-service)$',
  ShareYourTrip = '^/(share-your-trip|fr/partagez-votre-voyage)$',
  TermsService = '^/(terms-service|fr/termes-utilisation)$',
  PrivacyPolicy = '^/(privacy-policy|fr/politique-de-confidentialite)$',
  SearchPage = '^/(rv-search|fr/recherche-vr)$',
  HomePage = '^/(|fr)$',
  Profile = '^/(profile|fr/profile)(?:/[^/\\s]+)+$',
  NewPoi = '^/(rv-rentals|fr/locations-vr)(/[a-z-]+)?(/destination/.*|/campground/.*|/camping/.*)?$',
  OwnerPage = '^/(owner|fr/proprietaire)$',
  Login = '^/(signin|fr/connexion)$',
  Signup = '^/(signup|fr/inscription)$',
  Campgrounds = '^/(campgrounds|fr/campgrounds|campground|fr/campground)',
  ListingPage = '^/(rv-rental|fr/location-vr)/[a-z0-9-_]+$',
  RequestToBook = '^/(rv-rental|fr/location-vr)/request-to-book/[a-z0-9-_]+$',

  // Dashboard
  Favorites = '^(?:/fr)?/dashboard/favourites$',
  Trips = '^(?:/fr)?/dashboard/trips(/?).*$',
  Insights = '^(?:/fr)?/dashboard/insights$',
  BookingPayment = '^(?:/fr)?/dashboard/bookings/[0-9]+/payment$',
}
