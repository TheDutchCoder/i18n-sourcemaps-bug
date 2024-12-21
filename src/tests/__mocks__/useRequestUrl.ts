import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

/**
 * Mocks out the useRequestURL composable for testing.
 *
 * This is a global mock. If you need to override the implementation in your
 * test, you should use the exact same syntax inside your test file.
 */
mockNuxtImport('useRequestURL', () => {
  return vi.fn(() => ({
    protocol: 'http:',
    host: 'www.rvezy.com',
  }))
})
