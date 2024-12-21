/**
 * Helper function to log out events to the console for debugging purposes.
 */
function log(name, args) {
  if (import.meta.client && window?.__NUXT__?.config?.public?.trackingLoggingEnabled) {
    console.log(`🎯 ${name}`, args)
  }
}

/**
 * DataDog
 */
export const datadogAddError = (error, context) => {
  log('datadogAddError', { error })
  window?.DD_RUM?.onReady(() => {
    window?.DD_RUM?.addError(error, context ? context : { cause: error?.message ?? 'Unknown' })
  })
}

export const datadogStartView = ({ to, from }) => {
  log('datadogStartView', { to, from })

  let path = to.path || '/'

  if (to.matched.length) {
    const matchedPath = to.matched[to.matched.length - 1].path || '/'

    // Replace ':slug' with '?' empty string
    let result = matchedPath.replace(/:slug/g, '?')

    // Replace '()' with ''.
    result = result.replace(/\(\)/g, '')

    // Remove any trailing slashes if they exist
    path = result.replace(/\/$/, '')
  }

  window?.DD_RUM?.onReady(() => {
    window?.DD_RUM?.startView({
      name: path,
    })
  })
}

export const datadogSetUser = ({ user }) => {
  log('datadogSetUser', { user })
  window?.DD_RUM?.onReady(() => {
    window?.DD_RUM?.setUser({
      id: user.Id,
      name: `${user.FirstName} ${user.LastName}`,
      email: user.Email,
    })
  })
}

export const datadogRemoveUser = () => {
  log('datadogRemoveUser')
  window?.DD_RUM?.onReady(() => {
    window?.DD_RUM?.clearUser()
  })
}

/**
 * Google Remarketing
 */
export const googleRemarketingTrack = ({ event, data }) => {
  log('googleRemarketingTrack', { event, data })
  window?.gtag?.('event', event, data)
}
