import type { WeekdaysEnumKey } from '~/lib/enums'
import { WeekdaysEnum } from '~/lib/enums'
import type { BlockedRange, DaysOfWeek, ExpandedRvDetails, Nullable } from '~/types'
import { COUNTRY_CURRENCIES, COUNTRY_IDS, COUNTRY_SHORTS, DELIVERY_ADDON_PREFIX, UNIT_MEASUREMENT } from '~/constants'
import { Manufacturer, RentalTypeEnumKey } from '~/lib/enums/index.js'

export const getRvDetails = (rv?: Nullable<ExpandedRvDetails>) => {
  /**
   * Basic RV properties.
   * Always in the format of `rv[PropertyName]`.
   * Defaults are dependent on the schema and added manually.
   */
  const rvAliasName = rv?.AliasName ?? null
  const rvAllowCrossBorderTravel = rv?.AllowCrossBorderTravel ?? false
  const rvAllowFestivalEventsParticipation = rv?.AllowFestivalEventsParticipation ?? null
  const rvAllowOnlyExperiencedSimilarRV = rv?.AllowOnlyExperiencedSimilarRV ?? false
  const rvBedBunkDouble = rv?.BedBunkDouble ?? null
  const rvBedBunkTwin = rv?.BedBunkTwin ?? null
  const rvBedDinette = rv?.BedDinette ?? null
  const rvBedKing = rv?.BedKing ?? null
  const rvBedQueen = rv?.BedQueen ?? null
  const rvBedSofa = rv?.BedSofa ?? null
  const rvBookingSeasonEnd = rv?.BookingSeasonEnd ?? null
  const rvBookingSeasonStart = rv?.BookingSeasonStart ?? null
  const rvCalendars = rv?.Calendars ?? null
  const rvChargePerHourOver = rv?.ChargePerHourOver ?? null
  const rvCheckInAvailabilityDays = rv?.CheckInAvailabilityDays ?? null
  const rvCheckInEndTime = rv?.CheckInEndTime ?? null
  const rvCheckInStartTime = rv?.CheckInStartTime ?? null
  const rvCheckoutEndTime = rv?.CheckoutEndTime ?? null
  const rvCheckoutStartTime = rv?.CheckoutStartTime ?? null
  const rvCleaningFee = rv?.CleaningFee ?? 0
  const rvDailyKMAllowed = rv?.DailyKMAllowed ?? null
  const rvDefaultPrice = rv?.DefaultPrice ?? 0
  const rvDeliveryCentsPerDistanceUnit = rv?.DeliveryCentsPerDistanceUnit ?? null
  const rvDeliveryInstructions = rv?.DeliveryInstructions ?? null
  const rvDeliveryMaxDistance = rv?.DeliveryMaxDistance ?? null
  const rvDeliveryMinimumCostCents = rv?.DeliveryMinimumCostCents ?? null
  const rvFreeHoursPerDay = rv?.FreeHoursPerDay ?? null
  const rvFuelType = rv?.FuelType ?? null
  const rvGuests = rv?.Guests ?? 0
  const rvHitchSize = rv?.HitchSize ?? null
  const rvHitchWeight = rv?.HitchWeight ?? null
  const rvId = rv?.Id ?? ''
  const rvInsideLeadDays = rv?.InsideLeadDays ?? 0
  const rvInteriorFeatures = rv?.InteriorFeatures ?? null
  const rvIsActivated = rv?.IsActivated ?? false
  const rvIsChargeMileage = rv?.IsChargeMileage ?? null
  const rvIsDeliveryOnly = rv?.IsDeliveryOnly ?? false
  const rvIsFeatured = rv?.IsFeatured ?? false
  const rvIsGenerator = rv?.IsGenerator ?? null
  const rvIsInstantBook = rv?.IsInstantBook ?? false
  const rvIsInsured = rv?.IsInsured ?? rv?.Insured ?? false
  const rvIsSuperHostActive = rv?.IsSuperHostActive ?? false
  const rvLength = rv?.Length ?? null
  const rvListAddOns = rv?.ListAddOns ?? null
  const rvLocation = rv?.Location ?? null
  const rvMake = rv?.Make ?? null
  const rvMinimumTripLength = rv?.MinimumTripLength ?? 0
  const rvModel = rv?.Model ?? null
  const rvMonthlyDiscount = rv?.MonthlyDiscount ?? 0
  const rvOriginalPrice = rv?.OriginalPrice ?? 0
  const rvOutsideLeadDays = rv?.OutsideLeadDays ?? 0
  const rvOwnerAbout = rv?.OwnerAbout ?? null
  const rvOwnerAvatar = rv?.OwnerAvatar ?? null
  const rvOwnerCreatedAt = rv?.OwnerCreatedAt ?? null
  const rvOwnerFirstName = rv?.OwnerFirstName ?? null
  const rvOwnerId = rv?.OwnerId ?? 0
  const rvOwnerLastName = rv?.OwnerLastName ?? null
  const rvOwnerScore = rv?.OwnerScore ?? null
  const rvOwnerVerified = rv?.OwnerVerified ?? false
  const rvParkAmenities = rv?.ParkAmenities ?? null
  const rvPreBookingMessage = rv?.PreBookingMessage ?? null
  const rvPhotos = rv?.Photos ?? null
  const rvRentalType = rv?.RentalType
  const rvRenterCategoryRatings = rv?.RenterCategoryRatings ?? null
  const rvRenterRating = rv?.RenterRating ?? 0
  const rvReviews = rv?.Reviews ?? null
  const rvRVBrandOther = rv?.RVBrandOther ?? null
  const rvRVDescription = rv?.RVDescription ?? null
  const rvRVName = rv?.RVName ?? null
  const rvRVNumber = rv?.RVNumber ?? 0
  const rvRVSellingDate = rv?.RVSellingDate ?? null
  const rvRVType = rv?.RVType ?? null
  const rvSeatbeltThreePoint = rv?.SeatbeltThreePoint ?? null
  const rvSeatbeltTwoPoint = rv?.SeatbeltTwoPoint ?? null
  const rvSecurityDeposit = rv?.SecurityDeposit ?? null
  const rvSlideouts = rv?.Slideouts ?? null
  const rvSurchargePerExtraKM = rv?.SurchargePerExtraKM ?? null
  const rvTimezone = rv?.Timezone ?? null
  const rvTour3DUrl = rv?.Tour3DUrl ?? null
  const rvWeeklyDiscount = rv?.WeeklyDiscount ?? 0
  const rvWeight = rv?.Weight ?? null
  const rvYear = rv?.Year ?? 0

  /**
   * Advanced `has` checks that depend on more than just the base properties.
   * Always in the format of `has[CustomCheckName]`.
   */
  const rvHasAccommodations = (rvBedBunkDouble ?? 0) + (rvBedBunkTwin ?? 0) + (rvBedDinette ?? 0) + (rvBedKing ?? 0) + (rvBedQueen ?? 0) + (rvBedSofa ?? 0) > 0
  const rvHasAddons = rvListAddOns?.some((addon) => !addon?.Slug?.startsWith(DELIVERY_ADDON_PREFIX)) ?? false
  const rvHasDeliveryAddonsActive = rvListAddOns?.some((addon) => addon?.Slug?.startsWith(DELIVERY_ADDON_PREFIX) && addon.Status === 'Active') ?? false
  const rvHasPerUnitDelivery = Boolean(rvDeliveryMaxDistance && rvDeliveryCentsPerDistanceUnit && rvDeliveryMinimumCostCents)
  const rvHasDelivery = rvHasPerUnitDelivery
  const rvHasRangeDiscounts = rvWeeklyDiscount > 0 || rvMonthlyDiscount > 0

  /**
   * Helper `has` functions.
   *
   * TODO: this might be better in a different location, maybe the composable?
   */
  const rvHasAmenity = (amenity: string) => rvInteriorFeatures && Boolean(rvInteriorFeatures.find((item) => String(item).toLowerCase() === String(amenity).toLowerCase()))

  /**
   * Basic `is` checks.
   * Always in the format of `is[PropertyName]`.
   */
  const rvIsFromUs = rvLocation?.Country === COUNTRY_SHORTS.US // TODO: replace constant with backend type
  const rvIsFromCanada = rvLocation?.Country === COUNTRY_SHORTS.CA // TODO: replace constant with backend type
  const rvIsMotorized = rvRentalType === RentalTypeEnumKey.MotorHome // TODO: replace enum with backend type
  const rvIsTowable = rvRentalType === RentalTypeEnumKey.TravelTrailer // TODO: replace enum with backend type
  const rvIsStatic = rvRentalType === RentalTypeEnumKey.RVCottage // TODO: replace enum with backend type
  const rvIsChargeGeneratorEnabled = rvFreeHoursPerDay !== null && rvChargePerHourOver !== null
  const rvIsChargeMileageEnabled = rvDailyKMAllowed !== null && rvSurchargePerExtraKM !== null && rvDailyKMAllowed >= 0 && rvSurchargePerExtraKM !== 0

  /**
   * Advanced properties that depend on more than just the base properties.
   * Always in the format of `rv[CustomPropertyName]`.
   */
  const rvFormattedName = rvRVName ? rvRVName.replace(/"/g, '\\"') : ''
  const rvFormattedDescription = rvRVDescription ? rvRVDescription.replace(/"/g, '\\"') : ''
  const rvFormattedLocation = (rvLocation?.City && rvLocation?.State && rvLocation?.Country) ? `${rvLocation?.City}, ${rvLocation?.State}, ${lookupIsoCodeToCountry((rvLocation?.Country as 'CA' | 'US'))}` : ''
  const rvFullModelLabel = rvYear && rvModel ? `${rvYear} ${rvMake === Manufacturer.OTHER ? rvRVBrandOther : rvMake} ${rvModel}` : '' // TODO: replace constant with backend type
  const rvComputedTimezone = rvTimezone ?? rvLocation?.Timezone ?? 'America/New_York'
  const rvMinBookableDate = hasValue(rv?.InsideLeadDays) ? dates().tz(rvComputedTimezone).startOf('day').add(rvInsideLeadDays, 'days').toDate() : null
  const rvMaxBookableDate = hasValue(rv?.OutsideLeadDays) ? dates().tz(rvComputedTimezone).startOf('day').add(rvOutsideLeadDays, 'days').toDate() : null
  const rvMeasurementUnit = rvIsFromCanada ? UNIT_MEASUREMENT.KM : UNIT_MEASUREMENT.MILES // TODO: replace constant with backend type
  const rvCurrency = (rvIsFromCanada ? COUNTRY_CURRENCIES.CA : COUNTRY_CURRENCIES.US) // TODO: replace constant with backend type
  const rvCountry = rvLocation?.Country ? (COUNTRY_SHORTS[rvLocation.Country as keyof typeof COUNTRY_SHORTS]) : undefined // TODO: replace constant with backend type
  const rvCountryId = rvLocation?.Country ? (COUNTRY_IDS[rvLocation.Country as keyof typeof COUNTRY_IDS] || COUNTRY_IDS.CA) : null // TODO: replace constant with backend type
  const rvDeliveryMaxDistanceInKm = rvIsFromUs && rvDeliveryMaxDistance ? miToKm(rvDeliveryMaxDistance) : rvDeliveryMaxDistance ?? 0
  const rvAllowPets = Boolean(rvInteriorFeatures?.includes('Petfriendly'))
  const rvWeeklyPrice = rvDefaultPrice - (rvDefaultPrice / 100 * rvWeeklyDiscount)
  const rvMonthlyPrice = rvDefaultPrice - (rvDefaultPrice / 100 * rvMonthlyDiscount)
  const rvLocalizedRentalType = `rvType.${rvRentalType}`
  const rvLocalizedRVType = rvRVType ? `rvType.${rvRVType}` : 'rvType.rvCottage'
  const rvMainPhotoPath = rvPhotos?.[0]?.Path ?? null

  // Block every dates after the selling date
  function getBlockedRangesFromSellingDate() {
    if (!rvRVSellingDate) {
      return []
    }

    const sellingDate = dates(dates.utc(rvRVSellingDate).format('LL'), 'LL').toDate()
    return [{ start: sellingDate, end: null }]
  }

  // Block ranges outside of Booking season
  function getBlockedRangesFromBookingSeason() {
    const blockedRanges: BlockedRange[] = []

    if (!rvBookingSeasonStart || !rvBookingSeasonEnd) {
      return blockedRanges
    }

    const isEndBeforeStart = rvBookingSeasonEnd < rvBookingSeasonStart

    // Start the date range from the end of the season
    const blockStart = rvBookingSeasonEnd.toString()
    const blockStartDay = blockStart.slice(-2)
    const blockStartMonth = blockStart.slice(0, -2)
    const blockStartYear = dates().year() - (isEndBeforeStart ? 0 : 1)

    // End the date range before the start of the season
    const blockEnd = rvBookingSeasonStart.toString()
    const blockEndDay = blockEnd.slice(-2)
    const blockEndMonth = blockEnd.slice(0, -2)
    const blockEndYear = dates().year()

    /**
     * We support 2 years in the future
     */
    for (let i = 0; i < 3; i++) {
      blockedRanges.push({
        start: dates(`${blockStartYear + i}-${blockStartMonth}-${blockStartDay}`, 'YYYY-M-DD')
          .add(1, 'day')
          .toDate(),
        end: dates(`${blockEndYear + i}-${blockEndMonth}-${blockEndDay}`, 'YYYY-M-DD')
          .subtract(1, 'day')
          .toDate(),
      })
    }

    return blockedRanges
  }

  // Block ranges from existing bookings and blocked dates
  function getBlockedRangesFromCalendar() {
    const blockedRanges: BlockedRange[] = []

    rvCalendars?.forEach((range) => {
      const startDate = dates(range.StartDate).startOf('day')
      const endDate = dates(range.EndDate).startOf('day')

      // If startDate is the same as the endDate, it's a blocked date
      if (endDate.diff(startDate, 'days') === 0) {
        blockedRanges.push(startDate.toDate())
      }
      else {
      // Otherwise, it's an existing booking
        blockedRanges.push({
          start: startDate.startOf('day').add(1, 'day').toDate(),
          end: endDate.startOf('day').subtract(1, 'day').toDate(),
        })
      }
    })

    return blockedRanges
  }

  const rvDisabledDates = rvCalendars
    ? [
        ...getBlockedRangesFromSellingDate(),
        ...getBlockedRangesFromBookingSeason(),
        ...getBlockedRangesFromCalendar(),
      ]
    : []

  const rvUnavailableDays = rvCheckInAvailabilityDays?.length
    ? Object.entries(WeekdaysEnum)
      .filter(([...weekday]) => !rvCheckInAvailabilityDays?.includes(weekday[0] as keyof WeekdaysEnumKey))
      .map(([...weekday]) => {
        return weekday[1] + 1
      }) as DaysOfWeek[]
    : []

  return {
    rvAliasName,
    rvAllowCrossBorderTravel,
    rvAllowFestivalEventsParticipation,
    rvAllowOnlyExperiencedSimilarRV,
    rvBedBunkDouble,
    rvBedBunkTwin,
    rvBedDinette,
    rvBedKing,
    rvBedQueen,
    rvBedSofa,
    rvBookingSeasonEnd,
    rvBookingSeasonStart,
    rvCalendars,
    rvChargePerHourOver,
    rvCheckInAvailabilityDays,
    rvCheckInEndTime,
    rvCheckInStartTime,
    rvCheckoutEndTime,
    rvCheckoutStartTime,
    rvCleaningFee,
    rvDailyKMAllowed,
    rvDefaultPrice,
    rvDeliveryCentsPerDistanceUnit,
    rvDeliveryInstructions,
    rvDeliveryMaxDistance,
    rvDeliveryMinimumCostCents,
    rvFreeHoursPerDay,
    rvFuelType,
    rvGuests,
    rvHitchSize,
    rvHitchWeight,
    rvId,
    rvInsideLeadDays,
    rvInteriorFeatures,
    rvIsActivated,
    rvIsChargeMileage,
    rvIsDeliveryOnly,
    rvIsFeatured,
    rvIsGenerator,
    rvIsInstantBook,
    rvIsInsured,
    rvIsSuperHostActive,
    rvLength,
    rvListAddOns,
    rvLocation,
    rvMake,
    rvMinimumTripLength,
    rvModel,
    rvMonthlyDiscount,
    rvOriginalPrice,
    rvOutsideLeadDays,
    rvOwnerAbout,
    rvOwnerAvatar,
    rvOwnerCreatedAt,
    rvOwnerFirstName,
    rvOwnerId,
    rvOwnerLastName,
    rvOwnerScore,
    rvOwnerVerified,
    rvParkAmenities,
    rvPreBookingMessage,
    rvPhotos,
    rvRentalType,
    rvRenterCategoryRatings,
    rvRenterRating,
    rvReviews,
    rvRVBrandOther,
    rvRVDescription,
    rvRVName,
    rvRVNumber,
    rvRVSellingDate,
    rvRVType,
    rvSeatbeltThreePoint,
    rvSeatbeltTwoPoint,
    rvSecurityDeposit,
    rvSlideouts,
    rvSurchargePerExtraKM,
    rvTimezone,
    rvTour3DUrl,
    rvWeeklyDiscount,
    rvWeight,
    rvYear,

    rvHasAccommodations,
    rvHasAddons,
    rvHasDeliveryAddonsActive,
    rvHasDelivery,
    rvHasPerUnitDelivery,
    rvHasRangeDiscounts,

    rvHasAmenity,

    rvIsFromUs,
    rvIsFromCanada,
    rvIsMotorized,
    rvIsTowable,
    rvIsStatic,
    rvIsChargeGeneratorEnabled,
    rvIsChargeMileageEnabled,

    rvFormattedName,
    rvFormattedDescription,
    rvFormattedLocation,
    rvFullModelLabel,
    rvComputedTimezone,
    rvMinBookableDate,
    rvMaxBookableDate,
    rvMeasurementUnit,
    rvCurrency,
    rvCountry,
    rvCountryId,
    rvDeliveryMaxDistanceInKm,
    rvAllowPets,
    rvWeeklyPrice,
    rvMonthlyPrice,
    rvLocalizedRentalType,
    rvLocalizedRVType,
    rvMainPhotoPath,

    // TODO: move to the composable.
    rvDisabledDates,
    rvUnavailableDays,
  }
}
