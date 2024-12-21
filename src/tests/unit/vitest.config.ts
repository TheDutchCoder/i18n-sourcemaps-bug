import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  root: './src',
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: './tests/unit/.coverage',
      include: [
        'utils/**/*.ts',
        'server/utils/**/*.ts',
        '**/*.unit.spec.ts',
      ],
      exclude: [
        'utils/**/index.ts',
        'utils/**/*.spec.ts',
        'server/utils/**/*.spec.ts',
        'utils/migrate-warn.ts',
      ],
      thresholds: {
        statements: 95,
        branches: 95,
        functions: 95,
        lines: 95,
      },
    },
    environment: 'happy-dom',
    exclude: [
      './src/utils/migrate-warn.ts',
    ],
    globalSetup: ['tests/unit/global-setup.ts'],
    include: [
      './src/utils/**/*.spec.ts',
      './src/server/utils/**/*.spec.ts',
      '**/*.unit.spec.ts',
    ],
    restoreMocks: true,
    setupFiles: [
      'tests/unit/setup.ts',
    ],
  },
})
