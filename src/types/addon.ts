import type { components } from '#open-fetch-schemas/rentals'

export type CommonAddon = components['schemas']['RVezy.Common.Models.CommonAddOnResponse'] & {
  isSelected?: boolean
  icon?: string
}
