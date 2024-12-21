import { describe, expect, test } from 'vitest'
import {
  adjustStartForWeekend,
  getMidweekDates,
  getNumOfNightsUntilDate,
  isMidweekSelected,
  isThanksgivingSelected,
  selectMidweekDates,
  selectThanksgivingDates,
} from '~/utils/dates-helpers'

describe('getNumOfNightsUntilDate', () => {
  test('Returning undefined', () => {
    expect(getNumOfNightsUntilDate('')).toBe(undefined)
  })
  test('Returning 0 day', () => {
    expect(getNumOfNightsUntilDate('2020-04-01')).toBe(0)
  })
  test('Returning 1 day', () => {
    expect(getNumOfNightsUntilDate('2020-04-02')).toBe(1)
  })
  test('1 year', () => {
    expect(getNumOfNightsUntilDate('2021-04-01')).toBe(365)
  })
  test('2 years', () => {
    expect(getNumOfNightsUntilDate('2022-04-01')).toBe(730)
  })
  test('4 years with a leap year', () => {
    // 2024 is a leap year
    expect(getNumOfNightsUntilDate('2024-04-01')).toBe(1461)
  })
})

describe('selectMidweekDates', () => {
  test('Future: Start and end as weekday', () => {
    const start = '2030-07-09'
    const end = '2030-07-11'
    const result = selectMidweekDates(start, end)
    expect(result).toStrictEqual({ start: '2030-07-15', end: '2030-07-19' })
    const diff = dates(result.start).diff(dates(result.end), 'day')
    expect(diff).toEqual(-4)
  })

  test('Start as weekend and end as weekday', () => {
    const start = '2030-08-24'
    const end = '2030-08-27'
    const result = selectMidweekDates(start, end)
    expect(result).toStrictEqual({ start: '2030-08-19', end: '2030-08-23' })
    const diff = dates(result.start).diff(dates(result.end), 'day')
    expect(diff).toEqual(-4)
  })

  test('Start as weekday and end as weekend', () => {
    const start = '2030-09-11'
    const end = '2030-09-14'
    const result = selectMidweekDates(start, end)
    expect(result).toStrictEqual({ start: '2030-09-09', end: '2030-09-13' })
    const diff = dates(result.start).diff(dates(result.end), 'day')
    expect(diff).toEqual(-4)
  })

  test('Long range dates (7+ days)', () => {
    const start = '2030-10-01'
    const end = '2030-10-27'
    const result = selectMidweekDates(start, end)
    expect(result).toStrictEqual({ start: '2030-10-28', end: '2030-11-01' })
    const diff = dates(result.start).diff(dates(result.end), 'day')
    expect(diff).toEqual(-4)
  })

  test('Disabled dates (past)', () => {
    const start = '2020-05-22'
    const end = '2020-05-25'
    const result = selectMidweekDates(start, end)
    const diff = dates(result.start).diff(dates(result.end), 'day')
    expect(diff).toEqual(-4)
  })

  test('No dates', () => {
    const start = undefined
    const end = undefined
    const result = selectMidweekDates(start, end)
    const diff = dates(result.start).diff(dates(result.end), 'day')
    expect(diff).toEqual(-4)
  })
})

describe('isMidweekSelected', () => {
  test('Returning false with no dates', () => {
    const start = '2030-07-09'
    const end = undefined
    const result = isMidweekSelected(start, end)
    expect(result).toBe(false)
  })

  test('Returning false with dates', () => {
    const start = '2030-07-09'
    const end = '2030-07-11'
    const result = isMidweekSelected(start, end)
    expect(result).toBe(false)
  })

  test('Returning false with big range of dates', () => {
    const start = '2030-07-08'
    const end = '2030-07-19'
    const result = isMidweekSelected(start, end)
    expect(result).toBe(false)
  })

  test('Returning true', () => {
    const start = '2030-04-15'
    const end = '2030-04-19'
    const result = isMidweekSelected(start, end)
    expect(result).toBe(true)
  })
})

describe('selectThanksgivingDates', () => {
  test('US', () => {
    const result = selectThanksgivingDates(true)
    expect(result).toEqual({ start: '2024-11-28', end: '2024-12-01' })
  })

  test('Canada', () => {
    const result = selectThanksgivingDates(false)
    expect(result).toEqual({ start: '2024-10-11', end: '2024-10-14' })
  })
})

describe('isThanksgivingSelected', () => {
  test('Returning true', () => {
    const result = isThanksgivingSelected(false, '2024-10-11', '2024-10-14')
    expect(result).toBe(true)
  })

  test('Returning false', () => {
    const result = isThanksgivingSelected(true, '2024-11-27', '2024-12-01')
    expect(result).toBe(false)
  })
})

describe('numberOfNightsUntilDate', () => {
  test('Returns 0 if the date is today', () => {
    const result = numberOfNightsUntilDate(new Date())
    expect(result).toBe(0)
  })

  test('Returns 6 if the date is 7 days from today', () => {
    const result = numberOfNightsUntilDate(new Date(2020, 3, 8))
    expect(result).toBe(6)
  })
})

describe('getMidweekDates', () => {
  test('Returns midweek dates for a given date range', () => {
    const result = getMidweekDates('2020-12-06', '2020-12-22')
    expect(result).toEqual({ start: '2020-12-21', end: '2020-12-25' })
  })
})

describe('adjustStartForWeekend', () => {
  test('Returns the next week\'s Monday after the future date', () => {
    const result = adjustStartForWeekend(dates('2021-01-01'), true)
    expect(result).toEqual(dates('2021-01-04T00:00:00.000Z'))
  })

  test('Returns the next week\'s Monday if the date is in the past', () => {
    const result = adjustStartForWeekend(dates('2020-01-06'), false)
    expect(result).toEqual(dates('2020-04-06T00:00:00.000Z'))
  })
})
