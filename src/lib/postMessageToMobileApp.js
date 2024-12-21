const postMessageToMobileApp = ({ android, ios }) => {
  if (window.AnalyticsWebInterface) {
    // Call Android interface
    const params = android.params || []

    window.AnalyticsWebInterface[android.func](...params)
  }
  else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.firebase) {
    // Call iOS interface
    window.webkit.messageHandlers.firebase.postMessage(ios)
  }
}

export default postMessageToMobileApp
