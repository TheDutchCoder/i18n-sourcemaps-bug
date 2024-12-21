export type SegmentAnalyticsType = SegmentAnalytics.AnalyticsJS
export type SegmentOptions = SegmentAnalytics.SegmentOpts & { context?: { [key: string]: unknown, protocols?: { event_version?: number } } }

export type SegmentIdentify = {
  accountProvider?: 'apple' | 'email' | 'facebook' | 'google'
  createdAt?: string
  email?: string
  firstName?: string
  hasRVListed?: boolean
  isOwner?: boolean
  isSuperhost?: boolean
  language?: string
  lastLogin?: string
  lastName?: string
  name?: {
    first?: string
    last?: string
  }
  numRVsListed?: number
  phone?: string
  signupSource?: SignupSourceType
}

export type SignupSourceType = 'Android' | 'IOS' | 'Web' | undefined
