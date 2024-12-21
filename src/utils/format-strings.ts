import type { Nullable } from '~/types'

/**
 * This file exposes frequently used formatters for strings.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Converts a string to a slug.
 *
 * @param   {string} text The string to convert to a slug.
 * @returns {string} The slug.
 *
 * @example formatAsSlug('Hello World') // hello-world
 */
export const formatAsSlug = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '') // Remove accents
    .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
    .replace(/--+/g, '-') // Replaces multiple hyphens by one hyphen
    .replace(/(^-+|-+$)/g, '') // Remove extra hyphens from beginning or end of the string
}

/**
 * Converts a slug to a captilalized case string.
 *
 * @param   {string} slug The slug to convert.
 * @returns {string} The capitalized case string.
 *
 * @example formatSlugAsString('hello-world-i-am-here') // Hello World I Am Here
 */
export const formatSlugAsString = (slug: string) => {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

/**
 * Converts a string to a camel case string.
 *
 * @param   {string} value The string to convert.
 * @returns {string} The camel case string.
 *
 * @example formatAsCamelCase('hello-world') // helloWorld
 */
export const formatAsCamelCase = (value: string) => {
  return value
    .replace(/^\w|[A-Z]|\b\w|\s+/g, (match, index) => {
      if (Number(match) === 0) return ''
      return index === 0 ? match.toLowerCase() : match.toUpperCase()
    })
    .replaceAll('-', '')
}

/**
 * Converts a string to a title case string.
 *
 * @param   {string} text The string to convert.
 * @returns {string} The title case string.
 *
 * @example formatAsTitleCase('hello world') // Hello World
 */
export const formatAsTitleCase = (text: string) => {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Converts a string to a pascal case string.
 *
 * @param   {string} value The string to convert.
 * @returns {string} The pascal case string.
 *
 * @example formatAsPascalCase('hello-world') // HelloWorld
 */
export const formatAsPascalCase = (value: string) => {
  return value
    .replace(/^\w|[A-Z]|\b\w|\s+/g, (match) => {
      return match.toUpperCase().trim()
    })
    .replaceAll('-', '')
}

/**
 * Removes HTML tags from a string.
 *
 * @param   {string} text The string to remove HTML tags from.
 * @returns {string} The string without HTML tags.
 *
 * @example removeHtmlTags('<p>Hello World</p>') // Hello World
 */
export const removeHtmlTags = (text: string) => text.replace(/<\/?[^>]+(>|$)/g, '')

/**
 * Converts a firstname and lastname to initials.
 *
 * @param   {string} firstName The first name.
 * @param   {string} lastName The last name.
 * @returns {string} The initials.
 *
 * @example formatNameAsInitials('John', 'Doe') // JD
 */
export const formatNameAsInitials = (firstName?: Nullable<string>, lastName?: Nullable<string>) => {
  if (!firstName) {
    return 'N/A'
  }

  const firstInitial = firstName.charAt(0).toUpperCase()
  const lastInitial = lastName?.charAt(0).toUpperCase()

  return `${firstInitial}${lastInitial ? lastInitial : ''}`
}

/**
 * Converts a firstname and lastname to a username.
 *
 * @param   {string} firstName The first name.
 * @param   {string} lastName The last name.
 * @returns {string} The username.
 *
 * @example formatNameAsUsername('John', 'Doe') // John D.
 */
export const formatNameAsUsername = (firstName?: Nullable<string>, lastName?: Nullable<string>) => {
  if (!firstName) {
    return 'N/A'
  }

  const lastInitial = lastName ? ` ${lastName?.charAt(0).toUpperCase()}.` : ''

  return `${firstName}${lastInitial}`
}

/**
 * Converts a fullname to initials.
 *
 * @param   {string} name The full name.
 * @returns {string} The initials.
 *
 * @example formatFullNameAsInitials('John Doe') // JD
 */
export const formatFullNameAsInitials = (name: string) => {
  const nameArray = name.split(' ')
  const firstInitial = nameArray[0].charAt(0).toUpperCase()
  const lastInitial = nameArray.length > 1 ? nameArray[nameArray.length - 1].charAt(0).toUpperCase() : ''

  return `${firstInitial}${lastInitial}`
}

/**
 * Formats a first and last name as a fullname.
 *
 * @param   {string} firstName The first name.
 * @param   {string} lastName The last name.
 * @returns {string} The full name.
 *
 * @example formatNameAsFullName('John', 'Doe') // John Doe
 */
export const formatNameAsFullName = (firstName?: Nullable<string>, lastName?: Nullable<string>) => {
  if (firstName && lastName) return `${firstName.trim()} ${lastName.trim()}`
  if (firstName && !lastName) return firstName.trim()
  if (!firstName && lastName) return lastName.trim()
  return ''
}

/**
 * Formats an RV label based on year, make, and model.
 *
 * @param   {number} year The year.
 * @param   {string} make The name of the brand.
 * @param   {string} model The name of the model.
 * @returns {string} The formatted string.
 *
 * @example formatRvLabel(2000, 'Thor', 'Chateau') // 2000 Thor Chateau
 */
export const formatRvLabel = (year?: Nullable<number>, make?: Nullable<string>, model?: Nullable<string>) => {
  if (!year && !make && !model) return 'Unknown RV'
  return [year, make, model].filter((key) => Boolean(key)).join(' ')
}

/**
 * Escapes an string prepending a backslash to double quotes.
 *
 * @param   {string} name The RV name to escape.
 * @returns {string} The escaped RV name.
 *
 * @example escapeDoubleQuotes('A "quoted" RV name') // A \"quoted\" RV name
 */
export const escapeDoubleQuotes = (name: string) => name.replace(/"/g, '\\"')

/**
 * Transforms first character of a string to uppercase.
 *
 * @param   {string} text The string to transform the first letter.
 * @returns {string} The transformed string.
 *
 * @example capitalizeFirstLetter('hello world') // Hello world
 */
export const capitalizeFirstLetter = (text?: Nullable<string>) => text ? text.charAt(0).toUpperCase() + text.slice(1) : text

/**
 * Formats a number by prepending leading zeroes based on the specified length.
 *
 * @param   {number} num The number to format.
 * @param   {number} [length] The minimum length of the formatted string. Defaults to 1.
 * @returns {string} The formatted string.
 *
 * @example formatNumberWithLeadingZero(5) // 5
 * @example formatNumberWithLeadingZero(5, 2) // 005
 * @example formatNumberWithLeadingZero(5, 3) // 0005
 */
export const formatNumberWithLeadingZero = (num: number, length: number = 0) => {
  if (length < 0) return num.toString()
  return `${'0'.repeat((length))}${num}`
}

/**
 * Formats a number with a precision.
 *
 * @todo this is actually a conversion, we might want to make a conversions
 * utils file for these cases. (i.e. convert-strings.ts, convert-numbers.ts,
 * etc.)
 *
 * @param   {string} value The string to convert to a float.
 * @param   {number} defaultValue The fallback if parseFloat(value) isNaN.
 * @returns {number} The float representation of string or defaultValue.
 *
 * @example toFloat('1.4', 1) // 1.4
 */
export const toFloat = (value: string, defaultValue: number) => {
  const float = parseFloat(value)
  return isNaN(float) ? defaultValue : float
}

/**
 * Replaces diacritics from a string.
 *
 * @param   {string} text The string to replace diacritics from.
 * @returns {string} The string without diacritics.
 *
 * @example replaceDiacritics('Héllò') // Hello
 */
export const replaceDiacritics = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
