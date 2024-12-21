import postMessageToMobileApp from '~/lib/postMessageToMobileApp'

export const messageAppToLogin = ({ successUrl, failureUrl, cookies }, messenger = postMessageToMobileApp) => {
  return messenger({
    android: { func: 'login', params: [successUrl, failureUrl, cookies] },
    ios: {
      command: 'login',
      parameters: {
        successURL: successUrl,
        failureURL: failureUrl,
        cookies,
      },
    },
  })
}
