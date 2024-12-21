import { UNIT_MEASUREMENT } from '~/constants'

/**
 * This file exposes frequently used formatters for numbers.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Converts to negative number.
 * @param {number} value The value to convert.
 * @returns {number} The negative value.
 */
export const toNegativeNumber = (value: number) => {
  if (value <= 0) return value
  return -value
}

/**
 * Rounds a number to the nearest decimal.
 *
 * @param   {string|number} value The value to round.
 * @returns {number} The rounded value.
 *
 * @example roundToNearestDecimal(10.193) // 10.2
 * @example roundToNearestDecimal(10.193867, 4) // 10.1939
 */
export const roundToNearestDecimal = (value: number | string, precision: number = 1) => {
  return Math.round((parseFloat(value.toString()) + Number.EPSILON) * Math.pow(10, precision)) / Math.pow(10, precision)
}

/**
 * Rounds a number to the nearest cent.
 *
 * @param   {string|number} value The value to round.
 * @returns {number} The rounded value.
 *
 * @example roundToNearestCent(10.123) // 10.12
 */
export const roundToNearestCent = (value: number | string) => {
  return roundToNearestDecimal(value, 2)
}

/**
 * Formats a distance with an optional unit.
 *
 * @param   {number} distance The distance to format.
 * @param   {string} unit The unit to use.
 * @param   {string} locale The locale to use.
 * @param   {number} precision The precision to use.
 * @returns {string} The formatted distance.
 *
 * @example formatDistance(10.123, 'km', 'fr-FR', 2) // 10,12 km
 */
export const formatDistance = (distance: number, unit: string, locale = 'en-US', precision = 1) => {
  const internalUnit = unit === UNIT_MEASUREMENT.KM ? 'km' : 'miles'
  const distanceInUnit = internalUnit === UNIT_MEASUREMENT.KM ? distance : kmToMi(distance)
  const distanceString = new Intl.NumberFormat(locale, { maximumFractionDigits: precision }).format(distanceInUnit)

  return `${distanceString} ${internalUnit}`
}

/**
 * Formats a number to its nearest half.
 *
 * @param   {number} value The value to format.
 * @returns {string} The formatted value.
 *
 * @example formatNearestHalf(3.125) // '3.0'
 */
export const formatNearestHalf = (value: number) => {
  return (Math.round(value * 2) / 2).toFixed(1)
}

/**
 * Formats a number with a precision.
 *
 * @param   {number} value The value to format.
 * @param   {number} precision The precision to use.
 * @returns {string} The formatted value.
 *
 * @example formatWithPrecision(10.169756) // '10.2'
 */
export const formatWithPrecision = (value: number, precision = 1) => {
  return value.toFixed(precision)
}

/**
 * Formats cents to dollars.
 *
 * @param   {number} value The value to format.
 * @returns {number} The formatted value.
 */
export const centsToDollars = (value: number) => {
  // If the value is not a whole number, return the value as is
  if (value % 1 != 0) {
    return value
  }

  return value / 100
}
