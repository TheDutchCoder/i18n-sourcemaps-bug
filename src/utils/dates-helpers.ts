import type { DatesInstance } from '~/utils/dates'
import { formatAsDateISO } from '~/utils/format-dates'
import { CANADA_THANKSGIVING_DATES, US_THANKSGIVING_DATES } from '~/constants/search'
import { ONE_DAY_IN_SECONDS } from '~/constants/durations'

export function getNumOfNightsUntilDate(date: string) {
  if (!date) return

  return Math.ceil(Math.abs(new Date(date).getTime() - new Date().getTime()) / (1000 * ONE_DAY_IN_SECONDS))
}

/**
 * Returns the default midweek dates for the next week.
 *
 * @returns An object containing the start and end dates in ISO format.
 *
 * @example getDefaultMidweekDates() // { start: '2022-01-03', end: '2022-01-07' }
 */
const getDefaultMidweekDates = (): { start: string, end: string } => {
  const startResult = dates().add(1, 'week').day(1)
  const endResult = dates(startResult).add(4, 'day')

  return {
    start: formatAsDateISO(startResult),
    end: formatAsDateISO(endResult),
  }
}

/**
 * Calculates midweek dates for a given date range.
 *
 * @param {Date | string} start - The start date.
 * @param {Date | string} end - The end date.
 * @returns An object containing the start and end dates in ISO format.
 *
 * @example getMidweekDates('2022-01-01', '2022-01-07') // { start: '2022-01-03', end: '2022-01-07' }
 */
export const getMidweekDates = (start: string | Date, end: string | Date): { start: string, end: string } => {
  const startDate = dates(start)
  const endDate = dates(end)
  const diff = Math.abs(startDate.diff(endDate, 'day'))

  if (diff >= 7) {
    return getMidweekDatesForBigRange(endDate)
  }

  const isFuture = !isStartOrEndOnWeekend(startDate, endDate)
  const startResult = adjustStartForWeekend(startDate, isFuture)
  const endResult = dates(startResult).add(4, 'day')

  return {
    start: formatAsDateISO(startResult),
    end: formatAsDateISO(endResult),
  }
}

/**
 * Calculates midweek dates for a large date range.
 *
 * @param {Date | string} endDate - The end date.
 * @returns An object containing the start and end dates in ISO format.
 *
 * @example getMidweekDatesForBigRange(dates('2022-01-15')) // { start: '2022-01-10', end: '2022-01-14' }
 */
const getMidweekDatesForBigRange = (endDate: DatesInstance): { start: string, end: string } => {
  const start = endDate.day(1)
  const end = dates(start).add(4, 'day')

  return { start: formatAsDateISO(start), end: formatAsDateISO(end) }
}

/**
 * Checks if the start or end date falls on a weekend.
 *
 * @param {Date | string} startDate - The start date.
 * @param {Date | string} endDate - The end date.
 * @returns {boolean} True if the start or end date is on a weekend, false otherwise.
 *
 * @example isStartOrEndOnWeekend(dates('2022-01-01'), dates('2022-01-02')) // false
 */
const isStartOrEndOnWeekend = (startDate: DatesInstance, endDate: DatesInstance): boolean => {
  const sunday = 0
  const saturday = 6
  const weekend = [sunday, saturday]
  const startWeekday = Number(startDate.format('d'))
  const endWeekday = Number(endDate.format('d'))

  return startWeekday === saturday || (!weekend.includes(startWeekday) && weekend.includes(endWeekday))
}

/**
 * Adjusts the start date based on whether it's in the future or past.
 *
 * @param {Date | string} startDate - The start date.
 * @param {boolean} isFuture - True if the date is in the future, false otherwise.
 * @returns The adjusted start date.
 *
 * @example adjustStartForWeekend(dates('2022-01-01'), true) // 2022-01-03
 */
export const adjustStartForWeekend = (startDate: DatesInstance, isFuture: boolean): DatesInstance => {
  let startResult = dates(startDate).add(isFuture ? 1 : 0, 'week').day(1)

  if (dates(startResult).isBefore(dates())) {
    startResult = dates().add(1, 'week').day(1)
  }

  return startResult
}

/**
 * Selects midweek dates based on the provided start and end dates.
 * If no dates are provided, it defaults to the next week's Monday to Friday.
 *
 * @param {Date | string} start - The start date.
 * @param {Date | string} end - The end date.
 * @returns An object containing the start and end dates in ISO format.
 *
 * @example selectMidweekDates('2022-01-01', '2022-01-07') // { start: '2022-01-03', end: '2022-01-07' }
 */
export const selectMidweekDates = (start?: string | Date, end?: string | Date): { start: string, end: string } => {
  if (!start || !end) {
    return getDefaultMidweekDates()
  }

  return getMidweekDates(start, end)
}

/**
 * Checks if the selected dates are midweek.
 *
 * @param {Date | string} start - The start date.
 * @param {Date | string} end - The end date.
 * @returns {boolean} True if the selected dates are midweek, false otherwise.
 *
 * @example isMidweekSelected('2022-01-03', '2022-01-07') // true
 */
export const isMidweekSelected = (start?: string | Date, end?: string | Date): boolean => {
  if (!start || !end) return false

  const monday = 1
  const startWeekday = Number(dates(start).format('d'))
  const diff = dates(end).diff(dates(start), 'day')

  return startWeekday === monday && diff === 4
}

/**
 * Selects Thanksgiving dates based on the country.
 *
 * @param {boolean} isUnitedStates - True if the country is the United States, false otherwise.
 * @returns An object containing the start and end dates of Thanksgiving.
 *
 * @example selectThanksgivingDates(true) // { start: '2022-11-24', end: '2022-11-25' }
 */
export const selectThanksgivingDates = (isUnitedStates: boolean) => {
  const start = isUnitedStates ? US_THANKSGIVING_DATES.start : CANADA_THANKSGIVING_DATES.start
  const end = isUnitedStates ? US_THANKSGIVING_DATES.end : CANADA_THANKSGIVING_DATES.end

  return { start, end }
}

/**
 * Checks if the selected dates are Thanksgiving dates.
 *
 * @param {boolean} isUnitedStates - True if the country is the United States, false otherwise.
 * @param {string} start - The start date.
 * @param {string} end - The end date.
 * @returns {boolean} True if the selected dates are Thanksgiving dates, false otherwise.
 *
 * @example isThanksgivingSelected(true, '2022-11-24', '2022-11-25') // true
 */
export const isThanksgivingSelected = (isUnitedStates: boolean, start: string, end: string) => {
  return isUnitedStates
    ? start === US_THANKSGIVING_DATES.start && end === US_THANKSGIVING_DATES.end
    : start === CANADA_THANKSGIVING_DATES.start && end === CANADA_THANKSGIVING_DATES.end
}

/**
 * Returns the number of nights between today and the given date.
 *
 * @param date - The date to calculate the number of nights until.
 * @returns The number of nights between today and the given date.
 *
 * @example
 * numberOfNightsUntilDate(new Date(2020, 3, 8)) // 6
 */
export const numberOfNightsUntilDate = (date: string | Date) => {
  const start = dates()
  const end = dates(date)
  const diff = end.diff(start, 'day') - 1
  return diff < 0 ? 0 : diff
}
