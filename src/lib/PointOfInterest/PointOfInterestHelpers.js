import {
  PointOfInterestAttributeTypeEnumKey,
  PointOfInterestTypeEnumKey,
  PrepositionWord,
} from '../enums/index.js'

export const locationName = ({ pointOfInterest, includeParent, abbreviatedParent = true }) => {
  if (!pointOfInterest) return

  const e = PointOfInterestTypeEnumKey

  if (includeParent === undefined) includeParent = [e.City, e.Region].includes(pointOfInterest.Component)

  if (!includeParent || !pointOfInterest.ParentId) {
    return pointOfInterest.Name
  }

  const abbreviation = pointOfInterest.ParentAttributes?.[PointOfInterestAttributeTypeEnumKey.Abbreviation]

  return `${pointOfInterest.Name}, ${abbreviatedParent && abbreviation ? abbreviation : pointOfInterest.ParentName}`
}

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

const resolveWord = (word) => (/'$/.test(word) ? word : `${word} `)

export const nameWithPreposition = ({ name, preposition, prepositions }) => {
  if (!preposition) return name
  if (!prepositions) return `${resolveWord(preposition)}${name}`
  if (!prepositions[preposition]) return `{preposition} ${name}`
  return `${resolveWord(prepositions[preposition](name))}${name}`
}

export const locationWithPreposition = ({
  pointOfInterest,
  preposition,
  prepositions,
  prepositionExceptions,
  useNearby,
}) => {
  if (!preposition)
    preposition = useNearby
      ? nearbyPrepositionComponentMap[pointOfInterest.Component]
      : prepositionComponentMap[pointOfInterest.Component]
  if (prepositionExceptions?.[preposition]) {
    return nameWithPreposition({
      name: locationName({ pointOfInterest }),
      preposition: prepositionExceptions[preposition],
    })
  }
  return nameWithPreposition({ name: locationName({ pointOfInterest }), preposition, prepositions })
}
