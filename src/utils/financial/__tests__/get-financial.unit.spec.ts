import { beforeEach, describe, expect, test } from 'vitest'
import { getFinancial } from '~/utils/financial/get-financial'
import type { FinancialCommon } from '~/types'

const bookingPriceFinancialData: FinancialCommon = {
  BookingId: 0,
  MinimumDailyServiceFeeMotorHome: 15,
  MinimumDailyServiceFeeRVCottage: 10,
  MinimumDailyServiceFeeTravelTrailer: 10,
  OwnerServiceFeePercentage: 0.15,
  RenterServiceFeePercentage: 0.2,
  OwnerId: 1,
  RenterId: 0,
  RentalType: 'MotorHome',
  Status: 'AwaitingOwnerApproval',
  TaxRules: [
    {
      BookingId: 0,
      TaxRuleType: 'Renter',
      TaxCode: 'HST',
      Rate: 0.13,
      LineItem: undefined, // null,
      Id: 0,
      Timestamp: '0001-01-01T00:00:00+00:00',
    },
    {
      BookingId: 0,
      TaxRuleType: 'Owner',
      TaxCode: 'HST',
      Rate: 0.13,
      LineItem: undefined, // null,
      Id: 0,
      Timestamp: '0001-01-01T00:00:00+00:00',
    },
  ],
  NightlyRoadsideRate: 16,
  NightlyRoadsideBasicRate: 16,
  NightlyRoadsideStandardRate: 16,
  NightlyRoadsidePremiumRate: 16,
  NightlyRoadsideStationaryRate: 4,
  NightlyInsuranceRate: 39.99,
  NightlyInsuranceRateBasic: 31.99,
  NightlyInsuranceRateStandard: 39.99,
  NightlyInsuranceRatePremium: 54.99,
  NightlyInsuranceRateStationary: 23.99,
  NightlyInsuranceCost: 0,
  InsurancePricingStrategy: 'NightlyTieredRate',
  InsuranceProtectionLevel: 'Standard',
  SecurityDepositFee: 0,
  DeductibleAmount: 2000,
  DeductibleAmountBasic: 3000,
  DeductibleAmountStandard: 2000,
  DeductibleAmountPremium: 1000,
  DeductibleAmountStationary: 3000,
  StripeCustomerId: null,
  StripeOwnerAccountId: null,
  StripePaymentMethodId: null,
  PaymentMethodAddedOn: null,
  Nights: [
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 5,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-05T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 6,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-06T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 7,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-07T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 8,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-08T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 9,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-09T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 10,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-10T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
    {
      Id: 0,
      BookingId: 0,
      Year: 2024,
      Month: 10,
      Day: 11,
      RentalFee: 199.8,
      PreDiscountRentalFee: 222,
      InsuranceFee: 39.99,
      InsuranceCost: 0,
      ExtraInsuranceFee: 0,
      DateTime: '2024-10-11T00:00:00+00:00',
      AddOnFees: [
        {
          Id: 0,
          BookingId: 0,
          AddOnId: 0,
          Amount: 16,
          NightId: null,
        },
      ],
    },
  ],
  AddOns: [
    {
      Id: 0,
      Name: 'Cleaning fee',
      PricePerItem: 60,
      IsDaily: false,
      Quantity: 1,
      IdInRV: 0,
      AllowedAddonId: null,
      Slug: null,
      AddOnType: 'CleaningFee',
      TotalAmount: 60,
      FinancialId: 0,
    },
    {
      Id: 0,
      Name: 'Road side',
      PricePerItem: 16,
      IsDaily: true,
      Quantity: 1,
      IdInRV: 0,
      AllowedAddonId: null,
      Slug: null,
      AddOnType: 'Roadside',
      TotalAmount: 112,
      FinancialId: 0,
    },
  ],
  Country: 'CA',
  OneTimeAddOnFees: [
    {
      Id: 0,
      BookingId: 0,
      AddOnId: 0,
      Amount: 60,
      NightId: null,
    },
  ],
  RenterAdminCharges: [],
  RenterAdminRefunds: [],
  OwnerAdminPayouts: [],
  OwnerDebts: [],
  OwnerPayoutHolds: [],
  FailedStripePayments: [],
  Payments: [],
  StripeServiceFeeCharges: [],
  Refunds: [],
  StripeServiceFeeRefunds: [],
  PaymentReductions: [],
  Payouts: [],
  PayoutReversals: [],
  Credit: [],
  CreditConsumptions: [],
  CreditReductions: [],
  TotalPromotionalDiscountAmount: 0,
  OwnerSalesTaxRules: [],
  OwnerTaxRules: [
    {
      BookingId: 0,
      TaxRuleType: 'Owner',
      TaxCode: 'HST',
      Rate: 0.13,
      LineItem: undefined, // null,
      Id: 0,
      Timestamp: '0001-01-01T00:00:00+00:00',
    },
  ],
  RenterTaxRules: [
    {
      BookingId: 0,
      TaxRuleType: 'Renter',
      TaxCode: 'HST',
      Rate: 0.13,
      LineItem: undefined, // null,
      Id: 0,
      Timestamp: '0001-01-01T00:00:00+00:00',
    },
  ],
  USTaxRules: [],
  TotalRefundableAmount: 0,
  OwnerPayoutTotal: 1211.37,
  TotalAddOns: 0,
  TotalCloseouts: 0,
  TotalDamages: 0,
  TotalGenerators: 0,
  TotalInsuranceCosts: 0,
  TotalInsurances: 279.93,
  TotalMileage: 0,
  TotalNights: 7,
  TotalOthers: 0,
  TotalOwnerSalesTaxes: 0,
  TotalUSTaxes: 0,
  TotalOwnerSalesTaxRecognitions: 0,
  TotalOwnerServiceFee: 218.79,
  TotalOwnerTaxes: 28.44,
  TotalPayments: 0,
  TotalPayoutAmounts: 1211.37,
  TotalPayouts: 0,
  TotalPayoutReversals: 0,
  TotalReversiblePayoutAmount: 1211.37,
  TotalRegularPayouts: 0,
  TotalRefunds: 0,
  TotalRentalAmount: 1398.6,
  TotalPreDiscountRentalAmount: 1554,
  TotalRentalPayments: 0,
  TotalRentalRefunds: 0,
  TotalRenterServiceFee: 314.12,
  TotalRenterTaxes: 91.79,
  TotalRoadsides: 112,
  TotalCleanings: 60,
  TotalSecurityDepositPayments: 0,
  TotalSecurityDepositRefunds: 0,
  TotalSecurityDepositPaymentReductions: 0,
  TotalSecurityDeposits: 0,
  TotalStripeServiceFeeAmount: 0,
  TotalStripeServiceFees: 0,
  TotalGoodwillRefunds: 0,
  TotalRenterAdminRefunds: 0,
  TotalRenterAdminCharges: 0,
  TotalOwnerAdminPayouts: 0,
  TotalOwnerDebts: 0,
  TotalPayoutHolds: 0,
  TotalRenterRefunds: 0,
  TotalDeductiblesCollected: 0,
  TotalDepositDeductible: 0,
  TotalUncollectableFunds: 0,
  TotalRenterCreditRefunded: 0,
  TotalPromotionalCreditRefunded: 0,
  TotalCreditRefunded: 0,
  TotalRenterCreditPayments: 0,
  TotalPromotionalCreditPayments: 0,
  TotalCreditPayments: 0,
  TotalReferralCredits: 0,
  TotalGMV: 2164.65,
  TotalRenterRevenue: 706.05,
  TotalIncomeProtectionPayout: 0,
  TotalIncomeProtection: 0,
  TotalSecurityDepositPaid: 0,
  TotalRentalPaid: 0,
  OwnerPayoutOutstandingBalance: 1211.37,
  RenterOutstandingBalance: 2256.44,
  OwnerSalesTaxOutstandingBalance: 0,
  TotalPaid: 0,
  SecurityDepositBalance: 0,
  RenterTotal: 2256.44,
  OwnerTotal: 1211.37,
  AmountDue: 2256.44,
  TransactionHistories: [],
  RenterUnusedCredits: [],
  TotalUnusedCredits: 0,
  OwnerSalesTaxAmounts: [],
  OwnerTaxAmounts: [
    {
      Id: 0,
      TaxCode: 'HST',
      Rate: 0.13,
      Amount: 28.44,
    },
  ],
  RenterTaxAmounts: [
    {
      Id: -1,
      TaxCode: 'HST',
      Rate: 0.13,
      Amount: 91.79,
    },
  ],
  USTaxAmounts: [],
  OwnerReferralCredits: 0,
  RenterReferralCredits: 0,
  FullPaymentAmountOnCancel: 0,
  SecurityDepositAmount: 0,
  PendingRenterRefund: null,
  PayLaterOn: '2024-08-29T00:00:00+00:00',
  SecurityDepositOn: '2024-10-02T00:00:00+00:00',
  SecurityDepositTaken: null,
  SecurityDepositFailed: null,
  DepositAmount: 2256.44,
  CreditsToBeApplied: 0,
  PayToReserve: 2256.44,
  RemainingAmount: 0,
  CreditsToBeAppliedLater: 0,
  PayLater: 0,
  Discount: 10,
  RemainingCreditsToBeApplied: 0,
  CreditsApplied: 0,
  RenterDiscountedTotal: 2256.44,
  TotalDelivery: 0,
  PromoCode: null,
  TotalCreditsToBeApplied: 0,
  BuyNowPayLaterUsed: false,
  TotalDeliveryFee: 0,
  TotalOwnerServiceFeeWithoutDelivery: 218.79,
  Nightly: {
    Base: 222,
    Discounted: 200,
  },
  Discounts: {
    Midweekdays: undefined, // null,
    Weekly: {
      Percentage: 10,
      DiscountAmount: 155.4,
      NumberOfNights: 7,
    },
    Monthly: undefined, // null,
  },
}

