/**
 * Collection of exported global constants used throughout the project. Exported
 * constants need to be done so with `as const` to ensure that the type is not
 * widened. You should also use Object.freeze to ensure that the object is
 * immutable.
 *
 * We also export the types directly, so these can be used in TypeScript as
 * types and values.
 *
 * Style guide:
 *
 * All exported constants should be uppercased, but properties should be
 * camelCased (unless the constant uses keys that map to back-end returned
 * values).
 *
 * // bad
 * export const ApiKey = 'exported variable should be uppercase'
 *
 * // bad
 * export const THING_THAT_CAN_BE_CHANGED = 'should not be uppercase'
 *
 *  // good - communicates that this is an exported constant
 * export const API_KEY = 'SOME_KEY'
 *
 * // good
 * export const SOME_MAP = {
 *   myValue: 'camelCased property'
 * } as const
 * Object.freeze(SOME_MAP)
 * export type SOME_MAP = (typeof SOME_MAP)[keyof typeof SOME_MAP]
 *
 * // exception
 * export const BACKEND_MAP = {
 *   SOME_VALUE: 'a backend mapped value'
 * }
 */
import { BookingReviewCategoryTypeEnumKey } from '~/lib/enums/index.js'

/**
 * Map of different countries and their IDs.
 *
 * This constant is used in a back-end mapping, so it should not be changed.
 */
export const COUNTRY_IDS = {
  CA: 1,
  US: 2,
  ROW: 3, // Rest of the world
} as const
Object.freeze(COUNTRY_IDS)
export type COUNTRY_IDS = (typeof COUNTRY_IDS)[keyof typeof COUNTRY_IDS]

/**
 * Short version of the countries.
 *
 * This constant is used in a back-end mapping, so it should not be changed.
 */
export const COUNTRY_SHORTS = {
  US: 'US',
  CA: 'CA',
} as const
Object.freeze(COUNTRY_SHORTS)
export type COUNTRY_SHORTS = (typeof COUNTRY_SHORTS)[keyof typeof COUNTRY_SHORTS]

/**
 * Collection of currencies.
 */
export const CURRENCIES = {
  USD: 'USD',
  CAD: 'CAD',
} as const
Object.freeze(CURRENCIES)
export type CURRENCIES = (typeof CURRENCIES)[keyof typeof CURRENCIES]

/**
 * Currencies used by different countries.
 *
 * This constant is used in a back-end mapping, so it should not be changed.
 */
export const COUNTRY_CURRENCIES = {
  US: CURRENCIES.USD,
  CA: CURRENCIES.CAD,
} as const
Object.freeze(COUNTRY_CURRENCIES)
export type COUNTRY_CURRENCIES = (typeof COUNTRY_CURRENCIES)[keyof typeof COUNTRY_CURRENCIES]

/**
 * Conversion rates between different currencies.
 */
export const CONVERSION_RATES = {
  [CURRENCIES.CAD]: {
    [CURRENCIES.CAD]: 1,
    [CURRENCIES.USD]: 0.73, // https://rvezy.atlassian.net/browse/RVZ-18109
  },
  [CURRENCIES.USD]: {
    [CURRENCIES.CAD]: 1.36986301365,
    [CURRENCIES.USD]: 1,
  },
} as const
Object.freeze(CONVERSION_RATES)
export type CONVERSION_RATES = (typeof CONVERSION_RATES)[keyof typeof CONVERSION_RATES]

/**
 * Distance units for different measurement systems.
 */
export const UNIT_MEASUREMENT = {
  KM: 'km',
  MILES: 'miles',
} as const
Object.freeze(UNIT_MEASUREMENT)
export type UNIT_MEASUREMENT = (typeof UNIT_MEASUREMENT)[keyof typeof UNIT_MEASUREMENT]

/**
 * Distance unit by country code.
 */
export const DISTANCE_UNIT_BY_COUNTRY_CODE = {
  [COUNTRY_SHORTS.CA]: UNIT_MEASUREMENT.KM,
  [COUNTRY_SHORTS.US]: UNIT_MEASUREMENT.MILES,
} as const
Object.freeze(DISTANCE_UNIT_BY_COUNTRY_CODE)
export type DISTANCE_UNIT_BY_COUNTRY_CODE = (typeof DISTANCE_UNIT_BY_COUNTRY_CODE)[keyof typeof DISTANCE_UNIT_BY_COUNTRY_CODE]

