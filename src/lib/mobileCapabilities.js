export const FEATURES = {
  CAN_TRACK_SEGMENT_VERSION: 'canTrackSegmentVersion',
}

const parseCapabilitiesToArray = (capabilitiesStr) =>
  capabilitiesStr?.match(/"([A-z]*)"/g)?.map((str) => str.replace(/"/g, ''))

export default function (capabilitiesCookie, features) {
  if (!capabilitiesCookie) {
    return false
  }
  if (!features) {
    return false
  }
  let hasFeatures = 0

  const capabilitiesCookies = capabilitiesCookie

  const capabilities = Array.isArray(capabilitiesCookies)
    ? capabilitiesCookies
    : parseCapabilitiesToArray(capabilitiesCookies)

  if (!Array.isArray(features)) {
    return capabilities.includes(features)
  }

  capabilities.forEach((capability) => {
    features.forEach((feature) => {
      if (capability === feature) {
        hasFeatures++
      }
    })
  })

  return features.length === hasFeatures
}
