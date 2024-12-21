import ouibounce from 'ouibounce'
import type { logCustomEvent } from '@braze/web-sdk'

export function handleExitIntent(isLoggedIn: boolean, logEvent: typeof logCustomEvent) {
  ouibounce(false, {
    callback: async function () {
      logEvent('exit intent', { isLoggedIn: isLoggedIn, appName: 'rvezy-rentals' })
    },
  })
}