const DELIVERY_ADDON_WITHIN_25_KMS_SLUG = 'rv_delivery_(within_50_kms)'
const DELIVERY_ADDON_WITHIN_50_KMS_SLUG = 'rv_delivery_(within_100_kms)'
const DELIVERY_ADDON_WITHIN_100_KMS_SLUG = 'rv_delivery_(within_250_kms)'
const DELIVERY_ADDON_WITHIN_200_KMS_SLUG = 'rv_delivery_(within_400_kms)'

export const DELIVERY_ADDON_SLUGS = [
  DELIVERY_ADDON_WITHIN_25_KMS_SLUG,
  DELIVERY_ADDON_WITHIN_50_KMS_SLUG,
  DELIVERY_ADDON_WITHIN_100_KMS_SLUG,
  DELIVERY_ADDON_WITHIN_200_KMS_SLUG,
] as const
Object.freeze(DELIVERY_ADDON_SLUGS)
export type DELIVERY_ADDON_SLUGS = (typeof DELIVERY_ADDON_SLUGS)[keyof typeof DELIVERY_ADDON_SLUGS]

/**
 * Prefix for delivery add-ons.
 */
export const DELIVERY_ADDON_PREFIX = 'rv_delivery_'

/**
 * Collection of delivery add-ons per distance group.
 */
export const DELIVERY_ADDON_DISTANCES = {
  25: {
    slug: DELIVERY_ADDON_WITHIN_25_KMS_SLUG,
    allowedAddOnId: 10,
    km: 25,
    miles: 15,
    defaultPrice: {
      CA: 150,
      US: 120,
    },
  },
  50: {
    slug: DELIVERY_ADDON_WITHIN_50_KMS_SLUG,
    allowedAddOnId: 3,
    km: 50,
    miles: 30,
    defaultPrice: {
      CA: 250,
      US: 200,
    },
  },
  100: {
    slug: DELIVERY_ADDON_WITHIN_100_KMS_SLUG,
    allowedAddOnId: 9,
    km: 100,
    miles: 60,
    defaultPrice: {
      CA: 450,
      US: 360,
    },
  },
  200: {
    slug: DELIVERY_ADDON_WITHIN_200_KMS_SLUG,
    allowedAddOnId: 33,
    km: 200,
    miles: 120,
    defaultPrice: {
      CA: 640,
      US: 480,
    },
  },
} as const
Object.freeze(DELIVERY_ADDON_DISTANCES)
export type DELIVERY_ADDON_DISTANCES = (typeof DELIVERY_ADDON_DISTANCES)[keyof typeof DELIVERY_ADDON_DISTANCES]

/**
 * Collection of available insurance plans.
 *
 * @todo: this needs to be a type from the BE.
 *
 * @deprecated
 */
export const INSURANCE_PLANS = {
  STANDARD: 'Standard',
  PREMIUM: 'Premium',
  BASIC: 'Basic',
  STATIONARY: 'Stationary',
} as const
Object.freeze(INSURANCE_PLANS)
export type INSURANCE_PLANS = (typeof INSURANCE_PLANS)[keyof typeof INSURANCE_PLANS]

/**
 * Translated version of insurance plans.
 *
 * @todo this needs to be cleaned up. It seems to be lowercasing properties,
 * because the translations have lowercase keys. Why not make the translations
 * use an uppercase key?
 *
 * @deprecated
 */
export const INSURANCE_PLANS_I18N = {
  STANDARD: INSURANCE_PLANS.STANDARD.toLowerCase(),
  PREMIUM: INSURANCE_PLANS.PREMIUM.toLowerCase(),
  BASIC: INSURANCE_PLANS.BASIC.toLowerCase(),
  STATIONARY: INSURANCE_PLANS.STATIONARY.toLowerCase(),
} as const
Object.freeze(INSURANCE_PLANS_I18N)
export type INSURANCE_PLANS_I18N = (typeof INSURANCE_PLANS_I18N)[keyof typeof INSURANCE_PLANS_I18N]

/**
 * 1-on-1 map of properties and values.
 *
 * @todo this doesn't do anything but generate an object like:
 * PROTECTION_TO_I18N_MAP = {
 *  'standard': 'standard',
 * }
 *
 * @deprecated
 */
