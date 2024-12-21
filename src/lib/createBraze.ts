export default async function (apiKey: string, endpoint: string) {
  const {
    initialize,
    openSession,
    changeUser,
    destroy,
    isPushSupported,
    isPushPermissionGranted,
    isPushBlocked,
    requestPushPermission,
    unregisterPush,
    logCustomEvent,
    subscribeToInAppMessage,
    showInAppMessage,
    wipeData,
  } = await import('@braze/web-sdk')

  initialize(apiKey, {
    baseUrl: endpoint,
    // safariWebsitePushId: 'web.com.rvezy.www', TODO: to be resolved with RVZ-8579
    enableLogging: window.location.hostname !== 'www.rvezy.com',
    allowUserSuppliedJavascript: true,
    doNotLoadFontAwesome: true, // Disabling Font-Awesome as we're already importing another version
  })

  subscribeToInAppMessage(function (inAppMessage) {
    // control group messages should always be "shown"
    // this will log an impression and not show a visible message
    if (inAppMessage.isControl) {
      // v4.5.0+, otherwise use  `inAppMessage instanceof braze.ControlMessage`
      return showInAppMessage(inAppMessage)
    }

    // Only one Modal or Full in-app message can be displayed at a given time. If you attempt to show a second modal or full message while one is already showing,
    // braze.showInAppMessage will return false, and the second message will not display.

    // [RVZ-19058] You can access extra data on the inAppMessage object, such as inAppMessage.extras (Record<string, string>)

    if (!showInAppMessage(inAppMessage)) {
      // Do nothing for now, maybe later log an entry to DD?
    }
  })

  // Opt-in/Opt-out if the user manually changes Notification settings
  if ('Notification' in window && Notification.permission !== 'default') {
    if (Notification.permission === 'granted') {
      requestPushPermission()
    }
    else if (Notification.permission === 'denied') {
      unregisterPush()
    }
  }

  return {
    openSession,
    changeUser,
    destroy,
    isPushSupported,
    isPushPermissionGranted,
    isPushBlocked,
    requestPushPermission,
    unregisterPush,
    logCustomEvent,
    wipeData,
  }
}
