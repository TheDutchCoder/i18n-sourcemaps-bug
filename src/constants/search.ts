/**
 * The different types of sorting we support for search results.
 */
export const SEARCH_SORT_TYPES = {
  Recommended: 'Recommended',
  PriceASC: 'PriceASC',
  PriceDESC: 'PriceDESC',
  DistanceASC: 'DistanceASC',
} as const
Object.freeze(SEARCH_SORT_TYPES)
export type SEARCH_SORT_TYPES = (typeof SEARCH_SORT_TYPES)[keyof typeof SEARCH_SORT_TYPES]

/**
 * The different types of drivable RVs we support.
 */
export const DRIVABLE_TYPES_ARRAY = [
  'MotorHome',
  'ClassA',
  'ClassB',
  'ClassC',
  'MotoVintage',
  'TruckCamper',
  'Campervan',
] as const
Object.freeze(DRIVABLE_TYPES_ARRAY)
export type DRIVABLE_TYPES_ARRAY = (typeof DRIVABLE_TYPES_ARRAY)[number]

/**
 * The different types of towable RVs we support.
 */
export const TOWABLE_TYPES_ARRAY = [
  'TravelTrailer',
  'FifthWheel',
  'TentTrailer',
  'SubTravelTrailer',
  'Vintage',
  'Hybrid',
  'ToyHauler',
  'MicroTrailer',
] as const
Object.freeze(TOWABLE_TYPES_ARRAY)
export type TOWABLE_TYPES_ARRAY = (typeof TOWABLE_TYPES_ARRAY)[number]

/**
 * The different types of amenities we support.
 */
export const AMENITIES_TYPES_ARRAY = [
  'AirConditioner',
  'AirportPickup',
  'DiningTable',
  'Family_kidfriendly',
  'Heater',
  'InsideShower',
  'KitchenSink',
  'Microwave',
  'OutsideShower',
  'Refrigerator',
  'Stove_Range',
  'Toilet',
] as const
Object.freeze(AMENITIES_TYPES_ARRAY)
export type AMENITIES_TYPES_ARRAY = (typeof AMENITIES_TYPES_ARRAY)[number]

export const BUDGET_FRIENDLY_MIN_PRICE = 0
export const BUDGET_FRIENDLY_MAX_PRICE = 200

export const US_THANKSGIVING_DATES = {
  start: '2024-11-28',
  end: '2024-12-01',
}

export const CANADA_THANKSGIVING_DATES = {
  start: '2024-10-11',
  end: '2024-10-14',
}
