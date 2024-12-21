import { COUNTRY_CURRENCIES, COUNTRY_SHORTS } from '~/constants'
import type { Nullable, RvSnapshot } from '~/types'

export function getRvSnapshot(rvSnapshot?: Nullable<RvSnapshot>) {
  /**
   * Basic RVSnapshot properties.
   * Always in the format of `rvSnapshot[PropertyName]`.
   * Defaults are dependent on the schema and added manually.
   */
  const rvSnapshotChargePerHourOver = rvSnapshot?.ChargePerHourOver ?? 0
  const rvSnapshotCity = rvSnapshot?.City ?? null
  const rvSnapshotDailyKMAllowed = rvSnapshot?.DailyKMAllowed ?? 0
  const rvSnapshotFreeHoursPerDay = rvSnapshot?.FreeHoursPerDay ?? 0
  const rvSnapshotId = rvSnapshot?.Id
  const rvSnapshotIsChargeGenerator = rvSnapshot?.IsChargeGenerator ?? false
  const rvSnapshotIsChargeMileage = rvSnapshot?.IsChargeMileage ?? false
  const rvSnapshotIsInsured = rvSnapshot?.IsInsured ?? false
  const rvSnapshotOriginalDefaultPrice = rvSnapshot?.OriginalDefaultPrice ?? 0
  const rvSnapshotRentalType = rvSnapshot?.RentalType
  const rvSnapshotRVState = rvSnapshot?.RVState ?? null
  const rvSnapshotRVType = rvSnapshot?.RVType ?? null
  const rvSnapshotSmartPricingPercentage = rvSnapshot?.SmartPricingPercentage ?? 0
  const rvSnapshotSmartPricingMinPrice = rvSnapshot?.SmartPricingMinPrice ?? 0
  const rvSnapshotSurchargePerExtraKM = rvSnapshot?.SurchargePerExtraKM ?? 0

  /**
   * Advanced properties that depend on more than just the base properties.
   * Always in the format of `rvSnapshot[CustomPropertyName]`.
   */
  const rvSnapshotCountry = rvSnapshot?.Country ? (COUNTRY_SHORTS[rvSnapshot?.Country as keyof typeof COUNTRY_SHORTS]) : undefined
  const rvSnapshotCurrency = rvSnapshotCountry && COUNTRY_CURRENCIES[rvSnapshotCountry]
  const rvSnapshotHasFreeHoursPerDay = Boolean(rvSnapshotFreeHoursPerDay > 0)
  const rvSnapshotHasSmartPricing = Boolean(rvSnapshotSmartPricingPercentage || rvSnapshotSmartPricingMinPrice)
  const rvSnapshotIsChargeGeneratorEnabled = Boolean(rvSnapshotFreeHoursPerDay >= 0 && rvSnapshotChargePerHourOver > 0)

  return {
    rvSnapshotCountry,
    rvSnapshotCity,
    rvSnapshotChargePerHourOver,
    rvSnapshotCurrency,
    rvSnapshotDailyKMAllowed,
    rvSnapshotFreeHoursPerDay,
    rvSnapshotId,
    rvSnapshotIsChargeGenerator,
    rvSnapshotIsChargeMileage,
    rvSnapshotIsInsured,
    rvSnapshotOriginalDefaultPrice,
    rvSnapshotRentalType,
    rvSnapshotRVState,
    rvSnapshotRVType,
    rvSnapshotSmartPricingMinPrice,
    rvSnapshotSmartPricingPercentage,
    rvSnapshotSurchargePerExtraKM,

    rvSnapshotHasFreeHoursPerDay,
    rvSnapshotHasSmartPricing,
    rvSnapshotIsChargeGeneratorEnabled,
  }
}
