import {
  BadgeColors,
  BookingPreferencesTypeEnumKey,
  BookingPseudoStage,
  BookingStageEnumKey,
  CancellationTypeEnumKey,
  DeclinationActions,
  DeclineOrCancelReasonDetailsEnumKey,
  DeclineOrCancelReasonEnumKey,
  RentalTypeEnumKey,
  RvUsageTypeEnumKey,
} from '../enums'
import { isTravelTrailer as isRVTravelTrailer } from '../rvs'
import { CANCELLATION_POLICY_OPTIONS } from '~/constants/booking'
import { COUNTRY_SHORTS } from '@/constants'
import { getRenterTotalAmount } from '@/lib/financial'
import { AllowFestivalEventsParticipation } from '@/lib/enums/frontendEnums'
import dates from '~/utils/dates'

/** @deprecated use bookingIsSpecialOffer from useBookingDetails instead */
export const isSpecialOffer = (booking) => booking.IsSpecialOffer

/** @deprecated use bookingStage from useBookingDetails instead */
export const isCanceled = (booking) => /Canceled/.test(booking.Stage)

/** @deprecated use bookingStage from useBookingDetails instead */
export const isDeclined = (booking) => /Declined/.test(booking.Stage)

/** @deprecated use bookingStage from useBookingDetails instead */
export const isExpired = (booking) => /Expired/.test(booking.Stage)

/** @deprecated use bookingIsInactive from useBookingDetails instead */
export const isInactive = (booking) =>
  isCanceled(booking) || isDeclined(booking) || isExpired(booking) || isTripEnded(booking)

/** @deprecated use bookingStage from useBookingDetails instead */
export const isEnquiry = (booking) => booking.Stage === BookingStageEnumKey.EnquiryRequest

/** @deprecated use bookingStage from useBookingDetails instead */
export const isDepositTaken = (booking) => booking.Stage === BookingStageEnumKey.DepositTaken

/** @deprecated use bookingStage from useBookingDetails instead */
export const isAwaitingOwnerApproval = (booking) => booking.Stage === BookingStageEnumKey.AwaitingOwnerApproval

/** @deprecated use bookingStage from useBookingDetails instead */
export const isAwaitingPayment = (booking) => booking.Stage === BookingStageEnumKey.AwaitingPayment

/** @deprecated use bookingIsInstabook from useBookingDetails instead */
export const isInstantbook = (booking) => booking.IsInstabook

/** @deprecated use bookingIsCustomQuote from useBookingDetails instead */
export const isBookingCustomQuote = (booking) => booking?.CustomTotalRentalAmount > 0

/** @deprecated use bookingIsEZYmatch from useBookingDetails instead */
export const isBookingEzyMatch = (booking) => booking?.IsEZYmatch

/** @deprecated use bookingHasStarted from useBookingDetails instead */
export const hasStarted = (booking) => {
  const stagesAfterStarted = [
    BookingStageEnumKey.TripStarted,
    BookingStageEnumKey.Completed,
    BookingStageEnumKey.CompleteInProcess,
    BookingStageEnumKey.Invoice,
    BookingStageEnumKey.ProcessCompleteFail,
    BookingStageEnumKey.PendingDispute,
    BookingStageEnumKey.PendingOwnerCloseout,
    BookingStageEnumKey.PendingInsuranceClaim,
    BookingStageEnumKey.PendingRenterCloseout,
  ]

  return stagesAfterStarted.includes(booking.Stage)
}

/** @deprecated use bookingHasEnded from useBookingDetails instead */
export const isTripEnded = (booking) => {
  const stagesAfterTripEnded = [
    BookingStageEnumKey.Completed,
    BookingStageEnumKey.CompleteInProcess,
    BookingStageEnumKey.ProcessCompleteFail,
    BookingStageEnumKey.PendingDispute,
    BookingStageEnumKey.PendingOwnerCloseout,
    BookingStageEnumKey.PendingInsuranceClaim,
    BookingStageEnumKey.PendingRenterCloseout,
  ]
  return stagesAfterTripEnded.includes(booking.Stage)
}

