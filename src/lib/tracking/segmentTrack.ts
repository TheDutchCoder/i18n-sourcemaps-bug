import Cookies from 'js-cookie'
import type { RouteLocationNormalized } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import type { SegmentTypes } from '~/types/api/rental-segment-types'
import { PropertyMetadata as SegmentEventMetadata } from '~/types/api/rental-segment-types'
import type { SegmentIdentify, SegmentOptions, SignupSourceType } from '~/types/segment'
import { isWebview } from '~/lib/useUtils'
import { COOKIES as ConstantCookies } from '~/constants'
import mobileCapabilities, { FEATURES } from '~/lib/mobileCapabilities'
import postMessageToMobileApp from '~/lib/postMessageToMobileApp'
import { LanguageToi18nLocale } from '~/lib/enums'
import type { UseAuthentication } from '~/types/rental-api-aliases'
import { SendEventToClarity } from '~/lib/tracking/clarityTrack'

type AndroidData = {
  func: string
  params: [string, string, number] | [string, string]
}

type IosData = {
  command: string
  name: string
  parameters: keyof SegmentTypes
  eventVersion?: number
}

export function trackSegmentEvent<T extends keyof SegmentTypes>(
  eventName: T,
  data: SegmentTypes[T],
  options?: SegmentOptions,
) {
  const $config = useRuntimeConfig().public.segment
  const metadata = SegmentEventMetadata[eventName]

  // When is mobile webview, delegates to firebase
  if (isWebview()) {
    const enabledEventVersioning = mobileCapabilities(Cookies.get(ConstantCookies.capabilities), [FEATURES.CAN_TRACK_SEGMENT_VERSION])
    const androidData: AndroidData = {
      func: 'trackSegmentEvent',
      params: [
        metadata.name,
        JSON.stringify(data),
      ],
    }
    const iosData: IosData = {
      command: 'trackSegmentEvent',
      name: metadata.name,
      parameters: JSON.parse(JSON.stringify(data)),
    }

    if (enabledEventVersioning && metadata.version) {
      (androidData.params as [string, string, number]).push(metadata.version)
      iosData.eventVersion = metadata.version
    }

    postMessageToMobileApp({
      android: androidData,
      ios: iosData,
    })

    return
  }

  if (!options) options = {}
  if (!options.context) options.context = {}
  if (!options.context.protocols) options.context.protocols = {}
  options.context.protocols.event_version = metadata.version

  if ($config.enabled)
    window?.analytics?.track(metadata.name, data, options)

  // Fire clarity together with segment events
  SendEventToClarity(metadata.name)
}

export function segmentIdentify(user: UseAuthentication) {
  let phone = ''
  if (user.PhoneNumber) {
    phone = user.PhoneNumber
    if (!user.PhoneNumber.includes('+') && user.CountryPhoneCode) {
      phone = `${user.CountryPhoneCode}${user.PhoneNumber}`
    }
  }

  const signupSourceArr = ['IOS', 'Android']
  let userSignupSource: SignupSourceType = 'Web'
  if (user.SignupFrom && signupSourceArr.includes(user.SignupFrom)) {
    userSignupSource = user.SignupFrom as SignupSourceType
  }

  const identifyData: SegmentIdentify = {
    email: user.Email as string,
    firstName: user.FirstName as string,
    lastName: user.LastName as string,
    phone: phone,
    language: LanguageToi18nLocale(user.Language),
    createdAt: user.CreatedDate,
    lastLogin: user.LastLogin,
    isOwner: user.IsOwner,
    hasRVListed: user.HasRv,
    signupSource: userSignupSource,
    isSuperhost: user?.SuperHost?.IsActive,
  }

  window?.analytics?.identify(user.Id.toString(), identifyData)
}

export const segmentReset = () => {
  window?.analytics?.reset()
}

export const segmentPage = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  window?.analytics?.page((to.name as string), {
    path: to.path,
    referrer: from.name !== null ? from.path : document.referrer,
    search: to.query ?? '',
    title: document.title,
    url: document.location.href,
  })
}

export const getSegmentAnonymousId = () => {
  // https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/identity/
  // Return cookie or localStorage
  let anonymousId
      = Cookies.get(ConstantCookies.ajsAnonymousId) ?? JSON.parse(window?.localStorage?.getItem(ConstantCookies.ajsAnonymousId) || null!)

  if (!anonymousId) {
    // Create a new UUID if no anonymousId are retrived
    anonymousId = uuidv4()
    window?.analytics?.setAnonymousId(anonymousId)
  }

  return anonymousId
}
