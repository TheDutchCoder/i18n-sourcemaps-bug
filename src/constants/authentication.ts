export const AUTHENTICATION_TYPE = {
  Login: 'Login',
  Signup: 'Signup',
} as const
Object.freeze(AUTHENTICATION_TYPE)
export type AUTHENTICATION_TYPE = (typeof AUTHENTICATION_TYPE)[keyof typeof AUTHENTICATION_TYPE]

export const AUTHENTICATION_INTENT = {
  ListingIntent: 'ListingIntent',
  BookingIntent: 'BookingIntent',
  EnquiryIntent: 'EnquiryIntent',
} as const
Object.freeze(AUTHENTICATION_INTENT)
export type AUTHENTICATION_INTENT = (typeof AUTHENTICATION_INTENT)[keyof typeof AUTHENTICATION_INTENT]

export const EXTERNAL_AUTHENTICATION_PROVIDERS = {
  Facebook: 'facebook',
  Google: 'google',
  Apple: 'apple',
} as const
Object.freeze(EXTERNAL_AUTHENTICATION_PROVIDERS)
export type EXTERNAL_AUTHENTICATION_PROVIDERS =
  (typeof EXTERNAL_AUTHENTICATION_PROVIDERS)[keyof typeof EXTERNAL_AUTHENTICATION_PROVIDERS]

export const AUTHENTICATION_PROVIDERS = {
  ...EXTERNAL_AUTHENTICATION_PROVIDERS,
  Email: 'email',
}
Object.freeze(AUTHENTICATION_PROVIDERS)
export type AUTHENTICATION_PROVIDERS = (typeof AUTHENTICATION_PROVIDERS)[keyof typeof AUTHENTICATION_PROVIDERS]
