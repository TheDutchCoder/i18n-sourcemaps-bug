import { describe, expect, test } from 'vitest'
import { getRvDetails } from '~/utils/rv/get-rv-details'
import type { ExpandedRvDetails } from '~/types'

const rvFullData: ExpandedRvDetails = {
  AliasName: 'MockRv',
  AllowCrossBorderTravel: true,
  AllowFestivalEventsParticipation: 'Negotiable',
  AllowOnlyExperiencedSimilarRV: true,
  BedBunkDouble: 2,
  BedBunkTwin: 1,
  BedDinette: 3,
  BedKing: 1,
  BedQueen: 1,
  BedSofa: 1,
  BookingSeasonEnd: 1231,
  BookingSeasonStart: 401,
  Calendars: [{
    StartDate: '2021-01-01T00:00:00Z',
    EndDate: '2021-02-01T00:00:00Z',
  }],
  ChargePerHourOver: 10.00,
  CheckInAvailabilityDays: ['Monday', 'Tuesday', 'Sunday'],
  CheckInEndTime: 22,
  CheckInStartTime: 10,
  CheckoutEndTime: 12,
  CheckoutStartTime: 8,
  CleaningFee: 100.00,
  DailyKMAllowed: 100,
  DefaultPrice: 80.00,
  DeliveryCentsPerDistanceUnit: 125,
  DeliveryInstructions: 'Some instructions',
  DeliveryMaxDistance: 100,
  DeliveryMinimumCostCents: 1000,
  DynamicPricingOptIn: true,
  FreeHoursPerDay: 2,
  FuelType: 'Gasoline',
  Guests: 2,
  HasSmartPricingApplied: true,
  HitchSize: '10',
  HitchWeight: 1000,
  Id: '12345',
  InsideLeadDays: 2,
  InteriorFeatures: ['Feature 1', 'Feature 2'],
  IsActivated: true,
  IsChargeMileage: true,
  IsDeliveryOnly: true,
  IsFeatured: true,
  IsGenerator: true,
  IsInstantBook: true,
  IsInsured: true,
  IsSuperHostActive: true,
  Length: 24.00,
  ListAddOns: [{
    Id: 1,
    Name: 'AddOn 1',
    PricePerItem: 20,
    Slug: 'addon-1',
    IsDaily: true,
    Quantity: 1,
    Status: 'Active',
  }, {
    Id: 2,
    Name: 'AddOn 2',
    PricePerItem: 20,
    Slug: 'rv_delivery_addon-2',
    IsDaily: true,
    Quantity: 1,
    Status: 'Active',
  }],
  Location: {
    City: 'City',
    Country: 'US',
    Latitude: 10,
    Longitude: -10,
    State: 'NY',
    Timezone: 'America/Toronto',
  },
  Make: 'Thor',
  MinimumTripLength: 2,
  Model: 'Model T',
  MonthlyDiscount: 10.00,
  OriginalPrice: 110.00,
  OutsideLeadDays: 2,
  OwnerAbout: 'Owner about',
  OwnerAvatar: 'https://example.com/avatar.jpg',
  OwnerCreatedAt: '2021-01-01T00:00:00Z',
  OwnerFirstName: 'John',
  OwnerId: 123,
  OwnerLastName: 'Doe',
  OwnerScore: 4.5,
  OwnerVerified: true,
  ParkAmenities: ['Amenity 1', 'Amenity 2'],
  Photos: [{
    Description: 'Photo 1',
    Order: 1,
    Path: 'https://example.com/photo1.jpg',
  }],
  PreBookingMessage: 'Pre-booking message',
  RentalType: 'MotorHome',
  RenterCategoryRatings: [{
    CategoryType: 'Cleanliness',
    Rating: 4.5,
    ReviewsAmount: 3,
  }],
  RenterRating: 4.7,
  Reviews: [{
    Id: 1,
    Content: 'Review content',
    CreatedAt: '2021-01-01T00:00:00Z',
    DaysBeforeTrip: 2,
    OverallRating: 4.9,
    Rating: 4.8,
    ReviewType: 'Regular',
    RVDelivered: true,
  }],
  RVBrandOther: 'Other',
  RVDescription: 'Description',
  RVName: 'Name',
  RVNumber: 1234567890,
  RVSellingDate: '2021-01-01T00:00:00Z',
  RVType: 'ClassB',
  SeatbeltThreePoint: 2,
  SeatbeltTwoPoint: 2,
  SecurityDeposit: 1000,
  Slideouts: 1,
  SurchargePerExtraKM: 2.00,
  Timezone: 'America/Toronto',
  Tour3DUrl: 'https://example.com/tour3d',
  WeeklyDiscount: 20.00,
  Weight: 10000,
  Year: 2024,
}

