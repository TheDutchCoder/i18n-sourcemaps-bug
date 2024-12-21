import type { PublicRuntimeConfig } from 'nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router'
import type { SegmentTypes } from '~/types/api/rental-segment-types'

export type TrackRequestBookingSentParams = {
  params: SegmentTypes['RequestBookingSent [v7]']
  additionalParams: {
    rvName: string
    rvUrl: string
  }
}

export type TrackListingViewedParams = {
  params: SegmentTypes['ListingViewed [v3]']
  additionalParams: {
    productId: string
    rvUrl: string
    brand: string
    startDate?: string
    endDate?: string
  }
}

export type TrackSearchViewedParams = {
  params: SegmentTypes['SearchViewed [v6]']
  additionalParams: [{
    id: string
  }]
}

export type TrackListingSetViewedParams = {
  params: SegmentTypes['ListingSetViewed [v5]']
  additionalParameters: {
    rvUrlListings: { rvUrl: string }[]
  }
}

export type TrackBookingPaymentInfoSubmittedParams = {
  params: SegmentTypes['BookingPaymentInfoSubmitted [v7]']
  additionalParameters: {
    rvName: string
    rvMake?: string
  }
}

export type TrackPageViewedParams = {
  $config: PublicRuntimeConfig
  to: RouteLocationNormalized
  from: RouteLocationNormalized
}

export type SignupExitedParamsResponseEnum = SegmentTypes['SignupExited']['response']
