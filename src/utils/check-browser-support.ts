import { UAParser } from 'ua-parser-js'

type BrowserName = 'Chrome' | 'Edge' | 'Firefox' | 'Safari'

/**
 * List of supported browsers.
 */
const supportedBrowserNames: BrowserName[] = ['Chrome', 'Edge', 'Firefox', 'Safari']

/**
 * This function checks the user agent and determines if we fully, partially, or
 * don't support this major version.
 *
 * @param userAgent - The user agent string to analyze.
 */
export default async function checkBrowserSupport(userAgent?: string) {
  const parser = new UAParser(userAgent)
  const browser = parser.getBrowser()
  const browserName = browser.name as BrowserName
  const browserMajorVersion = Number(browser.major)
  const supportedBrowsers = await $fetch('/api/browserslist')

  /**
   * Used to determine if we recognize this browser and potentially display a
   * message. It doesn't mean the browser isn't suported.
   */
  const isRecognizedBrowser = browserName ? supportedBrowserNames.includes(browserName) : false

  /**
   * Checks if the current browser falls in the "fully supported" category.
   */
  const isFullySupported = isRecognizedBrowser && browserMajorVersion >= supportedBrowsers.full[browserName]

  /**
   * Checks if the current browser falls in the "partially supported" category.
   */
  const isPartiallySupported = isRecognizedBrowser && browserMajorVersion >= supportedBrowsers.partial[browserName]

  /**
   * Checks if the current browser is not supported.
   */
  const isNotSupported = !isRecognizedBrowser || browserMajorVersion < supportedBrowsers.partial[browserName]

  /**
   * Checks if the current browser is Chrome.
   */
  const isChrome = Boolean(browserName?.includes('Chrome'))

  /**
   * Checks if the current browser is Edge.
   */
  const isEdge = Boolean(browserName?.includes('Edge'))

  /**
   * Checks if the current browser is Firefox.
   */
  const isFirefox = Boolean(browserName?.includes('Firefox'))

  /**
   * Checks if the current browser is Safari.
   */
  const isSafari = Boolean(browserName?.includes('Safari'))

  return {
    browserName,
    browserMajorVersion,
    isRecognizedBrowser,
    isFullySupported,
    isPartiallySupported,
    isNotSupported,
    isChrome,
    isEdge,
    isFirefox,
    isSafari,
  }
}
