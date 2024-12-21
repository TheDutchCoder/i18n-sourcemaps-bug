import { vi } from 'vitest'

// Set a global time for all tests.
const date = new Date(2020, 3, 1) // 2020-04-01 (May 1st, 2020)
vi.setSystemTime(date)
