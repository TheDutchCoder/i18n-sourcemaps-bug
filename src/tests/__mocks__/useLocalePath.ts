import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

/**
 * Mocks out the useLocalePath composable for testing.
 *
 * This is a global mock. If you need to override the implementation in your
 * test, you should use the exact same syntax inside your test file.
 */
mockNuxtImport('useLocalePath', () => {
  return () => {
    return vi.fn((path) => `/mock-locale-path/${JSON.stringify(path)}`)
  }
})
