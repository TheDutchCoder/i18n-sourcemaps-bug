import { beforeEach, describe, expect, test } from 'vitest'
import { getBookingDetails } from '~/utils/booking/get-booking-details'
import type { BookingDetails } from '~/types'

const bookingFullData: BookingDetails = {
  AcceptedOn: '2020-04-01T00:00:00Z',
  Adults: 2,
  AmountDue: 100,
  AppliedOwnerCredit: 10,
  AppliedRentalCredit: 10,
  CancellationFee: 50,
  CancellationPolicy: 'TwentyFourHours',
  CancelledOn: '0001-01-01T00:00:00-05:17',
  CanRequestMoney: true,
  CanSendMoney: true,
  CanGuestCreateReview: false,
  CanHostCreateReview: false,
  ReviewCanBeMadeOn: '2024-10-20T00:00:00-04:00',
  ReviewCanNoLongerBeMadeOn: '2024-10-21T00:00:00-04:00',
  Children: 0,
  Country: 'CA',
  DateEnd: '2024-10-20T00:00:00-04:00',
  DateStart: '2024-10-20T00:00:00-04:00',
  DaysInUS: 0,
  DeliveryDistance: 100,
  Destination: 'Ottawa, ON, Canada',
  Discount: 10,
  DiscountPercent: 10,
  EndDate: '2024-10-20T00:00:00-04:00',
  ExpiredInstantBook: false,
  FullPaymentDate: '2020-04-01T00:00:00Z',
  HasDelivery: false,
  HasDriver: false,
  HasDriverApproved: false,
  HasPendingDispute: false,
  HasPendingInsuranceClaim: false,
  HasRoadsideEvent: false,
  HasValidDriver: false,
  Id: 9671,
  InsurancePricingStrategy: 'NightlyTieredRate',
  IsDuplicate: false,
  IsEZYmatch: false,
  IsFreshInstantBook: false,
  IsFreshInstantBooking: false,
  IsInstabook: false,
  IsInsured: true,
  IsPaused: false,
  IsShortStay: false,
  IsSpecialOffer: false,
  ModifiedByChangeRequestOrByAdminAdditionalCharge: false,
  NoPaymentMethod: true,
  NumberOfDays: 6,
  NumberOfNight: 5,
  OwnerCanCreateClaim: false,
  OwnerId: 2,
  OwnerServiceFeePct: 0.2700,
  PaymentFailed: false,
  Pets: 0,
  PreviousStage: 'AwaitingOwnerApproval',
  ReferralCreditPayout: 0.0,
  ReferralCreditRental: 0.0,
  RentalContractIsSignedByOwner: false,
  RentalContractIsSignedByRenter: false,
  RenterId: 5751,
  RenterServiceFee: 0.20,
  RequestDate: '2024-10-18T15:03:53.425958-04:00',
  RequestedPaymentMode: 'Standard',
  ResidenceTaxPct: 0.1300,
  RoadsideAssistanceDailyFee: 8.0,
  RoadsideAssistanceState: true,
  RVId: 'd84b0548-bc15-4173-9b2f-c1c57f35979a',
  RvUsage: 'Pickup',
  ShortIntroduce: 'My name is John Doe',
  Stage: 'AwaitingOwnerApproval',
  StartDate: '2024-10-20T00:00:00-04:00',
  Status: 'Active',
  SubTotal: 0.0,
  TaxRemittanceStatus: 'NotSent',
  TripIsInProgress: false,
  Type: 'Normal',
}

let mockBookingFullData = <BookingDetails>(bookingFullData)

