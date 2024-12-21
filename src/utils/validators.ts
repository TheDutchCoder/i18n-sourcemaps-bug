import { helpers } from '@vuelidate/validators'

/**
 * This file exposes frequently used validators.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Validates that a value is a valid address (vuelidate).
 *
 * @example addressValidator('123 Main St.') // true
 */
export const addressValidator = helpers.regex(/\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+\.?/)

/**
 * Validates that a value is of a minimum length (vuelidate).
 *
 * @param   {number} param The minimum length parameter
 * @returns {boolean} True if the value is of a minimum length.
 *
 */
export const minDescriptionLengthValidator = (param: number) => {
  return helpers.withParams({ type: 'minLength', min: param }, (value: string) => {
    const regex = new RegExp(`[\\w0-9\\s]{${param},}`, 'm')
    return value ? regex.test(value.trim().replace(/[^\w\s]/gi, 'a')) : true
  })
}

/**
 * Validates that a value has at least one lowercase and uppercase letter (vuelidate).
 *
 * @param   {string} value The value to validate
 * @returns {boolean} True if the value has at least one lowercase and uppercase letter.
 *
 * @exmaple passwordCasingCriteriaValidator('aA') // true
 */
export const passwordCasingCriteriaValidator = helpers.regex(/(?=.*[a-z])(?=.*[A-Z]).*$/)

/**
 * Validates that a value has at least one number or special character (vuelidate).
 *
 * @param   {string} value The value to validate
 * @returns {boolean} True if the value has at least one number or special character.
 *
 * @exmaple passwordDigitsCriteriaValidator('foo1') // true
 */
export const passwordDigitsCriteriaValidator = helpers.regex(/((?=.*\W)|(?=.*[0-9])).*$/)

/**
 * Validates that a value is a Matterport URL (vuelidate).
 *
 * @param   {string} value The value to validate
 * @returns {boolean} True if the value is a Matterport URL.
 *
 * @exmaple matterportUrlValidator('https://my.matterport.com/show/?m=1234') // true
 */
export const matterportUrlValidator = helpers.regex(/^(https:\/\/my\.matterport\.com\/show\/\?)(m=\S+)$/)

/**
 * Validates that a value is a valid zip code (US).
 *
 * @param   {string} value The value to validate
 * @returns {boolean} True if the value is a valid zip code.
 *
 * @exmaple zipCodeValidator('12345') // true
 */
export const zipCodeValidator = (value: string) => /^\d{5}(-\d{4})?$/.test(value)

/**
 * Validates that a value is a valid postal code (CA).
 *
 * @param   {string} value The value to validate
 * @returns {boolean} True if the value is a valid zip code.
 *
 * @exmaple postalCodeValidator('A1A 1A1') // true
 */
export const postalCodeValidator = (value: string) => {
  return /^(?![dDfFiIoOqQuUwWzZ])[a-zA-Z][0-9](?![dDfFiIoOqQuU])[a-zA-Z]( ?)[0-9](?![dDfFiIoOqQuU])[a-zA-Z][0-9]$/.test(
    value,
  )
}
