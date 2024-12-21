import { COOKIES } from '~/constants'

/** @deprecated use `useLayout.ts` instead */
export default function ($cookies, baseLayout = 'default') {
  const platformCookie = $cookies.get(COOKIES.platform)
  if (platformCookie) {
    const platform = platformCookie
    if (platform === 'android' || platform === 'ios-v1') {
      return 'minimal'
    }
  }
  return baseLayout
}
