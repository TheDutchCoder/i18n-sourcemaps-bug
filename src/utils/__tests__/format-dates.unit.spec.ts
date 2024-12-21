import { describe, expect, test } from 'vitest'
import {
  formatAsDateISO,
  formatAsDateTimeExtended,
  formatAsDateTimeOffset,
  formatAsDayAndMonth,
  formatAsDayOfWeek,
  formatAsFullDateLong,
  formatAsHour12Abbreviated,
  formatAsHour24,
  formatAsMonthYear,
  formatAsOrdinalDateLong,
  formatAsShortDate,
  formatAsShortDateLong,
  formatAsShortDateWithTime,
  formatAsShortDateYear,
  formatAsTime,
  formatAsTimeZone,
  formatAsYearOnly,
  translateTime,
} from '~/utils/format-dates'

describe('Format Dates', () => {
  const date1 = '2021-01-01'
  const date2 = 'Fri Mar 22 2002 14:00:00'
  const date3 = 'Sep 3 2026'
  const date4 = '2024-05-05 9:00:00+00:00'

  test('formats a date as a full date long', () => {
    expect(formatAsFullDateLong(date1)).toBe('January 1, 2021')
    expect(formatAsFullDateLong(date2)).toBe('March 22, 2002')
    expect(formatAsFullDateLong(date3)).toBe('September 3, 2026')
    expect(formatAsFullDateLong(date4)).toBe('May 5, 2024')
  })

  test('formats a date as a short date long', () => {
    expect(formatAsShortDateLong(date1)).toBe('Jan 1, 2021')
    expect(formatAsShortDateLong(date2)).toBe('Mar 22, 2002')
    expect(formatAsShortDateLong(date3)).toBe('Sep 3, 2026')
    expect(formatAsShortDateLong(date4)).toBe('May 5, 2024')
  })

  test('formats a date as a short date with time', () => {
    expect(formatAsShortDateWithTime(date1)).toBe('Jan 1, 2021 12:00 AM')
    expect(formatAsShortDateWithTime(date2)).toBe('Mar 22, 2002 2:00 PM')
    expect(formatAsShortDateWithTime(date3)).toBe('Sep 3, 2026 12:00 AM')
    expect(formatAsShortDateWithTime(date4)).toBe('May 5, 2024 9:00 AM')
  })

  test('formats a date as an ordinal date long', () => {
    expect(formatAsOrdinalDateLong(date1)).toBe('January 1st 2021')
    expect(formatAsOrdinalDateLong(date2)).toBe('March 22nd 2002')
    expect(formatAsOrdinalDateLong(date3)).toBe('September 3rd 2026')
    expect(formatAsOrdinalDateLong(date4)).toBe('May 5th 2024')
  })

  test('formats a date as a short date', () => {
    expect(formatAsShortDate(date1)).toBe('Jan 1')
    expect(formatAsShortDate(date2)).toBe('Mar 22')
    expect(formatAsShortDate(date3)).toBe('Sep 3')
    expect(formatAsShortDate(date4)).toBe('May 5')
  })

  test('formats a date as a short date with year', () => {
    expect(formatAsShortDateYear(date1)).toBe('Jan 1, 2021')
    expect(formatAsShortDateYear(date2)).toBe('Mar 22, 2002')
    expect(formatAsShortDateYear(date3)).toBe('Sep 3, 2026')
    expect(formatAsShortDateYear(date4)).toBe('May 5, 2024')
  })

  test('formats a date as an ISO date', () => {
    expect(formatAsDateISO(date1)).toBe('2021-01-01')
    expect(formatAsDateISO(date2)).toBe('2002-03-22')
    expect(formatAsDateISO(date3)).toBe('2026-09-03')
    expect(formatAsDateISO(date4)).toBe('2024-05-05')
  })

  test('formats a date as a year only', () => {
    expect(formatAsYearOnly(date1)).toBe('2021')
    expect(formatAsYearOnly(date2)).toBe('2002')
    expect(formatAsYearOnly(date3)).toBe('2026')
    expect(formatAsYearOnly(date4)).toBe('2024')
  })

  test('formats a date as an extended date time', () => {
    expect(formatAsDateTimeExtended(date1)).toBe('2021-01-01T12:00:00.000+00:00')
    expect(formatAsDateTimeExtended(date2)).toBe('2002-03-22T12:00:00.000+00:00')
    expect(formatAsDateTimeExtended(date3)).toBe('2026-09-03T12:00:00.000+00:00')
    expect(formatAsDateTimeExtended(date4)).toBe('2024-05-05T12:00:00.000+00:00')
  })

  test('formats a date as a day of the week', () => {
    expect(formatAsDayOfWeek(date1)).toBe('Friday')
    expect(formatAsDayOfWeek(date2)).toBe('Friday')
    expect(formatAsDayOfWeek(date3)).toBe('Thursday')
    expect(formatAsDayOfWeek(date4)).toBe('Sunday')
  })

  test('formats a date as a time', () => {
    expect(formatAsTime(date1)).toBe('12:00 AM')
    expect(formatAsTime(date2)).toBe('2:00 PM')
    expect(formatAsTime(date3)).toBe('12:00 AM')
    expect(formatAsTime(date4)).toBe('9:00 AM')
  })

  test('formats a date as a month and year', () => {
    expect(formatAsMonthYear(date1)).toBe('Jan 2021')
    expect(formatAsMonthYear(date2)).toBe('Mar 2002')
    expect(formatAsMonthYear(date3)).toBe('Sep 2026')
    expect(formatAsMonthYear(date4)).toBe('May 2024')
  })

  test('formats a date as a day and month', () => {
    expect(formatAsDayAndMonth(date1)).toBe('Friday, Jan 1')
    expect(formatAsDayAndMonth(date2)).toBe('Friday, Mar 22')
    expect(formatAsDayAndMonth(date3)).toBe('Thursday, Sep 3')
    expect(formatAsDayAndMonth(date4)).toBe('Sunday, May 5')
  })

  test('formats a date as a date time offset', () => {
    expect(formatAsDateTimeOffset(date1)).toBe('2021-01-01T00:00:00+00:00')
    expect(formatAsDateTimeOffset(date2)).toBe('2002-03-22T14:00:00+00:00')
    expect(formatAsDateTimeOffset(date3)).toBe('2026-09-03T00:00:00+00:00')
    expect(formatAsDateTimeOffset(date4)).toBe('2024-05-05T09:00:00+00:00')
  })

  test('formats a date as a time zone', () => {
    expect(formatAsTimeZone(date1)).toBe('UTC')
    expect(formatAsTimeZone(date2)).toBe('UTC')
  })

  test('formats a date as a 24-hour time', () => {
    expect(formatAsHour24(date1)).toBe('0')
    expect(formatAsHour24(date2)).toBe('14')
    expect(formatAsHour24(date3)).toBe('0')
    expect(formatAsHour24(date4)).toBe('9')
  })

  test('formats a date as a 12-hour time with abbreviated meridiem', () => {
    expect(formatAsHour12Abbreviated(date1)).toBe('12am')
    expect(formatAsHour12Abbreviated(date2)).toBe('2pm')
    expect(formatAsHour12Abbreviated(date3)).toBe('12am')
    expect(formatAsHour12Abbreviated(date4)).toBe('9am')
  })

  test('translates a time to a formatted string', () => {
    expect(translateTime(9)).toBe('9:00 AM')
    expect(translateTime(14)).toBe('2:00 PM')
    expect(translateTime(9, false)).toBe('9:00 am')
    expect(translateTime(14, false)).toBe('2:00 pm')
  })
})