/** @deprecated use bookingIsConfirmed from useBookingDetails instead */
export const isBookingConfirmed = (booking) => {
  const stages = [
    BookingStageEnumKey.DepositTaken,
    BookingStageEnumKey.FullPaymentReceived,
    BookingStageEnumKey.SecurityDepositTaken,
    BookingStageEnumKey.PendingOwnerCloseout,
    BookingStageEnumKey.PendingRenterCloseout,
    BookingStageEnumKey.PendingDispute,
    BookingStageEnumKey.PendingPayout,
    BookingStageEnumKey.PendingInsuranceClaim,
    BookingStageEnumKey.TripStarted,
    BookingStageEnumKey.InstantBooking,
    BookingStageEnumKey.CompleteInProcess,
    BookingStageEnumKey.ProcessCompleteFail,
    BookingStageEnumKey.PendingPayoutOnCancel,
  ]
  return stages.includes(booking.Stage)
}

/** @deprecated use bookingIsInPaymentStage from useBookingDetails instead */
export const isPaymentStage = (booking) => {
  const stages = [BookingStageEnumKey.AwaitingOwnerApproval, BookingStageEnumKey.AwaitingPayment]
  return stages.includes(booking.Stage)
}

/** @deprecated use bookingIsNotHappening from useBookingDetails instead */
export const isNotHappening = (booking) => {
  return isCanceled(booking) || isDeclined(booking) || isExpired(booking)
}

/** @deprecated use bookingCanBeCanceled from useBookingDetails instead */
export const canCancelBooking = (booking) => {
  const stages = [
    BookingStageEnumKey.EnquiryRequest,
    BookingStageEnumKey.InstantBooking,
    BookingStageEnumKey.Invoice,
    BookingStageEnumKey.AwaitingOwnerApproval,
    BookingStageEnumKey.DepositTaken,
    BookingStageEnumKey.SecurityDepositTaken,
    BookingStageEnumKey.FullPaymentReceived,
    BookingStageEnumKey.AwaitingPayment,
  ]
  return stages.includes(booking.Stage)
}

/** @deprecated use bookingAmountDue from useBookingDetails instead */
export const amountToPay = (booking) => {
  return booking.AmountDue
}

/** @deprecated use bookingIsInUs from useBookingDetails instead */
export const isBookingInUs = (booking) => booking.Country === COUNTRY_SHORTS.US

/** @deprecated use bookingIsInCanada from useBookingDetails instead */
export const isBookingInCanada = (booking) => booking.Country === COUNTRY_SHORTS.CA

/** @deprecated use snapshotRvType from useBookingDetails instead */
export const getRvType = (booking) => booking.RVSnapshot.RVType

/** @deprecated use bookingTotal from useBookingDetails instead */
export const bookingTotal = (booking) => {
  const renterTotal = getRenterTotalAmount(booking.Financial)
  if (!booking.Financial.Discount && !booking.Financial.CreditsToBeApplied) return renterTotal
  return Math.max(renterTotal - (booking.Financial.Discount + booking.Financial.CreditsToBeApplied), 0)
}

/** @deprecated use snapshotRentalType from useBookingDetails instead */
export const getRentalType = (booking) => booking.RVSnapshot.RentalType

/** @deprecated use snapshotIsMotorHome from useBookingDetails instead */
export const isMotorHome = (booking) => getRentalType(booking) === RentalTypeEnumKey.MotorHome

/** @deprecated use snapshotIsTravelTrailer from useBookingDetails instead */
export const isTravelTrailer = (booking) => getRentalType(booking) === RentalTypeEnumKey.TravelTrailer

/** @deprecated use snapshotIsRVCottage from useBookingDetails instead */
export const isRVCottage = (booking) => getRentalType(booking) === RentalTypeEnumKey.RVCottage

