import {
  COUNTRY_CURRENCIES,
  COUNTRY_IDS,
  COUNTRY_SHORTS,
  DELIVERY_ADDON_DISTANCES,
  DELIVERY_ADDON_PREFIX,
  PROVINCE_TAX_ENABLED,
  UNIT_MEASUREMENT,
} from '@/constants'
import distanceBetweenTwoPoints from '@/lib/distanceBetweenTwoPoints'
import {
  CommonStatusEnumKey,
  CustomExceptions,
  FomoTags,
  GoalsAnswerEnumKey,
  Manufacturer,
  MonthsAsDays,
  RentalTypeEnumKey,
  RvBadges,
  RvTags,
  RVTypeEnumKey,
} from '@/lib/enums'
import { captureError } from '@/lib/logger'
import { KMtoMI, MItoKM } from '~/lib/useUtils'
import { imageUrl } from '~/lib/useImageUrl.js'
import dates from '~/utils/dates'

/** @deprecated use `useRv.ts` composable instead */
export const getRvCountryId = (rv) => {
  if (!rv.Location) return

  const DEFAULT_ID = COUNTRY_IDS.CA

  return COUNTRY_IDS[rv.Location.Country] || DEFAULT_ID
}

/** @deprecated use `useRv.ts` composable instead */
export const isCountryUS = (rvCountry) => rvCountry === COUNTRY_SHORTS.US

