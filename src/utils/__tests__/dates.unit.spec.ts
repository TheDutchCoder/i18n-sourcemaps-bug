import { describe, expect, test } from 'vitest'
import dates from '~/utils/dates'
import 'dayjs/locale/fr'

describe('dates Configuration', () => {
  test('should support utc plugin', () => {
    const result = dates.utc('2023-01-01T00:00:00Z').isValid()
    expect(result).toBe(true)
  })

  test('should support timezone plugin', () => {
    const result = dates.tz('2023-01-01T00:00:00Z', 'Europe/Paris').format()
    expect(result).toContain('2023')
  })

  test('should support customParseFormat plugin', () => {
    const result = dates('31-12-2023', 'DD-MM-YYYY').isValid()
    expect(result).toBe(true)
  })

  test('should support localizedFormat plugin', () => {
    const result = dates().format('L')
    expect(result).toBeDefined()
  })

  test('should support advancedFormat plugin', () => {
    const result = dates().format('Q')
    expect(result).toMatch(/[1-4]/)
  })

  test('should support isSameOrBefore plugin', () => {
    const result = dates('2023-01-01').isSameOrBefore('2023-01-02')
    expect(result).toBe(true)
  })

  test('should support isSameOrAfter plugin', () => {
    const result = dates('2023-01-02').isSameOrAfter('2023-01-01')
    expect(result).toBe(true)
  })

  test('should support isBetween plugin', () => {
    const result = dates('2023-01-02').isBetween('2023-01-01', '2023-01-03')
    expect(result).toBe(true)
  })

  test('should support weekday plugin', () => {
    const result = dates().weekday(0).format()
    expect(result).toBeDefined()
  })

  test('should support French locale', () => {
    const result = dates().locale('fr').format('dddd')
    expect(result).toMatch(/lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche/)
  })
})
