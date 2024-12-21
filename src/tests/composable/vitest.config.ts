import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  root: './src',
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: './tests/composable/.coverage',
      include: [
        '**/composables/useAbsoluteRvUrl.ts',
        '**/composables/useAbsoluteUrl.ts',
        '**/composables/useAddon.ts',
        '**/composables/useAggregateReviews.ts',
        '**/composables/useModals.ts',
        '**/components/**/composables.ts',
      ],
      thresholds: {
        statements: 85,
        branches: 70,
        functions: 90,
        lines: 85,
      },
    },
    environment: 'nuxt',
    include: [
      '**/*.composable.spec.ts',
      '**/composables/**.spec.ts',
    ],
    restoreMocks: true,
    setupFiles: [
      'tests/composable/setup.ts',
    ],
  },
})