const rvNoData: ExpandedRvDetails = {
  AllowCrossBorderTravel: false,
  AllowFestivalEventsParticipation: 'No',
  AllowOnlyExperiencedSimilarRV: false,
  CleaningFee: 10,
  DefaultPrice: 100,
  DynamicPricingOptIn: false,
  Guests: 1,
  HasSmartPricingApplied: false,
  Id: '12345',
  InsideLeadDays: 1,
  IsActivated: false,
  IsDeliveryOnly: false,
  IsFeatured: false,
  IsInstantBook: false,
  IsInsured: true,
  IsSuperHostActive: false,
  MinimumTripLength: 5,
  MonthlyDiscount: 10,
  OriginalPrice: 100,
  OutsideLeadDays: 1,
  OwnerId: 123,
  OwnerVerified: false,
  RenterRating: 4.5,
  RVNumber: 1234567890,
  WeeklyDiscount: 10,
  Year: 2024,
}

describe('getRvDetails', () => {
  describe('with full data', () => {
    describe('returns advanced `has` checks for', () => {
      test('rvHasAccommodations', () => {
        const { rvHasAccommodations: rvHasAccommodationsTrue } = getRvDetails(rvFullData)
        expect(rvHasAccommodationsTrue).toStrictEqual(true)

        const { rvHasAccommodations: rvHasAccommodationsFalse } = getRvDetails({ ...rvFullData, BedBunkDouble: 0, BedBunkTwin: 0, BedDinette: 0, BedKing: 0, BedQueen: 0, BedSofa: 0 })
        expect(rvHasAccommodationsFalse).toStrictEqual(false)
      })

      test('rvHasAddons', () => {
        const { rvHasAddons: rvHasAddonsTrue } = getRvDetails(rvFullData)
        expect(rvHasAddonsTrue).toStrictEqual(true)

        const { rvHasAddons: rvHasAddonsFalse } = getRvDetails({ ...rvFullData, ListAddOns: [{ Slug: 'rv_delivery_some_addon', Id: 1, IsDaily: true, PricePerItem: 10, Quantity: 1, Status: 'Active' }] })
        expect(rvHasAddonsFalse).toStrictEqual(false)
      })

      test('rvHasDeliveryAddonsActive', () => {
        const { rvHasDeliveryAddonsActive: rvHasDeliveryAddonsActiveTrue } = getRvDetails(rvFullData)
        expect(rvHasDeliveryAddonsActiveTrue).toStrictEqual(true)

        const { rvHasDeliveryAddonsActive: rvHasDeliveryAddonsActiveFalse } = getRvDetails({ ...rvFullData, ListAddOns: [{ Slug: 'rv_delivery_some_addon', Id: 1, IsDaily: true, PricePerItem: 10, Quantity: 1, Status: 'InActive' }] })
        expect(rvHasDeliveryAddonsActiveFalse).toStrictEqual(false)
      })

      test('rvHasDelivery', () => {
        const { rvHasDelivery: rvHasDeliveryTrue } = getRvDetails(rvFullData)
        expect(rvHasDeliveryTrue).toStrictEqual(true)

        const { rvHasDelivery: rvHasDeliveryFalse } = getRvDetails({ ...rvFullData, DeliveryMaxDistance: 0, ListAddOns: [{ Slug: 'rv_delivery_some_addon', Id: 1, IsDaily: true, PricePerItem: 10, Quantity: 1, Status: 'InActive' }] })
        expect(rvHasDeliveryFalse).toStrictEqual(false)
      })

      test('rvHasPerUnitDelivery', () => {
        const { rvHasPerUnitDelivery: rvHasPerUnitDeliveryTrue } = getRvDetails(rvFullData)
        expect(rvHasPerUnitDeliveryTrue).toStrictEqual(true)

        const { rvHasPerUnitDelivery: rvHasPerUnitDeliveryFalse } = getRvDetails({ ...rvFullData, DeliveryMaxDistance: 0, DeliveryCentsPerDistanceUnit: 0, DeliveryMinimumCostCents: 0 })
        expect(rvHasPerUnitDeliveryFalse).toStrictEqual(false)
      })

      test('rvHasAmenity', () => {
        const { rvHasAmenity } = getRvDetails(rvFullData)
        expect(rvHasAmenity('Feature 1')).toStrictEqual(true)
        expect(rvHasAmenity('FakeAmenity')).toStrictEqual(false)
      })

      test('rvHasRangeDiscounts', () => {
        const { rvHasRangeDiscounts: rvHasRangeDiscountsTrue } = getRvDetails(rvFullData)
        expect(rvHasRangeDiscountsTrue).toStrictEqual(true)
      })
    })

    describe('returns basic `is` checks for', () => {
      test('rvIsFromUs', () => {
        const { rvIsFromUs: rvIsFromUsTrue } = getRvDetails(rvFullData)
        expect(rvIsFromUsTrue).toStrictEqual(true)

        const { rvIsFromUs: rvIsFromUsFalse } = getRvDetails({ ...rvFullData, Location: { Country: 'CA' } })
        expect(rvIsFromUsFalse).toStrictEqual(false)
      })

      test('rvIsFromCanada', () => {
        const { rvIsFromCanada: rvIsFromCanadaTrue } = getRvDetails(rvFullData)
        expect(rvIsFromCanadaTrue).toStrictEqual(false)

        const { rvIsFromCanada: rvIsFromCanadaFalse } = getRvDetails({ ...rvFullData, Location: { Country: 'CA' } })
        expect(rvIsFromCanadaFalse).toStrictEqual(true)
      })

      test('rvIsMotorized', () => {
        const { rvIsMotorized: rvIsMotorizedTrue } = getRvDetails(rvFullData)
        expect(rvIsMotorizedTrue).toStrictEqual(true)

        const { rvIsMotorized: rvIsMotorizedFalse } = getRvDetails({ ...rvFullData, RentalType: 'RVCottage' })
        expect(rvIsMotorizedFalse).toStrictEqual(false)
      })

      test('rvIsTowable', () => {
        const { rvIsTowable: rvIsTowableTrue } = getRvDetails(rvFullData)
        expect(rvIsTowableTrue).toStrictEqual(false)

        const { rvIsTowable: rvIsTowableFalse } = getRvDetails({ ...rvFullData, RentalType: 'TravelTrailer' })
        expect(rvIsTowableFalse).toStrictEqual(true)
      })

      test('rvIsStatic', () => {
        const { rvIsStatic: rvIsStaticTrue } = getRvDetails(rvFullData)
        expect(rvIsStaticTrue).toStrictEqual(false)

        const { rvIsStatic: rvIsStaticFalse } = getRvDetails({ ...rvFullData, RentalType: 'RVCottage' })
        expect(rvIsStaticFalse).toStrictEqual(true)
      })

      test('rvIsChargeGeneratorEnabled', () => {
        const { rvIsChargeGeneratorEnabled: rvIsChargeGeneratorEnabledTrue } = getRvDetails(rvFullData)
        expect(rvIsChargeGeneratorEnabledTrue).toStrictEqual(true)

        const { rvIsChargeGeneratorEnabled: rvIsChargeGeneratorEnabledFalse } = getRvDetails({ ...rvFullData, FreeHoursPerDay: 10, ChargePerHourOver: null })
        expect(rvIsChargeGeneratorEnabledFalse).toStrictEqual(false)

        const { rvIsChargeGeneratorEnabled: rvIsChargeGeneratorEnabledFalse2 } = getRvDetails({ ...rvFullData, FreeHoursPerDay: null, ChargePerHourOver: 10 })
        expect(rvIsChargeGeneratorEnabledFalse2).toStrictEqual(false)
      })

      test('rvIsChargeMileageEnabled', () => {
        const { rvIsChargeMileageEnabled: rvIsChargeMileageEnabledTrue } = getRvDetails(rvFullData)
        expect(rvIsChargeMileageEnabledTrue).toStrictEqual(true)

        const { rvIsChargeMileageEnabled: rvIsChargeMileageEnabledFalse } = getRvDetails({ ...rvFullData, DailyKMAllowed: 10, SurchargePerExtraKM: 0 })
        expect(rvIsChargeMileageEnabledFalse).toStrictEqual(false)

        const { rvIsChargeMileageEnabled: rvIsChargeMileageEnabledFalse2 } = getRvDetails({ ...rvFullData, DailyKMAllowed: 10, SurchargePerExtraKM: null })
        expect(rvIsChargeMileageEnabledFalse2).toStrictEqual(false)

        const { rvIsChargeMileageEnabled: rvIsChargeMileageEnabledFalse3 } = getRvDetails({ ...rvFullData, DailyKMAllowed: null, SurchargePerExtraKM: 5 })
        expect(rvIsChargeMileageEnabledFalse3).toStrictEqual(false)
      })
    })

    test('returns basic properties', () => {
      const {
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
        rvPhotos,
        rvPreBookingMessage,
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
      } = getRvDetails(rvFullData)

      expect(rvAliasName).toStrictEqual('MockRv')
      expect(rvAllowCrossBorderTravel).toStrictEqual(true)
      expect(rvAllowFestivalEventsParticipation).toStrictEqual('Negotiable')
      expect(rvAllowOnlyExperiencedSimilarRV).toStrictEqual(true)
      expect(rvBedBunkDouble).toStrictEqual(2)
      expect(rvBedBunkTwin).toStrictEqual(1)
      expect(rvBedDinette).toStrictEqual(3)
      expect(rvBedKing).toStrictEqual(1)
      expect(rvBedQueen).toStrictEqual(1)
      expect(rvBedSofa).toStrictEqual(1)
      expect(rvBookingSeasonEnd).toStrictEqual(1231)
      expect(rvBookingSeasonStart).toStrictEqual(401)
      expect(rvCalendars).toEqual([{
        EndDate: '2021-02-01T00:00:00Z',
        StartDate: '2021-01-01T00:00:00Z',
      }])
      expect(rvChargePerHourOver).toStrictEqual(10.00)
      expect(rvCheckInAvailabilityDays).toEqual(['Monday', 'Tuesday', 'Sunday'])
      expect(rvCheckInEndTime).toStrictEqual(22)
      expect(rvCheckInStartTime).toStrictEqual(10)
      expect(rvCheckoutEndTime).toStrictEqual(12)
      expect(rvCheckoutStartTime).toStrictEqual(8)
      expect(rvCleaningFee).toStrictEqual(100.00)
      expect(rvDailyKMAllowed).toStrictEqual(100)
      expect(rvDefaultPrice).toStrictEqual(80.00)
      expect(rvDeliveryCentsPerDistanceUnit).toStrictEqual(125)
      expect(rvDeliveryInstructions).toStrictEqual('Some instructions')
      expect(rvDeliveryMaxDistance).toStrictEqual(100)
      expect(rvDeliveryMinimumCostCents).toStrictEqual(1000)
      expect(rvFreeHoursPerDay).toStrictEqual(2)
      expect(rvFuelType).toStrictEqual('Gasoline')
      expect(rvGuests).toStrictEqual(2)
      expect(rvHitchSize).toStrictEqual('10')
      expect(rvHitchWeight).toStrictEqual(1000)
      expect(rvId).toStrictEqual('12345')
      expect(rvInsideLeadDays).toStrictEqual(2)
      expect(rvInteriorFeatures).toEqual(['Feature 1', 'Feature 2'])
      expect(rvIsActivated).toEqual(true)
      expect(rvIsChargeMileage).toStrictEqual(true)
      expect(rvIsDeliveryOnly).toStrictEqual(true)
      expect(rvIsFeatured).toStrictEqual(true)
      expect(rvIsGenerator).toStrictEqual(true)
      expect(rvIsInstantBook).toStrictEqual(true)
      expect(rvIsInsured).toStrictEqual(true)
      expect(rvIsSuperHostActive).toStrictEqual(true)
      expect(rvLength).toStrictEqual(24.00)
      expect(rvListAddOns).toEqual([{
        Id: 1,
        Name: 'AddOn 1',
        PricePerItem: 20,
        Slug: 'addon-1',
        IsDaily: true,
        Quantity: 1,
        Status: 'Active',
      }, {
        Id: 2,
        Name: 'AddOn 2',
        PricePerItem: 20,
        Slug: 'rv_delivery_addon-2',
        IsDaily: true,
        Quantity: 1,
        Status: 'Active',
      }])
      expect(rvLocation).toEqual({
        City: 'City',
        Country: 'US',
        Latitude: 10,
        Longitude: -10,
        State: 'NY',
        Timezone: 'America/Toronto',
      })
      expect(rvMake).toStrictEqual('Thor')
      expect(rvMinimumTripLength).toStrictEqual(2)
      expect(rvModel).toStrictEqual('Model T')
      expect(rvMonthlyDiscount).toStrictEqual(10.00)
      expect(rvOriginalPrice).toStrictEqual(110.00)
      expect(rvOutsideLeadDays).toStrictEqual(2)
      expect(rvOwnerAbout).toStrictEqual('Owner about')
      expect(rvOwnerAvatar).toStrictEqual('https://example.com/avatar.jpg')
      expect(rvOwnerCreatedAt).toStrictEqual('2021-01-01T00:00:00Z')
      expect(rvOwnerFirstName).toStrictEqual('John')
      expect(rvOwnerId).toStrictEqual(123)
      expect(rvOwnerLastName).toStrictEqual('Doe')
      expect(rvOwnerScore).toStrictEqual(4.5)
      expect(rvOwnerVerified).toStrictEqual(true)
      expect(rvParkAmenities).toEqual(['Amenity 1', 'Amenity 2'])
      expect(rvPhotos).toEqual([{
        Description: 'Photo 1',
        Order: 1,
        Path: 'https://example.com/photo1.jpg',
      }])
      expect(rvPreBookingMessage).toStrictEqual('Pre-booking message')
      expect(rvRentalType).toStrictEqual('MotorHome')
      expect(rvRenterCategoryRatings).toEqual([{
        CategoryType: 'Cleanliness',
        Rating: 4.5,
        ReviewsAmount: 3,
      }])
      expect(rvRenterRating).toStrictEqual(4.7)
      expect(rvReviews).toEqual([{
        Id: 1,
        Content: 'Review content',
        CreatedAt: '2021-01-01T00:00:00Z',
        DaysBeforeTrip: 2,
        OverallRating: 4.9,
        Rating: 4.8,
        ReviewType: 'Regular',
        RVDelivered: true,
      }])
      expect(rvRVBrandOther).toStrictEqual('Other')
      expect(rvRVDescription).toStrictEqual('Description')
      expect(rvRVName).toStrictEqual('Name')
      expect(rvRVNumber).toStrictEqual(1234567890)
      expect(rvRVSellingDate).toStrictEqual('2021-01-01T00:00:00Z')
      expect(rvRVType).toStrictEqual('ClassB')
      expect(rvSeatbeltThreePoint).toStrictEqual(2)
      expect(rvSeatbeltTwoPoint).toStrictEqual(2)
      expect(rvSecurityDeposit).toStrictEqual(1000)
      expect(rvSlideouts).toStrictEqual(1)
      expect(rvSurchargePerExtraKM).toStrictEqual(2.00)
      expect(rvTimezone).toStrictEqual('America/Toronto')
      expect(rvTour3DUrl).toStrictEqual('https://example.com/tour3d')
      expect(rvWeeklyDiscount).toStrictEqual(20.00)
      expect(rvWeight).toStrictEqual(10000)
      expect(rvYear).toStrictEqual(2024)
    })

    describe('returns advanced properties for', () => {
      test('rvFormattedName', () => {
        const { rvFormattedName: rvFormattedName1 } = getRvDetails(rvFullData)
        expect(rvFormattedName1).toStrictEqual('Name')

        const { rvFormattedName: rvFormattedName2 } = getRvDetails({ ...rvFullData, RVName: 'My quo"ted name' })
        expect(rvFormattedName2).toStrictEqual('My quo\\"ted name')
      })

      test('rvFormattedDescription', () => {
        const { rvFormattedDescription: rvFormattedDescription1 } = getRvDetails(rvFullData)
        expect(rvFormattedDescription1).toStrictEqual('Description')

        const { rvFormattedDescription: rvFormattedDescription2 } = getRvDetails({ ...rvFullData, RVDescription: 'My quo"ted description' })
        expect(rvFormattedDescription2).toStrictEqual('My quo\\"ted description')
      })

      test('rvFormattedLocation', () => {
        const { rvFormattedLocation: rvFormattedLocation1 } = getRvDetails(rvFullData)
        expect(rvFormattedLocation1).toStrictEqual('City, NY, United States')

        const { rvFormattedLocation: rvFormattedLocation2 } = getRvDetails({ ...rvFullData, Location: { City: 'Ottawa', State: 'Ontario', Country: 'CA' } })
        expect(rvFormattedLocation2).toStrictEqual('Ottawa, Ontario, Canada')
      })

      test('rvFullModelLabel', () => {
        const { rvFullModelLabel: rvFullModelLabel1 } = getRvDetails({ ...rvFullData, Year: 2000, Make: 'Make', Model: 'Model' })
        expect(rvFullModelLabel1).toStrictEqual('2000 Make Model')

        const { rvFullModelLabel: rvFullModelLabel2 } = getRvDetails({ ...rvFullData, Year: 2000, Make: 'Other', RVBrandOther: 'Other Brand', Model: 'Model' })
        expect(rvFullModelLabel2).toStrictEqual('2000 Other Brand Model')
      })

      test('rvComputedTimezone', () => {
        const { rvComputedTimezone: rvComputedTimezone1 } = getRvDetails(rvFullData)
        expect(rvComputedTimezone1).toStrictEqual('America/Toronto')

        const { rvComputedTimezone: rvComputedTimezone2 } = getRvDetails({ ...rvFullData, Timezone: null, Location: { Timezone: 'Europe/Zurich' } })
        expect(rvComputedTimezone2).toStrictEqual('Europe/Zurich')

        const { rvComputedTimezone: rvComputedTimezone3 } = getRvDetails({ ...rvFullData, Timezone: 'Europe/Amsterdam' })
        expect(rvComputedTimezone3).toStrictEqual('Europe/Amsterdam')
      })

      test('rvMinBookableDate', () => {
        const { rvMinBookableDate: rvMinBookableDate1 } = getRvDetails(rvFullData)
        expect(rvMinBookableDate1).toStrictEqual(new Date('2020-04-02T04:00:00.000Z'))

        const { rvMinBookableDate: rvMinBookableDate2 } = getRvDetails({ ...rvFullData, InsideLeadDays: 0 })
        expect(rvMinBookableDate2).toStrictEqual(new Date('2020-03-31T04:00:00.000Z'))

        const { rvMinBookableDate: rvMinBookableDate3 } = getRvDetails({ ...rvFullData, InsideLeadDays: 2 })
        expect(rvMinBookableDate3).toStrictEqual(new Date('2020-04-02T04:00:00.000Z'))
      })

      test('rvMaxBookableDate', () => {
        const { rvMaxBookableDate: rvMaxBookableDate1 } = getRvDetails({ ...rvFullData, OutsideLeadDays: 2 })
        expect(rvMaxBookableDate1).toStrictEqual(new Date('2020-04-02T04:00:00.000Z'))

        const { rvMaxBookableDate: rvMaxBookableDate2 } = getRvDetails({ ...rvFullData, OutsideLeadDays: 0 })
        expect(rvMaxBookableDate2).toStrictEqual(new Date('2020-03-31T04:00:00.000Z'))

        const { rvMaxBookableDate: rvMaxBookableDate3 } = getRvDetails(null)
        expect(rvMaxBookableDate3).toStrictEqual(null)
      })

      test('rvMeasurementUnit', () => {
        const { rvMeasurementUnit: rvMeasurementUnit1 } = getRvDetails({ ...rvFullData, Location: { Country: 'US' } })
        expect(rvMeasurementUnit1).toStrictEqual('miles')

        const { rvMeasurementUnit: rvMeasurementUnit2 } = getRvDetails({ ...rvFullData, Location: { Country: 'CA' } })
        expect(rvMeasurementUnit2).toStrictEqual('km')

        const { rvMeasurementUnit: rvMeasurementUnit3 } = getRvDetails({ ...rvFullData, Location: { Country: 'ROW' } })
        expect(rvMeasurementUnit3).toStrictEqual('miles')

        const { rvMeasurementUnit: rvMeasurementUnit4 } = getRvDetails(null)
        expect(rvMeasurementUnit4).toStrictEqual('miles')
      })

      test('rvCurrency', () => {
        const { rvCurrency: rvCurrency1 } = getRvDetails({ ...rvFullData, Location: { Country: 'US' } })
        expect(rvCurrency1).toStrictEqual('USD')

        const { rvCurrency: rvCurrency2 } = getRvDetails({ ...rvFullData, Location: { Country: 'CA' } })
        expect(rvCurrency2).toStrictEqual('CAD')

        const { rvCurrency: rvCurrency3 } = getRvDetails({ ...rvFullData, Location: { Country: 'ROW' } })
        expect(rvCurrency3).toStrictEqual('USD')

        const { rvCurrency: rvCurrency4 } = getRvDetails(null)
        expect(rvCurrency4).toStrictEqual('USD')
      })

      test('rvCountry', () => {
        const { rvCountry: rvCountry1 } = getRvDetails({ ...rvFullData, Location: { Country: 'US' } })
        expect(rvCountry1).toStrictEqual('US')

        const { rvCountry: rvCountry2 } = getRvDetails({ ...rvFullData, Location: { Country: 'CA' } })
        expect(rvCountry2).toStrictEqual('CA')

        const { rvCountry: rvCountry3 } = getRvDetails({ ...rvFullData, Location: { Country: 'ROW' } })
        expect(rvCountry3).toStrictEqual(undefined)

        const { rvCountry: rvCountry4 } = getRvDetails(null)
        expect(rvCountry4).toStrictEqual(undefined)
      })

      test('rvCountryId', () => {
        const { rvCountryId: rvCountryId1 } = getRvDetails({ ...rvFullData, Location: { Country: 'US' } })
        expect(rvCountryId1).toStrictEqual(2)

        const { rvCountryId: rvCountryId2 } = getRvDetails({ ...rvFullData, Location: { Country: 'CA' } })
        expect(rvCountryId2).toStrictEqual(1)

        const { rvCountryId: rvCountryId3 } = getRvDetails({ ...rvFullData, Location: { Country: 'ROW' } })
        expect(rvCountryId3).toStrictEqual(3)

        const { rvCountryId: rvCountryId4 } = getRvDetails(null)
        expect(rvCountryId4).toStrictEqual(null)
      })

      test('rvDeliveryMaxDistanceInKm', () => {
        const { rvDeliveryMaxDistanceInKm: rvDeliveryMaxDistanceInKmUS } = getRvDetails(rvFullData)
        expect(rvDeliveryMaxDistanceInKmUS).toStrictEqual(160.934)

        const { rvDeliveryMaxDistanceInKm: rvDeliveryMaxDistanceInKmCA } = getRvDetails({ ...rvFullData, DeliveryMaxDistance: 100, Location: { Country: 'CA' } })
        expect(rvDeliveryMaxDistanceInKmCA).toStrictEqual(100)

        const { rvDeliveryMaxDistanceInKm: rvDeliveryMaxDistanceInKmNone } = getRvDetails({ ...rvFullData, DeliveryMaxDistance: 0, Location: { Country: 'US' } })
        expect(rvDeliveryMaxDistanceInKmNone).toStrictEqual(0)
      })

      test('rvAllowPets', () => {
        const { rvAllowPets: rvAllowPetsTrue } = getRvDetails(rvFullData)
        expect(rvAllowPetsTrue).toStrictEqual(false)

        const { rvAllowPets: rvAllowPetsFalse } = getRvDetails({ ...rvFullData, InteriorFeatures: ['Smokers'] })
        expect(rvAllowPetsFalse).toStrictEqual(false)

        const { rvAllowPets: rvAllowPetsFalse2 } = getRvDetails({ ...rvFullData, InteriorFeatures: ['Petfriendly'] })
        expect(rvAllowPetsFalse2).toStrictEqual(true)
      })

      test('rvWeeklyPrice', () => {
        const { rvWeeklyPrice: rvWeeklyPrice1 } = getRvDetails(rvFullData)
        expect(rvWeeklyPrice1).toStrictEqual(64)

        const { rvWeeklyPrice: rvWeeklyPrice2 } = getRvDetails({ ...rvFullData, WeeklyDiscount: 0 })
        expect(rvWeeklyPrice2).toStrictEqual(80)
      })

      test('rvMonthlyPrice', () => {
        const { rvMonthlyPrice: rvMonthlyPrice1 } = getRvDetails(rvFullData)
        expect(rvMonthlyPrice1).toStrictEqual(72)

        const { rvMonthlyPrice: rvMonthlyPrice2 } = getRvDetails({ ...rvFullData, MonthlyDiscount: 0 })
        expect(rvMonthlyPrice2).toStrictEqual(80)
      })

      test('rvLocalizedRVType', () => {
        const { rvLocalizedRVType: rvLocalizedRVType1 } = getRvDetails({ ...rvFullData, RVType: 'ClassB' })
        expect(rvLocalizedRVType1).toStrictEqual('rvType.ClassB')

        const { rvLocalizedRVType: rvLocalizedRVType2 } = getRvDetails({ ...rvFullData, RVType: 'MicroTrailer' })
        expect(rvLocalizedRVType2).toStrictEqual('rvType.MicroTrailer')

        const { rvLocalizedRVType: rvLocalizedRVType3 } = getRvDetails({ ...rvFullData, RVType: 'RVCottage' })
        expect(rvLocalizedRVType3).toStrictEqual('rvType.RVCottage')
      })

      test('rvDisabledDates - SellingDate', () => {
        const { rvDisabledDates: rvDisabledDates1 } = getRvDetails({ ...rvFullData, Calendars: [], BookingSeasonEnd: null, BookingSeasonStart: null, RVSellingDate: '2022-01-01T00:00:00.000Z' })
        expect(rvDisabledDates1).toEqual([{ start: new Date('2022-01-01T00:00:00.000Z'), end: null }])
      })

      test('rvDisabledDates - BookingSeason', () => {
        const currentYear = new Date().getFullYear()
        const { rvDisabledDates: rvDisabledDates1 } = getRvDetails({ ...rvFullData, Calendars: [], RVSellingDate: null })
        expect(rvDisabledDates1).toEqual([
          { start: new Date(`${currentYear}-01-01`), end: new Date(`${currentYear}-03-31`) },
          { start: new Date(`${currentYear + 1}-01-01`), end: new Date(`${currentYear + 1}-03-31`) },
          { start: new Date(`${currentYear + 2}-01-01`), end: new Date(`${currentYear + 2}-03-31`) },
        ])
      })

      test('rvDisabledDates - Calendars Blocked dates)', () => {
        const { rvDisabledDates: rvDisabledDates3 } = getRvDetails({ ...rvFullData, BookingSeasonEnd: null, BookingSeasonStart: null, RVSellingDate: null })
        expect(rvDisabledDates3).toEqual([{ start: new Date('2021-01-02T00:00:00.000Z'), end: new Date('2021-01-31T00:00:00.000Z') }])
      })
    })
  })

  describe('with no data', () => {
    test('returns defaults for individual properties', () => {
      const {
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
        rvPhotos,
        rvPreBookingMessage,
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
      } = getRvDetails(rvNoData)

      expect(rvAliasName).toStrictEqual(null)
      expect(rvAllowCrossBorderTravel).toStrictEqual(false)
      expect(rvAllowFestivalEventsParticipation).toStrictEqual('No')
      expect(rvAllowOnlyExperiencedSimilarRV).toStrictEqual(false)
      expect(rvBedBunkDouble).toStrictEqual(null)
      expect(rvBedBunkTwin).toStrictEqual(null)
      expect(rvBedDinette).toStrictEqual(null)
      expect(rvBedKing).toStrictEqual(null)
      expect(rvBedQueen).toStrictEqual(null)
      expect(rvBedSofa).toStrictEqual(null)
      expect(rvBookingSeasonEnd).toStrictEqual(null)
      expect(rvBookingSeasonStart).toStrictEqual(null)
      expect(rvCalendars).toEqual(null)
      expect(rvChargePerHourOver).toStrictEqual(null)
      expect(rvCheckInAvailabilityDays).toEqual(null)
      expect(rvCheckInEndTime).toStrictEqual(null)
      expect(rvCheckInStartTime).toStrictEqual(null)
      expect(rvCheckoutEndTime).toStrictEqual(null)
      expect(rvCheckoutStartTime).toStrictEqual(null)
      expect(rvCleaningFee).toStrictEqual(10)
      expect(rvDailyKMAllowed).toStrictEqual(null)
      expect(rvDefaultPrice).toStrictEqual(100)
      expect(rvDeliveryCentsPerDistanceUnit).toStrictEqual(null)
      expect(rvDeliveryInstructions).toStrictEqual(null)
      expect(rvDeliveryMaxDistance).toStrictEqual(null)
      expect(rvDeliveryMinimumCostCents).toStrictEqual(null)
      expect(rvFreeHoursPerDay).toStrictEqual(null)
      expect(rvFuelType).toStrictEqual(null)
      expect(rvGuests).toStrictEqual(1)
      expect(rvHitchSize).toStrictEqual(null)
      expect(rvHitchWeight).toStrictEqual(null)
      expect(rvId).toStrictEqual('12345')
      expect(rvInsideLeadDays).toStrictEqual(1)
      expect(rvInteriorFeatures).toEqual(null)
      expect(rvIsActivated).toStrictEqual(false)
      expect(rvIsChargeMileage).toStrictEqual(null)
      expect(rvIsDeliveryOnly).toStrictEqual(false)
      expect(rvIsFeatured).toStrictEqual(false)
      expect(rvIsGenerator).toStrictEqual(null)
      expect(rvIsInstantBook).toStrictEqual(false)
      expect(rvIsInsured).toStrictEqual(true)
      expect(rvIsSuperHostActive).toStrictEqual(false)
      expect(rvLength).toStrictEqual(null)
      expect(rvListAddOns).toEqual(null)
      expect(rvLocation).toEqual(null)
      expect(rvMake).toStrictEqual(null)
      expect(rvMinimumTripLength).toStrictEqual(5)
      expect(rvModel).toStrictEqual(null)
      expect(rvMonthlyDiscount).toStrictEqual(10)
      expect(rvOriginalPrice).toStrictEqual(100)
      expect(rvOutsideLeadDays).toStrictEqual(1)
      expect(rvOwnerAbout).toStrictEqual(null)
      expect(rvOwnerAvatar).toStrictEqual(null)
      expect(rvOwnerCreatedAt).toStrictEqual(null)
      expect(rvOwnerFirstName).toStrictEqual(null)
      expect(rvOwnerId).toStrictEqual(123)
      expect(rvOwnerLastName).toStrictEqual(null)
      expect(rvOwnerScore).toStrictEqual(null)
      expect(rvOwnerVerified).toStrictEqual(false)
      expect(rvParkAmenities).toEqual(null)
      expect(rvPhotos).toEqual(null)
      expect(rvPreBookingMessage).toEqual(null)
      expect(rvRentalType).toStrictEqual(undefined)
      expect(rvRenterCategoryRatings).toEqual(null)
      expect(rvRenterRating).toStrictEqual(4.5)
      expect(rvReviews).toEqual(null)
      expect(rvRVBrandOther).toStrictEqual(null)
      expect(rvRVDescription).toStrictEqual(null)
      expect(rvRVName).toStrictEqual(null)
      expect(rvRVNumber).toStrictEqual(1234567890)
      expect(rvRVSellingDate).toStrictEqual(null)
      expect(rvRVType).toStrictEqual(null)
      expect(rvSeatbeltThreePoint).toStrictEqual(null)
      expect(rvSeatbeltTwoPoint).toStrictEqual(null)
      expect(rvSecurityDeposit).toStrictEqual(null)
      expect(rvSlideouts).toStrictEqual(null)
      expect(rvSurchargePerExtraKM).toStrictEqual(null)
      expect(rvTimezone).toStrictEqual(null)
      expect(rvTour3DUrl).toStrictEqual(null)
      expect(rvWeeklyDiscount).toStrictEqual(10)
      expect(rvWeight).toStrictEqual(null)
      expect(rvYear).toStrictEqual(2024)
    })

    test('returns advanced `has` checks', () => {
      const {
        rvHasAccommodations,
        rvHasAddons,
        rvHasPerUnitDelivery,
        rvHasRangeDiscounts,
      } = getRvDetails(rvNoData)

      expect(rvHasAccommodations).toStrictEqual(false)
      expect(rvHasAddons).toStrictEqual(false)
      expect(rvHasPerUnitDelivery).toStrictEqual(false)
      expect(rvHasRangeDiscounts).toStrictEqual(true)
    })

    test('returns basic `is` checks', () => {
      const {
        rvIsFromUs,
        rvIsFromCanada,
        rvIsMotorized,
        rvIsTowable,
        rvIsStatic,
        rvIsChargeGeneratorEnabled,
        rvIsChargeMileageEnabled,
      } = getRvDetails(rvNoData)

      expect(rvIsFromUs).toStrictEqual(false)
      expect(rvIsFromCanada).toStrictEqual(false)
      expect(rvIsMotorized).toStrictEqual(false)
      expect(rvIsTowable).toStrictEqual(false)
      expect(rvIsStatic).toStrictEqual(false)
      expect(rvIsChargeGeneratorEnabled).toStrictEqual(false)
      expect(rvIsChargeMileageEnabled).toStrictEqual(false)
    })

    test('returns advanced properties', () => {
      const {
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
      } = getRvDetails(rvNoData)

      expect(rvFormattedName).toStrictEqual('')
      expect(rvFormattedDescription).toStrictEqual('')
      expect(rvFormattedLocation).toStrictEqual('')
      expect(rvFullModelLabel).toStrictEqual('')
      expect(rvComputedTimezone).toStrictEqual('America/New_York')
      expect(rvMinBookableDate).toStrictEqual(new Date('2020-04-01T04:00:00.000Z'))
      expect(rvMaxBookableDate).toStrictEqual(new Date('2020-04-01T04:00:00.000Z'))
      expect(rvMeasurementUnit).toStrictEqual('miles')
      expect(rvCurrency).toStrictEqual('USD')
      expect(rvCountry).toStrictEqual(undefined)
      expect(rvCountryId).toStrictEqual(null)
      expect(rvDeliveryMaxDistanceInKm).toStrictEqual(0)
      expect(rvAllowPets).toStrictEqual(false)
      expect(rvWeeklyPrice).toStrictEqual(90)
      expect(rvMonthlyPrice).toStrictEqual(90)
    })
  })
})
