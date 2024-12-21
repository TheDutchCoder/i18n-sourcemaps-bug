import postMessageToMobileApp from '~/lib/postMessageToMobileApp'

export const messageAppToOpenPaymentPage = (bookingId, stepperCount) => {
  const androidParams = [bookingId]
  const iosParams = {
    bookingId: bookingId.toString(),
  }

  if (stepperCount) {
    androidParams.push(stepperCount)
    iosParams.stepperCount = stepperCount.toString()
  }

  postMessageToMobileApp({
    android: { func: 'openPaymentPage', params: androidParams },
    ios: {
      command: 'openPaymentPage',
      parameters: iosParams,
    },
  })
}
