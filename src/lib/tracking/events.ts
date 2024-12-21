import { logBrazeCustomEvent } from './brazeTrack'
import {
  datadogAddError,
  datadogRemoveUser,
  datadogSetUser,
  datadogStartView,
  googleRemarketingTrack,
} from '~/lib/tracking/track'
import type { SegmentTypes } from '~/types/api/rental-segment-types'
import { segmentIdentify, segmentPage, segmentReset, trackSegmentEvent } from '~/lib/tracking/segmentTrack'
import type {
  TrackBookingPaymentInfoSubmittedParams,
  TrackListingSetViewedParams,
  TrackListingViewedParams, TrackPageViewedParams,
  TrackRequestBookingSentParams, TrackSearchViewedParams,
} from '~/types/tracking'
import type { UseAuthentication } from '~/types/rental-api-aliases'

import { SendIdentifiersToClarity } from '~/lib/tracking/clarityTrack'
import type { FinancialCommon, Nullable } from '~/types'

export function trackPageViewed(params: TrackPageViewedParams) {
  datadogStartView({ to: params.to, from: params.from })

  /**
   * Disable page view tracking on dev environments to reduce cost.
   * Todo: Future improvement Simplify the usage of the config logic below
   */
  const enableSegmentPageViewTracking = (!params.$config.target || params.$config.target === 'prod') && !import.meta.dev
  if (enableSegmentPageViewTracking) {
    segmentPage(params.to, params.from)
  }
}

export function trackUserAuthentication(user: UseAuthentication, rtSessionId: string) {
  datadogSetUser({ user })
  segmentIdentify(user)
  SendIdentifiersToClarity({ customId: user.Email!, customSessionId: rtSessionId })
}

export function trackUserDeauthentication() {
  datadogRemoveUser()
  segmentReset()
}

const getGoogleAdsIdConfig = () => window.__NUXT__?.config.public.googleAds.id

export const trackAffiliateLinkClicked = (data: SegmentTypes['AffiliateLinkClicked']) => trackSegmentEvent('AffiliateLinkClicked', data)

export const trackAppBannerClicked = (data: SegmentTypes['AppBannerClicked [v1]']) => trackSegmentEvent('AppBannerClicked [v1]', data)

export const trackAppBannerClosed = (data: SegmentTypes['AppBannerClosed [v2]']) => trackSegmentEvent('AppBannerClosed [v2]', data)

export const trackBookingDetailsViewed = (data: SegmentTypes['BookingDetailsViewed [v4]']) => trackSegmentEvent('BookingDetailsViewed [v4]', data)

// https://rvezy.atlassian.net/wiki/spaces/DATA/pages/1856667693/BookingPaymentFormViewed
export const trackBookingPaymentFormViewed = async (data: SegmentTypes['BookingPaymentFormViewed [v6]']) => {
  trackSegmentEvent('BookingPaymentFormViewed [v6]', data)
  await logBrazeCustomEvent('BookingPaymentFormViewed [v6]', data)
}

export const trackBookingPaymentInfoSubmitClicked = (data: SegmentTypes['BookingPaymentInfoSubmitClicked [v3]']) => trackSegmentEvent('BookingPaymentInfoSubmitClicked [v3]', data)

// https://rvezy.atlassian.net/wiki/spaces/DATA/pages/1858469937/BookingPaymentInfoSubmitted
export function trackBookingPaymentInfoSubmitted(data: TrackBookingPaymentInfoSubmittedParams) {
  trackSegmentEvent('BookingPaymentInfoSubmitted [v7]', data.params)
  trackSegmentEvent(
    'Order Completed',
    {
      // @ts-expect-error Allowing for missing properties so the violations can be seen into Segment
      checkout_id: data.params.bookingId?.toString(),
      // @ts-expect-error Allowing for missing properties so the violations can be seen into Segment
      order_id: data.params.bookingId?.toString(),
      affiliation: data.params.paymentProvider,
      total: roundToNearestDecimal(data.params.bookingValue ?? 0, 2),
      discount: roundToNearestDecimal(data.params.promoDollarValue ?? 0, 2),
      coupon: data.params.promoCode,
      currency: data.params.currency,
      products: [
        {
          // @ts-expect-error Allowing for missing properties so the violations can be seen into Segment
          product_id: data.params.rvId,
          sku: data.params.rvId,
          category: data.params.rvType,
          name: data.additionalParameters.rvName,
          brand: data.additionalParameters.rvMake,
          price: roundToNearestDecimal(data.params.smartNightlyRate ?? data.params.nightlyRate, 2),
          quantity: data.params.tripLength,
        },
      ],
    },
  )

  googleRemarketingTrack({
    event: 'purchase',
    data: {
      send_to: getGoogleAdsIdConfig(),
      value: roundToNearestDecimal(data.params.bookingValue ?? 0, 2),
      items: [
        {
          id: data.params.rvId,
          google_business_vertical: 'hotel_rental',
        },
      ],
    },
  })
}

