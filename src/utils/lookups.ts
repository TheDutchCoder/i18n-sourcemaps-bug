/**
 * This file exposes frequently used lookup logic.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */
import { COUNTRIES, STATES } from '~/constants/country-map'
import { COUNTRY_CURRENCIES } from '~/constants'
import type { Nullable } from '~/types'

type StateIsoCode = keyof typeof STATES
type CountryIsoCode = keyof typeof COUNTRIES
type CountryName = Required<typeof COUNTRIES>[keyof typeof COUNTRIES]
type CountryIsoCodeForCurrency = keyof typeof COUNTRY_CURRENCIES

/**
 * Lookup a state or province name to its ISO code.
 *
 * This type uses a string because the values come from a JSON file which we're
 * not able to extract values as types from.
 *
 * @param   {string} stateName The name of the state or province.
 * @returns {string} The ISO code of the state or province.
 *
 * @example lookupStateToIsoCode('Alberta') // 'AL'
 */
export const lookupStateToIsoCode = (stateName?: Nullable<string>) => {
  if (!stateName) {
    return
  }

  const isoCode = (Object.keys(STATES) as StateIsoCode[]).find((key) => STATES[key].name === stateName)
  return isoCode
}

/**
 * Lookup a state or province ISO code to its name.
 *
 * @param   {string} stateIsoCode The ISO code of the state or province.
 * @returns {string} The name of the state or province.
 *
 * @example lookupIsoCodeToState('AL') // 'Alberta'
 */
export const lookupIsoCodeToState = (stateIsoCode: StateIsoCode) => {
  return STATES[stateIsoCode]?.name
}

/**
 * Lookup a country name to its ISO code.
 *
 * @param   {string} countryName The name of the country.
 * @returns {string} The ISO code of the country.
 *
 * @example lookupCountryToIsoCode('Afghanistan') // 'AF'
 */
export const lookupCountryToIsoCode = (countryName: CountryName) => {
  const isoCode = (Object.keys(COUNTRIES) as CountryIsoCode[]).find((key) => COUNTRIES[key] === countryName)
  return isoCode
}

/**
 * Lookup a country ISO code to its name.
 *
 * @param   {string} countryIsoCode The ISO code of the country.
 * @returns {string} The name of the country.
 *
 * @example lookupIsoCodeToCountry('AF') // 'Afghanistan'
 */
export const lookupIsoCodeToCountry = (countryIsoCode: CountryIsoCode) => {
  return COUNTRIES[countryIsoCode]
}

/**
 * Lookup a currency code for a given country code.
 *
 * @param   {string} countryCode The ISO code of the country.
 * @returns {string} The currency code of the country.
 *
 * @example lookupCountryCodeToCurrencyCode('CA') // 'CAD'
 */
export const lookupCountryCodeToCurrencyCode = (countryCode: CountryIsoCodeForCurrency) => {
  return COUNTRY_CURRENCIES[countryCode]
}

/**
 * Lookup a region type by country ISO code.
 *
 * @param   {string} countryIsoCode The ISO code of the country.
 * @returns {string} The type of the region.
 *
 * @example lookupRegionTypeByCountryCode('CA') // 'province'
 */
export const lookupRegionTypeByCountryCode = (countryIsoCode: CountryIsoCode) => {
  switch (countryIsoCode) {
    case 'CA':
      return 'province'

    case 'US':
      return 'state'

    default:
      return 'region'
  }
}
