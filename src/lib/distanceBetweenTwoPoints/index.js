/** @deprecated use `distances.ts` instead */
function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

/** @deprecated use `convert-units.ts` instead */
export const convertToMiles = (distance) => {
  return distance * 0.62137
}

/** @deprecated use `distances.ts` instead */
export default function (locationA, locationB) {
  if (!locationA || !locationB) {
    return
  }

  const R = 6371
  const dLat = deg2rad(locationB.lat - locationA.lat)
  const dLon = deg2rad(locationB.lng - locationA.lng)
  const a
    = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(deg2rad(locationA.lat)) * Math.cos(deg2rad(locationB.lat))
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}
