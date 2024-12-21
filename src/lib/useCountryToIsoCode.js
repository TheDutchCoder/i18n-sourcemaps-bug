import { countryMap } from '~/lib/countryMap'

/** @deprecated Use `lookup.ts` instead */
export default function (country) {
  const region = Object.keys(countryMap).find((key) => countryMap[key] === country)
  return region || country
}