/** @deprecated use bookingHasDelivery from useBookingDetails instead */
export const bookingHasDelivery = (booking) => {
  if (!booking) return false
  return rvUsageIsDelivery(booking.RvUsage)
}

/** @deprecated use bookingRvUsage from useBookingDetails instead */
export const rvUsageIsDelivery = (rvUsage) => {
  return [RvUsageTypeEnumKey.Delivery, RvUsageTypeEnumKey.StationaryAfterDelivery].includes(rvUsage)
}

/** @deprecated use bookingRvUsage from useBookingDetails instead */
export const stationaryAfterDelivery = (booking) => {
  if (!booking) return false
  return booking.RvUsage === RvUsageTypeEnumKey.StationaryAfterDelivery
}

/** @deprecated use bookingRvUsage from useBookingDetails instead */
export const isPickup = (booking) => {
  if (!booking) return false
  return booking.RvUsage === RvUsageTypeEnumKey.Pickup
}

/** @deprecated use bookingHasCloseoutCharges from useBookingDetails instead */
export const hasCloseoutCharges = (booking) => {
  if (booking.AdditionalBookingCharges) {
    const charges = booking.AdditionalBookingCharges
    return charges.GeneratorCharges + charges.MileageCharges + charges.DamageCharges + charges.OtherCharges > 0
  }
  return false
}

/** @deprecated use bookingHasNoPaymentMethod from useBookingDetails instead */
export const hasPaymentInfo = (booking) => !booking.NoPaymentMethod

/** @deprecated use bookingHasRequiredPreference from useBookingDetails instead */
const hasRequiredPreference = (booking, preferenceType) => {
  return booking?.BookingPreferences?.find(
    (preference) => preference.PreferenceType === preferenceType && preference.RequiredType !== 'NotRequired',
  )
}

/** @deprecated use bookingHasRenterAnswer from useBookingDetails instead */
const answerIsTrue = (preference) => {
  return preference?.RenterAnswer?.toLowerCase() === 'true'
}

/** @deprecated use bookingHasExperiencedDriverPreference from useBookingDetails instead */
export const experienceDriverPreference = (booking) => {
  return (
    !isRVCottage(booking) && hasRequiredPreference(booking, BookingPreferencesTypeEnumKey.AllowOnlyExperiencedSimilarRV)
  )
}

export const hasExperiencedDriver = (booking) => {
  return answerIsTrue(experienceDriverPreference(booking))
}

/** @deprecated use bookingHasFestivalsPreference from useBookingDetails instead */
export const festivalsEventsPreference = (booking) => {
  return (
    !isRVCottage(booking)
    && hasRequiredPreference(booking, BookingPreferencesTypeEnumKey.AllowFestivalEventsParticipation)
  )
}

export const isGoingToFestivalOrEvent = (booking) => {
  return answerIsTrue(festivalsEventsPreference(booking))
}

export const festivalsEventsPreferenceDestination = (booking) => {
  const destination = booking?.BookingPreferences?.find(
    (preference) =>
      preference.PreferenceType === BookingPreferencesTypeEnumKey.AllowFestivalEventsParticipation
      && preference.RequiredType !== 'NotRequired',
  )
  return destination?.RenterAnswerDetails || ''
}

