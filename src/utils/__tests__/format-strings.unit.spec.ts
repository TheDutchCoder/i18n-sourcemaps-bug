import { describe, expect, test } from 'vitest'

import {
  capitalizeFirstLetter,
  escapeDoubleQuotes,
  formatAsCamelCase,
  formatAsPascalCase,
  formatAsSlug,
  formatAsTitleCase,
  formatFullNameAsInitials,
  formatNameAsFullName,
  formatNameAsInitials,
  formatNameAsUsername,
  formatNumberWithLeadingZero,
  formatRvLabel,
  formatSlugAsString,
  removeHtmlTags,
  replaceDiacritics,
  toFloat,
} from '~/utils/format-strings'

describe('Format Strings', () => {
  test('formats a string as a slug', () => {
    expect(formatAsSlug('Hello World I Am Here')).toBe('hello-world-i-am-here')
    expect(formatAsSlug('hello world i am here')).toBe('hello-world-i-am-here')
    expect(formatAsSlug('---!@#$%^&*(){}[]:;"\'?<>-éêêâîôûç   -    rvezy---ottawa----')).toBe('eeeaiouc-rvezy-ottawa')
  })

  test('formats a slug as a capitalized case string', () => {
    expect(formatSlugAsString('hello-world-i-am-here')).toBe('Hello World I Am Here')
    expect(formatSlugAsString('hello-world')).toBe('Hello World')
    expect(formatSlugAsString('hello')).toBe('Hello')
  })

  test('formats a string as a camel case string', () => {
    expect(formatAsCamelCase('hello-world')).toBe('helloWorld')
    expect(formatAsCamelCase('hello world')).toBe('helloWorld')
    expect(formatAsCamelCase('hello-world-i-am-here')).toBe('helloWorldIAmHere')
    expect(formatAsCamelCase('hello')).toBe('hello')
  })

  test('formats a string as a pascal case string', () => {
    expect(formatAsPascalCase('hello-world')).toBe('HelloWorld')
    expect(formatAsPascalCase('hello world')).toBe('HelloWorld')
    expect(formatAsPascalCase('hello-world-i-am-here')).toBe('HelloWorldIAmHere')
    expect(formatAsPascalCase('hello')).toBe('Hello')
  })

  test('formats a string as a title case string', () => {
    expect(formatAsTitleCase('hello-world')).toBe('Hello-world')
    expect(formatAsTitleCase('hello world')).toBe('Hello World')
    expect(formatAsTitleCase('hello')).toBe('Hello')
  })

  test('removes HTML tags from a string', () => {
    expect(removeHtmlTags('<p>Hello World</p>')).toBe('Hello World')
    expect(removeHtmlTags('<p>Hello <b>World</b></p>')).toBe('Hello World')
    expect(
      removeHtmlTags(
        `<LandingPageBanner :image="heroImage"><h1>Home Page</h1><p class="mb-4">Rvezy</p><LandingPageSearchForm /></LandingPageBanner>`,
      ),
    ).toBe('Home PageRvezy')
  })

  test('formats a name as initials', () => {
    expect(formatNameAsInitials('John', 'Doe')).toBe('JD')
    expect(formatNameAsInitials('John')).toBe('J')
    expect(formatNameAsInitials('John', 'D')).toBe('JD')
    expect(formatNameAsInitials()).toBe('N/A')
    expect(formatNameAsInitials(null)).toBe('N/A')
    expect(formatNameAsInitials(null, null)).toBe('N/A')
    expect(formatNameAsInitials(null, 'D')).toBe('N/A')
  })

  test('formats a name as a username', () => {
    expect(formatNameAsUsername('John', 'Doe')).toBe('John D.')
    expect(formatNameAsUsername('John', 'D')).toBe('John D.')
    expect(formatNameAsUsername('John')).toBe('John')
    expect(formatNameAsUsername()).toBe('N/A')
    expect(formatNameAsUsername(null)).toBe('N/A')
    expect(formatNameAsUsername(null, null)).toBe('N/A')
    expect(formatNameAsUsername(null, 'D')).toBe('N/A')
  })

  test('formats a full name as initials', () => {
    expect(formatFullNameAsInitials('John Doe')).toBe('JD')
    expect(formatFullNameAsInitials('John')).toBe('J')
    expect(formatFullNameAsInitials('John D')).toBe('JD')
    expect(formatFullNameAsInitials('John Middleton Doe')).toBe('JD')
    expect(formatFullNameAsInitials('John-Paul Doe')).toBe('JD')
    expect(formatFullNameAsInitials('John-Paul Middleton Doe-Smith')).toBe('JD')
  })

  test('formats a name to a full name', () => {
    expect(formatNameAsFullName('John', 'Doe')).toBe('John Doe')
    expect(formatNameAsFullName('John')).toBe('John')
    expect(formatNameAsFullName('  John    ', '  Doe    ')).toBe('John Doe')
    expect(formatNameAsFullName('', '')).toBe('')
    expect(formatNameAsFullName(null, null)).toBe('')
    expect(formatNameAsFullName('')).toBe('')
    expect(formatNameAsFullName(null, 'Doe')).toBe('Doe')
  })

  test('formats an RV label', () => {
    expect(formatRvLabel(2000, 'Thor', 'Chateau')).toBe('2000 Thor Chateau')
    expect(formatRvLabel(2000, 'SomeBrand', 'Chateau')).toBe('2000 SomeBrand Chateau')
    expect(formatRvLabel(2000, 'Thor')).toBe('2000 Thor')
    expect(formatRvLabel(2000, null, 'Chateau')).toBe('2000 Chateau')
    expect(formatRvLabel()).toBe('Unknown RV')
  })

  test('escapes double quotes in strings', () => {
    expect(escapeDoubleQuotes('Hello "World"')).toBe('Hello \\"World\\"')
    expect(escapeDoubleQuotes('Hello World')).toBe('Hello World')
    expect(escapeDoubleQuotes('Hello "World')).toBe('Hello \\"World')
  })

  test('capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world')
    expect(capitalizeFirstLetter('Hello world')).toBe('Hello world')
    expect(capitalizeFirstLetter('hello World')).toBe('Hello World')
    expect(capitalizeFirstLetter('Hello World')).toBe('Hello World')
    expect(capitalizeFirstLetter('')).toBe('')
    expect(capitalizeFirstLetter(null)).toBe(null)
  })

  test('formats a number with leading zeroes', () => {
    expect(formatNumberWithLeadingZero(5)).toBe('5')
    expect(formatNumberWithLeadingZero(10)).toBe('10')
    expect(formatNumberWithLeadingZero(1000, 2)).toBe('001000')
    expect(formatNumberWithLeadingZero(5, 2)).toBe('005')
    expect(formatNumberWithLeadingZero(5, 3)).toBe('0005')
    expect(formatNumberWithLeadingZero(5, -3)).toBe('5')
    expect(formatNumberWithLeadingZero(-5, -3)).toBe('-5')
  })

  test('convert string to float', () => {
    const defaultValue = 10
    expect(toFloat('1', defaultValue)).toBe(1)
    expect(toFloat('1.23', defaultValue)).toBe(1.23)
    expect(toFloat('-0.802', defaultValue)).toBe(-0.802)
    expect(toFloat('b.32', defaultValue)).toBe(defaultValue)
  })

  test('replaces diacritics from a string', () => {
    expect(replaceDiacritics('àéèêïìôòùûç')).toBe('aeeeiioouuc')
    expect(replaceDiacritics('ÀÉÈÊÏÌÔÒÙÛÇ')).toBe('AEEEIIOOUUC')
  })
})
