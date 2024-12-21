import {
  isCanceled,
  isDeclined,
  isExpired,
  amountToPay,
  bookingTotal,
  isBookingConfirmed,
  totalRentalPayments,
  rvezyCreditsAmount,
  getOwnerDeclineActionsFromReasons,
  getBadgeColorForGuest,
  getBadgeColorForHost,
  getCancellationPolicyByStartDate
} from '~/lib/bookings'
import bookingJson from '~/test/mocks/booking'
import {
  BadgeColors,
  BookingPreferenceRequiredTypeEnumKey,
  BookingPreferencesTypeEnumKey,
  DeclinationActions,
  DeclineOrCancelReasonDetailsEnumKey,
  DeclineOrCancelReasonEnumKey,
  RentalTypeEnumKey,
  BookingStageEnumKey,
  BookingPseudoStage,
} from '~/lib/enums'
import { CANCELLATION_POLICY_OPTIONS } from '~/constants/booking'

const booking = { ...bookingJson }
const getBookingInStage = (stage) => ({ ...bookingJson, Stage: stage })
const declinedByOwnerBooking = getBookingInStage('DeclinedByTheOwner')
const declinedByRenterBooking = getBookingInStage('DeclinedByTheRenter')
const canceledByOwnerBooking = getBookingInStage('CanceledByTheOwner')
const canceledByRenterBooking = getBookingInStage('CanceledByTheRenter')
const expiredRequestBooking = getBookingInStage('ExpiredRequest')
const expiredNoPaymentBooking = getBookingInStage('ExpiredNoPayment')
const expiredInstantBookBooking = getBookingInStage('ExpiredInstantBook')
const expiredByAdminBooking = getBookingInStage('ExpiredByAdmin')