export const CardFailureMappings = Object.freeze({
  // contactIssuer
  call_issuer: 'contactIssuer',
  do_not_honor: 'contactIssuer',
  do_not_try_again: 'contactIssuer',
  duplicate_transaction: 'contactIssuer',
  fraudulent: 'contactIssuer',
  generic_decline: 'contactIssuer',
  invalid_account: 'contactIssuer',
  lost_card: 'contactIssuer',
  merchant_blacklist: 'contactIssuer',
  new_account_information_available: 'contactIssuer',
  no_action_taken: 'contactIssuer',
  not_permitted: 'contactIssuer',
  offline_pin_required: 'contactIssuer',
  restricted_card: 'contactIssuer',
  revocation_of_all_authorizations: 'contactIssuer',
  revocation_of_authorization: 'contactIssuer',
  security_violation: 'contactIssuer',
  service_not_allowed: 'contactIssuer',
  stolen_card: 'contactIssuer',
  stop_payment_order: 'contactIssuer',
  transaction_not_allowed: 'contactIssuer',
  approve_with_id: 'contactIssuer',
  issuer_not_available: 'contactIssuer',
  processing_error: 'contactIssuer',
  reenter_transaction: 'contactIssuer',
  try_again_later: 'contactIssuer',

  // tryDifferentCard
  authentication_required: 'tryDifferentCard',
  card_not_supported: 'tryDifferentCard',
  currency_not_supported: 'tryDifferentCard',
  online_or_offline_pin_required: 'tryDifferentCard',
  pin_try_exceeded: 'tryDifferentCard',
  testmode_decline: 'tryDifferentCard',

  // limitExceeded
  card_velocity_exceeded: 'limitExceeded',
  invalid_amount: 'limitExceeded',
  withdrawal_count_limit_exceeded: 'limitExceeded',

  // insufficientFunds
  insufficient_funds: 'insufficientFunds',

  // cardExpired
  expired_card: 'cardExpired',

  // wrongCVC
  incorrect_cvc: 'wrongCVC',
  invalid_cvc: 'wrongCVC',

  // wrongNumber
  incorrect_number: 'wrongNumber',
  invalid_number: 'wrongNumber',

  // incorrect_zip
  incorrect_zip: 'incorrectZip',

  // wrongExpiry
  invalid_expiry_month: 'wrongExpiry',
  invalid_expiry_year: 'wrongExpiry',

  // calendar unavailable
  calendar_unavailable: 'calendarUnavailable',
})

/** @deprecated */
export const isBookingInStage = (booking, stage) => {
  return booking.Stage === stage
}

/** @deprecated */
export const isBookingInStages = (booking, stages) => {
  return stages.includes(booking.Stage)
}

export const IsBookingCancelledPayoutGuarantee = (booking) => {
  return booking.IsIncomeProtected === true && booking.CancellationType === CancellationTypeEnumKey.AdminCancellation
}

export const totalRentalPayments = (booking) => {
  return booking.Financial.TotalRentalPayments
}

// In case the renter chooses the refund with credits we will provide 10% additional amount
export const rvezyCreditsAmount = (booking) => {
  let total = totalRentalPayments(booking)
  total = Number(total + total * 0.1).toFixed(2)
  return Number(total)
}

export const didPaymentFail = (booking) => {
  return (
    booking.PaymentFailed && !booking.NoPaymentMethod && !isBookingInStage(booking, BookingStageEnumKey.AwaitingPayment)
  )
}

export const isPrepaidStage = (stage, noPaymentMethod) => {
  return stage === BookingStageEnumKey.AwaitingOwnerApproval && !noPaymentMethod
}

