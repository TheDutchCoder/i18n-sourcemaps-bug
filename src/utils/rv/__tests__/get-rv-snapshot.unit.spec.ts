import { beforeEach, describe, expect, test } from 'vitest'
import { getRvSnapshot } from '~/utils/rv/get-rv-snapshot'
import type { RvSnapshot } from '~/types'

const mockBookingPriceRvSnapshotData: RvSnapshot = {
  Id: 0,
  RVId: '1168f6df-312d-459d-958e-1a6090cb028c',
  OwnerTaxPercentage: 0.13,
  OwnerServiceFeePercentage: 0.15,
  StartDate: '0001-01-01T00:00:00+00:00',
  EndDate: '0001-01-01T00:00:00+00:00',
  DefaultPrice: 222,
  Street: '245 Cooper Street',
  Latitude: 45.418408,
  Longitude: -75.691953,
  RVState: 'Ontario',
  HSTPercentage: 0,
  QSTPercentage: 0,
  PSTPercentage: 0,
  GSTPercentage: 0,
  Value: 0,
  InsuranceProtectionFeePct: 0,
  InsuranceProtectionCoveredAmount: 0,
  SecurityDepositAmount: 0,
  DiscountOnWeek: 0.1,
  DiscountOnMonth: 0.2,
  MidweekDiscount: 0,
  RentalType: 'MotorHome',
  RVName: 'pl Hfbnhb Gggjj Classe A',
  IsInsured: true,
  IsChargeMileage: false,
  DailyKMAllowed: null,
  SurchargePerExtraKM: null,
  IsChargeGenerator: false,
  FreeHoursPerDay: null,
  ChargePerHourOver: null,
  RVPhoto: '/rv/dev/1168f6df312d459d958e1a6090cb028c_20240819125431068.jpg',
  RVType: 'ClassA',
  Year: 2019,
  IsFeatured: false,
  Country: 'CA',
  HubId: 22,
  Timezone: 'America/Toronto',
  RVPostalCode: 'K2P 0G2',
  City: 'Ottawa',
  ApplyIncomeProtectionByDefault: false,
  IsDeliveryOnly: false,
  InsideLeadDays: 0,
  OutsideLeadDays: 0,
  MinimumRentalDay: 2,
  ShortStaysOptIn: true,
  CheckInPreference: '{"Start":-1,"End":-1}',
  CheckOutPreference: '{"Start":-1,"End":-1}',
  OriginalDefaultPrice: 222,
  SmartPricingPercentage: null,
  SmartPricingMinPrice: null,
  HasSmartPricingApplied: false,
  AllowOnlyExperiencedSimilarRV: false,
  AllowFestivalEventsParticipation: 'Yes',
  AllowCrossBorderTravel: true,
  BookingSeasonStart: null,
  BookingSeasonEnd: null,
  DeliveryCentsPerDistanceUnit: 200,
  DeliveryMaxDistance: 250,
  DeliveryMinimumCostCents: 10000,
  CheckInStartTime: -1,
  CheckInEndTime: -1,
  CheckoutStartTime: -1,
  CheckoutEndTime: -1,
  PinConnector: undefined, // null,
  ElectricalConnector: undefined, // null,
  ElectricalAdaptersIncluded: [],
  HitchTypeInclusion: undefined, // null,
  BrakeControllerIncluded: null,
  RVListingBadges: null,
}

describe('getRvDetails', () => {
  beforeEach(() => {
    getRvSnapshot(undefined)
  })

  describe('with full data', () => {
    test('returns basic properties', () => {
      const {
        rvSnapshotId,
        rvSnapshotChargePerHourOver,
        rvSnapshotDailyKMAllowed,
        rvSnapshotFreeHoursPerDay,
        rvSnapshotIsChargeGenerator,
        rvSnapshotIsChargeMileage,
        rvSnapshotIsInsured,
        rvSnapshotSmartPricingMinPrice,
        rvSnapshotSmartPricingPercentage,
        rvSnapshotSurchargePerExtraKM,

        rvSnapshotCountry,
        rvSnapshotCurrency,
        rvSnapshotHasFreeHoursPerDay,
        rvSnapshotHasSmartPricing,
        rvSnapshotIsChargeGeneratorEnabled,

      } = getRvSnapshot(mockBookingPriceRvSnapshotData)

      expect(rvSnapshotId).toBe(0)
      expect(rvSnapshotChargePerHourOver).toBe(0)
      expect(rvSnapshotDailyKMAllowed).toBe(0)
      expect(rvSnapshotFreeHoursPerDay).toBe(0)
      expect(rvSnapshotIsChargeGenerator).toBe(false)
      expect(rvSnapshotIsChargeMileage).toBe(false)
      expect(rvSnapshotIsInsured).toBe(true)
      expect(rvSnapshotSmartPricingMinPrice).toBe(0)
      expect(rvSnapshotSmartPricingPercentage).toBe(0)
      expect(rvSnapshotSurchargePerExtraKM).toBe(0)

      expect(rvSnapshotCountry).toBe('CA')
      expect(rvSnapshotCurrency).toBe('CAD')
      expect(rvSnapshotHasFreeHoursPerDay).toBe(false)
      expect(rvSnapshotHasSmartPricing).toBe(false)
      expect(rvSnapshotIsChargeGeneratorEnabled).toBe(false)
    })
  })

  describe('with no data', () => {
    test('returns basic properties', () => {
      const {
        rvSnapshotId,
        rvSnapshotChargePerHourOver,
        rvSnapshotDailyKMAllowed,
        rvSnapshotFreeHoursPerDay,
        rvSnapshotIsChargeGenerator,
        rvSnapshotIsChargeMileage,
        rvSnapshotIsInsured,
        rvSnapshotSmartPricingMinPrice,
        rvSnapshotSmartPricingPercentage,
        rvSnapshotSurchargePerExtraKM,

        rvSnapshotCountry,
        rvSnapshotCurrency,
        rvSnapshotHasFreeHoursPerDay,
        rvSnapshotHasSmartPricing,
        rvSnapshotIsChargeGeneratorEnabled,
      } = getRvSnapshot(undefined)

      expect(rvSnapshotId).toBe(undefined)
      expect(rvSnapshotChargePerHourOver).toBe(0)
      expect(rvSnapshotDailyKMAllowed).toBe(0)
      expect(rvSnapshotFreeHoursPerDay).toBe(0)
      expect(rvSnapshotIsChargeGenerator).toBe(false)
      expect(rvSnapshotIsChargeMileage).toBe(false)
      expect(rvSnapshotIsInsured).toBe(false)
      expect(rvSnapshotSmartPricingMinPrice).toBe(0)
      expect(rvSnapshotSmartPricingPercentage).toBe(0)
      expect(rvSnapshotSurchargePerExtraKM).toBe(0)

      expect(rvSnapshotCountry).toBe(undefined)
      expect(rvSnapshotCurrency).toBe(undefined)
      expect(rvSnapshotHasFreeHoursPerDay).toBe(false)
      expect(rvSnapshotHasSmartPricing).toBe(false)
      expect(rvSnapshotIsChargeGeneratorEnabled).toBe(false)
    })
  })
})