describe('Library - Booking', () => {
  test('isDeclined', () => {
    expect(isDeclined(declinedByOwnerBooking)).toBe(true)
    expect(isDeclined(declinedByRenterBooking)).toBe(true)
    expect(isDeclined(canceledByOwnerBooking)).toBe(false)
    expect(isDeclined(canceledByRenterBooking)).toBe(false)
    expect(isDeclined(expiredRequestBooking)).toBe(false)
    expect(isDeclined(expiredNoPaymentBooking)).toBe(false)
    expect(isDeclined(expiredInstantBookBooking)).toBe(false)
    expect(isDeclined(expiredByAdminBooking)).toBe(false)
  })

  test('isCanceled', () => {
    expect(isCanceled(declinedByOwnerBooking)).toBe(false)
    expect(isCanceled(declinedByRenterBooking)).toBe(false)
    expect(isCanceled(canceledByOwnerBooking)).toBe(true)
    expect(isCanceled(canceledByRenterBooking)).toBe(true)
    expect(isCanceled(expiredRequestBooking)).toBe(false)
    expect(isCanceled(expiredNoPaymentBooking)).toBe(false)
    expect(isCanceled(expiredInstantBookBooking)).toBe(false)
    expect(isCanceled(expiredByAdminBooking)).toBe(false)
  })

  test('isExpired', () => {
    expect(isExpired(declinedByOwnerBooking)).toBe(false)
    expect(isExpired(declinedByRenterBooking)).toBe(false)
    expect(isExpired(canceledByOwnerBooking)).toBe(false)
    expect(isExpired(canceledByRenterBooking)).toBe(false)
    expect(isExpired(expiredRequestBooking)).toBe(true)
    expect(isExpired(expiredNoPaymentBooking)).toBe(true)
    expect(isExpired(expiredInstantBookBooking)).toBe(true)
    expect(isExpired(expiredByAdminBooking)).toBe(true)
  })

  test('amountToPay', () => {
    expect(amountToPay(booking)).toEqual(550.25)
  })

  test('bookingTotal', () => {
    expect(bookingTotal(booking)).toEqual(1415.17)
  })

  test('isBookingConfirmed', () => {
    expect(isBookingConfirmed(booking)).toBe(true)
  })

  test('totalRentalPayments', () => {
    expect(totalRentalPayments(booking)).toEqual(1425.16)
  })

  test('rvezyCreditsAmount', () => {
    expect(rvezyCreditsAmount(booking)).toEqual(1567.68)
  })

  test('Get cancellation policy by start date', () => {
    expect(getCancellationPolicyByStartDate(null)).toBe(CANCELLATION_POLICY_OPTIONS.NoDatesSelected)
  })

  describe('Test getOwnerDeclineActionsFromReasons function', () => {
    /* Helpers */
    const festivalNotAllowed = {
      PreferenceType: BookingPreferencesTypeEnumKey.AllowFestivalEventsParticipation,
      RequiredType: BookingPreferenceRequiredTypeEnumKey.NotRequired
    }

    const festivalNegotiable = {
      PreferenceType: BookingPreferencesTypeEnumKey.AllowFestivalEventsParticipation,
      RequiredType: BookingPreferenceRequiredTypeEnumKey.Negotiable
    }

    const experienceRequired = {
      PreferenceType: BookingPreferencesTypeEnumKey.AllowOnlyExperiencedSimilarRV,
      RequiredType: BookingPreferenceRequiredTypeEnumKey.Required
    }

    const experienceNotRequired = {
      PreferenceType: BookingPreferencesTypeEnumKey.AllowOnlyExperiencedSimilarRV,
      RequiredType: BookingPreferenceRequiredTypeEnumKey.Negotiable
    }

    const getRvMockWithPreferences = (arr = [], { isTravelTrailer = false } = {}) => ({
      RVPreferences: arr,
      RentalType: isTravelTrailer ? RentalTypeEnumKey.TravelTrailer : RentalTypeEnumKey.MotorHome
    })

    /* Test all combinations */

    test('RV not fit for the Road should return always only UPDATE_CALENDAR', () => {
      expect(
        getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.MyRvIsNotFitForTheRoad
        })
      ).toContain(DeclinationActions.UPDATE_CALENDAR)
    })

    test('Extenuating Circumstances should return always only UPDATE_CALENDAR', () => {
      expect(
        getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.ExtenuatingCircumstances
        })
      ).toContain(DeclinationActions.UPDATE_CALENDAR)
    })

    test('RV Sold should return always UPDATE_CALENDAR and UNPUBLISH', () => {
      const actions = getOwnerDeclineActionsFromReasons({
        reason: DeclineOrCancelReasonEnumKey.ThisRvHasBeenSoldOrWillBeSold
      })

      expect(actions).toContain(DeclinationActions.UPDATE_CALENDAR)
      expect(actions).toContain(DeclinationActions.UNPUBLISH)
    })

    describe('RV not available', () => {
      test('if for PERSONAL USE return UPDATE_CALENDAR', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates,
            details: DeclineOrCancelReasonDetailsEnumKey.PersonalUse
          })
        ).toContain(DeclinationActions.UPDATE_CALENDAR)
      })

      test('if for BOOKED ELSEWHERE and HAS CALENDAR return UPDATE_CALENDAR', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates,
            details: DeclineOrCancelReasonDetailsEnumKey.BookedElsewhere,
            hasExternalCalendar: true
          })
        ).toContain(DeclinationActions.UPDATE_CALENDAR)
      })

      test('if for BOOKED ELSEWHERE and HAS NO CALENDAR return UPDATE_CALENDAR and SYNC_CALENDAR', () => {
        const actions = getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates,
          details: DeclineOrCancelReasonDetailsEnumKey.BookedElsewhere,
          hasExternalCalendar: false
        })
        expect(actions).toContain(DeclinationActions.UPDATE_CALENDAR)
        expect(actions).toContain(DeclinationActions.SYNC_CALENDAR)
      })

      test('if for NOT AVAILABLE TO RELEASE return UPDATE_CALENDAR and CALENDAR_SETTINGS', () => {
        const actions = getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates,
          details: DeclineOrCancelReasonDetailsEnumKey.AmNotAvailableToReleaseOrReturnRv
        })
        expect(actions).toContain(DeclinationActions.UPDATE_CALENDAR)
        expect(actions).toContain(DeclinationActions.CALENDAR_SETTINGS)
      })

      test('if for OTHER and HAS CALENDAR return UPDATE_CALENDAR and CALENDAR_SETTINGS', () => {
        const actions = getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates,
          details: DeclineOrCancelReasonDetailsEnumKey.Other,
          hasExternalCalendar: true
        })
        expect(actions).toContain(DeclinationActions.UPDATE_CALENDAR)
        expect(actions).toContain(DeclinationActions.CALENDAR_SETTINGS)
      })

      test('if for OTHER and HAS NO CALENDAR return UPDATE_CALENDAR, SYNC_CALENDAR and CALENDAR_SETTINGS', () => {
        const actions = getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates,
          details: DeclineOrCancelReasonDetailsEnumKey.Other,
          hasExternalCalendar: false
        })

        expect(actions).toContain(DeclinationActions.UPDATE_CALENDAR)
        expect(actions).toContain(DeclinationActions.SYNC_CALENDAR)
        expect(actions).toContain(DeclinationActions.CALENDAR_SETTINGS)
      })
    })

    describe('Concerns with the guest', () => {
      test('If DONT FEEL COMFORTABLE WITH PEOPLE GOING return LEARN_HOST_PROTECTION', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
            details: DeclineOrCancelReasonDetailsEnumKey.DontFeelComfortableWithThePeopleGoingOnTheTrip
          })
        ).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
      })

      test('If TAKING RV TOO FAR return LEARN_HOST_PROTECTION', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
            details: DeclineOrCancelReasonDetailsEnumKey.RenterIsTakingMyRvTooFar
          })
        ).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
      })

      test('If TAKING RV TO ROAD UNFIT return LEARN_HOST_PROTECTION', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
            details: DeclineOrCancelReasonDetailsEnumKey.RenterIsTakingMyRvOnRoadThatIsUnfitForRvTravel
          })
        ).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
      })

      test('If OTHER return LEARN_HOST_PROTECTION', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
            details: DeclineOrCancelReasonDetailsEnumKey.Other
          })
        ).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
      })

      test('If MINIMUN DAYS NOT MET return CALENDAR_SETTINGS', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
            details: DeclineOrCancelReasonDetailsEnumKey.MinimumRentalDaysNotMet
          })
        ).toContain(DeclinationActions.CALENDAR_SETTINGS)
      })

      test('If NO LONGER TWO DAYS return CALENDAR_SETTINGS', () => {
        expect(
          getOwnerDeclineActionsFromReasons({
            reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
            details: DeclineOrCancelReasonDetailsEnumKey.NoLongerRentingForTwoDayTrips
          })
        ).toContain(DeclinationActions.CALENDAR_SETTINGS)
      })

      test('If TAKING TO FESTIVAL and HAS EVENT PREFERENCE set as YES return EVENT_PREFERENCES and LEARN_HOST_PROTECTION', () => {
        const actions = getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
          details: DeclineOrCancelReasonDetailsEnumKey.RenterIsTakingMyRvToFestivalOrEvent,
          rv: getRvMockWithPreferences([festivalNotAllowed])
        })

        expect(actions).toContain(DeclinationActions.EVENT_PREFERENCES)
        expect(actions).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
      })

      test('If TAKING TO FESTIVAL and HAS EVENT PREFERENCE not set as YES return LEARN_HOST_PROTECTION', () => {
        const actions = getOwnerDeclineActionsFromReasons({
          reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
          details: DeclineOrCancelReasonDetailsEnumKey.RenterIsTakingMyRvToFestivalOrEvent,
          rv: getRvMockWithPreferences([festivalNegotiable])
        })

        expect(actions).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
      })

      describe('If NOT COMFORTABLE WITH RENTER EXPERIENCE', () => {
        test('If DRIVING PREFERENCE set as YES return LEARN_HOST_PROTECTION', () => {
          expect(
            getOwnerDeclineActionsFromReasons({
              reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
              details: DeclineOrCancelReasonDetailsEnumKey.NotComfortableRenterExperience,
              rv: getRvMockWithPreferences([experienceRequired])
            })
          ).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
        })

        describe('If DRIVING PREFERENCE set as NO', () => {
          test('If TOWABLE return LEARN_HOST_PROTECTION and TOWING_PREFERENCES', () => {
            const actions = getOwnerDeclineActionsFromReasons({
              reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
              details: DeclineOrCancelReasonDetailsEnumKey.NotComfortableRenterExperience,
              rv: getRvMockWithPreferences([experienceNotRequired], { isTravelTrailer: true })
            })

            expect(actions).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
            expect(actions).toContain(DeclinationActions.TOWING_PREFERENCES)
          })

          test('If NOT TOWABLE return LEARN_HOST_PROTECTION and DRIVING_PREFERENCES', () => {
            const actions = getOwnerDeclineActionsFromReasons({
              reason: DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter,
              details: DeclineOrCancelReasonDetailsEnumKey.NotComfortableRenterExperience,
              rv: getRvMockWithPreferences([experienceNotRequired], { isTravelTrailer: false })
            })

            expect(actions).toContain(DeclinationActions.LEARN_HOST_PROTECTION)
            expect(actions).toContain(DeclinationActions.DRIVING_PREFERENCES)
          })
        })
      })
    })
  })

  describe('Get booking badge labels', () => {
    test('If AOA return Blue for Guests and Yellow for Hosts', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.AwaitingOwnerApproval })).toBe(BadgeColors.Blue)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.AwaitingOwnerApproval })).toBe(BadgeColors.Yellow)
    })

    test('If AP return Yellow for Guests and Blue for Hosts', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.AwaitingPayment })).toBe(BadgeColors.Yellow)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.AwaitingPayment })).toBe(BadgeColors.Blue)
    })

    test('If Invoice return Blue for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.Invoice })).toBe(BadgeColors.Blue)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.Invoice })).toBe(BadgeColors.Blue)
    })

    test('If EnquiryRequest return Blue for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.EnquiryRequest })).toBe(BadgeColors.Blue)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.EnquiryRequest })).toBe(BadgeColors.Blue)
    })

    test('If InstantBooking return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.InstantBooking })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.InstantBooking })).toBe(BadgeColors.Green)
    })

    test('If CanceledByTheRenter return Grey for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.CanceledByTheRenter })).toBe(BadgeColors.Grey)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.CanceledByTheRenter })).toBe(BadgeColors.Grey)
    })

    test('If CanceledByTheOwner return Grey for guest and Red for host', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.CanceledByTheOwner })).toBe(BadgeColors.Grey)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.CanceledByTheOwner })).toBe(BadgeColors.Red)
    })

    test('If CanceledByTheAdmin return Grey for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.CanceledByTheAdmin })).toBe(BadgeColors.Grey)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.CanceledByTheAdmin })).toBe(BadgeColors.Grey)
    })

    test('If DeclinedByTheRenter return Grey for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.DeclinedByTheRenter })).toBe(BadgeColors.Grey)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.DeclinedByTheRenter })).toBe(BadgeColors.Grey)
    })

    test('If DeclinedByTheOwner return Grey for guest and Red for host', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.DeclinedByTheOwner })).toBe(BadgeColors.Grey)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.DeclinedByTheOwner })).toBe(BadgeColors.Red)
    })

    test('If DepositTaken, FullPaymentReceived, SecurityDepositTaken return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.DepositTaken })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.DepositTaken })).toBe(BadgeColors.Green)

      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.FullPaymentReceived })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.FullPaymentReceived })).toBe(BadgeColors.Green)

      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.SecurityDepositTaken })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.SecurityDepositTaken })).toBe(BadgeColors.Green)
    })

    test('If TripStarted return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.TripStarted })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.TripStarted })).toBe(BadgeColors.Green)
    })

    test('If PendingOwnerCloseout return Yellow for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.PendingOwnerCloseout })).toBe(BadgeColors.Yellow)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.PendingOwnerCloseout })).toBe(BadgeColors.Yellow)
    })

    test('If PendingRenterCloseout return Yellow for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.PendingRenterCloseout })).toBe(BadgeColors.Yellow)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.PendingRenterCloseout })).toBe(BadgeColors.Yellow)
    })

    test('If Completed return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.Completed })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.Completed })).toBe(BadgeColors.Green)
    })

    test('If PendingPayout return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.PendingPayout })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.PendingPayout })).toBe(BadgeColors.Green)
    })

    test('If CompleteInProcess return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.CompleteInProcess })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.CompleteInProcess })).toBe(BadgeColors.Green)
    })

    test('If PendingPayoutOnCancel return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.PendingPayoutOnCancel })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.PendingPayoutOnCancel })).toBe(BadgeColors.Green)
    })

    test('If ProcessCompleteFail return Green for both', () => {
      expect(getBadgeColorForGuest({ Stage: BookingStageEnumKey.ProcessCompleteFail })).toBe(BadgeColors.Green)
      expect(getBadgeColorForHost({ Stage: BookingStageEnumKey.ProcessCompleteFail })).toBe(BadgeColors.Green)
    })

    test('If PendingChangeRequest return Blue for guest and Yellow for host', () => {
      expect(getBadgeColorForGuest({ Stage: BookingPseudoStage.PendingChangeRequest })).toBe(BadgeColors.Blue)
      expect(getBadgeColorForHost({ Stage: BookingPseudoStage.PendingChangeRequest })).toBe(BadgeColors.Yellow)
    })
  })
})
