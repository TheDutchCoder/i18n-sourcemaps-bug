import GrammarRules from './GrammarRules.js'
import { locationName } from './PointOfInterestHelpers.js'
import { i18nLocaleEnum, PointOfInterestTypeEnumKey, PrepositionWord } from '~/lib/enums/index.js'

const nearbyPrepositionComponentMap = {
  [PointOfInterestTypeEnumKey.City]: PrepositionWord.Near,
  [PointOfInterestTypeEnumKey.Region]: PrepositionWord.In,
  [PointOfInterestTypeEnumKey.Country]: PrepositionWord.In,
  [PointOfInterestTypeEnumKey.Campground]: PrepositionWord.Near,
  [PointOfInterestTypeEnumKey.SuburbanArea]: PrepositionWord.Near,
  [PointOfInterestTypeEnumKey.ThemePark]: PrepositionWord.Near,
  [PointOfInterestTypeEnumKey.Park]: PrepositionWord.Near,
}

const prepositionComponentMap = {
  [PointOfInterestTypeEnumKey.City]: PrepositionWord.In,
  [PointOfInterestTypeEnumKey.Region]: PrepositionWord.In,
  [PointOfInterestTypeEnumKey.Country]: PrepositionWord.In,
  [PointOfInterestTypeEnumKey.Campground]: PrepositionWord.Near,
  [PointOfInterestTypeEnumKey.SuburbanArea]: PrepositionWord.In,
  [PointOfInterestTypeEnumKey.ThemePark]: PrepositionWord.Near,
  [PointOfInterestTypeEnumKey.Park]: PrepositionWord.Near,
}

const articles = {
  [i18nLocaleEnum.en]: () => '',
  [i18nLocaleEnum.fr]: ({ word, grammarRules, capitalize }) => {
    const l = capitalize ? 'L' : 'l'
    if (/^[aeiou]/i.test(word)) return `${l}'`
    if (grammarRules.isMasculine) return `${l}e `
    if (grammarRules.isFeminine) return `${l}a `
    return ''
  },
}

const prepositions = {
  [i18nLocaleEnum.en]: {
    [PrepositionWord.In]: () => 'in ',
    [PrepositionWord.Near]: () => 'near ',
    [PrepositionWord.From]: () => 'from ',
    [PrepositionWord.Of]: () => 'of ',
  },
  [i18nLocaleEnum.fr]: {
    [PrepositionWord.In]: ({ word, grammarRules }) => {
      word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

      if (grammarRules.isIsland) return 'à '

      if (grammarRules.isPluralized) return 'aux '

      if (grammarRules.isFeminine) {
        if (/^etat\b/i.test(word)) return 'dans l\''
        if (/^[aeiou]/i.test(word)) return 'à l\''
        return 'en '
      }

      if (grammarRules.isMasculine) {
        if (/^district\b/i.test(word)) return 'dans le '
        return 'au '
      }

      return 'à '
    },
    [PrepositionWord.Near]: ({ word, grammarRules }) => {
      word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

      if (grammarRules.isIsland) {
        if (/^[aeiou]/i.test(word)) return 'près de l\''
        return 'près du '
      }

      if (grammarRules.isPluralized) return 'près des '

      if (/^[aeiou]/i.test(word)) return 'près de l\''

      if (grammarRules.isFeminine) return 'près de la '

      if (grammarRules.isMasculine) {
        if (/^district\b/i.test(word)) return 'dans le '
        return 'au '
      }

      return /^[aeiou]/i.test(word) ? 'près d\'' : 'près du '
    },
    [PrepositionWord.From]: ({ word }) => {
      word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

      return /^[aeiou]/i.test(word) ? 'd\'' : 'de '
    },
    [PrepositionWord.Of]: () => 'de ',
  },
}

export const addPreposition = ({ preposition = 'auto', word = null, locale, pointOfInterest }) => {
  if (pointOfInterest && word) throw new Error('Cannot set word when setting pointOfInterest')

  if (!i18nLocaleEnum.$getKeyByValue(locale)) throw new Error(`Unknown locale '${locale}'`)

  let grammarRules
  if (pointOfInterest) {
    if (!preposition || preposition === 'auto') preposition = prepositionComponentMap[pointOfInterest.Component]
    if (preposition === 'auto-nearby') preposition = nearbyPrepositionComponentMap[pointOfInterest.Component]
    if (!PrepositionWord.$getKeyByValue(preposition))
      throw new Error(
        `Unknown preposition '${preposition}', valid options are: auto, auto-nearby, ${PrepositionWord.$allValues()
          .sort()
          .join(', ')}`,
      )

    word = locationName({ pointOfInterest, includeParent: false })
    grammarRules = new GrammarRules(pointOfInterest?.Attributes?.GrammarRules)
  }

  if (!PrepositionWord.$getKeyByValue(preposition))
    throw new Error(
      `Unknown preposition '${preposition}', valid options are: ${PrepositionWord.$allValues().sort().join(', ')}`,
    )

  const resolvedPreposition = prepositions[locale][preposition]({ word, grammarRules })

  return `${resolvedPreposition}${word}`
}

export const addArticle = ({ word = null, locale, pointOfInterest, capitalize }) => {
  if (pointOfInterest && word) throw new Error('Cannot set word when setting pointOfInterest')

  if (!i18nLocaleEnum.$getKeyByValue(locale)) throw new Error(`Unknown locale '${locale}'`)

  let grammarRules
  if (pointOfInterest) {
    word = locationName({ pointOfInterest, includeParent: false })
    grammarRules = new GrammarRules(pointOfInterest?.Attributes?.GrammarRules)
  }
  const resolvedArticle = articles[locale]({ word, grammarRules, capitalize })

  return `${resolvedArticle}${word}`
}
