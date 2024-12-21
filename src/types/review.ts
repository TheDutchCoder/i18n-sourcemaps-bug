import type { components } from '#open-fetch-schemas/rentals'
import type { RvPhoto } from '~/types'

export type Review = components['schemas']['RVezy.NewBookingService.Models.ViewModels.TopRvReviewViewModel']
export type ReviewPhoto = components['schemas']['RVezy.Common.CommonModel.Review.ReviewPhotoViewModel']
export type ReviewData = Pick<Review, 'CreatedAt' | 'CreatedBy' | 'CreatedByFirstName' | 'CreatedByLastName' | 'OverallRating' | 'Review' | 'ReviewId' | 'ReviewType'>

export type ReviewList = {
  ReviewData: ReviewData
  AliasName: string
  RVName: string
  Photos: RvPhoto[]
}

export type VerifiedReviews = {
  rating: number
  reviewCount: number
  updatedAt: string
}
