/**
 * This file exposes frequently used distance related functions.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */
import type { Coordinate } from '~/types'
import type { COUNTRY_SHORTS } from '~/constants'
import { DISTANCE_UNIT_BY_COUNTRY_CODE, UNIT_MEASUREMENT } from '~/constants'

/**
 * Calculate the distance between two points using the Spherical law of cosines.
 *
 * @see https://en.wikipedia.org/wiki/Spherical_law_of_cosines
 * @param {Object} point1 - The first point.
 * @param {Object} point2 - The second point.
 *
 * @example distanceBetweenTwoPoints({ lat: 52.518611, lng: 13.408056 }, { lat: 51.519475, lng: 7.46694444 }) // 421.455
 */
export const distanceBetweenTwoPoints = (point1: Coordinate, point2: Coordinate) => {
  const earthRadius = 6371
  const lat1 = (point1.lat * Math.PI) / 180
  const lat2 = (point2.lat * Math.PI) / 180
  const deltaLon = point2.lng - point1.lng
  const deltaLambda = (deltaLon * Math.PI) / 180
  const distance
    = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(deltaLambda)) * earthRadius

  return distance
}

/**
 * Get Distance unit based on country code.
 * string input type can be removed once we have better typing for country codes.
 *
 * @param {COUNTRY_SHORTS | string} countryCode - The country code.
 * @returns {string} The distance unit.
 *
 * @example countryCodeToDistanceUnit('US') // 'miles'
 */
export const countryCodeToDistanceUnit = (countryCode?: string | COUNTRY_SHORTS) => {
  const defaultUnit = UNIT_MEASUREMENT.KM

  if (!countryCode) return defaultUnit
  return DISTANCE_UNIT_BY_COUNTRY_CODE[countryCode as COUNTRY_SHORTS] ?? defaultUnit
}

/**
 * Get distance unit short based on country code.
 *
 * @param {COUNTRY_SHORTS | string} countryCode - The country code.
 * @returns {string} The distance unit short.
 *
 * @example countryCodeToDistanceUnitShort('US') // 'mi'
 */
export const countryCodeToDistanceUnitShort = (countryCode?: string | COUNTRY_SHORTS): 'km' | 'mi' => {
  const result = countryCodeToDistanceUnit(countryCode)
  return result === 'miles' ? 'mi' : result
}
