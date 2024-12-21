export default function ({ utms, rtsessionid }, isDeepLinkRequest = false, addRtsessionid = true) {
  if (!utms) {
    utms = {}
  }

  if (isDeepLinkRequest && utms) {
    if (addRtsessionid) {
      utms.rtsessionid = rtsessionid
    }
    for (const [key, value] of Object.entries(utms)) {
      if (!value?.length) {
        delete utms[key]
      }
    }
  }

  return { utms, rtsessionid }
}
