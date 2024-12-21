import type { BookingDetails, Nullable } from '~/types'

export const getBookingDetails = (booking?: Nullable<BookingDetails>) => {
  /**
   * Basic Booking properties.
   * Always in the format of `booking[PropertyName]`.
   * Defaults are dependent on the schema and added manually.
   */
  const bookingAcceptedOn = booking?.AcceptedOn ?? ''
  const bookingAdults = booking?.Adults ?? 0
  const bookingAmountDue = booking?.AmountDue ?? 0
  const bookingAppliedRentalCredit = booking?.AppliedRentalCredit ?? 0
  const bookingAppliedOwnerCredit = booking?.AppliedOwnerCredit ?? 0
  const bookingCancellationFee = booking?.CancellationFee ?? 0
  const bookingCancellationPolicy = booking?.CancellationPolicy ?? ''
  const bookingCancelledOn = booking?.CancelledOn ?? ''
  const bookingCanRequestMoney = booking?.CanRequestMoney ?? false
  const bookingCanSendMoney = booking?.CanSendMoney ?? false
  const bookingCanGuestCreateReview = booking?.CanGuestCreateReview ?? false
  const bookingCanHostCreateReview = booking?.CanHostCreateReview ?? false
  const bookingReviewCanBeMadeOn = booking?.ReviewCanBeMadeOn ?? ''
  const bookingReviewCanNoLongerBeMadeOn = booking?.ReviewCanNoLongerBeMadeOn ?? ''
  const bookingChildren = booking?.Children ?? 0
  const bookingCountry = booking?.Country ?? ''
  const bookingDateEnd = booking?.DateEnd ?? ''
  const bookingDateStart = booking?.DateStart ?? ''
  const bookingDaysInUS = booking?.DaysInUS ?? 0
  const bookingDeliveryDistance = booking?.DeliveryDistance ?? 0
  const bookingDestination = booking?.Destination ?? ''
  const bookingDiscount = booking?.Discount ?? 0
  const bookingDiscountPercent = booking?.DiscountPercent ?? 0
  const bookingEndDate = booking?.EndDate ?? ''
  const bookingExpiredInstantBook = booking?.ExpiredInstantBook ?? false
  const bookingFullPaymentDate = booking?.FullPaymentDate ?? ''
  const bookingHasDelivery = booking?.HasDelivery ?? false
  const bookingHasDriver = booking?.HasDriver ?? false
  const bookingHasDriverApproved = booking?.HasDriverApproved ?? false
  const bookingHasPendingDispute = booking?.HasPendingDispute ?? false
  const bookingHasPendingInsuranceClaim = booking?.HasPendingInsuranceClaim ?? false
  const bookingHasRoadsideEvent = booking?.HasRoadsideEvent ?? false
  const bookingHasValidDriver = booking?.HasValidDriver ?? false
  const bookingId = booking?.Id ?? 0
  const bookingInsurancePricingStrategy = booking?.InsurancePricingStrategy ?? ''
  const bookingIsDuplicate = booking?.IsDuplicate ?? false
  const bookingIsEZYmatch = booking?.IsEZYmatch ?? false
  const bookingIsFreshInstantBook = booking?.IsFreshInstantBook ?? false
  const bookingIsFreshInstantBooking = booking?.IsFreshInstantBooking ?? false
  const bookingIsInstabook = booking?.IsInstabook ?? false
  const bookingIsInsured = booking?.IsInsured ?? false
  const bookingIsPaused = booking?.IsPaused ?? false
  const bookingIsShortStay = booking?.IsShortStay ?? false
  const bookingIsSpecialOffer = booking?.IsSpecialOffer ?? false
  const bookingIsEzyMatch = booking?.IsEZYmatch ?? false
  const bookingModifiedByChangeRequestOrByAdminAdditionalCharge = booking?.ModifiedByChangeRequestOrByAdminAdditionalCharge ?? false
  const bookingNoPaymentMethod = booking?.NoPaymentMethod ?? false
  const bookingNumberOfDays = booking?.NumberOfDays ?? 0
  const bookingNumberOfNights = booking?.NumberOfNight ?? 0
  const bookingOwnerCanCreateClaim = booking?.OwnerCanCreateClaim ?? false
  const bookingOwnerId = booking?.OwnerId ?? 0
  const bookingOwnerServiceFeePct = booking?.OwnerServiceFeePct ?? 0
  const bookingPaymentFailed = booking?.PaymentFailed ?? false
  const bookingPets = booking?.Pets ?? false
  const bookingPreviousStage = booking?.PreviousStage ?? ''
  const bookingReferralCreditPayout = booking?.ReferralCreditPayout ?? 0
  const bookingReferralCreditRental = booking?.ReferralCreditRental ?? 0
  const bookingRentalContractIsSignedByOwner = booking?.RentalContractIsSignedByOwner ?? false
  const bookingRentalContractIsSignedByRenter = booking?.RentalContractIsSignedByRenter ?? false
  const bookingRenterId = booking?.RenterId ?? 0
  const bookingRenterServiceFee = booking?.RenterServiceFee ?? 0
  const bookingRequestDate = booking?.RequestDate ?? ''
  const bookingRequestedPaymentMode = booking?.RequestedPaymentMode ?? ''
  const bookingResidenceTaxPct = booking?.ResidenceTaxPct ?? 0
  const bookingRoadsideAssistanceDailyFee = booking?.RoadsideAssistanceDailyFee ?? 0
  const bookingRoadsideAssistanceState = booking?.RoadsideAssistanceState ?? false
  const bookingRVId = booking?.RVId ?? ''
  const bookingRvUsage = booking?.RvUsage ?? ''
  const bookingShortIntroduce = booking?.ShortIntroduce ?? ''
  const bookingStage = booking?.Stage
  const bookingStartDate = booking?.StartDate ?? ''
  const bookingStatus = booking?.Status ?? ''
  const bookingSubTotal = booking?.SubTotal ?? 0
  const bookingTaxRemittanceStatus = booking?.TaxRemittanceStatus ?? ''
  const bookingTripIsInProgress = booking?.TripIsInProgress ?? false
  const bookingType = booking?.Type ?? ''

  // Advanced propeties.
  const bookingOriginalRate = booking?.RVSnapshot?.OriginalDefaultPrice ?? 0
  const bookingSmartPricingRate = booking?.RVSnapshot?.HasSmartPricingApplied ? booking?.RVSnapshot?.DefaultPrice : undefined
  const bookingDistancePriceKms = booking?.RVSnapshot?.IsChargeMileage ? (booking?.RVSnapshot?.SurchargePerExtraKM ?? undefined) : undefined

  const bookingHasCustomQuote = Number(booking?.CustomTotalRentalAmount) > 0
  const bookingHasFomoTagsEnabled = !bookingIsEzyMatch && !bookingHasCustomQuote

  // TODO: write tests for these.
  const bookingFinancial = booking?.Financial ?? null
  const bookingPromotionCode = booking?.PromotionCode ?? ''
  const bookingRVSnapshot = booking?.RVSnapshot ?? null

  return {
    bookingAcceptedOn,
    bookingAdults,
    bookingAmountDue,
    bookingAppliedRentalCredit,
    bookingAppliedOwnerCredit,
    bookingCancellationFee,
    bookingCancellationPolicy,
    bookingCancelledOn,
    bookingCanRequestMoney,
    bookingCanSendMoney,
    bookingCanGuestCreateReview,
    bookingCanHostCreateReview,
    bookingReviewCanBeMadeOn,
    bookingReviewCanNoLongerBeMadeOn,
    bookingChildren,
    bookingCountry,
    bookingDateEnd,
    bookingDateStart,
    bookingDaysInUS,
    bookingDeliveryDistance,
    bookingDestination,
    bookingDiscount,
    bookingDiscountPercent,
    bookingEndDate,
    bookingExpiredInstantBook,
    bookingFullPaymentDate,
    bookingHasDelivery,
    bookingHasDriver,
    bookingHasDriverApproved,
    bookingHasPendingDispute,
    bookingHasPendingInsuranceClaim,
    bookingHasRoadsideEvent,
    bookingHasValidDriver,
    bookingId,
    bookingInsurancePricingStrategy,
    bookingIsDuplicate,
    bookingIsEZYmatch,
    bookingIsFreshInstantBook,
    bookingIsFreshInstantBooking,
    bookingIsInstabook,
    bookingIsInsured,
    bookingIsPaused,
    bookingIsShortStay,
    bookingIsSpecialOffer,
    bookingIsEzyMatch,
    bookingModifiedByChangeRequestOrByAdminAdditionalCharge,
    bookingNoPaymentMethod,
    bookingNumberOfDays,
    bookingNumberOfNights,
    bookingOwnerCanCreateClaim,
    bookingOwnerId,
    bookingOwnerServiceFeePct,
    bookingPaymentFailed,
    bookingPets,
    bookingPreviousStage,
    bookingReferralCreditPayout,
    bookingReferralCreditRental,
    bookingRentalContractIsSignedByOwner,
    bookingRentalContractIsSignedByRenter,
    bookingRenterId,
    bookingRenterServiceFee,
    bookingRequestDate,
    bookingRequestedPaymentMode,
    bookingResidenceTaxPct,
    bookingRoadsideAssistanceDailyFee,
    bookingRoadsideAssistanceState,
    bookingRVId,
    bookingRvUsage,
    bookingShortIntroduce,
    bookingStage,
    bookingStartDate,
    bookingStatus,
    bookingSubTotal,
    bookingTaxRemittanceStatus,
    bookingTripIsInProgress,
    bookingType,

    bookingOriginalRate,
    bookingSmartPricingRate,
    bookingDistancePriceKms,

    bookingHasCustomQuote,
    bookingHasFomoTagsEnabled,

    bookingFinancial,
    bookingPromotionCode,
    bookingRVSnapshot,
  }
}