/** @deprecated use `rv.Id` instead */
export const getId = (rv) => rv.Id
/** @deprecated use `rv.Location?.Country` instead */
export const getRvCountry = (rv) => rv.Location?.Country ?? rv.Country
/** @deprecated use `useRv.ts` composable instead */
export const isRvFromUs = (rv) => getRvCountry(rv) === COUNTRY_SHORTS.US
/** @deprecated use `useRv.ts` composable instead */
export const isRvFromCanada = (rv) => getRvCountry(rv) === COUNTRY_SHORTS.CA
/** @deprecated use `useRv.ts` composable instead */
export const getRvMeasurementUnit = (rv) => (isRvFromUs(rv) ? UNIT_MEASUREMENT.MILES : UNIT_MEASUREMENT.KM)
/** @deprecated use `useRv.ts` composable instead */
export const getCurrencyFromRvCountry = (rv) => (isRvFromUs(rv) ? COUNTRY_CURRENCIES.US : COUNTRY_CURRENCIES.CA)
/** @deprecated use `rv.DefaultPrice` instead */
export const getDefaultPrice = (rv) => rv.DefaultPrice
/** @deprecated use `rv.RVNumber` instead */
export const getNumber = (rv) => rv.RVNumber
/** @deprecated use `rv.RVName` instead */
export const getName = (rv) => rv.RVName
/** @deprecated use `useRv.ts` composable instead */
export const getFormattedName = (rv) => getName(rv).replace(/"/g, '\\"')
/** @deprecated use `rv.Location?.City` instead */
export const getCity = (rv) => rv.Location?.City
/** @deprecated use `rv.Location?.State` instead */
export const getState = (rv) => rv.Location?.State
/** @deprecated use `rv.RVDescription` instead */
export const getDescription = (rv) => rv.RVDescription
/** @deprecated use `useRv.ts` composable instead */
export const getFormattedDescription = (rv) => getDescription(rv).replace(/"/g, '\\"')
/** @deprecated use `rv.IsChargeMileage` instead */
export const isChargeMileage = (rv) => rv.IsChargeMileage
/** @deprecated use `rv.IsGenerator` instead */
export const isGenerator = (rv) => rv.IsGenerator
/** @deprecated use `rv.Guests` instead */
export const getGuests = (rv) => rv.Guests
/** @deprecated use `useRv.ts` composable instead */
export const hasLocation = (rv) => Boolean(rv.Location?.Latitude && rv.Location?.Longitude)
/** @deprecated use `useRv.ts` composable instead */
export const getLocation = (rv) => ({ lat: rv.Location?.Latitude, lng: rv.Location?.Longitude })
/** @deprecated use `rv.DailyKMAllowed` instead */
export const getDailyKmAllowed = (rv) => rv.DailyKMAllowed
/** @deprecated use `useRv.ts` composable instead */
export const hasAmenity = (rv, amenity) =>
  rv.InteriorFeatures
  && Boolean(rv.InteriorFeatures.find((item) => String(item).toLowerCase() === String(amenity).toLowerCase()))
export const getRentalType = (rv) => rv.RentalType
/** @deprecated use `useRv.ts` composable instead */
export const isMotorHomeRv = (rv) => getRentalType(rv) === RentalTypeEnumKey.MotorHome
/** @deprecated use `useRv.ts` composable instead */
export const isTravelTrailer = (rv) => getRentalType(rv) === RentalTypeEnumKey.TravelTrailer
/** @deprecated use `useRv.ts` composable instead */
export const isCottage = (rv) => getRentalType(rv) === RentalTypeEnumKey.RVCottage
/** @deprecated use `useRv.ts` composable instead */
export const getTimezone = (rv) => rv.Timezone ?? rv.Location.Timezone ?? 'America/New_York'
/** @deprecated use `useRv.ts` composable instead */
export const getMinBookableDate = ({ $moment }, rv) =>
  $moment().tz(getTimezone(rv)).startOf('day').add(rv.InsideLeadDays, 'days').toDate()
/** @deprecated use `useRv.ts` composable instead */
export const getMaxBookableDate = ({ $moment }, rv) =>
  $moment().tz(getTimezone(rv)).startOf('day').add(rv.OutsideLeadDays, 'days').toDate()

/**
 * This returns the min bookable date dayjs object
 */
export const getMinBookableDateRvTimezone = ({ $moment }, rv, addDays = 0) =>
  $moment()
    .tz(getTimezone(rv))
    .add(rv.InsideLeadDays + addDays, 'day')

/**
 * This returns the max bookable date dayjs object
 */
export const getMaxBookableDateRvTimezone = ({ $moment }, rv, addDays = 0) =>
  $moment()
    .tz(getTimezone(rv))
    .add(rv.OutsideLeadDays + addDays, 'day')

export const hasPerUnitDelivery = (rv) => {
  return Boolean(rv.DeliveryMaxDistance && rv.DeliveryCentsPerDistanceUnit && rv.DeliveryMinimumCostCents)
}

export const getMaxRvDeliveryDistanceInKm = (rv) => {
  let maxDistance = rv.DeliveryMaxDistance
  if (isRvFromUs(rv)) {
    maxDistance = MItoKM(maxDistance)
  }
  return maxDistance
}

export const getMaxRvDeliveryDistanceInUserUnits = (rv) => {
  return rv.DeliveryMaxDistance
}

// Normally should use the backend `Financial.TotalDelivery`
// Only use this function if you can't obtain from backend for whatever reason
export const deliveryPerUnitPriceOverDistance = (rv, rawDeliveryDistanceInUserUnits) => {
  if (!rv.DeliveryCentsPerDistanceUnit || !rawDeliveryDistanceInUserUnits || !rv.DeliveryMinimumCostCents) return null
  let amount = rv.DeliveryCentsPerDistanceUnit * rawDeliveryDistanceInUserUnits
  if (amount < rv.DeliveryMinimumCostCents) {
    amount = rv.DeliveryMinimumCostCents
  }
  return amount / 100
}

export const hasDelivery = (rv) =>
  hasPerUnitDelivery(rv)
  || (Boolean(rv.ListAddOns)
    && Boolean(
      rv.ListAddOns.find(
        (item) => String(item.Slug).startsWith(DELIVERY_ADDON_PREFIX) && item.Status === CommonStatusEnumKey.Active,
      ),
    ))

export const getDelivery = (rv) => {
  if (!rv.ListAddOns) return

  const addons = rv.ListAddOns.filter(
    (item) =>
      item.Slug !== ''
      && String(item.Slug).startsWith(DELIVERY_ADDON_PREFIX)
      && item.Status === CommonStatusEnumKey.Active,
  ).sort((a, b) => b.PricePerItem - a.PricePerItem)

  const [addon] = addons
  return addon?.Slug || null
}

export const motorizedRVTypes = [
  RVTypeEnumKey.ClassA,
  RVTypeEnumKey.ClassB,
  RVTypeEnumKey.ClassC,
  RVTypeEnumKey.TruckCamper,
  RVTypeEnumKey.Campervan,
]

export const towableRVTypes = [
  RVTypeEnumKey.FifthWheel,
  RVTypeEnumKey.TentTrailer,
  RVTypeEnumKey.TravelTrailer,
  RVTypeEnumKey.Hybrid,
  RVTypeEnumKey.ToyHauler,
  RVTypeEnumKey.MicroTrailer,
]

/**
 * @deprecated - Still needed for legacy booking that use addons for delivery
 */
export const getDeliveryDistanceBySlug = (slug) => {
  if (!slug) return
  const distance = Object.keys(DELIVERY_ADDON_DISTANCES).find(
    (distance) => DELIVERY_ADDON_DISTANCES[distance].slug === slug,
  )
  return DELIVERY_ADDON_DISTANCES[distance]
}

export const buildDeliveryAddonObject = (distanceObject, country = COUNTRY_SHORTS.CA) => ({
  Id: null,
  AllowedAddOnId: distanceObject.allowedAddOnId,
  AllowedAddOn: null,
  Name: `Delivery within ${distanceObject.km}km`,
  Quantity: 1,
  IsDaily: false,
  PricePerItem: distanceObject.defaultPrice[country],
  Slug: distanceObject.slug,
})

export const shouldShowRegisteredBusiness = (rv) => {
  if (!isRvFromCanada(rv)) return false
  return true
}

// TODO: Move this function to another file
export const showTaxAdvise = (country, provinceName) => {
  if (country !== COUNTRY_SHORTS.CA) return false

  const toFind = provinceName?.toLowerCase()

  return Boolean(PROVINCE_TAX_ENABLED[toFind])
}

/**
 * @deprecated - This should be derived from the backend
 */
export const getDistanceFromRv = (rv, destination) => {
  if (!destination.lat || !destination.lng) {
    captureError(`${CustomExceptions.LibError} - getDistanceFromRv - No destination lat or lng`, { rv, destination })
    return // should return undefined to not mistake for not found
  }

  const rvLocation = {
    lat: rv.Location?.Latitude,
    lng: rv.Location?.Longitude,
  }

  if (!rvLocation.lat || !rvLocation.lng) {
    captureError(`${CustomExceptions.LibError} - getDistanceFromRv - No RV lat or lng`, { rv, destination })
    return // should return undefined to not mistake for not found
  }
  const rawDistanceInKm = distanceBetweenTwoPoints(destination, rvLocation)
  const rawDistanceInUserUnits = isRvFromUs(rv) ? KMtoMI(rawDistanceInKm) : rawDistanceInKm
  return {
    rawDistanceInKm: Math.floor(rawDistanceInKm),
    rawDistanceInUserUnits: Math.floor(rawDistanceInUserUnits),
  }
}

export const isReadyToBook = ({ $store }, rv) =>
  $store.getters['bookingRequest/isReadyToBook']({
    maxGuests: rv.Guests,
    minimumRentalDay: rv.MinimumTripLength,
  })

/** @deprecated use `useRv.ts` composable instead */
export const getFullModelLabel = (rv) => {
  return `${rv.Year} ${rv.Make === Manufacturer.OTHER ? rv.RVBrandOther : rv.Make} ${rv.Model}`
}

/** @deprecated use format-dates instead */
export const translateTime = (value, formatHourIsUppercase = true) => {
  return dates()
    .hour(value)
    .minute(0)
    .second(0)
    .format(`h:mm ${formatHourIsUppercase ? 'A' : 'a'}`)
}

/** @deprecated use `useRv.ts` composable instead */
export const hasAccommodations = (rv) => {
  return rv.BedBunkDouble + rv.BedBunkTwin + rv.BedDinette + rv.BedKing + rv.BedQueen + rv.BedSofa > 0
}

export const getNightlyRate = (rv) => {
  return Math.round(Math.max(rv?.DiscountedAverageNightlyPrice, 0) || rv?.DefaultPrice)
}

export const getOriginalNightlyRate = (rv) => {
  return Math.round(rv?.OriginalPrice ?? 0)
}

export const getSmartNightlyRate = (rv) => {
  return rv?.HasSmartPricingApplied ? getNightlyRate(rv) : undefined
}

export const getSmartPricePercentage = (rv) => {
  return rv?.SmartPricingPercentage ?? 0
}

export const getSmartPriceMinPrice = (rv) => {
  return rv?.SmartPricingMinPrice ?? 0
}

export const getListingSteps = (
  rv,
  { hasInsurance = true, instantBookAccountEligible = false, zeroSecurityDeposit = false } = {
    hasInsurance: true,
    instantBookAccountEligible: false,
    zeroSecurityDeposit: false,
  },
) => {
  const addStep = (step, condition = true) => condition && step

  /* Important to notice, the order of the array matters as the
     function that moves to the next step only gets the next index of the array
     so if you want to change the order, you should change the order of the array */

  const initialPage = ['step1/goal-settings']

  if (!rv) return initialPage

  const isCottage = rv.RentalType === RentalTypeEnumKey.RVCottage
  const isMotorHomeRv = rv.RentalType === RentalTypeEnumKey.MotorHome
  const isFifthWheel = rv.RVType === RVTypeEnumKey.FifthWheel
  const isTravelTrailer = rv.RentalType === RentalTypeEnumKey.TravelTrailer

  const steps = [
    ...initialPage,
    'step1/rental-type',
    addStep('step1/rv-manufacturer', !isCottage),
    addStep('step1/rv-model', !isCottage),
    addStep('step1/rv-type', !isCottage),
    addStep('step1/rv-year', !isCottage),
    addStep('step1/rv-length', !isCottage),
    addStep('step1/rv-weight', !isCottage && !isMotorHomeRv),
    addStep('step1/hitch-weight', isTravelTrailer && !isFifthWheel),
    addStep('step1/hitch-size', isTravelTrailer && !isFifthWheel),
    'step1/rv-slideouts',
    'step1/rv-sleeping-spots',
    'step1/rv-location',
    addStep('step1/no-insurance', !hasInsurance),
    'step1/rv-amenities',
    addStep('step1/park-amenities', isCottage),
    'step2/rv-name',
    'step2/rv-photos',
    'step2/rv-description',
    'step2/booking-preferences',
    'step2/calendar-settings',
    'step3/base-price',
    'step3/longer-stays',
    addStep('step3/security-deposit', !zeroSecurityDeposit),
    'step3/cleaning-fee',
    addStep('step3/mileage-and-delivery', isMotorHomeRv || isTravelTrailer),
    'step3/earn-more',
    addStep('step3/instant-book', instantBookAccountEligible && rv.InstantBookEligible),
    'step3/host-acceptance-education',
  ]

  return steps.filter(Boolean)
}

export const isFirstStep = ({ rentalType, rvType, hasInsurance = true }, field) => {
  const steps = getListingSteps({ RentalType: rentalType, RVType: rvType }, { hasInsurance })
  return steps[0].endsWith(field)
}
export const isLastStep = ({ rentalType, rvType, hasInsurance = true }, field) => {
  if (!rentalType) return false

  const last = lastStep({ rentalType, rvType, hasInsurance })

  return last.endsWith(field)
}

export const lastStep = ({ rentalType, rvType, hasInsurance = true }) => {
  const steps = getListingSteps({ RentalType: rentalType, RVType: rvType }, { hasInsurance })
  return steps[steps.length - 1]
}

const percentageToDecimal = (value) => value / 100
export const getRvDiscount = (rv, numberOfNights) => {
  if (numberOfNights >= 28) {
    return percentageToDecimal(rv.MonthlyDiscount) || percentageToDecimal(rv.WeeklyDiscount) || 0
  }
  if (numberOfNights >= 7) {
    return percentageToDecimal(rv.WeeklyDiscount) ?? 0
  }
  return 0
}

// export const setDefaultsForDraftRv = (rv) => {
//   const rvWithDefaults = {}
//   Object.keys(rv).forEach((key) => {
//     if (newDraftRvTemplate[key] !== undefined && rv[key] === null) {
//       rvWithDefaults[key] = newDraftRvTemplate[key]
//       return
//     }

//     rvWithDefaults[key] = rv[key]
//   })

//   return rvWithDefaults
// }

export const getRvFirstPhoto = (config, rv) => {
  return rv.Photos.length ? imageUrl({ $config: config, path: rv.Photos[0].Path }) : null
}

export const getMonthFromMonthAsDays = (monthAsDays) => {
  const monthsMap = {
    [MonthsAsDays.MONTHS_1]: 1,
    [MonthsAsDays.MONTHS_3]: 3,
    [MonthsAsDays.MONTHS_6]: 6,
    [MonthsAsDays.MONTHS_9]: 9,
    [MonthsAsDays.MONTHS_12]: 12,
    [MonthsAsDays.MONTHS_15]: 15,
    [MonthsAsDays.MONTHS_18]: 18,
    [MonthsAsDays.MONTHS_21]: 21,
    [MonthsAsDays.MONTHS_24]: 24,
  }

  return monthsMap[monthAsDays]
}

export const isInstantBookEligible = (rv) => rv.InstantBookEligible || rv.InstantBookAdminEligible

export const isGoalsInstantBookEligible = (rv) => {
  const instantBookPersonalTripsEligibility = [
    GoalsAnswerEnumKey.Never,
    GoalsAnswerEnumKey.Rarely,
    GoalsAnswerEnumKey.Sometimes,
  ]
  const instantBookFrequencyPlansToRentOnRvezy = [GoalsAnswerEnumKey.Frequently, GoalsAnswerEnumKey.Always]

  return (
    instantBookPersonalTripsEligibility.includes(rv.FrequencyPersonalTrips)
    && instantBookFrequencyPlansToRentOnRvezy.includes(rv.FrequencyRentOnRvezy)
  )
}

export const getRVListingBadges = (rv) => {
  if (!rv?.RVBadges) return null

  const rvListingBadges = rv.RVBadges

  let tag = null
  if (rvListingBadges.HighDemandBadgeEnabled) tag = FomoTags.HighDemand
  else if (rvListingBadges.GoodPriceBadgeEnabled) tag = FomoTags.GoodPrice
  else if (rvListingBadges.GreatPriceBadgeEnabled) tag = FomoTags.GreatPrice

  return {
    highDemandBadgeEnabled: rvListingBadges.HighDemandBadgeEnabled, // bool
    greatPriceBadgeEnabled: rvListingBadges.GreatPriceBadgeEnabled, // bool
    goodPriceBadgeEnabled: rvListingBadges.GoodPriceBadgeEnabled, // bool
    greatPriceBadgePercentageValue: rvListingBadges.GreatPriceBadgePercentageValue, // decimal
    greatPriceBadgeDollarValue: rvListingBadges.GreatPriceBadgeDollarValue, // decimal
    tag: tag, // string
  }
}

/** @deprecated the experiment was removed */
export const getFomoTagName = (rv, $experiment = null) => {
  if ($experiment && !$experiment.isEnabled('rvz18372FomoFeatureFlag')) return null

  const rvListingBadges = getRVListingBadges(rv)

  if (rvListingBadges) {
    return rvListingBadges.tag
  }

  return null
}

/** @deprecated the experiment was removed */
export const hasFomoTag = (rv, $experiment) => {
  return Boolean(getFomoTagName(rv, $experiment))
}

export const isSuperhost = (rv) => rv?.IsSuperHostActive
export const isInstantBook = (rv) => rv?.InstabookOwnerOptedIn
export const isDeliveryOnly = (rv) => rv?.IsDeliveryOnly

export const getBadges = (rv) => {
  const badges = []
  const badgeKeys = []
  if (isSuperhost(rv)) {
    badges.push(RvBadges.Superhost)
    badgeKeys.push(RvBadges.$getKeyByValue(RvBadges.Superhost))
  }

  if (isInstantBook(rv)) {
    badges.push(RvBadges.InstantBook)
    badgeKeys.push(RvBadges.$getKeyByValue(RvBadges.InstantBook))
  }

  if (isDeliveryOnly(rv)) {
    badges.push(RvBadges.DeliveryOnly)
    badgeKeys.push(RvBadges.$getKeyByValue(RvBadges.DeliveryOnly))
  }

  if (!badges.length) return

  const [priority, ...others] = badges
  const [priorityKey, ...othersKey] = badgeKeys

  return {
    priority,
    priorityKey,
    others,
    othersKey,
  }
}

export const getTags = (rv, isFeatured) => {
  const tags = isFeatured ? [RvTags.Featured] : []

  const badges = getBadges(rv)

  if (!badges || !badges.othersKey.length) {
    return tags
  }

  const otherBadges = badges.othersKey.filter((key) => Boolean(RvTags[key]))

  return [...tags, ...otherBadges.map((key) => RvTags[key])]
}

export const hasAddOns = (rv) => rv.ListAddOns.filter((a) => !a.Name.includes('Delivery ')).length > 0

export const nextSevenNightsRange = (rv) => {
  if (!rv || !rv.SixtyNightAvailabilityWindow) return null

  return {
    start: rv.SixtyNightAvailabilityWindow.StartDate,
    end: rv.SixtyNightAvailabilityWindow.EndDate,
  }
}

export const hasChargeGeneratorEnabled = (rv) => {
  return rv.FreeHoursPerDay >= 0 && rv.ChargePerHourOver > 0
}

export const isMileageCharged = (rv) => {
  return rv.IsChargeMileage && rv.DailyKMAllowed >= 0 && rv.SurchargePerExtraKM !== 0
}
