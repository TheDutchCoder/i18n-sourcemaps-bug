import { regions } from '~/lib/countryMap'

/** @deprecated use `lookups.ts` instead */
export default function (isoCode) {
  return regions[isoCode] ? regions[isoCode].name : isoCode
}
