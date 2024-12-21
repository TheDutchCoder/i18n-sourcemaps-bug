import { BUDGET_FRIENDLY_MAX_PRICE, BUDGET_FRIENDLY_MIN_PRICE } from '~/constants/search'

export const isBudgetFriendlySelected = (minPrice?: number, maxPrice?: number): boolean => {
  return minPrice === BUDGET_FRIENDLY_MIN_PRICE && maxPrice === BUDGET_FRIENDLY_MAX_PRICE
}

export const shouldShowThanksgivingBanner = (experimentKey: string, userCountryCode: string): boolean => {
  if (!experimentKey) return false
  return String(experimentKey).split('|').includes(userCountryCode)
}
