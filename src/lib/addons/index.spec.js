import { isDeliveryAddon } from '~/lib/addons'

const addonsMock = [
  {
    "Id": 3245,
    "Name": "Cleaning fee",
    "PricePerItem": 60,
    "IsDaily": false,
    "Quantity": 1,
    "IdInRV": 0,
    "AllowedAddonId": null,
    "Slug": null,
    "AddOnType": "CleaningFee",
    "TotalAmount": 60,
    "FinancialId": 6093
  }, {
    "Id": 3246,
    "Name": "Road side",
    "PricePerItem": 18,
    "IsDaily": true,
    "Quantity": 1,
    "IdInRV": 0,
    "AllowedAddonId": null,
    "Slug": null,
    "AddOnType": "Roadside",
    "TotalAmount": 54,
    "FinancialId": 6093
  }, {
    "Id": 3252,
    "Name": "Delivery within 200km",
    "PricePerItem": 640,
    "IsDaily": false,
    "Quantity": 1,
    "IdInRV": 4142,
    "AllowedAddonId": null,
    "Slug": "rv_delivery_(within_400_kms)",
    "AddOnType": "RVAddOn",
    "TotalAmount": 640,
    "FinancialId": 6093
  }
]

describe('Library - Addons', () => {
  test('isDeliveryAddon', () => {
    expect(isDeliveryAddon(addonsMock[0])).toBe(false)
    expect(isDeliveryAddon(addonsMock[1])).toBe(false)
    expect(isDeliveryAddon(addonsMock[2])).toBe(true)
  })
})