export const getOwnerDeclineActionsFromReasons = ({ reason, details, rv = {}, hasExternalCalendar = false }) => {
  // skip processing if param is undefined
  if (!reason) return []

  switch (reason) {
    case DeclineOrCancelReasonEnumKey.MyRvIsNotAvailableForRentOnTheRequestedDates: {
      if (details === DeclineOrCancelReasonDetailsEnumKey.PersonalUse) return [DeclinationActions.UPDATE_CALENDAR]

      if (details === DeclineOrCancelReasonDetailsEnumKey.BookedElsewhere) {
        const actions = [DeclinationActions.UPDATE_CALENDAR]
        if (hasExternalCalendar) return actions
        return [...actions, DeclinationActions.SYNC_CALENDAR]
      }

      if (details === DeclineOrCancelReasonDetailsEnumKey.AmNotAvailableToReleaseOrReturnRv)
        return [DeclinationActions.UPDATE_CALENDAR, DeclinationActions.CALENDAR_SETTINGS]

      // other
      const actions = [DeclinationActions.UPDATE_CALENDAR, DeclinationActions.CALENDAR_SETTINGS]

      if (hasExternalCalendar) return actions

      return [...actions, DeclinationActions.SYNC_CALENDAR]
    }
    case DeclineOrCancelReasonEnumKey.MyRvIsNotFitForTheRoad:
    case DeclineOrCancelReasonEnumKey.ExtenuatingCircumstances:
      return [DeclinationActions.UPDATE_CALENDAR]

    case DeclineOrCancelReasonEnumKey.HaveConcernsWithThisRenter:
      if (details === DeclineOrCancelReasonDetailsEnumKey.NotComfortableRenterExperience) {
        const actions = [DeclinationActions.LEARN_HOST_PROTECTION]

        if (rv.AllowOnlyExperiencedSimilarRV) return actions

        if (isRVTravelTrailer(rv)) return [...actions, DeclinationActions.TOWING_PREFERENCES]

        return [...actions, DeclinationActions.DRIVING_PREFERENCES]
      }

      if (details === DeclineOrCancelReasonDetailsEnumKey.RenterIsTakingMyRvToFestivalOrEvent) {
        const actions = [DeclinationActions.LEARN_HOST_PROTECTION]

        if (rv.AllowFestivalEventsParticipation === AllowFestivalEventsParticipation.No)
          return [...actions, DeclinationActions.EVENT_PREFERENCES]

        return actions
      }

      if (
        [
          DeclineOrCancelReasonDetailsEnumKey.MinimumRentalDaysNotMet,
          DeclineOrCancelReasonDetailsEnumKey.NoLongerRentingForTwoDayTrips,
        ].includes(details)
      )
        return [DeclinationActions.CALENDAR_SETTINGS]

      return [DeclinationActions.LEARN_HOST_PROTECTION]

    case DeclineOrCancelReasonEnumKey.ThisRvHasBeenSoldOrWillBeSold:
      return [DeclinationActions.UPDATE_CALENDAR, DeclinationActions.UNPUBLISH]

    // Other
    default: {
      const otheractions = [DeclinationActions.UPDATE_CALENDAR, DeclinationActions.CALENDAR_SETTINGS]

      if (hasExternalCalendar) return otheractions

      return [...otheractions, DeclinationActions.SYNC_CALENDAR]
    }
  }
}

/** @deprecated use bookingIsPaid from useBookingDetails instead */
export const isPaid = (booking) => {
  if (!booking) return false
  return Boolean(booking.PaymentMethod && !booking.PaymentFailed)
}

/** @deprecated use bookingNumberOfNightss from useBookingDetails instead */
export const numberOfNights = (booking) => {
  if (!booking) return 0
  return numberOfNightsBetweenDates(booking.DateStart, booking.DateEnd)
}

export const numberOfNightsBetweenDates = (dateStart, dateEnd) => {
  if (!dateStart || !dateEnd) return 0
  return dates(dateEnd).diff(dates(dateStart), 'days')
}

