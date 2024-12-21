import postMessageToMobileApp from '~/lib/postMessageToMobileApp'

export const messageAppToOpenInbox = (threadId) => {
  postMessageToMobileApp({
    android: { func: 'navigateToInbox', params: [threadId] },
    ios: {
      command: 'navigateToInbox',
      parameters: {
        threadId,
      },
    },
  })
}
