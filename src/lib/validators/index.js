import { helpers } from '@vuelidate/validators'

/** @deprecated use auto-imported addressValidator instead */
export const addressValidator = helpers.regex('addressValidator', /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+\.?/)

/** @deprecated use auto-imported zipCodeValidator instead */
export const zipCodeValidator = (value) => /^\d{5}(-\d{4})?$/.test(value)

/** @deprecated use auto-imported postalCodeValidator instead */
export const postalCodeValidator = (value) =>
  /^(?![dDfFiIoOqQuUwWzZ])[a-zA-Z]{1}[0-9]{1}(?![dDfFiIoOqQuU])[a-zA-Z]{1}( ?){1}[0-9]{1}(?![dDfFiIoOqQuU])[a-zA-Z]{1}[0-9]{1}$/.test(
    value,
  )

/** @deprecated use auto-imported minDescriptionLengthValidator instead */
export const minDescriptionLengthValidator = (param) =>
  helpers.withParams({ type: 'minLength', min: param }, (value) => {
    const regex = new RegExp(`[\\w0-9\\s]{${param},}`, 'm')
    if (value) {
      return regex.test(value.trim().replace(/[^\w\s]/gi, 'a'))
    }
    return true
  })

/** @deprecated use auto-imported phoneValidator instead */
export const phoneValidator = helpers.regex('phoneValidator', /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)

/** @deprecated use auto-imported passwordCasingCriteriaValidator instead */
export const passwordCasingCriteriaValidator = helpers.regex(/(?=.*[a-z])(?=.*[A-Z]).*$/)

/** @deprecated use auto-imported passwordDigitsCriteriaValidator instead */
export const passwordDigitsCriteriaValidator = helpers.regex(/((?=.*\W)|(?=.*[0-9])).*$/)

/** @deprecated still needs to be ported over to utils */
export const deliveryAddonsValidator = () => (value, vm) => {
  if (value) {
    return vm.ListAddOns.some((addon) => {
      return addon.Status !== 'InActive' && addon.PricePerItem !== ''
    })
  }
  return true
}

/** @deprecated use auto-imported matterportUrlValidator instead */
export const matterportUrlValidator = helpers.regex(
  'matterportUrlValidator',
  /^(https:\/\/my\.matterport\.com\/show\/\?)(m=\S+)$/,
)