export const PROTECTION_TO_I18N_MAP = {
  [INSURANCE_PLANS_I18N.BASIC]: INSURANCE_PLANS_I18N.BASIC,
  [INSURANCE_PLANS_I18N.STANDARD]: INSURANCE_PLANS_I18N.STANDARD,
  [INSURANCE_PLANS_I18N.PREMIUM]: INSURANCE_PLANS_I18N.PREMIUM,
  [INSURANCE_PLANS_I18N.STATIONARY]: INSURANCE_PLANS_I18N.STATIONARY,
} as const
Object.freeze(PROTECTION_TO_I18N_MAP)
export type PROTECTION_TO_I18N_MAP = (typeof PROTECTION_TO_I18N_MAP)[keyof typeof PROTECTION_TO_I18N_MAP]

/**
 * @todo proper casing when working on this migration.
 *
 * @deprecated
 */
export const ProtectionLevelMapping = {
  0: INSURANCE_PLANS_I18N.BASIC,
  1: INSURANCE_PLANS_I18N.STANDARD,
  2: INSURANCE_PLANS_I18N.PREMIUM,
  3: INSURANCE_PLANS_I18N.STATIONARY,
} as const
Object.freeze(ProtectionLevelMapping)
export type ProtectionLevelMapping = (typeof ProtectionLevelMapping)[keyof typeof ProtectionLevelMapping]

/**
 * @todo proper casing when working on this migration.
 *
 * @deprecated
 */
export const ProtectionStringMapping = {
  [INSURANCE_PLANS_I18N.BASIC]: 0,
  [INSURANCE_PLANS_I18N.STANDARD]: 1,
  [INSURANCE_PLANS_I18N.PREMIUM]: 2,
  [INSURANCE_PLANS_I18N.STATIONARY]: 3,
} as const
Object.freeze(ProtectionStringMapping)
export type ProtectionStringMapping = (typeof ProtectionStringMapping)[keyof typeof ProtectionStringMapping]

/**
 * Provinces where provincial and federal tax is enabled for RVs.
 */
export const PROVINCE_TAX_ENABLED = {
  'british columbia': true,
  'saskatchewan': true,
  'quebec': true,
} as const
Object.freeze(PROVINCE_TAX_ENABLED)
export type PROVINCE_TAX_ENABLED = (typeof PROVINCE_TAX_ENABLED)[keyof typeof PROVINCE_TAX_ENABLED]

export const BOOKING_REVIEW_CATEGORIES_ORDERED = [
  BookingReviewCategoryTypeEnumKey.ListingAccuracy,
  BookingReviewCategoryTypeEnumKey.Value,
  BookingReviewCategoryTypeEnumKey.Cleanliness,
  BookingReviewCategoryTypeEnumKey.Communication,
] as const
Object.freeze(BOOKING_REVIEW_CATEGORIES_ORDERED)
export type BOOKING_REVIEW_CATEGORIES_ORDERED =
  (typeof BOOKING_REVIEW_CATEGORIES_ORDERED)[keyof typeof BOOKING_REVIEW_CATEGORIES_ORDERED]

/**
 * Image types allowed for uploading.
 */
export const ALLOWED_IMAGE_TYPES = ['jpg', 'jpeg', 'png'] as const
Object.freeze(ALLOWED_IMAGE_TYPES)
export type ALLOWED_IMAGE_TYPES = (typeof ALLOWED_IMAGE_TYPES)[number]

/**
 * The different booking refund options.
 */
export const BOOKING_REFUND_OPTIONS = {
  rvezy: 'rvezy',
  original: 'original',
} as const
Object.freeze(BOOKING_REFUND_OPTIONS)
export type BOOKING_REFUND_OPTIONS = (typeof BOOKING_REFUND_OPTIONS)[keyof typeof BOOKING_REFUND_OPTIONS]

/**
 * Collection of cookie names used throughout the project.
 */
export const COOKIES = {
  accessToken: 'access_token',
  adminAccessToken: 'admin_access_token',
  ajsAnonymousId: 'ajs_anonymous_id',
  appDownloadBannerDismissed: 'app_download_banner_dismissed',
  capabilities: 'capabilities',
  currency: 'currency',
  discoverDeliveryTooltip: 'discoverDeliveryTooltip',
  experimentOverrides: 'experiment_overrides',
  gid: '_gid',
  highlightBanner: 'highlight-banner-version-',
  platform: 'platform',
  risIntent: 'ris-intent',
  risProvider: 'ris-provider',
  risRedirect: 'ris-redirect',
  searchLocation: 'search_location',
  session: 'rtsessionid',
  state: 'state',
  unauthorizedRedirect: 'unauthorized-redirect',
  upgradeBrowser: 'upgrade-browser',
  userEmail: 'user_email',
  utmParameters: 'utm_parameters',
} as const
Object.freeze(COOKIES)
export type COOKIES = (typeof COOKIES)[keyof typeof COOKIES]

