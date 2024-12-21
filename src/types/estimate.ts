import type { Nullable } from './helpers'
import type { BookingPriceRequest } from './rental-api-aliases'
import type { COUNTRY_SHORTS } from '~/constants'

export type BookingEstimateDestination = {
  name: string
  latitude: number
  longitude: number
  types: string[]
  country: COUNTRY_SHORTS
  placeId: string
}

export type RvUsage = BookingPriceRequest['RvUsage']
export type ProtectionLevel = BookingPriceRequest['ProtectionLevel']
export type InsurancePlan = NonNullable<ProtectionLevel>
export type Plan = {
  name: InsurancePlan
  pricePerNight: number
  priceTotal: number
  deductible: number
}

export type BookingEstimateParams = {
  dateEnd: string
  dateStart: string
  protectionLevel: Nullable<ProtectionLevel>
  roadsideAssistance: boolean
  adults: number
  children: number
  pets: boolean
  rvUsage: RvUsage
  addons: Record<'IdInRV' | 'Quantity', number>[]
  destination?: BookingEstimateDestination
}
