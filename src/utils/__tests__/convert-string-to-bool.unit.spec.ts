import { describe, expect, test } from 'vitest'
import { convertObjectValuesStringToBool, convertStringToBool } from '~/utils/convert-string-to-bool'

describe('Converts a string to a boolean', () => {
  test('convertStringToBool()', () => {
    expect(convertStringToBool('true')).toBe(true)
    expect(convertStringToBool('false')).toBe(false)
    expect(convertStringToBool('TRUE')).toBe('TRUE')
    expect(convertStringToBool('FALSE')).toBe('FALSE')
    expect(convertStringToBool('hello world')).toBe('hello world')
  })
})

describe('Converts object stringified boolean values to actual booleans', () => {
  test('convertObjectValuesStringToBool()', () => {
    const obj = {
      a: 'true',
      b: 'false',
      c: 'TRUE',
      d: 'FALSE',
      e: 'hello world',
      f: undefined,
      g: null,
    }

    const result = convertObjectValuesStringToBool(obj)

    expect(result).toEqual({
      a: true,
      b: false,
      c: 'TRUE',
      d: 'FALSE',
      e: 'hello world',
      f: '',
      g: '',
    })
  })
})
