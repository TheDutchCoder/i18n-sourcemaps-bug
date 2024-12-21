import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

const trackExternalLinkClicked = vi.fn()

/**
 * Mocks out the useTracking composable for testing.
 *
 * This is a global mock. If you need to override the implementation in your
 * test, you should use the exact same syntax inside your test file.
 *
 * Individual functions are mocked out separately, so they can be spied on
 * individually.
 */
mockNuxtImport('useTracking', () => {
  return () => {
    return {
      trackExternalLinkClicked,
    }
  }
})