export const trackBookingPaymentInfoSubmitFailed = (data: SegmentTypes['BookingPaymentInfoSubmitFailed [v1]']) => trackSegmentEvent('BookingPaymentInfoSubmitFailed [v1]', data)

export const trackCalendarImportFieldClicked = (data: SegmentTypes['CalendarImportFieldClicked']) => trackSegmentEvent('CalendarImportModalViewed', data)

export const trackCalendarImportModalViewed = (data: SegmentTypes['CalendarImportModalViewed']) => trackSegmentEvent('CalendarImportModalViewed', data)

export const trackCalendarImportSubmitted = (data: SegmentTypes['CalendarImportSubmitted']) => trackSegmentEvent('CalendarImportSubmitted', data)

export const trackCalendarUpdateSuccessful = (data: SegmentTypes['CalendarUpdateSuccessful [v2]']) => trackSegmentEvent('CalendarUpdateSuccessful [v2]', data)

export const trackCTAClicked = (data: SegmentTypes['CTAClicked']) => trackSegmentEvent('CTAClicked', data)

export const trackDeliveryEducationalModalClicked = (data: SegmentTypes['DeliveryEducationalModalClicked']) => trackSegmentEvent('DeliveryEducationalModalClicked', data)

export const trackDisputeChargesClicked = (data: SegmentTypes['DisputeChargesClicked']) => trackSegmentEvent('DisputeChargesClicked', data)

export const trackEditListingSaved = (data: SegmentTypes['EditListingSaved']) => trackSegmentEvent('EditListingSaved', data)

export const trackEditListingViewed = (data: SegmentTypes['EditListingViewed']) => trackSegmentEvent('EditListingViewed', data)

export const trackExperimentViewed = (data: SegmentTypes['ExperimentViewed']) => trackSegmentEvent('ExperimentViewed', data)

export const trackExternalLinkClicked = (data: SegmentTypes['ExternalLinkClicked [v2]']) => trackSegmentEvent('ExternalLinkClicked [v2]', data)

export const trackGuestRequestMoneySent = (data: SegmentTypes['RequestMoneySent']) => trackSegmentEvent('RequestMoneySent', data)

export const trackHelpCenterClicked = (data: SegmentTypes['HelpCenterClicked']) => trackSegmentEvent('HelpCenterClicked', data)

export const trackListingClicked = (data: SegmentTypes['ListingClicked [v6]']) => trackSegmentEvent('ListingClicked [v6]', data)

export const trackListingSetPresented = (params: SegmentTypes['ListingSetPresented [v4]']) => trackSegmentEvent('ListingSetPresented [v4]', params)

export const trackListingSetViewed = (data: TrackListingSetViewedParams) => {
  trackSegmentEvent('ListingSetViewed [v5]', data.params)
  trackSegmentEvent(
    'Product List Viewed',
    {
      list_id: data.params.listingPageNumber?.toString(),
      category: data.params.cta,
      products: data.params.listings?.map((rv: SegmentTypes['ListingSetViewed [v5]']['listings'][0], index) => ({
        product_id: rv.rvId,
        sku: rv.rvId,
        category: rv.listingType,
        name: rv.rvName,
        currency: rv.currency,
        price: roundToNearestDecimal(rv.smartNightlyRate ?? rv.nightlyRate, 2),
        quantity: 1,
        position: index,
        url: data.additionalParameters.rvUrlListings[index].rvUrl,
        image_url: rv.heroImage,
      })),
    },
  )
}

export const trackListingStepSubmitted = (data: SegmentTypes['ListingStepSubmitted [v1]']) => trackSegmentEvent('ListingStepSubmitted [v1]', data)

