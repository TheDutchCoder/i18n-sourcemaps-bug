import postMessageToMobileApp from '~/lib/postMessageToMobileApp.js'
import type { Nullable } from '~/types'

export const ACTIONS = {
  BOOKING: 'BookingRequest',
  ENQUIRY: 'Enquiry',
} as const
Object.freeze(ACTIONS)
export type ACTIONS = (typeof ACTIONS)[keyof typeof ACTIONS]

type MessageAppToSignup = {
  successUrl: string
  failureUrl: string
  cookies: Record<string, Nullable<string | undefined>>
  ownerName?: Nullable<string>
  action?: ACTIONS
}

export const messageAppToSignup = (
  { successUrl, failureUrl, cookies, ownerName = null, action = 'BookingRequest' }: MessageAppToSignup,
  messenger = postMessageToMobileApp,
) => {
  const extraJson = { name: ownerName, callToAction: action }
  const payload = {
    android: { func: 'signup', params: [successUrl, failureUrl, cookies, JSON.stringify(extraJson)] },
    ios: {
      command: 'signup',
      parameters: {
        successURL: successUrl,
        failureURL: failureUrl,
        cookiesJSON: JSON.stringify(cookies),
        extraJson,
      },
    },
  }
  return messenger(payload)
}