describe('getBookingDetails', () => {
  beforeEach(() => {
    mockBookingFullData = { ...bookingFullData }
  })

  describe('with full data', () => {
    describe('returns advanced `has` checks for', () => {
      test('bookingHasCustomQuote', () => {
        mockBookingFullData.CustomTotalRentalAmount = 100
        const { bookingHasCustomQuote } = getBookingDetails(mockBookingFullData)

        expect(bookingHasCustomQuote).toStrictEqual(true)
      })

      test('bookingHasFomoTagsEnabled', () => {
        mockBookingFullData.CustomTotalRentalAmount = 100
        mockBookingFullData.IsEZYmatch = true

        const { bookingHasFomoTagsEnabled } = getBookingDetails(mockBookingFullData)

        expect(bookingHasFomoTagsEnabled).toStrictEqual(false)

        expect(bookingHasFomoTagsEnabled).toStrictEqual(false)
      })
    })

    describe('returns advanced properties', () => {
      test('bookingOriginalRate', () => {
        const { bookingOriginalRate } = getBookingDetails(mockBookingFullData)
        expect(bookingOriginalRate).toStrictEqual(0)

        const { bookingOriginalRate: bookingOriginalRateUpdated } = getBookingDetails({
          RVSnapshot: { OriginalDefaultPrice: 100, ...mockBookingFullData.RVSnapshot } as BookingDetails['RVSnapshot'],
          ...mockBookingFullData,
        })
        expect(bookingOriginalRateUpdated).toStrictEqual(100)
      })

      test('bookingSmartPricingRate', () => {
        const { bookingSmartPricingRate } = getBookingDetails(mockBookingFullData)
        expect(bookingSmartPricingRate).toStrictEqual(undefined)

        const { bookingSmartPricingRate: bookingSmartPricingRateUpdated } = getBookingDetails({
          RVSnapshot: { HasSmartPricingApplied: true, DefaultPrice: 100, ...mockBookingFullData.RVSnapshot } as BookingDetails['RVSnapshot'],
          ...mockBookingFullData,
        })
        expect(bookingSmartPricingRateUpdated).toStrictEqual(100)
      })

      test('bookingDistancePriceKms', () => {
        const { bookingDistancePriceKms } = getBookingDetails(mockBookingFullData)
        expect(bookingDistancePriceKms).toStrictEqual(undefined)

        const { bookingDistancePriceKms: bookingDistancePriceKmsUpdated } = getBookingDetails({
          RVSnapshot: { IsChargeMileage: true, SurchargePerExtraKM: 100, ...mockBookingFullData.RVSnapshot } as BookingDetails['RVSnapshot'],
          ...mockBookingFullData,
        })
        expect(bookingDistancePriceKmsUpdated).toStrictEqual(100)
      })
    })

    test('returns basic properties', () => {
      const {
        bookingAcceptedOn,
        bookingAdults,
        bookingAmountDue,
        bookingAppliedOwnerCredit,
        bookingAppliedRentalCredit,
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
      } = getBookingDetails(mockBookingFullData)

      expect(bookingAcceptedOn).toStrictEqual('2020-04-01T00:00:00Z')
      expect(bookingAdults).toStrictEqual(2)
      expect(bookingAmountDue).toStrictEqual(100)
      expect(bookingAppliedOwnerCredit).toStrictEqual(10)
      expect(bookingAppliedRentalCredit).toStrictEqual(10)
      expect(bookingCancellationFee).toStrictEqual(50)
      expect(bookingCancellationPolicy).toStrictEqual('TwentyFourHours')
      expect(bookingCancelledOn).toStrictEqual('0001-01-01T00:00:00-05:17')
      expect(bookingCanRequestMoney).toStrictEqual(true)
      expect(bookingCanSendMoney).toStrictEqual(true)
      expect(bookingCanGuestCreateReview).toStrictEqual(false)
      expect(bookingCanHostCreateReview).toStrictEqual(false)
      expect(bookingReviewCanBeMadeOn).toStrictEqual('2024-10-20T00:00:00-04:00')
      expect(bookingReviewCanNoLongerBeMadeOn).toStrictEqual('2024-10-21T00:00:00-04:00')
      expect(bookingChildren).toStrictEqual(0)
      expect(bookingCountry).toStrictEqual('CA')
      expect(bookingDateEnd).toStrictEqual('2024-10-20T00:00:00-04:00')
      expect(bookingDateStart).toStrictEqual('2024-10-20T00:00:00-04:00')
      expect(bookingDaysInUS).toStrictEqual(0)
      expect(bookingDeliveryDistance).toStrictEqual(100)
      expect(bookingDestination).toStrictEqual('Ottawa, ON, Canada')
      expect(bookingDiscount).toStrictEqual(10)
      expect(bookingDiscountPercent).toStrictEqual(10)
      expect(bookingEndDate).toStrictEqual('2024-10-20T00:00:00-04:00')
      expect(bookingExpiredInstantBook).toStrictEqual(false)
      expect(bookingFullPaymentDate).toStrictEqual('2020-04-01T00:00:00Z')
      expect(bookingHasDelivery).toStrictEqual(false)
      expect(bookingHasDriver).toStrictEqual(false)
      expect(bookingHasDriverApproved).toStrictEqual(false)
      expect(bookingHasPendingDispute).toStrictEqual(false)
      expect(bookingHasPendingInsuranceClaim).toStrictEqual(false)
      expect(bookingHasRoadsideEvent).toStrictEqual(false)
      expect(bookingHasValidDriver).toStrictEqual(false)
      expect(bookingId).toStrictEqual(9671)
      expect(bookingInsurancePricingStrategy).toStrictEqual('NightlyTieredRate')
      expect(bookingIsDuplicate).toStrictEqual(false)
      expect(bookingIsEZYmatch).toStrictEqual(false)
      expect(bookingIsFreshInstantBook).toStrictEqual(false)
      expect(bookingIsFreshInstantBooking).toStrictEqual(false)
      expect(bookingIsInstabook).toStrictEqual(false)
      expect(bookingIsInsured).toStrictEqual(true)
      expect(bookingIsPaused).toStrictEqual(false)
      expect(bookingIsShortStay).toStrictEqual(false)
      expect(bookingIsSpecialOffer).toStrictEqual(false)
      expect(bookingModifiedByChangeRequestOrByAdminAdditionalCharge).toStrictEqual(false)
      expect(bookingNoPaymentMethod).toStrictEqual(true)
      expect(bookingNumberOfDays).toStrictEqual(6)
      expect(bookingNumberOfNights).toStrictEqual(5)
      expect(bookingOwnerCanCreateClaim).toStrictEqual(false)
      expect(bookingOwnerId).toStrictEqual(2)
      expect(bookingOwnerServiceFeePct).toStrictEqual(0.27)
      expect(bookingPaymentFailed).toStrictEqual(false)
      expect(bookingPets).toStrictEqual(0)
      expect(bookingPreviousStage).toStrictEqual('AwaitingOwnerApproval')
      expect(bookingReferralCreditPayout).toStrictEqual(0)
      expect(bookingReferralCreditRental).toStrictEqual(0)
      expect(bookingRentalContractIsSignedByOwner).toStrictEqual(false)
      expect(bookingRentalContractIsSignedByRenter).toStrictEqual(false)
      expect(bookingRenterId).toStrictEqual(5751)
      expect(bookingRenterServiceFee).toStrictEqual(0.2)
      expect(bookingRequestDate).toStrictEqual('2024-10-18T15:03:53.425958-04:00')
      expect(bookingRequestedPaymentMode).toStrictEqual('Standard')
      expect(bookingResidenceTaxPct).toStrictEqual(0.13)
      expect(bookingRoadsideAssistanceDailyFee).toStrictEqual(8)
      expect(bookingRoadsideAssistanceState).toStrictEqual(true)
      expect(bookingRVId).toStrictEqual('d84b0548-bc15-4173-9b2f-c1c57f35979a')
      expect(bookingRvUsage).toStrictEqual('Pickup')
      expect(bookingShortIntroduce).toStrictEqual('My name is John Doe')
      expect(bookingStage).toStrictEqual('AwaitingOwnerApproval')
      expect(bookingStartDate).toStrictEqual('2024-10-20T00:00:00-04:00')
      expect(bookingStatus).toStrictEqual('Active')
      expect(bookingSubTotal).toStrictEqual(0)
      expect(bookingTaxRemittanceStatus).toStrictEqual('NotSent')
      expect(bookingTripIsInProgress).toStrictEqual(false)
      expect(bookingType).toStrictEqual('Normal')
    })
  })

  describe('with no data', () => {
    test('returns defaults for individual properties', () => {
      const {
        bookingAcceptedOn,
        bookingAdults,
        bookingAmountDue,
        bookingAppliedOwnerCredit,
        bookingAppliedRentalCredit,
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
        bookingStage,
        bookingStartDate,
        bookingStatus,
        bookingSubTotal,
        bookingTaxRemittanceStatus,
        bookingTripIsInProgress,
        bookingType,
      } = getBookingDetails(null)

      expect(bookingAcceptedOn).toStrictEqual('')
      expect(bookingAdults).toStrictEqual(0)
      expect(bookingAmountDue).toStrictEqual(0)
      expect(bookingAppliedOwnerCredit).toStrictEqual(0)
      expect(bookingAppliedRentalCredit).toStrictEqual(0)
      expect(bookingCancellationFee).toStrictEqual(0)
      expect(bookingCancellationPolicy).toStrictEqual('')
      expect(bookingCancelledOn).toStrictEqual('')
      expect(bookingCanRequestMoney).toStrictEqual(false)
      expect(bookingCanSendMoney).toStrictEqual(false)
      expect(bookingCanGuestCreateReview).toStrictEqual(false)
      expect(bookingCanHostCreateReview).toStrictEqual(false)
      expect(bookingReviewCanBeMadeOn).toStrictEqual('')
      expect(bookingReviewCanNoLongerBeMadeOn).toStrictEqual('')
      expect(bookingChildren).toStrictEqual(0)
      expect(bookingCountry).toStrictEqual('')
      expect(bookingDateEnd).toStrictEqual('')
      expect(bookingDateStart).toStrictEqual('')
      expect(bookingDaysInUS).toStrictEqual(0)
      expect(bookingDeliveryDistance).toStrictEqual(0)
      expect(bookingDestination).toStrictEqual('')
      expect(bookingDiscount).toStrictEqual(0)
      expect(bookingDiscountPercent).toStrictEqual(0)
      expect(bookingEndDate).toStrictEqual('')
      expect(bookingExpiredInstantBook).toStrictEqual(false)
      expect(bookingFullPaymentDate).toStrictEqual('')
      expect(bookingHasDelivery).toStrictEqual(false)
      expect(bookingHasDriver).toStrictEqual(false)
      expect(bookingHasDriverApproved).toStrictEqual(false)
      expect(bookingHasPendingDispute).toStrictEqual(false)
      expect(bookingHasPendingInsuranceClaim).toStrictEqual(false)
      expect(bookingHasRoadsideEvent).toStrictEqual(false)
      expect(bookingHasValidDriver).toStrictEqual(false)
      expect(bookingId).toStrictEqual(0)
      expect(bookingInsurancePricingStrategy).toStrictEqual('')
      expect(bookingIsDuplicate).toStrictEqual(false)
      expect(bookingIsEZYmatch).toStrictEqual(false)
      expect(bookingIsFreshInstantBook).toStrictEqual(false)
      expect(bookingIsFreshInstantBooking).toStrictEqual(false)
      expect(bookingIsInstabook).toStrictEqual(false)
      expect(bookingIsInsured).toStrictEqual(false)
      expect(bookingIsPaused).toStrictEqual(false)
      expect(bookingIsShortStay).toStrictEqual(false)
      expect(bookingIsSpecialOffer).toStrictEqual(false)
      expect(bookingModifiedByChangeRequestOrByAdminAdditionalCharge).toStrictEqual(false)
      expect(bookingNoPaymentMethod).toStrictEqual(false)
      expect(bookingNumberOfDays).toStrictEqual(0)
      expect(bookingNumberOfNights).toStrictEqual(0)
      expect(bookingOwnerCanCreateClaim).toStrictEqual(false)
      expect(bookingOwnerId).toStrictEqual(0)
      expect(bookingOwnerServiceFeePct).toStrictEqual(0)
      expect(bookingPaymentFailed).toStrictEqual(false)
      expect(bookingPets).toStrictEqual(false)
      expect(bookingPreviousStage).toStrictEqual('')
      expect(bookingReferralCreditPayout).toStrictEqual(0)
      expect(bookingReferralCreditRental).toStrictEqual(0)
      expect(bookingRentalContractIsSignedByOwner).toStrictEqual(false)
      expect(bookingRentalContractIsSignedByRenter).toStrictEqual(false)
      expect(bookingRenterId).toStrictEqual(0)
      expect(bookingRenterServiceFee).toStrictEqual(0)
      expect(bookingRequestDate).toStrictEqual('')
      expect(bookingRequestedPaymentMode).toStrictEqual('')
      expect(bookingResidenceTaxPct).toStrictEqual(0)
      expect(bookingRoadsideAssistanceDailyFee).toStrictEqual(0)
      expect(bookingRoadsideAssistanceState).toStrictEqual(false)
      expect(bookingRVId).toStrictEqual('')
      expect(bookingRvUsage).toStrictEqual('')
      expect(bookingStage).toStrictEqual(undefined)
      expect(bookingStartDate).toStrictEqual('')
      expect(bookingStatus).toStrictEqual('')
      expect(bookingSubTotal).toStrictEqual(0)
      expect(bookingTaxRemittanceStatus).toStrictEqual('')
      expect(bookingTripIsInProgress).toStrictEqual(false)
      expect(bookingType).toStrictEqual('')
    })

    test('returns advanced `has` checks', () => {
      const {
        bookingHasCustomQuote,
        bookingHasFomoTagsEnabled,
      } = getBookingDetails(null)

      expect(bookingHasCustomQuote).toStrictEqual(false)
      expect(bookingHasFomoTagsEnabled).toStrictEqual(true)
    })
  })
})