/**
 * Keys for session storage.
 */
export const SESSION_STORAGE_KEYS = {
  bookingRequestPayload: 'bookingRequestPayload',
} as const
Object.freeze(SESSION_STORAGE_KEYS)
export type SESSION_STORAGE_KEYS = (typeof SESSION_STORAGE_KEYS)[keyof typeof SESSION_STORAGE_KEYS]

/**
 * Minimum and maximum values for RV search parameters.
 */
export const DEFAULT_MIN_RV_YEAR = new Date().getFullYear() - 20
export const DEFAULT_MAX_RV_YEAR = new Date().getFullYear() + 1
export const RV_SEARCH_MIN_MAX = {
  rvPrice: {
    min: 0,
    max: 500,
  },
  rvWeight: {
    min: 0,
    max: 20000,
  },
  rvLength: {
    min: 0,
    max: 50,
  },
  rvYear: {
    min: DEFAULT_MIN_RV_YEAR,
    max: DEFAULT_MAX_RV_YEAR,
  },
}

/**
 * Collection of route names.
 */
export const ROUTE_BASE_NAME = {
  payment: 'dashboard-bookings-id-payment',
  rv_search: 'rv-search',
  rv_rental: 'rv-rental',
  rv_rental_request_to_book: 'rv-rental-request-to-book-alias',
  rv_rentals: 'rv-rentals',
  rv_rentals_keyword: 'rv-rentals-keyword',
  rv_rentals_destination: 'rv-rentals-keyword-destination-destinationPath',
  rv_rentals_campground: 'rv-rentals-keyword-campround-campgroundSlug',
} as const
Object.freeze(ROUTE_BASE_NAME)
export type ROUTE_BASE_NAME = (typeof ROUTE_BASE_NAME)[keyof typeof ROUTE_BASE_NAME]

/**
 * Wether ot not the user can check in and out at any time.
 */
export const FLEXIBLE_CHECK_IN_OUT = -1

/**
 * Types of notifications.
 * TODO: move to a type.
 */
export const NOTIFICATION_TYPES = {
  EditBookingChangeRequestPending: 'EditBookingChangeRequestPending',
  EditBookingChangeRequestReviewable: 'EditBookingChangeRequestReviewable',
  EditBookingChangeRequestAccepted: 'EditBookingChangeRequestAccepted',
  EditBookingChangeRequestRejected: 'EditBookingChangeRequestRejected',
}
Object.freeze(NOTIFICATION_TYPES)
export type NOTIFICATION_TYPES = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES]

/**
 * Receipt highlight lines?.
 * TODO: move to a type.
 */
export const RECEIPT_HIGHLIGHT_LINES = {
  DATES: 'dates',
  ADDONS: 'addons',
}
Object.freeze(RECEIPT_HIGHLIGHT_LINES)
export type RECEIPT_HIGHLIGHT_LINES = (typeof RECEIPT_HIGHLIGHT_LINES)[keyof typeof RECEIPT_HIGHLIGHT_LINES]

/**
 * Mobile apps capabilities.
 */
export const MOBILE_CAPABILITIES = {
  canUseCustomBack: 'canUseCustomBack',
  canTrackSegmentVersion: 'canTrackSegmentVersion',
  canShowProtectionPlansOnPayment: 'canShowProtectionPlansOnPayment',
} as const
Object.freeze(MOBILE_CAPABILITIES)
export type MOBILE_CAPABILITIES = (typeof MOBILE_CAPABILITIES)[keyof typeof MOBILE_CAPABILITIES]

/**
 * Sorting options
 */
export const SortByOptions = {
  newest: 'newest',
  highest: 'highest',
  lowest: 'lowest',
} as const
Object.freeze(SortByOptions)
export type SortByOptions = (typeof SortByOptions)[keyof typeof SortByOptions]

export const RV_MAX_MOTORHOME_AGE = 15
export const RV_MAX_DEFAULT_AGE = 20

export const EXPERIMENT_FLAG_TYPES = {
  Experiment: 'experiment',
  Feature: 'feature',
  Configuration: 'configuration',
} as const
Object.freeze(EXPERIMENT_FLAG_TYPES)
export type EXPERIMENT_FLAG_TYPES = (typeof EXPERIMENT_FLAG_TYPES)[keyof typeof EXPERIMENT_FLAG_TYPES]
