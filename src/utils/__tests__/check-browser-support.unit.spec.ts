import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { $Fetch } from 'nitropack'
import checkBrowserSupport from '~/utils/check-browser-support'

beforeEach(() => {
  const mockFetch = vi.fn()

  global.$fetch = mockFetch as unknown as $Fetch

  mockFetch
    .mockImplementationOnce(() => ({
      full: {
        Chrome: 110,
        Edge: 110,
        Firefox: 110,
        Safari: 16,
      },
      partial: {
        Chrome: 100,
        Edge: 100,
        Firefox: 100,
        Safari: 15,
      },
    }))
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('checkBrowserSupport', () => {
  it('should recognize fully supported Chrome versions', async () => {
    const result = await checkBrowserSupport('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36')
    expect(result.isFullySupported).toBe(true)
    expect(result.isPartiallySupported).toBe(true)
    expect(result.isNotSupported).toBe(false)
    expect(result.isChrome).toBe(true)
  })

  it('should recognize partially supported Edge versions', async () => {
    const result = await checkBrowserSupport('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/109.0.2792.79')
    expect(result.isFullySupported).toBe(false)
    expect(result.isPartiallySupported).toBe(true)
    expect(result.isNotSupported).toBe(false)
    expect(result.isEdge).toBe(true)
  })

  it('should recognize unsupported Firefox versions', async () => {
    const result = await checkBrowserSupport('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0')
    expect(result.isFullySupported).toBe(false)
    expect(result.isPartiallySupported).toBe(false)
    expect(result.isNotSupported).toBe(true)
    expect(result.isFirefox).toBe(true)
  })

  it('should recognize fully supported Safari versions', async () => {
    const result = await checkBrowserSupport('Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15')
    expect(result.isFullySupported).toBe(true)
    expect(result.isPartiallySupported).toBe(true)
    expect(result.isNotSupported).toBe(false)
    expect(result.isSafari).toBe(true)
  })

  it('should recognize unsupported browsers', async () => {
    const result = await checkBrowserSupport('Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36')
    expect(result.isFullySupported).toBe(false)
    expect(result.isPartiallySupported).toBe(false)
    expect(result.isNotSupported).toBe(true)
    expect(result.isChrome).toBe(true)
  })

  it('should handle unknown user agents gracefully', async () => {
    const result = await checkBrowserSupport('Unknown User Agent')
    expect(result.isFullySupported).toBe(false)
    expect(result.isPartiallySupported).toBe(false)
    expect(result.isNotSupported).toBe(true)
    expect(result.isChrome).toBe(false)
    expect(result.isEdge).toBe(false)
    expect(result.isFirefox).toBe(false)
    expect(result.isSafari).toBe(false)
  })
})
