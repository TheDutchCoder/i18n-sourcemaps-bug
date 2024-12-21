import { describe, expect, test } from 'vitest'
import {
  centsToDollars,
  formatDistance,
  formatNearestHalf,
  formatWithPrecision,
  roundToNearestCent,
  roundToNearestDecimal,
  toNegativeNumber,
} from '~/utils/format-numbers'

describe('toNegativeNumber', () => {
  test('Converts a number to a negative number', () => {
    expect(toNegativeNumber(10)).toBe(-10)
    expect(toNegativeNumber(-10)).toBe(-10)
    expect(toNegativeNumber(0)).toBe(0)
    expect(toNegativeNumber(0.1)).toBe(-0.1)
    expect(toNegativeNumber(-0.1)).toBe(-0.1)
  })
})

describe('roundToNearestDecimal', () => {
  test('Rounds a number to the nearest decimal with a precision', () => {
    expect(roundToNearestDecimal(10.169756)).toBe(10.2)
    expect(roundToNearestDecimal(10.169756, 4)).toBe(10.1698)
    expect(roundToNearestDecimal(-10.169756)).toBe(-10.2)
    expect(roundToNearestDecimal(-10.169756, 4)).toBe(-10.1698)
  })
})

describe('roundToNearestCent', () => {
  test('Rounds a number to the nearest cent', () => {
    expect(roundToNearestCent(10.122)).toBe(10.12)
    expect(roundToNearestCent(10.124)).toBe(10.12)
    expect(roundToNearestCent(10.125)).toBe(10.13)
    expect(roundToNearestCent(10.129)).toBe(10.13)
    expect(roundToNearestCent(-10.121)).toBe(-10.12)
  })
})

describe('formatDistance()', () => {
  test('formats distance in kilometers with english locale', () => {
    expect(formatDistance(53.85637, 'km', 'en-US', 3)).toBe('53.856 km')
    expect(formatDistance(10.123, 'km', undefined, 2)).toBe('10.12 km')
    expect(formatDistance(2.59, 'km')).toBe('2.6 km')
  })

  test('formats distance in kilometers with french locale', () => {
    expect(formatDistance(53.85637, 'km', 'fr-FR', 3)).toBe('53,856 km')
    expect(formatDistance(10.123, 'km', 'fr-FR', 2)).toBe('10,12 km')
    expect(formatDistance(2.59, 'km', 'fr-FR')).toBe('2,6 km')
  })

  test('formats distance in miles with english locale', () => {
    expect(formatDistance(53.85637, 'miles', 'en-US', 3)).toBe('33.465 miles')
    expect(formatDistance(10.123, 'miles', undefined, 2)).toBe('6.29 miles')
    expect(formatDistance(2.59, 'miles')).toBe('1.6 miles')
  })

  test('formats distance in miles with french locale', () => {
    expect(formatDistance(53.85637, 'MILES', 'fr-FR', 3)).toBe('33,465 miles')
    expect(formatDistance(10.123, 'miles', 'fr-FR', 2)).toBe('6,29 miles')
    expect(formatDistance(2.59, 'miles', 'fr-FR')).toBe('1,6 miles')
  })

  test('formats distance with unexpected parameters', () => {
    expect(formatDistance(53.85637, 'cm', 'en-US', 3)).toBe('33.465 miles')
    expect(formatDistance(53.85637, '', 'en-US', 3)).toBe('33.465 miles')
    expect(formatDistance(53.85637, 'km', 'en-US', 0)).toBe('54 km')
  })
})

describe('formatNearestHalf', () => {
  test('formats a number to its nearest half', () => {
    expect(formatNearestHalf(3.125)).toEqual('3.0')
    expect(formatNearestHalf(10.122)).toBe('10.0')
    expect(formatNearestHalf(10.676)).toBe('10.5')
    expect(formatNearestHalf(10.897)).toBe('11.0')
    expect(formatNearestHalf(-10.121)).toBe('-10.0')
  })
})

describe('formatWithPrecision', () => {
  test('formats a number with precision', () => {
    expect(formatWithPrecision(3.125)).toEqual('3.1')
    expect(formatWithPrecision(10.122, 2)).toBe('10.12')
    expect(formatWithPrecision(10.676, 1)).toBe('10.7')
    expect(formatWithPrecision(10.897, 0)).toBe('11')
  })
})

describe('centsToDollars', () => {
  test('formats cents to dollars', () => {
    expect(centsToDollars(100)).toBe(1)
    expect(centsToDollars(0)).toBe(0)
    expect(centsToDollars(1000)).toBe(10)
    expect(centsToDollars(101)).toBe(1.01)
    expect(centsToDollars(101.1)).toBe(101.1)
  })
})
