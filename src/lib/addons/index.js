import { DELIVERY_ADDON_PREFIX, UNIT_MEASUREMENT } from '~/constants'
import { getDeliveryDistanceBySlug } from '~/lib/rvs/index.js'

export const isDeliveryAddon = (addon) => {
  return addon.Slug !== '' && String(addon.Slug).startsWith(DELIVERY_ADDON_PREFIX)
}

export const getFinancialFriendlyAddonName = (addons, country, i18n) => {
  if (!addons) {
    return []
  }

  return addons
    .filter((addon) => addon.AddOnType === 'RVAddOn')
    .map((addon) => {
      let tempName

      if (addon.Slug === 'airport_pickup') {
        tempName = `${i18n.t('DASHBOARD.ADDONS.AIRPORT_PICKUP')} - ${addon.Name}`
      }
      else if (addon.Slug.startsWith(DELIVERY_ADDON_PREFIX)) {
        const distance = getDeliveryDistanceBySlug(addon.Slug)

        if (country === 'US') {
          tempName = i18n.t('DASHBOARD.ADDONS.DELIVERY', {
            distance: distance.miles,
            unit: UNIT_MEASUREMENT.MILES,
          })
        }
        else {
          tempName = i18n.t('DASHBOARD.ADDONS.DELIVERY', {
            distance: distance.km,
            unit: UNIT_MEASUREMENT.KM,
          })
        }
      }
      else {
        tempName = addon.Name
      }

      return {
        ...addon,
        Name: i18n.te(tempName) ? i18n.t(tempName) : tempName,
      }
    })
}
