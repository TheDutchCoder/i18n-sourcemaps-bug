import { describe, expect, test } from 'vitest'
import {
  countryCodeToDistanceUnit,
  countryCodeToDistanceUnitShort,
  distanceBetweenTwoPoints,
} from '~/utils/distances'

// TODO: can this live in a global somewhere?
expect.extend({
  toBeWithinTolerance: (received: number, expected: number, tolerance: number) => {
    const upperBound = expected * (1 + tolerance)
    const lowerBound = expected * (1 - tolerance)
    const pass = received <= upperBound && received >= lowerBound

    if (pass) {
      return {
        message: () => `${received} is within the tolerance range`,
        pass: true,
      }
    }
    else {
      return {
        message: () => `expected ${received} to be between ${lowerBound} and ${upperBound}`,
        pass: false,
      }
    }
  },
})

describe('Calculates the distance between two coordinates with +/- 0.5% tolerance', () => {
  const acceptedTolerance = 0.005

  test('distanceBetweenTwoPoints()', () => {
    expect(
      distanceBetweenTwoPoints({ lat: 52.518611, lng: 13.408056 }, { lat: 51.519475, lng: 7.46694444 }),
    ).toBeWithinTolerance(421.455, acceptedTolerance)

    expect(
      distanceBetweenTwoPoints({ lat: 38.8976, lng: -77.0366 }, { lat: 39.9496, lng: -75.1503 }),
    ).toBeWithinTolerance(200, acceptedTolerance)

    expect(
      distanceBetweenTwoPoints({ lat: -49.8523, lng: 22.2203 }, { lat: -2.0984, lng: 87.0099 }),
    ).toBeWithinTolerance(8046.5, acceptedTolerance)
  })
})

describe('countryCodeToDistanceUnit()', () => {
  test('returns the correct distance unit for a given country code', () => {
    expect(countryCodeToDistanceUnit('US')).toBe('miles')
    expect(countryCodeToDistanceUnit('GB')).toBe('km')
    expect(countryCodeToDistanceUnit('FR')).toBe('km')
    expect(countryCodeToDistanceUnit()).toBe('km')
  })
})

describe('countryCodeToDistanceUnitShort()', () => {
  test('returns the correct distance unit short for a given country code', () => {
    expect(countryCodeToDistanceUnitShort('US')).toBe('mi')
    expect(countryCodeToDistanceUnitShort('GB')).toBe('km')
    expect(countryCodeToDistanceUnitShort('FR')).toBe('km')
  })
})
