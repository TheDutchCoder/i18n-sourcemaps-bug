import { describe, expect, test } from 'vitest'
import {
  lookupCountryCodeToCurrencyCode,
  lookupCountryToIsoCode,
  lookupIsoCodeToCountry,
  lookupIsoCodeToState,
  lookupRegionTypeByCountryCode,
  lookupStateToIsoCode,
} from '~/utils/lookups'

describe('lookupStateToIsoCode()', () => {
  test('looks up a state name to its ISO code', () => {
    expect(lookupStateToIsoCode('Alberta')).toBe('AB')
    expect(lookupStateToIsoCode('British Columbia')).toBe('BC')
    expect(lookupStateToIsoCode('California')).toBe('CA')
    expect(lookupStateToIsoCode('Florida')).toBe('FL')
    expect(lookupStateToIsoCode('Fake')).toBe(undefined)
    expect(lookupStateToIsoCode()).toBe(undefined)
  })
})

describe('lookupIsoCodeToState()', () => {
  test('looks up a state ISO code to its name', () => {
    expect(lookupIsoCodeToState('AB')).toBe('Alberta')
    expect(lookupIsoCodeToState('BC')).toBe('British Columbia')
    expect(lookupIsoCodeToState('CA')).toBe('California')
    expect(lookupIsoCodeToState('FL')).toBe('Florida')
  })
})

describe('lookupCountryToIsoCode()', () => {
  test('looks up a country name to its ISO code', () => {
    expect(lookupCountryToIsoCode('Canada')).toBe('CA')
    expect(lookupCountryToIsoCode('United States')).toBe('US')
    expect(lookupCountryToIsoCode('Mexico')).toBe('MX')
    expect(lookupCountryToIsoCode('United Kingdom')).toBe('GB')
  })
})

describe('lookupIsoCodeToCountry()', () => {
  test('looks up a country ISO code to its name', () => {
    expect(lookupIsoCodeToCountry('CA')).toBe('Canada')
    expect(lookupIsoCodeToCountry('US')).toBe('United States')
    expect(lookupIsoCodeToCountry('MX')).toBe('Mexico')
    expect(lookupIsoCodeToCountry('GB')).toBe('United Kingdom')
  })
})

describe('lookupCountryCodeToCurrencyCode', () => {
  test('looks up a country code to its currency code', () => {
    expect(lookupCountryCodeToCurrencyCode('CA')).toBe('CAD')
    expect(lookupCountryCodeToCurrencyCode('US')).toBe('USD')
  })
})

describe('lookupRegionTypeByCountryCode()', () => {
  test('looks up a country ISO code to its region type', () => {
    expect(lookupRegionTypeByCountryCode('CA')).toBe('province')
    expect(lookupRegionTypeByCountryCode('US')).toBe('state')
    expect(lookupRegionTypeByCountryCode('MX')).toBe('region')
  })
})
