import { regions } from '~/lib/countryMap'

/** @deprecated Use `lookups.ts` instead */
export default function (stateProvince) {
  const region = Object.keys(regions).find((key) => regions[key].name === stateProvince)
  return region || stateProvince
}
