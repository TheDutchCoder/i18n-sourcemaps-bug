import { messageAppToLogin } from '~/lib/mobileMessages/messageAppToLogin'

describe('Library - Mobile Messages', () => {
  test('messageAppToLogin', () => {    
    const messengerMock = (o) => o
    
    const result = messageAppToLogin({
      successUrl: 'success',
      failureUrl: 'failure',
      cookies: 'cookies'
    }, messengerMock)
    
    expect(result).toMatchObject({
      android: { func: 'login', params: ['success', 'failure', 'cookies'] },
      ios: {
        command: 'login',
        parameters: {
          successURL: 'success',
          failureURL: 'failure',
          cookies: 'cookies'
        }
      }
    })
  })
})
