import { COUNTRY_SHORTS } from '~/constants'
import type { RvSnapshot } from '~/types'
import type { FinancialCommon } from '~/types/financial'

/**
 * Get the free distance in kilometers for a given RV snapshot and financial data.
 *
 * @param {RvSnapshot} rvSnapshot - The RV snapshot data.
 * @param {FinancialCommon} financial - The financial data.
 * @returns {number | null} The free distance in kilometers or null if the RV is not on charge mileage.
 *
 * @example getFreeDistanceKms(rvSnapshot, financial) // 1000
 * @deprecated
 */
export default function getFreeDistanceKms(rvSnapshot: RvSnapshot, financial: FinancialCommon) {
  if (!rvSnapshot?.IsChargeMileage) {
    return null
  }

  const freeKms = rvSnapshot.DailyKMAllowed! * (financial.TotalNights! + 1)
  const isUS = [rvSnapshot.Country, financial.Country].includes(COUNTRY_SHORTS.US)

  return Math.round(isUS ? miToKm(freeKms) : freeKms)
}
