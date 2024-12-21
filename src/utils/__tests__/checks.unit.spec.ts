import { describe, expect, test } from 'vitest'
import { hasValue } from '~/utils/checks'

describe('Checks', () => {
  describe('hasValue', () => {
    test('returns true when a value is not null or undefined', () => {
      expect(hasValue('hello')).toBe(true)
      expect(hasValue('')).toBe(true)
      expect(hasValue(0)).toBe(true)
      expect(hasValue(NaN)).toBe(true)
      expect(hasValue(1)).toBe(true)
      expect(hasValue(-1)).toBe(true)
      expect(hasValue(true)).toBe(true)
      expect(hasValue(false)).toBe(true)
      expect(hasValue([])).toBe(true)
      expect(hasValue({})).toBe(true)
    })

    test('returns false when a value is null or undefined', () => {
      expect(hasValue(null)).toBe(false)
      expect(hasValue(undefined)).toBe(false)
      expect(hasValue()).toBe(false)
    })
  })
})
