import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

/**
 * Mocks out the useI18n composable for testing.
 *
 * This is a global mock. If you need to override the implementation in your
 * test, you should use the exact same syntax inside your test file.
 *
 * The `te` function has a conditional check to return true if the key includes
 * 'exists'. This is to simulate the behavior of the `te` function in the
 * `useI18n` composable.
 */
mockNuxtImport('useI18n', () => {
  return vi.fn(() => ({
    t: (key: string) => `t-${key}`,
    n: (value: number) => `n-${value}`,
    te: (key: string) => key.includes('exists') ? true : false,
    $t: (key: string) => `t-${key}`,
    $n: (value: number) => `n-${value}`,
  }))
})