export const getBadgeColorForHost = (stage) => {
  const lookup = {
    [BookingStageEnumKey.AwaitingOwnerApproval]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingOwnerCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingRenterCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingDispute]: BadgeColors.Yellow,
    [BookingPseudoStage.PendingChangeRequest]: BadgeColors.Yellow,

    [BookingStageEnumKey.AwaitingPayment]: BadgeColors.Blue,
    [BookingStageEnumKey.Invoice]: BadgeColors.Blue,
    [BookingStageEnumKey.EnquiryRequest]: BadgeColors.Blue,

    [BookingStageEnumKey.InstantBooking]: BadgeColors.Green,
    [BookingStageEnumKey.DepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.FullPaymentReceived]: BadgeColors.Green,
    [BookingStageEnumKey.SecurityDepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.TripStarted]: BadgeColors.Green,
    [BookingStageEnumKey.Completed]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayout]: BadgeColors.Green,
    [BookingStageEnumKey.CompleteInProcess]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayoutOnCancel]: BadgeColors.Green,
    [BookingStageEnumKey.ProcessCompleteFail]: BadgeColors.Green,

    [BookingStageEnumKey.CanceledByTheOwner]: BadgeColors.Red,
    [BookingStageEnumKey.DeclinedByTheOwner]: BadgeColors.Red,
    [BookingStageEnumKey.ExpiredRequest]: BadgeColors.Red,

    [BookingStageEnumKey.CanceledByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.CanceledByTheAdmin]: BadgeColors.Grey,
    [BookingStageEnumKey.DeclinedByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.ExpiredNoPayment]: BadgeColors.Grey,
  }

  return lookup[stage] || BadgeColors.Grey
}

export const getBadgeColorForGuest = (stage) => {
  const lookup = {
    [BookingStageEnumKey.PendingOwnerCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingRenterCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingDispute]: BadgeColors.Yellow,
    [BookingStageEnumKey.AwaitingPayment]: BadgeColors.Yellow,

    [BookingStageEnumKey.AwaitingOwnerApproval]: BadgeColors.Blue,
    [BookingStageEnumKey.Invoice]: BadgeColors.Blue,
    [BookingStageEnumKey.EnquiryRequest]: BadgeColors.Blue,
    [BookingPseudoStage.PendingChangeRequest]: BadgeColors.Blue,

    [BookingStageEnumKey.InstantBooking]: BadgeColors.Green,
    [BookingStageEnumKey.DepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.FullPaymentReceived]: BadgeColors.Green,
    [BookingStageEnumKey.SecurityDepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.TripStarted]: BadgeColors.Green,
    [BookingStageEnumKey.Completed]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayout]: BadgeColors.Green,
    [BookingStageEnumKey.CompleteInProcess]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayoutOnCancel]: BadgeColors.Green,
    [BookingStageEnumKey.ProcessCompleteFail]: BadgeColors.Green,

    [BookingStageEnumKey.CanceledByTheOwner]: BadgeColors.Grey,
    [BookingStageEnumKey.DeclinedByTheOwner]: BadgeColors.Grey,
    [BookingStageEnumKey.ExpiredRequest]: BadgeColors.Grey,
    [BookingStageEnumKey.CanceledByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.CanceledByTheAdmin]: BadgeColors.Grey,
    [BookingStageEnumKey.DeclinedByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.ExpiredNoPayment]: BadgeColors.Grey,
  }

  return lookup[stage] || BadgeColors.Grey
}

/** @deprecated use: getCancellationPolicyByStartDate from utils instead */
export const getCancellationPolicyByStartDate = (startDate) => {
  const diffDays = dates(startDate).diff(dates(), 'days')

  if (!startDate) return CANCELLATION_POLICY_OPTIONS.NoDatesSelected

  if (diffDays <= 7) {
    return CANCELLATION_POLICY_OPTIONS.LessThan7Days
  }
  else if (diffDays > 7 && diffDays <= 30) {
    return CANCELLATION_POLICY_OPTIONS.Between8To30Days
  }
  else if (diffDays > 30 && diffDays <= 60) {
    return CANCELLATION_POLICY_OPTIONS.MoreThan30Days
  }
  else {
    return CANCELLATION_POLICY_OPTIONS.MoreThan60Days
  }
}

/** @deprecated use bookingProtectionLevel from useBookingDetails instead */
export const getProtectionPlan = (booking) => {
  if (!booking) return

  return booking.ProtectionLevel?.toLowerCase()
}

/** @deprecated use bookingRoadsideAssistanceState from useBookingDetails instead */
export const getRoadsideAssistance = (booking) => {
  if (!booking) return

  return booking.RoadsideAssistanceState
}