// https://rvezy.atlassian.net/wiki/spaces/DATA/pages/2038202369/ListingViewed
export async function trackListingViewed(data: TrackListingViewedParams) {
  // segmentTrack({ event: SegmentEvents.ListingViewed, data, eventVersion: 3 })
  trackSegmentEvent('ListingViewed [v3]', data.params)
  trackSegmentEvent('Product Viewed', {
    product_id: data.params.rvId,
    sku: data.additionalParams.productId,
    category: data.params.rvType,
    // @ts-expect-error Allowing for missing properties so the violations can be seen into Segment
    name: data.params.listingName,
    price: roundToNearestDecimal(data.params.listingBasePrice ?? 0, 2),
    value: roundToNearestDecimal(data.params.totalPrice ?? data.params.listingBasePrice ?? 0, 2),
    quantity: 1,
    // @ts-expect-error Allowing for missing properties so the violations can be seen into Segment
    currency: data.params.currency,
    url: data.additionalParams.rvUrl,
    brand: data.additionalParams.brand,
  })
  await logBrazeCustomEvent('ListingViewed [v3]', data.params)

  googleRemarketingTrack({
    event: 'view_item',
    data: {
      send_to: getGoogleAdsIdConfig(),
      value: roundToNearestDecimal(data.params.totalPrice ?? data.params.listingBasePrice ?? 0, 2),
      items: [
        {
          id: data.params.rvId,
          start_date: data.additionalParams.startDate,
          end_date: data.additionalParams.endDate,
          google_business_vertical: 'hotel_rental',
        },
      ],
    },
  })
}

export const trackMessageTemplateSelected = (data: SegmentTypes['MessageTemplateSelected']) => trackSegmentEvent('MessageTemplateSelected', data)

export const trackOwnerCalendarViewed = (data: SegmentTypes['OwnerCalendarViewed']) => trackSegmentEvent('OwnerCalendarViewed', data)

export const trackOwnerCancellationModalClosed = (data: SegmentTypes['OwnerCancellationModalClosed']) => trackSegmentEvent('OwnerCancellationModalClosed', data)

export const trackOwnerCancellationModalViewed = (data: SegmentTypes['OwnerCancellationModalViewed']) => trackSegmentEvent('OwnerCancellationModalViewed', data)

export const trackPayoutGuaranteeModalViewed = (data: SegmentTypes['PayoutGuaranteeModalViewed']) => trackSegmentEvent('PayoutGuaranteeModalViewed', data)

export const trackPaymentUpdateSubmitted = (data: SegmentTypes['PaymentUpdateSubmitted']) => trackSegmentEvent('PaymentUpdateSubmitted', data)

export const trackPaymentUpdateSuccessful = (data: SegmentTypes['PaymentUpdateSuccessful']) => trackSegmentEvent('PaymentUpdateSuccessful', data)

export const trackPointOfInterestViewed = (data: SegmentTypes['PointOfInterestViewed']) => trackSegmentEvent('PointOfInterestViewed', data)

export const trackProfileViewed = (data: SegmentTypes['ProfileViewed']) => trackSegmentEvent('ProfileViewed', data)

export const trackRefundMethodSelected = (data: SegmentTypes['refundMethodSelected']) => trackSegmentEvent('refundMethodSelected', data)

export const trackSearchViewed = async (data: TrackSearchViewedParams) => {
  trackSegmentEvent('SearchViewed [v6]', data.params)
  // Todo: Future improvement: Review the data sending to Product Searched event
  trackSegmentEvent('Products Searched', {
    query: JSON.stringify(data.params),
  })
  await logBrazeCustomEvent('SearchViewed [v6]', data.params)

  googleRemarketingTrack({
    event: 'view_search_results',
    data: {
      send_to: getGoogleAdsIdConfig(),
      value: 0,
      items: data.additionalParams?.map((rv) => ({
        id: rv.id,
        start_date: data.params.startDate,
        end_date: data.params.endDate,
        google_business_vertical: 'hotel_rental',
      })),
    },
  })
}
export const trackShareButtonClicked = (data: SegmentTypes['ShareButtonClicked']) => trackSegmentEvent('ShareButtonClicked', data)

export const trackSignupExited = (data: SegmentTypes['SignupExited [v2]']) => trackSegmentEvent('SignupExited [v2]', data)

export const trackSignupFailed = (data: SegmentTypes['SignupFailed']) => trackSegmentEvent('SignupFailed', data)

export const trackSignupViewed = (data: SegmentTypes['SignupViewed']) => trackSegmentEvent('SignupViewed', data)

export const trackSortMenuClosed = () => trackSegmentEvent('SortMenuClosed', {})

export const trackSortMenuViewed = () => trackSegmentEvent('SortMenuViewed', {})

