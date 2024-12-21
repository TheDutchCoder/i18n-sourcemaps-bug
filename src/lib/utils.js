/** @deprecated Use `useUtils.js` instead. */
export const isWebview = (platformCookie) => {
  if (platformCookie) {
    const platform = platformCookie

    return platform === 'android' || platform === 'ios-v1'
  }

  return false
}
