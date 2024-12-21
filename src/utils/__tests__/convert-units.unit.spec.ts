import { describe, expect, test } from 'vitest'
import { kmToMi, miToKm } from '~/utils/convert-units'

describe('Converts kilometers to miles', () => {
  test('kmToMi()', () => {
    expect(kmToMi(1)).toBeCloseTo(0.621371)
    expect(kmToMi(10)).toBeCloseTo(6.21371)
    expect(kmToMi(55)).toBeCloseTo(34.1754)
  })
})

describe('Converts miles to kilometers', () => {
  test('miToKm()', () => {
    expect(miToKm(1)).toBeCloseTo(1.60934)
    expect(miToKm(10)).toBeCloseTo(16.0934)
    expect(miToKm(55)).toBeCloseTo(88.5139)
  })
})
