import type { DatesInstance } from '~/utils/dates'
/**
 * This file exposes frequently used formatters for DatesInstance in human readable form.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Format a date as a full date long.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsFullDateLong('2021-01-01') //January 1, 2021
 */
export const formatAsFullDateLong = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('LL')
}

/**
 * Format a date as a short date long.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsShortDateLong('2021-01-01') // Jan 1, 2021
 */
export const formatAsShortDateLong = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('ll')
}

/**
 * Format a date as a short date with time.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsShortDateWithTime('2021-01-01') // Jan 1, 2021 12:00 AM
 */
export const formatAsShortDateWithTime = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('lll')
}

/**
 * Format a date as an ordinal date long.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsOrdinalDateLong('2021-01-01') // January 1st 2021
 */
export const formatAsOrdinalDateLong = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('MMMM Do YYYY')
}

/**
 * Format a date as a short date.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsShortDate('2021-01-01') // Jan 1
 */
export const formatAsShortDate = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('MMM D')
}

/**
 * Format a date as a short date with year.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsShortDateYear('2021-01-01') // Jan 1, 2021
 */
export const formatAsShortDateYear = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('MMM D, YYYY')
}

/**
 * Format a date as a date ISO.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsDateISO('2021-01-01') // 2021-01-01
 */
export const formatAsDateISO = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('YYYY-MM-DD')
}

/**
 * Format a date as a year only.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsYearOnly('2021-01-01') // 2021
 */
export const formatAsYearOnly = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('YYYY')
}

/**
 * Format a date as a date time extended.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsDateTimeExtended('2021-01-01') // 2021-01-01T12:00:00.000+00:00
 */
export const formatAsDateTimeExtended = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('YYYY-MM-DDT12:00:00.000Z')
}

/**
 * Format a date as a day of the week.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsDayOfWeek('2021-01-01') // Friday
 */
export const formatAsDayOfWeek = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('dddd')
}

/**
 * Format a date as a time.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsTime('2021-01-01') // 12:00 AM
 */
export const formatAsTime = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('h:mm A')
}

/**
 * Format a date as a month and year.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsMonthYear('2021-01-01') // Jan 2021
 */
export const formatAsMonthYear = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('MMM YYYY')
}

/**
 * Format a date as a day and month.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsDayAndMonth('2021-01-01') // Friday, Jan 1
 */
export const formatAsDayAndMonth = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('dddd, MMM D')
}

/**
 * Format a date as a date time offset.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsDateTimeOffset('2021-01-01') // 2021-01-01T00:00:00+00:00
 */
export const formatAsDateTimeOffset = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('YYYY-MM-DDTHH:mm:ssZ')
}

/**
 * Format a date as a time zone.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsTimeZone('2021-01-01') // EST
 */
export const formatAsTimeZone = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('z')
}

/**
 * Format a date as an hour in 24 hour format.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsHour24('2021-01-01') // 0
 */
export const formatAsHour24 = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('H')
}

/**
 * Format a date as a 12 hour abbreviated time.
 *
 * @param {string | number | Date | DatesInstance} date - The date to format.
 * @returns The formatted date.
 *
 * @example formatAsHour12Abbreviated('2021-01-01') // 12am
 */
export const formatAsHour12Abbreviated = (date: number | string | Date | DatesInstance) => {
  return dates(date).format('ha')
}

/**
 * Translate a time to a formatted string.
 *
 * @param {number} value - The time to translate.
 * @param {boolean} formatHourIsUppercase - Whether to format the hour as uppercase.
 * @returns The formatted time.
 *
 * @example translateTime(9) // 9:00 AM
 */
export const translateTime = (value: number, formatHourIsUppercase = true) => {
  return dates().hour(value).minute(0).second(0).format(`h:mm ${formatHourIsUppercase ? 'A' : 'a'}`)
}