export const trackSortOptionClicked = (data: SegmentTypes['SortOptionClicked']) => trackSegmentEvent('SortOptionClicked', data)

export const trackTripQuotePresented = (data: SegmentTypes['TripQuotePresented [v6]']) => trackSegmentEvent('TripQuotePresented [v6]', data)

export const trackTripQuoteViewed = (data: SegmentTypes['TripQuoteViewed [v4]']) => trackSegmentEvent('TripQuoteViewed [v4]', data)

export const trackBuyRvClicked = (data: SegmentTypes['BuyRvClicked']) => trackSegmentEvent('BuyRvClicked', data)

export function trackError(error: unknown) {
  datadogAddError(error)
}

export const trackSignup = (data: SegmentTypes['Signed Up']) => trackSegmentEvent('Signed Up', data)

export async function trackRequestBookingSent(data: TrackRequestBookingSentParams) {
  trackSegmentEvent('RequestBookingSent [v7]', data.params)

  // Todo: Does addons, cleaning, insurance, etc. need to be added as products ?
  trackSegmentEvent(
    'Product Added',
    {
      cart_id: data.params.bookingId.toString(),
      product_id: data.params.rvId,
      sku: data.params.rvId,
      category: data.params.rvType,
      name: data.additionalParams.rvName,
      price: roundToNearestDecimal(data.params.rentalPrice ?? 0, 2),
      value: roundToNearestDecimal(data.params.rentalPrice ?? 0, 2),
      quantity: data.params.tripLength,
      url: data.additionalParams.rvUrl,
      currency: data.params.currency,
    })

  await logBrazeCustomEvent('RequestBookingSent [v7]', data.params)

  googleRemarketingTrack({
    event: 'add_to_cart',
    data: {
      send_to: getGoogleAdsIdConfig(),
      value: data.params.rentalPrice,
      items: [
        {
          id: data.params.rvId,
          start_date: data.params.startDate,
          end_date: data.params.endDate,
          google_business_vertical: 'hotel_rental',
        },
      ],
    },
  })
}

// https://rvezy.atlassian.net/wiki/spaces/DATA/pages/1853980676/RequestBookingBasicsViewed
export const trackRequestBookingBasicsViewed = async (data: SegmentTypes['RequestBookingBasicsViewed [v6]']) => {
  trackSegmentEvent('RequestBookingBasicsViewed [v6]', data)
  await logBrazeCustomEvent('RequestBookingBasicsViewed [v6]', data)
}

export const trackRequestBookingBasicsSubmitted = (data: SegmentTypes['RequestBookingBasicsSubmitted [v5]']) =>
  trackSegmentEvent('RequestBookingBasicsSubmitted [v5]', data)

export const trackRequestBookingEnhanceViewed = (data: SegmentTypes['RequestBookingEnhanceViewed [v4]']) =>
  trackSegmentEvent('RequestBookingEnhanceViewed [v4]', data)

export const trackTipsAndResourcesCardClicked = (data: SegmentTypes['TipsAndResourcesCardClicked [v2]']) => trackSegmentEvent('TipsAndResourcesCardClicked [v2]', data)

export const trackSuperHostLandingPageViewed = (data: SegmentTypes['SuperHostLandingPageViewed']) => trackSegmentEvent('SuperHostLandingPageViewed', data)

export const trackSuperhostLearnMoreClicked = (data: SegmentTypes['SuperhostLearnMoreClicked [v2]']) => trackSegmentEvent('SuperhostLearnMoreClicked [v2]', data)

export const trackSearchFilterMenuOpened = (data: SegmentTypes['SearchFilterMenuOpened [v2]']) => trackSegmentEvent('SearchFilterMenuOpened [v2]', data)

export const trackSearchForRvClicked = (data: SegmentTypes['searchForRvClicked']) => trackSegmentEvent('searchForRvClicked', data)

export const trackRequestMoneyClicked = (data: SegmentTypes['RequestMoneyClicked']) => trackSegmentEvent('RequestMoneyClicked', data)

export const trackCurrencySelectorClicked = (data: SegmentTypes['CurrencySelectorClicked']) => trackSegmentEvent('CurrencySelectorClicked', data)

export const trackCurrencyUpdated = (data: SegmentTypes['CurrencyUpdated']) => trackSegmentEvent('CurrencyUpdated', data)

export const trackHostInsightsViewed = (data: SegmentTypes['HostInsightsPageViewed']) => trackSegmentEvent('HostInsightsPageViewed', data)

