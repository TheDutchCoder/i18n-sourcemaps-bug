import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import { COOKIES } from '~/constants'

/**
 * Converts kilometers to miles.
 * @deprecated Use `convert-units.ts` instead.
 */
export const KMtoMI = (km) => km * 0.621371

/**
 * Converts miles to kilometers.
 * @deprecated Use `convert-units.ts` instead.
 */
export const MItoKM = (mi) => mi * 1.60934

/**
 * Custom throttle function implementation.
 * @deprecated use VueUse `useThrottleFn` instead.
 */
export function throttle(func, limit) {
  let lastRan
  let timeout

  return function (...args) {
    const context = this // Preserve the context of the function.

    const execute = () => {
      func.apply(context, args) // Execute the function with preserved context and arguments.
      lastRan = Date.now() // Update the timestamp of the last function call.
    }

    // If the function hasn't been called before or if the throttle limit time has elapsed.
    if (!lastRan || Date.now() - lastRan >= limit) {
      execute()
    }
    else {
      clearTimeout(timeout)

      // Calculate the time remaining until the next function call is allowed.
      timeout = setTimeout(execute, limit - (Date.now() - lastRan))
    }
  }
}

/**
 * Custom debounce function implementation.
 * @deprecated use VueUse `useDebounceFn` instead.
 */
export function debounce(func, wait, immediate) {
  let timeout

  return function debouncedFunction(...args) {
    const context = this // Preserve the context of the function

    const execute = () => {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      } // Execute the function if not immediate
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(execute, wait)

    if (callNow) {
      func.apply(context, args)
    } // Execute the function immediately if needed
  }
}

/**
 * Creates a new UUID.
 * @deprecated Use `generators.ts` instead. Renamed to `generateUuid`
 */
export const getNewUUID = uuidv4

/**
 * Creates social tags for the document head.
 * @deprecated
 */
export function getSocialHeadTags(pageConfig, $config) {
  return [
    {
      hid: 'description',
      name: 'description',
      content: pageConfig.description,
    },
    {
      hid: 'og_title',
      property: 'og:title',
      content: `${pageConfig.title} | RVezy`,
    },
    {
      hid: 'og_description',
      property: 'og:description',
      content: pageConfig.description,
    },
    {
      hid: 'fb_app_id',
      property: 'fb:app_id',
      content: $config.facebook.appId,
    },
    {
      hid: 'og_image',
      property: 'og:image',
      content: pageConfig.cover,
    },
    {
      hid: 'twitter_title',
      name: 'twitter:title',
      content: `${pageConfig.title} | RVezy`,
    },
    {
      hid: 'twitter_description',
      name: 'twitter:description',
      content: pageConfig.description,
    },
    {
      hid: 'twitter_image',
      name: 'twitter:image',
      content: pageConfig.cover,
    },
  ]
}

/**
 * Checks if the current platform is a webview.
 * @deprecated Use `usePlatform` instead.
 */
export function isWebview() {
  const platformCookie = Cookies.get(COOKIES.platform)
  return platformCookie === 'android' || platformCookie === 'ios-v1'
}