/**
 * Filters addons to only include RVAddons or a CustomTotal addon.
 * @deprecated use getBookingDetails instead
 */
export const getAddons = (addon) => {
  return (
    addon.AddOnType === 0 || addon.AddOnType === 'RVAddOn' || addon.AddOnType === 3 || addon.AddOnType === 'CustomTotal'
  )
}

/**
 * Filters addons to only include RVAddons.
 * @deprecated use getBookingDetails instead
 */
export const getRVAddons = (addon) => {
  return addon.AddOnType === 0 || addon.AddOnType === 'RVAddOn'
}

/** @deprecated use getBookingDetails instead */
export const getSmartPricingPercentage = (booking) => booking.RVSnapshot.SmartPricingPercentage

/** @deprecated use getBookingDetails instead */
export const getSmartPricingMinPrice = (booking) => booking.RVSnapshot.SmartPricingMinPrice

/** @deprecated use getBookingDetails instead */
export const getHasSmartPricing = (booking) => booking.RVSnapshot.HasSmartPricingApplied

/** @deprecated use getBookingDetails instead */
export const getSmartPricingRate = (booking) => (getHasSmartPricing(booking) ? getDefaultPrice(booking) : undefined)

/** @deprecated use getBookingDetails instead */
export const getOriginalRate = (booking) => {
  if (!booking || !booking.RVSnapshot || !booking.RVSnapshot.OriginalDefaultPrice) return

  const originalRate = Math.round(booking.RVSnapshot.OriginalDefaultPrice)
  return originalRate
}

/** @deprecated use getBookingDetails instead */
export const getDefaultPrice = (booking) => booking?.RVSnapshot?.DefaultPrice

/** @deprecated use getBookingDetails instead */
export const getRate = (booking) => {
  return getOriginalRate(booking) || getDefaultPrice(booking)
}

/** @deprecated use getBookingDetails instead */
export const isFomoTagEnabledBooking = (booking) => !isBookingEzyMatch(booking) && !isBookingCustomQuote(booking)

/** @deprecated use getBookingDetails instead */
export function getDistancePriceKms(booking) {
  return booking.RVSnapshot.IsChargeMileage ? booking.RVSnapshot.SurchargePerExtraKM ?? undefined : undefined
}

export const canEditDates = (booking) => {
  return [
    BookingStageEnumKey.AwaitingOwnerApproval,
    BookingStageEnumKey.AwaitingPayment,
    BookingStageEnumKey.DepositTaken,
    BookingStageEnumKey.SecurityDepositTaken,
    BookingStageEnumKey.FullPaymentReceived,
    BookingStageEnumKey.TripStarted,
    BookingStageEnumKey.PendingOwnerCloseout,
    BookingStageEnumKey.PendingRenterCloseout,
  ].includes(booking.Stage)
}

export const canEditDetails = (booking) => {
  return [
    BookingStageEnumKey.AwaitingOwnerApproval,
    BookingStageEnumKey.AwaitingPayment,
    BookingStageEnumKey.InstantBooking,
    BookingStageEnumKey.DepositTaken,
    BookingStageEnumKey.SecurityDepositTaken,
    BookingStageEnumKey.FullPaymentReceived,
  ].includes(booking.Stage)
}

export const canSendChangeRequestNeedsApprovalOtherUser = (booking) => {
  return (
    isBookingInStages(booking, [
      BookingStageEnumKey.InstantBooking,
      BookingStageEnumKey.DepositTaken,
      BookingStageEnumKey.SecurityDepositTaken,
      BookingStageEnumKey.FullPaymentReceived,
      BookingStageEnumKey.TripStarted,
      BookingStageEnumKey.PendingOwnerCloseout,
      BookingStageEnumKey.PendingRenterCloseout,
    ]) && !booking.PaymentFailed
  )
}

/**
 * Refactored functions for bookings.
 *
 * TODO: These will have terrible names for now, until we fully replace them.
 */