// https://rvezy.atlassian.net/wiki/spaces/DATA/pages/2711486465/BannerClicked
export const trackBannerClicked = (data: SegmentTypes['BannerClicked']) => trackSegmentEvent('BannerClicked', data)

export const trackWebPushPermissionRequested = (data: SegmentTypes['WebPushPermissionRequested']) =>
  trackSegmentEvent('WebPushPermissionRequested', data)

export const trackWebPushPermissionResponded = (data: SegmentTypes['WebPushPermissionResponded']) =>
  trackSegmentEvent('WebPushPermissionResponded', data)

/**
 * Helper function for building the proper object to send to Segment.
 *
 * Might be nicer to split out the payoad generator and the event sending,
 * instead of passing in arguments.
 */
export const sendEventTripQuoteEvents = ({
  pageSource,
  sendTripQuotePresented,
  sendTripQuoteViewed,
  rvId,
  financial,
  snapshot,
  booking,
  isShortStay = false,
}: {
  pageSource: string
  sendTripQuotePresented: boolean
  sendTripQuoteViewed: boolean
  rvId: string
  financial: Nullable<FinancialCommon>
  snapshot: {
    hasSmartPricing?: boolean
    chargePerHourOver?: Nullable<number>
    surchargePerExtraKM?: Nullable<number>
    freeHoursPerDay?: Nullable<number>
  }
  booking: {
    dateStart: string
    dateEnd: string
    adults: number
    children: number
    pets: boolean
    destination: string
    rvUsage: string
    deliveryDistance: number
  }
  isShortStay?: boolean
}) => {
  const {
    financialNightlyBase,
    financialNightlyDiscounted,
    financialDiscountsWeekly,
    financialDiscountsMonthly,
    financialTotalRentalAmount,
    financialTotalRoadsides,
    financialTotalInsurances,
    financialInsuranceProtectionLevel,
    financialTotalRenterServiceFee,
    financialTotalCleanings,
    financialTotalSecurityDeposits,
    financialTotalDays,
    financialRenterTotal,
    financialTotalAddOns,
    financialCountry,
    financialTotalNights,
    financialTotalDelivery,
    financialRvAddOns,
  } = getFinancial(financial)

  const eventData = {
    rvId,
    startDate: booking.dateStart,
    endDate: booking.dateEnd,
    adults: booking.adults,
    children: booking.children,
    hasPets: booking.pets,
    pricePerNight: financialNightlyDiscounted || financialNightlyBase,
    smartNightlyRate: snapshot.hasSmartPricing ? financialNightlyDiscounted || financialNightlyBase : 0,
    weeklyDiscount: toNegativeNumber(financialDiscountsWeekly?.DiscountAmount ?? 0),
    monthlyDiscount: toNegativeNumber(financialDiscountsMonthly?.DiscountAmount ?? 0),
    rentalPrice: financialTotalRentalAmount,
    roadsidePrice: financialTotalRoadsides,
    insurancePrice: financialTotalInsurances,
    insuranceType: financialInsuranceProtectionLevel?.toLowerCase() ?? '',
    servicePrice: financialTotalRenterServiceFee,
    cleaningPrice: financialTotalCleanings,
    securityDepositPrice: financialTotalSecurityDeposits,
    generatorPriceHourly: snapshot.chargePerHourOver ?? 0,
    distancePriceKms: snapshot.surchargePerExtraKM ?? 0,
    freeDistanceKms: (snapshot.freeHoursPerDay ?? 0) * financialTotalDays,
    freeGeneratorHours: (snapshot.freeHoursPerDay ?? 0) * financialTotalDays,
    totalPrice: financialRenterTotal,
    addonPrice: financialTotalAddOns,
    currency: lookupCountryCodeToCurrencyCode(financialCountry),
    tripLength: financialTotalNights,
    destination: booking.destination,
    hasDelivery: booking.rvUsage !== 'Pickup',
    deliveryDistance: booking.deliveryDistance,
    deliveryPrice: financialTotalDelivery,
    isStationaryDelivery: booking.rvUsage === 'StationaryAfterDelivery',
    isShortStay,
    addons: financialRvAddOns.map((addon) => ({ name: addon?.Name ?? '', price: addon.PricePerItem, pricePer: (addon.IsDaily ? 'night' : 'trip') as 'night' | 'trip' })),

    pageSource,
  }

  if (sendTripQuotePresented) {
    trackTripQuotePresented(eventData)
  }

  if (sendTripQuoteViewed) {
    trackTripQuoteViewed(eventData)
  }
}
