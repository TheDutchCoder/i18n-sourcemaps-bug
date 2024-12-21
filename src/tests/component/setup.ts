import { enableAutoUnmount } from '@vue/test-utils'
import { afterEach } from 'vitest'
import '~/tests/__mocks__'
import '~/tests/__plugins__'

// This automatically unmounts any wrapper, so we don't need to do that manually
// in our tests.
enableAutoUnmount(afterEach)
