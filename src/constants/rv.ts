export const BED_TYPES = {
  BedKing: 'BedKing',
  BedQueen: 'BedQueen',
  BedDinette: 'BedDinette',
  BedSofa: 'BedSofa',
  BedBunkTwin: 'BedBunkTwin',
  BedBunkDouble: 'BedBunkDouble',
} as const
Object.freeze(BED_TYPES)
export type BED_TYPES = (typeof BED_TYPES)[keyof typeof BED_TYPES]

export const DETAIL_TYPES = {
  Delivery: 'delivery',
  Petfriendly: 'petfriendly',
  Superhost: 'superhost',
} as const
Object.freeze(DETAIL_TYPES)
export type DETAIL_TYPES = (typeof DETAIL_TYPES)[keyof typeof DETAIL_TYPES]

export const DETAIL_ICONS = {
  delivery: 'truck-fast',
  petfriendly: 'paw-simple',
  superhost: 'award-simple',
} as const
Object.freeze(DETAIL_ICONS)
export type DETAIL_ICONS = keyof typeof DETAIL_ICONS
export const RENTAL_TYPES = {
  MotorHome: 'MotorHome',
  TravelTrailer: 'TravelTrailer',
  RVCottage: 'RVCottage',
} as const
Object.freeze(RENTAL_TYPES)
export type RENTAL_TYPES = (typeof RENTAL_TYPES)[keyof typeof RENTAL_TYPES]