export const getBadgeColorByBookingStageForHost = (bookingStage) => {
  const lookup = {
    [BookingStageEnumKey.AwaitingOwnerApproval]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingOwnerCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingRenterCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingDispute]: BadgeColors.Yellow,
    [BookingPseudoStage.PendingChangeRequest]: BadgeColors.Yellow,

    [BookingStageEnumKey.AwaitingPayment]: BadgeColors.Blue,
    [BookingStageEnumKey.Invoice]: BadgeColors.Blue,
    [BookingStageEnumKey.EnquiryRequest]: BadgeColors.Blue,

    [BookingStageEnumKey.InstantBooking]: BadgeColors.Green,
    [BookingStageEnumKey.DepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.FullPaymentReceived]: BadgeColors.Green,
    [BookingStageEnumKey.SecurityDepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.TripStarted]: BadgeColors.Green,
    [BookingStageEnumKey.Completed]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayout]: BadgeColors.Green,
    [BookingStageEnumKey.CompleteInProcess]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayoutOnCancel]: BadgeColors.Green,
    [BookingStageEnumKey.ProcessCompleteFail]: BadgeColors.Green,

    [BookingStageEnumKey.CanceledByTheOwner]: BadgeColors.Red,
    [BookingStageEnumKey.DeclinedByTheOwner]: BadgeColors.Red,
    [BookingStageEnumKey.ExpiredRequest]: BadgeColors.Red,

    [BookingStageEnumKey.CanceledByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.CanceledByTheAdmin]: BadgeColors.Grey,
    [BookingStageEnumKey.DeclinedByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.ExpiredNoPayment]: BadgeColors.Grey,
  }

  return lookup[bookingStage] || BadgeColors.Grey
}

export const getBadgeColorByBookingStageForGuest = (bookingStage) => {
  const lookup = {
    [BookingStageEnumKey.PendingOwnerCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingRenterCloseout]: BadgeColors.Yellow,
    [BookingStageEnumKey.PendingDispute]: BadgeColors.Yellow,
    [BookingStageEnumKey.AwaitingPayment]: BadgeColors.Yellow,

    [BookingStageEnumKey.AwaitingOwnerApproval]: BadgeColors.Blue,
    [BookingStageEnumKey.Invoice]: BadgeColors.Blue,
    [BookingStageEnumKey.EnquiryRequest]: BadgeColors.Blue,
    [BookingPseudoStage.PendingChangeRequest]: BadgeColors.Blue,

    [BookingStageEnumKey.InstantBooking]: BadgeColors.Green,
    [BookingStageEnumKey.DepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.FullPaymentReceived]: BadgeColors.Green,
    [BookingStageEnumKey.SecurityDepositTaken]: BadgeColors.Green,
    [BookingStageEnumKey.TripStarted]: BadgeColors.Green,
    [BookingStageEnumKey.Completed]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayout]: BadgeColors.Green,
    [BookingStageEnumKey.CompleteInProcess]: BadgeColors.Green,
    [BookingStageEnumKey.PendingPayoutOnCancel]: BadgeColors.Green,
    [BookingStageEnumKey.ProcessCompleteFail]: BadgeColors.Green,

    [BookingStageEnumKey.CanceledByTheOwner]: BadgeColors.Grey,
    [BookingStageEnumKey.DeclinedByTheOwner]: BadgeColors.Grey,
    [BookingStageEnumKey.ExpiredRequest]: BadgeColors.Grey,
    [BookingStageEnumKey.CanceledByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.CanceledByTheAdmin]: BadgeColors.Grey,
    [BookingStageEnumKey.DeclinedByTheRenter]: BadgeColors.Grey,
    [BookingStageEnumKey.ExpiredNoPayment]: BadgeColors.Grey,
  }

  return lookup[bookingStage] || BadgeColors.Grey
}
