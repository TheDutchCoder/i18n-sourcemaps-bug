import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  root: './src',
  test: {
    coverage: {
      reportsDirectory: './tests/component/.coverage',
      enabled: true,
      provider: 'v8',
      include: ['components/**/*.vue'],
      // thresholds: {
      //   statements: 95,
      //   branches: 95,
      //   functions: 100,
      //   lines: 95,
      // },
    },
    environment: 'nuxt',
    include: [
      '**/*.component.spec.ts',
    ],
    restoreMocks: true,
    setupFiles: [
      'tests/component/setup.ts',
    ],
  },
})