const mockBookingFinancialData = <FinancialCommon>(bookingPriceFinancialData)

describe('getRvDetails', () => {
  beforeEach(() => {
    getFinancial(undefined)
  })

  describe('with full data', () => {
    test('returns basic properties', () => {
      const {
        financialCountry,
        financialDiscount,
        financialDeductibleAmountBasic,
        financialDeductibleAmountStandard,
        financialDeductibleAmountPremium,
        financialDeductibleAmountStationary,
        financialInsuranceProtectionLevel,
        financialNightlyInsuranceRateBasic,
        financialNightlyInsuranceRateStandard,
        financialNightlyInsuranceRatePremium,
        financialNightlyInsuranceRateStationary,
        financialPayToReserve,
        financialRenterTotal,
        financialNightlyRoadsideBasicRate,
        financialNightlyRoadsideStandardRate,
        financialNightlyRoadsidePremiumRate,
        financialNightlyRoadsideStationaryRate,
        financialTotalAddOns,
        financialTotalCleanings,
        financialTotalDelivery,
        financialTotalInsurances,
        financialTotalNights,
        financialTotalOwnerSalesTaxes,
        financialTotalOwnerServiceFee,
        financialTotalPreDiscountRentalAmount,
        financialTotalRentalAmount,
        financialTotalRenterServiceFee,
        financialTotalRenterTaxes,
        financialTotalRoadsides,
        financialTotalSecurityDeposits,
        financialTotalUSTaxes,

        financialDiscountsMidweekdays,
        financialDiscountsMonthly,
        financialDiscountsWeekly,

        financialNightlyBase,
        financialNightlyDiscounted,
        financialCreditsToBeApplied,
        financialTotalCreditsToBeApplied,

        financialRvAddOns,
        financialTotalDays,
        financialTotalProtection,
      } = getFinancial(mockBookingFinancialData)

      expect(financialCountry).toBe('CA')
      expect(financialDiscount).toBe(10)
      expect(financialDeductibleAmountBasic).toBe(3000)
      expect(financialDeductibleAmountStandard).toBe(2000)
      expect(financialDeductibleAmountPremium).toBe(1000)
      expect(financialDeductibleAmountStationary).toBe(3000)
      expect(financialInsuranceProtectionLevel).toBe('Standard')
      expect(financialNightlyInsuranceRateBasic).toBe(31.99)
      expect(financialNightlyInsuranceRateStandard).toBe(39.99)
      expect(financialNightlyInsuranceRatePremium).toBe(54.99)
      expect(financialNightlyInsuranceRateStationary).toBe(23.99)
      expect(financialPayToReserve).toBe(2256.44)
      expect(financialRenterTotal).toBe(2256.44)
      expect(financialNightlyRoadsideBasicRate).toBe(16)
      expect(financialNightlyRoadsideStandardRate).toBe(16)
      expect(financialNightlyRoadsidePremiumRate).toBe(16)
      expect(financialNightlyRoadsideStationaryRate).toBe(4)
      expect(financialTotalAddOns).toBe(0)
      expect(financialTotalCleanings).toBe(60)
      expect(financialTotalDelivery).toBe(0)
      expect(financialTotalInsurances).toBe(279.93)
      expect(financialTotalNights).toBe(7)
      expect(financialTotalOwnerSalesTaxes).toBe(0)
      expect(financialTotalOwnerServiceFee).toBe(218.79)
      expect(financialTotalPreDiscountRentalAmount).toBe(1554)
      expect(financialTotalRentalAmount).toBe(1398.6)
      expect(financialTotalRenterServiceFee).toBe(314.12)
      expect(financialTotalRenterTaxes).toBe(91.79)
      expect(financialTotalRoadsides).toBe(112)
      expect(financialTotalSecurityDeposits).toBe(0)
      expect(financialTotalUSTaxes).toBe(0)

      expect(financialDiscountsMidweekdays).toBe(undefined)
      expect(financialDiscountsMonthly).toBe(undefined)
      expect(financialDiscountsWeekly).toEqual({
        Percentage: 10,
        DiscountAmount: 155.4,
        NumberOfNights: 7,
      })

      expect(financialNightlyBase).toBe(222)
      expect(financialNightlyDiscounted).toBe(200)
      expect(financialCreditsToBeApplied).toBe(0)
      expect(financialTotalCreditsToBeApplied).toBe(0)

      expect(financialRvAddOns).toEqual([])
      expect(financialTotalDays).toBe(8)
      expect(financialTotalProtection).toBe(391.93)
    })
  })

  describe('with no data', () => {
    test('returns basic properties', () => {
      const {
        financialCountry,
        financialDiscount,
        financialDeductibleAmountBasic,
        financialDeductibleAmountStandard,
        financialDeductibleAmountPremium,
        financialDeductibleAmountStationary,
        financialNightlyInsuranceRateBasic,
        financialNightlyInsuranceRateStandard,
        financialNightlyInsuranceRatePremium,
        financialNightlyInsuranceRateStationary,
        financialInsuranceProtectionLevel,
        financialPayToReserve,
        financialRenterTotal,
        financialNightlyRoadsideBasicRate,
        financialNightlyRoadsideStandardRate,
        financialNightlyRoadsidePremiumRate,
        financialNightlyRoadsideStationaryRate,
        financialTotalAddOns,
        financialTotalCleanings,
        financialTotalDelivery,
        financialTotalInsurances,
        financialTotalNights,
        financialTotalOwnerSalesTaxes,
        financialTotalOwnerServiceFee,
        financialTotalPreDiscountRentalAmount,
        financialTotalRentalAmount,
        financialTotalRenterServiceFee,
        financialTotalRenterTaxes,
        financialTotalRoadsides,
        financialTotalSecurityDeposits,
        financialTotalUSTaxes,

        financialDiscountsMidweekdays,
        financialDiscountsMonthly,
        financialDiscountsWeekly,

        financialNightlyBase,
        financialNightlyDiscounted,
        financialCreditsToBeApplied,
        financialTotalCreditsToBeApplied,

        financialRvAddOns,
        financialTotalDays,
        financialTotalProtection,
      } = getFinancial()

      expect(financialCountry).toBe(undefined)
      expect(financialDiscount).toBe(0)
      expect(financialDeductibleAmountBasic).toBe(0)
      expect(financialDeductibleAmountStandard).toBe(0)
      expect(financialDeductibleAmountPremium).toBe(0)
      expect(financialDeductibleAmountStationary).toBe(0)
      expect(financialNightlyInsuranceRateBasic).toBe(0)
      expect(financialNightlyInsuranceRateStandard).toBe(0)
      expect(financialNightlyInsuranceRatePremium).toBe(0)
      expect(financialNightlyInsuranceRateStationary).toBe(0)
      expect(financialInsuranceProtectionLevel).toBe(undefined)
      expect(financialPayToReserve).toBe(0)
      expect(financialRenterTotal).toBe(0)
      expect(financialNightlyRoadsideBasicRate).toBe(0)
      expect(financialNightlyRoadsideStandardRate).toBe(0)
      expect(financialNightlyRoadsidePremiumRate).toBe(0)
      expect(financialNightlyRoadsideStationaryRate).toBe(0)
      expect(financialTotalAddOns).toBe(0)
      expect(financialTotalCleanings).toBe(0)
      expect(financialTotalDelivery).toBe(0)
      expect(financialTotalInsurances).toBe(0)
      expect(financialTotalNights).toBe(0)
      expect(financialTotalOwnerSalesTaxes).toBe(0)
      expect(financialTotalOwnerServiceFee).toBe(0)
      expect(financialTotalPreDiscountRentalAmount).toBe(0)
      expect(financialTotalRentalAmount).toBe(0)
      expect(financialTotalRenterServiceFee).toBe(0)
      expect(financialTotalRenterTaxes).toBe(0)
      expect(financialTotalRoadsides).toBe(0)
      expect(financialTotalSecurityDeposits).toBe(0)
      expect(financialTotalUSTaxes).toBe(0)

      expect(financialDiscountsMidweekdays).toBe(undefined)
      expect(financialDiscountsMonthly).toBe(undefined)
      expect(financialDiscountsWeekly).toBe(undefined)

      expect(financialNightlyBase).toBe(0)
      expect(financialNightlyDiscounted).toBe(0)
      expect(financialCreditsToBeApplied).toBe(0)
      expect(financialTotalCreditsToBeApplied).toBe(0)

      expect(financialRvAddOns).toEqual([])
      expect(financialTotalDays).toBe(1)
      expect(financialTotalProtection).toBe(0)
    })
  })
})
