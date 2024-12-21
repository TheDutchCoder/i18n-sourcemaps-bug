import type { Nullable } from './helpers'
import type { EXPERIMENT_FLAG_TYPES } from '~/constants'
import type { PointOfInterestTypeEnumKey } from '~/lib/enums'
import type { PointOfInterestStats } from '~/types/point-of-interest'
import type { GLOBAL_MODAL_COMPONENTS } from '~/composables/useModals'

/**
 * Custom types used in the project that do not come from the backend.
 */
export type LayoutParams = {
  hasHostFooter: boolean
  hideFooter: boolean
  hideHeader: boolean
  hideNavigation: boolean
}

export type GeolocationData = {
  ipAddress?: string
  countryCode: string
  regionCode: string
  continent?: string
  metroCode?: string
  postalCode?: string
  timezone?: string
  city: string
  latitude: Nullable<number>
  longitude: Nullable<number>
}

export type ExperimentVariant = boolean | number | string
export type EvaluatedExperiment = {
  key: string
  type: EXPERIMENT_FLAG_TYPES
  variant: ExperimentVariant
  variants: Array<ExperimentVariant>
  defaultVariant: ExperimentVariant
  originalVariant: ExperimentVariant
  platforms?: Array<string>
  team?: string
  trackDefaultVariant: boolean
  trackOnStartup: boolean
  trackWebview: boolean
  tracked: boolean
  overrider?: ExperimentVariant
}

export type Experiments = {
  evaluated: Record<string, EvaluatedExperiment>
  overridden: []
}

export type RvRentalsLocation = {
  title?: string
  titleWithPreposition?: string
  titleNearby?: string
  destinationType?: PointOfInterestTypeEnumKey
  regionType?: string
  stats?: PointOfInterestStats
  coordinates?: {
    latitude: number
    longitude: number
  }
  regionId?: string
  countryCode?: string
}

export type Tab = {
  title: string
}

export type SupportedLocales = 'en' | 'fr'

export type MosaicImage = {
  path: string
  description?: string
}

export type MosaicVideo = {
  thumbnail: string
  source: string
  width: number
  height: number
}

export type LightboxImage = MosaicImage | MosaicVideo

export type NearbyLocation = {
  path: string
  name: string
  fullName: string
  distanceKm: Nullable<number>
}

export type Coordinate = {
  lat: number
  lng: number
}

// Can be deleted?
export type DestinationData = {
  destinationLatitude?: number
  destinationLongitude?: number
  destinationTypes?: string[]
  destination?: string
  placeId?: string
  destinationCountry?: string
  rawDeliveryDistance?: number
  rawDeliveryDistanceInUserUnits?: number
  deliveryCostCentsInUserCurrency?: number
  deliveryDistanceExceedsMaxError?: boolean
  noDeliveryDistanceFoundError?: boolean
  deducedDeliveryAddon?: []
  noBucket?: boolean
}

// Can be deleted?
export type DistanceData = {
  distanceInKm?: number
  distanceInUserUnits?: number
  deliveryCostCentsInUserCurrency?: number
  deliveryDistanceExceedsMaxError?: boolean
  noDeliveryDistanceFoundError?: boolean
}

export type BlockedRange = Date | { start: Nullable<Date>, end: Nullable<Date> }
export type DaysOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type ModalData = Record<string, unknown>
export type GlobalModal = {
  tag: GLOBAL_MODAL_COMPONENTS
  data?: ModalData
  onClose?: (data: ModalData) => void
  persist?: boolean
}
export type Modal = Partial<GlobalModal> & {
  id: string
}
