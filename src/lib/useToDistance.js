import { UNIT_MEASUREMENT } from '~/constants'
import distanceBetweenTwoPoints from '~/lib/distanceBetweenTwoPoints'

/** @deprecated use `distances.ts` instead */
export default function ({ locale, lat1, lon1, lat2, lon2, unit = UNIT_MEASUREMENT.KM, showUnit = false }) {
  const locationA = { lat: lat1, lng: lon1 }
  const locationB = { lat: lat2, lng: lon2 }
  const distance = distanceBetweenTwoPoints(locationA, locationB)
  const result = (distance * (unit === UNIT_MEASUREMENT.MILES ? 0.62137 : 1)).toFixed(1)

  if (showUnit) {
    return `${new Intl.NumberFormat(locale).format(result)} ${unit}`
  }

  return result
}
