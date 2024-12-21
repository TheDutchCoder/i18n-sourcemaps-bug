import { describe, expect, test } from 'vitest'

import {
  addressValidator,
  matterportUrlValidator,
  minDescriptionLengthValidator,
  passwordCasingCriteriaValidator,
  passwordDigitsCriteriaValidator,
  postalCodeValidator,
  zipCodeValidator,
} from '~/utils/validators'

describe('Address Validator', () => {
  test('validates that a value is a valid address', () => {
    expect(addressValidator('123 Main St.')).toBe(true)
    expect(addressValidator('123 Main Street')).toBe(true)
    expect(addressValidator('Main St.')).toBe(false)
    expect(addressValidator('123')).toBe(false)
  })
})

describe('Min Description Length Validator', () => {
  test('validates that a value is of a minimum length', () => {
    const validator = minDescriptionLengthValidator(5)

    expect(validator.$validator('Hi', 'en', 'description')).toBe(false)
    expect(validator.$validator('Hello, world!', 'en', 'description')).toBe(true)
    expect(validator.$validator('Hello', 'en', 'description')).toBe(true)
    expect(validator.$validator('', 'en', 'description')).toBe(true)
  })
})

describe('Password Criteria Validators', () => {
  test('validates that a value has at least one lowercase and uppercase letter', () => {
    expect(passwordCasingCriteriaValidator('aA')).toBe(true)
    expect(passwordCasingCriteriaValidator('Aa')).toBe(true)
    expect(passwordCasingCriteriaValidator('AA')).toBe(false)
    expect(passwordCasingCriteriaValidator('aa')).toBe(false)
    expect(passwordCasingCriteriaValidator('1!')).toBe(false)
    expect(passwordCasingCriteriaValidator('!a3A')).toBe(true)
  })

  test('validates that a value has at least one number or special character', () => {
    expect(passwordDigitsCriteriaValidator('foo1')).toBe(true)
    expect(passwordDigitsCriteriaValidator('foo!')).toBe(true)
    expect(passwordDigitsCriteriaValidator('foo')).toBe(false)
  })

  const p1 = '@59tnPH9'
  const p2 = '@98Q66>df'
  const p3 = 'basrJooc'
  const p4 = 'bas2jo3c'
  const p5 = 'basrjooc'

  test('validates that a value passes both password validators at the same time', () => {
    expect(passwordCasingCriteriaValidator(p1) && passwordDigitsCriteriaValidator(p1)).toBe(true)
    expect(passwordCasingCriteriaValidator(p2) && passwordDigitsCriteriaValidator(p2)).toBe(true)
    expect(passwordCasingCriteriaValidator(p3) && passwordDigitsCriteriaValidator(p3)).toBe(false)
    expect(passwordCasingCriteriaValidator(p4) && passwordDigitsCriteriaValidator(p4)).toBe(false)
    expect(passwordCasingCriteriaValidator(p5) && passwordDigitsCriteriaValidator(p5)).toBe(false)
  })
})

describe('Matterport URL Validator', () => {
  test('validates that a value is a Matterport URL', () => {
    expect(matterportUrlValidator('https://my.matterport.com/show/?m=1234')).toBe(true)
    expect(matterportUrlValidator('https://my.matterport.com/show/?q=1234')).toBe(false)
    expect(matterportUrlValidator('https://my.matterport.com/show/?M=1234')).toBe(false)
    expect(matterportUrlValidator('https://my.matterport.com/foo/?m=1234')).toBe(false)
    expect(matterportUrlValidator('https://my.matterport.com/foo')).toBe(false)
  })
})

describe('Area Code Validators', () => {
  test('validates that a value is a valid zip code (US)', () => {
    expect(zipCodeValidator('06511')).toBe(true)
    expect(zipCodeValidator('12345-6789')).toBe(true)
    expect(zipCodeValidator('1234')).toBe(false)
    expect(zipCodeValidator('123456')).toBe(false)
    expect(zipCodeValidator('12345-67890')).toBe(false)
  })

  test('validates that a value is a valid postal code (CA)', () => {
    expect(postalCodeValidator('A1A 1A1')).toBe(true)
    expect(postalCodeValidator('A1A1A1')).toBe(true)
    expect(postalCodeValidator('1A1 A1A')).toBe(false)
    expect(postalCodeValidator('1A1 1A1')).toBe(false)
    expect(postalCodeValidator('A1A-1A1')).toBe(false)
    expect(postalCodeValidator('A1A 1A')).toBe(false)
  })
})
