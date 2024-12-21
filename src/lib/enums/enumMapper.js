import {
  DistanceUnitEnumKey,
  i18nLocaleEnum,
  PointOfInterestIds,
} from './frontendEnums.js'

import {
  CommonLanguageEnum,
  CountryEnum,
  CountryEnumKey,
  CurrencyEnumKey,
} from './backendEnums.js'

const LanguageToi18nLocaleMap = {
  [CommonLanguageEnum.English]: i18nLocaleEnum.en,
  [CommonLanguageEnum.French]: i18nLocaleEnum.fr,
  English: i18nLocaleEnum.en,
  French: i18nLocaleEnum.fr,
}

export const LanguageToi18nLocale = (Language) => i18nLocaleEnum.$getKeyByValue(LanguageToi18nLocaleMap[Language])

const i18nLocaleToLanguageMap = {
  [i18nLocaleEnum.en]: CommonLanguageEnum.English,
  [i18nLocaleEnum.fr]: CommonLanguageEnum.French,
}

export const i18nLocaleToLanguageName = (i18nLocale) =>
  CommonLanguageEnum.$getKeyByValue(i18nLocaleToLanguageMap[i18nLocale])
export const i18nLocaleToLanguageValue = (i18nLocale) => i18nLocaleToLanguageMap[i18nLocale]

const i18nLocaleToAlternateLocaleMap = {
  [i18nLocaleEnum.en]: i18nLocaleEnum.fr,
  [i18nLocaleEnum.fr]: i18nLocaleEnum.en,
}

export const i18nLocaleToAlternateLocale = (i18nLocale) => i18nLocaleToAlternateLocaleMap[i18nLocale]

const CountryCodeToDistanceUnitMap = {
  [CountryEnumKey.CA]: DistanceUnitEnumKey.km,
  [CountryEnumKey.US]: DistanceUnitEnumKey.mi,
  [CountryEnumKey.ROW]: DistanceUnitEnumKey.km,
}
/**
 * @deprecated use distance.ts util instead
 */
export const CountryCodeToDistanceUnit = (CountryCode) =>
  CountryCodeToDistanceUnitMap[CountryCode] ?? DistanceUnitEnumKey.km

const CountryIdToCurrencyCodeMap = {
  [CountryEnum.CA]: CurrencyEnumKey.CAD,
  [CountryEnum.US]: CurrencyEnumKey.USD,
}

const CountryIdToPointOfInterestIdMap = {
  [CountryEnum.CA]: PointOfInterestIds.Canada,
  [CountryEnum.US]: PointOfInterestIds.UnitedStates,
  [CountryEnumKey.CA]: PointOfInterestIds.Canada,
  [CountryEnumKey.US]: PointOfInterestIds.UnitedStates,
}

export const CountryIdToCurrencyCode = (CountryId) => CountryIdToCurrencyCodeMap[CountryId]
export const CountryCodeToCurrencyCode = (CountryCode) => CountryIdToCurrencyCode(CountryEnum[CountryCode])
export const CountryIdToPointOfInterestId = (countryId) => CountryIdToPointOfInterestIdMap[countryId]
