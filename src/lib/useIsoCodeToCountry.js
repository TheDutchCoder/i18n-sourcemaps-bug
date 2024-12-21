import { countryMap } from '~/lib/countryMap'

/** @deprecated Use `lookup.ts` instead */
export default function (isoCode) {
  return countryMap[isoCode] || isoCode
}
