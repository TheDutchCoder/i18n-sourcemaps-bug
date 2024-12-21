import type { QueryObject } from 'ufo'

/**
 * Convert a string to a boolean.
 *
 * @param str - The string to convert.
 * @returns The boolean value.
 *
 * @example convertStringToBool('true') // true
 */
export function convertStringToBool(str: string) {
  if (str === 'true') return true
  if (str === 'false') return false
  return str
}

/**
 * Convert the values of an object to boolean.
 *
 * @param obj - The object to convert.
 * @returns The object with boolean values.
 *
 * @example convertObjectValuesStringToBool({ foo: 'true', bar: 'false' }) // { foo: true, bar: false }
 */
export function convertObjectValuesStringToBool(obj: QueryObject = {}) {
  Object.keys(obj).map((k: string) => {
    obj[k] = convertStringToBool(obj[k]?.toString() ?? '')
  })

  return obj
}
