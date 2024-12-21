/**
 * A collection of RV related types.
 *
 * TODO: merge this with rental-api-aliases? Or move to /api?
 */
import type { components } from '#open-fetch-schemas/rentals'

export type Rv = components['schemas']['RVezy.Common.Models.Search.RvSearchResultDocument']
export type RvPhoto = components['schemas']['RVezy.Common.Response.PhotoInfoResponse']
export type RvAddon = components['schemas']['RVezy.Common.CommonModel.ViewModels.AddonViewModel']
export type RvReview = components['schemas']['RVezy.Common.CommonModel.RvDetailReviewDetailModel']

export type RvDetails = components['schemas']['RVezyListingServer.ViewModels.RVDetailResponse']
export type RvSearchResponse = components['schemas']['RVezyListingServer.Models.ViewModels.RVSearchResponse']
export type RvUnifiedSearch = components['schemas']['RVezy.Common.Models.Search.RvSearchResultDocument']

export type RvUnifiedSearchResults = components['schemas']['RVezy.Common.Models.RVs.UnifiedSearchResults']
export type RvSimilarSearchResults = components['schemas']['RVezy.Common.Models.Search.RvSearchSimilarResult']

export type RvSnapshot = components['schemas']['RVezy.Common.Models.Financials.RVSnapshotCommon']

// Merged type for different API responses that return RV details.
// export type ExpandedRvDetails = RvDetails | RvSearchResponse

type Combine<A, B> = Partial<
  Omit<A, keyof B> // properties in A that aren’t in B
  & Omit<B, keyof A> // properties in B that aren’t in A
  & { [K in keyof A & keyof B]: A[K] | B[K] } // properties in both A and B
>

export type ExpandedRvDetails = Combine<RvDetails, RvSearchResponse>
