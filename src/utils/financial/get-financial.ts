import type { COUNTRY_SHORTS } from '~/constants'
import type { Nullable } from '~/types'
import type { FinancialCommon } from '~/types/financial'

export function getFinancial(financial?: Nullable<FinancialCommon>) {
  /**
   * Basic Financial properties.
   * Always in the format of `financial[PropertyName]`.
   * Defaults are dependent on the schema and added manually.
   */

  const financialAddOns = financial?.AddOns ?? []
  const financialAmountDue = financial?.AmountDue ?? 0
  const financialBookingId = financial?.BookingId
  const financialCountry = financial?.Country as COUNTRY_SHORTS
  const financialDiscount = financial?.Discount ?? 0
  const financialDeductibleAmountBasic = financial?.DeductibleAmountBasic ?? 0
  const financialDeductibleAmountStandard = financial?.DeductibleAmountStandard ?? 0
  const financialDeductibleAmountPremium = financial?.DeductibleAmountPremium ?? 0
  const financialDeductibleAmountStationary = financial?.DeductibleAmountStationary ?? 0
  const financialInsuranceProtectionLevel = financial?.InsuranceProtectionLevel ?? undefined
  const financialNightlyInsuranceRateBasic = financial?.NightlyInsuranceRateBasic ?? 0
  const financialNightlyInsuranceRateStandard = financial?.NightlyInsuranceRateStandard ?? 0
  const financialNightlyInsuranceRatePremium = financial?.NightlyInsuranceRatePremium ?? 0
  const financialNightlyInsuranceRateStationary = financial?.NightlyInsuranceRateStationary ?? 0
  const financialPayToReserve = financial?.PayToReserve ?? 0
  const financialRenterTotal = financial?.RenterTotal ?? 0
  const financialNightlyRoadsideBasicRate = financial?.NightlyRoadsideBasicRate ?? 0
  const financialNightlyRoadsideStandardRate = financial?.NightlyRoadsideStandardRate ?? 0
  const financialNightlyRoadsidePremiumRate = financial?.NightlyRoadsidePremiumRate ?? 0
  const financialNightlyRoadsideStationaryRate = financial?.NightlyRoadsideStationaryRate ?? 0
  const financialOwnerPayoutTotal = financial?.OwnerPayoutTotal ?? 0
  const financialTotalOwnerServiceFee = financial?.TotalOwnerServiceFee ?? 0
  const financialPayLater = financial?.PayLater ?? 0
  const financialPayLaterOn = financial?.PayLaterOn
  const financialStatus = financial?.Status
  const financialTotalAddOns = financial?.TotalAddOns ?? 0
  const financialTotalCleanings = financial?.TotalCleanings ?? 0
  const financialTotalDelivery = financial?.TotalDelivery ?? 0
  const financialTotalInsurances = financial?.TotalInsurances ?? 0
  const financialTotalNights = financial?.TotalNights ?? 0
  const financialTotalOwnerSalesTaxes = financial?.TotalOwnerSalesTaxes ?? 0
  const financialTotalPreDiscountRentalAmount = financial?.TotalPreDiscountRentalAmount ?? 0
  const financialTotalRentalAmount = financial?.TotalRentalAmount ?? 0
  const financialTotalRenterServiceFee = financial?.TotalRenterServiceFee ?? 0
  const financialTotalRenterTaxes = financial?.TotalRenterTaxes ?? 0
  const financialTotalRoadsides = financial?.TotalRoadsides ?? 0
  const financialTotalSecurityDeposits = financial?.TotalSecurityDeposits ?? 0
  const financialTotalUSTaxes = financial?.TotalUSTaxes ?? 0

  // Discounts
  const financialDiscountsMidweekdays = financial?.Discounts?.Midweekdays
  const financialDiscountsMonthly = financial?.Discounts?.Monthly
  const financialDiscountsWeekly = financial?.Discounts?.Weekly

  // Nightly
  const financialNightlyBase = financial?.Nightly?.Base ?? 0
  const financialNightlyDiscounted = financial?.Nightly?.Discounted ?? 0

  // Credits
  const financialCreditsToBeApplied = financial?.CreditsToBeApplied ?? 0
  const financialTotalCreditsToBeApplied = financial?.TotalCreditsToBeApplied ?? 0
  const financialCreditsApplied = financial?.CreditsApplied ?? 0

  // Promo Code
  const financialPromoCode = financial?.PromoCode || null
  const financialTotalPromotionalDiscountAmount = financial?.TotalPromotionalDiscountAmount ?? 0

  /**
   * Basic `is` checks.
   * Always in the format of `is[PropertyName]`.
   */
  const financialIsAwaitingOwnerApproval = financialStatus === 'AwaitingOwnerApproval'

  /**
   * Advanced properties that depend on more than just the base properties.
   * Always in the format of `financial[CustomPropertyName]`.
   */
  const financialRvAddOns = financialAddOns.filter((addon) => addon.AddOnType === 'RVAddOn')
  const financialTotalDays = financialTotalNights + 1
  const financialTotalProtection = financialTotalInsurances + financialTotalRoadsides

  return {
    financialAmountDue,
    // financialAddOns,
    financialBookingId,
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
    financialOwnerPayoutTotal,
    financialPayLater,
    financialPayLaterOn,
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
    financialCreditsApplied,

    financialPromoCode,
    financialTotalPromotionalDiscountAmount,

    financialIsAwaitingOwnerApproval,

    financialRvAddOns,
    financialTotalDays,
    financialTotalProtection,
  }
}
