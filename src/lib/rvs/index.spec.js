import {
  getId,
  getRvCountryId,
  getRvCountry,
  isRvFromCanada,
  isRvFromUs,
  getCurrencyFromRvCountry,
  getDefaultPrice,
  getNumber,
  getName,
  getFormattedName,
  getCity,
  getState,
  getDescription,
  getFormattedDescription,
  isChargeMileage,
  isGenerator,
  getGuests,
  hasLocation,
  getLocation,
  getDailyKmAllowed,
  hasAmenity,
  hasDelivery,
  getDelivery,
  buildDeliveryAddonObject,
  getSmallestDeliveryDistance,
  getMinBookableDate,
  getMaxBookableDate,
  getTimezone,
  getCheckInTime,
  getCheckOutTime,
  translateTime,
  hasAccommodations
} from '~/lib/rvs'
import rvJson from '~/test/mocks/rv'
import { DELIVERY_ADDON_DISTANCES } from '~/constants'
import { CurrencyEnumKey } from '~/lib/enums'

const caRv = { ...rvJson }
const usRv = {
  ...rvJson,
  Location: {
    ...rvJson.Location,
    Country: 'US'
  }
}
const rowRv = {
  ...rvJson,
  Location: {
    ...rvJson.Location,
    Country: 'ROW'
  }
}
const addonsRv = {
  ...rvJson,
  ListAddOns: [
    {
      Id: 0,
      IsDaily: false,
      Name: 'Delivery within 100km',
      PricePerItem: 200,
      Quantity: 0,
      Slug: 'rv_delivery_(within_100_kms)',
      Status: 'Active'
    },
    {
      Id: 0,
      IsDaily: false,
      Name: 'Delivery within 250km',
      PricePerItem: 300,
      Quantity: 0,
      Slug: 'rv_delivery_(within_250_kms)',
      Status: 'Active'
    },
    {
      Id: 0,
      IsDaily: false,
      Name: 'Delivery within 50km',
      PricePerItem: 100,
      Quantity: 0,
      Slug: 'rv_delivery_(within_50_kms)',
      Status: 'Active'
    },
    {
      Id: 0,
      IsDaily: false,
      Name: 'Delivery within 400km',
      PricePerItem: 400,
      Quantity: 0,
      Slug: 'rv_delivery_(within_400_kms)',
      Status: 'Active'
    }
  ]
}

describe('Library - RV', () => {
  test('getId', () => {
    expect(getId(caRv)).toBe('030e3125-4bde-4bf2-9ded-e77400e37f53')
  })
  test('getRvCountryId', () => {
    expect(getRvCountryId(caRv)).toBe(1)
    expect(getRvCountryId(usRv)).toBe(2)
    expect(getRvCountryId(rowRv)).toBe(3)
  })
  test('getRvCountry', () => {
    expect(getRvCountry(caRv)).toBe('CA')
    expect(getRvCountry(usRv)).toBe('US')
    expect(getRvCountry(rowRv)).toBe('ROW')
  })
  test('isRvFromUs', () => {
    expect(isRvFromUs(caRv)).toBe(false)
    expect(isRvFromUs(usRv)).toBe(true)
    expect(isRvFromUs(rowRv)).toBe(false)
  })
  test('isRvFromUsWithFallback', () => {
    const cloneusRV = JSON.parse(JSON.stringify(usRv))
    cloneusRV.Location = null
    expect(isRvFromUs(usRv)).toBe(true)
  })
  test('isRvFromCanada', () => {
    expect(isRvFromCanada(caRv)).toBe(true)
    expect(isRvFromCanada(usRv)).toBe(false)
    expect(isRvFromCanada(rowRv)).toBe(false)
  })
  test('getCurrencyFromRvCountry', () => {
    expect(getCurrencyFromRvCountry(caRv)).toBe(CurrencyEnumKey.CAD)
    expect(getCurrencyFromRvCountry(usRv)).toBe(CurrencyEnumKey.USD)
  })
  test('getDefaultPrice', () => {
    expect(getDefaultPrice(caRv)).toBe(200)
  })
  test('getNumber', () => {
    expect(getNumber(caRv)).toBe(1)
  })
  test('getName', () => {
    expect(getName(caRv)).toBe('Amazing Blaze')
  })
  test('getFormattedName', () => {
    expect(getFormattedName(caRv)).toBe('Amazing Blaze')
  })
  test('getCity', () => {
    expect(getCity(caRv)).toBe('Sidney')
  })
  test('getState', () => {
    expect(getState(caRv)).toBe('British Columbia')
  })
  test('getDescription', () => {
    expect(getDescription(caRv)).toBe('Lorem ipsum')
  })
  test('getFormattedDescription', () => {
    expect(getFormattedDescription(caRv)).toBe('Lorem ipsum')
  })
  test('isChargeMileage', () => {
    expect(isChargeMileage(caRv)).toBe(false)
  })
  test('isGenerator', () => {
    expect(isGenerator(caRv)).toBe(null)
  })
  test('getGuests', () => {
    expect(getGuests(caRv)).toBe(4)
  })
  test('hasLocation', () => {
    expect(hasLocation(caRv)).toBe(true)
  })
  test('getLocation', () => {
    expect(getLocation(caRv)).toEqual({ lat: -123.399192, lng: 48.64912 })
  })
  test('getDailyKmAllowed', () => {
    expect(getDailyKmAllowed(caRv)).toBe(null)
  })
  test('hasAmenity', () => {
    expect(hasAmenity(caRv, 'AirConditioner')).toBe(true)
    expect(hasAmenity(caRv, 'WiFi')).toBe(false)
  })
  test('hasDelivery', () => {
    expect(hasDelivery(caRv)).toBe(false)
  })
  test('getDelivery', () => {
    expect(getDelivery(caRv)).toBeNull()
  })
  test('buildDeliveryAddonObject', () => {
    expect(buildDeliveryAddonObject(DELIVERY_ADDON_DISTANCES['25'])).toEqual({
      Id: null,
      AllowedAddOnId: 10,
      AllowedAddOn: null,
      Name: 'Delivery within 25km',
      Quantity: 1,
      IsDaily: false,
      PricePerItem: 150,
      Slug: 'rv_delivery_(within_50_kms)'
    })
  })
  test('buildDeliveryAddonObject', () => {
    const allDeliveryBuckets = [
      {
        Id: 28,
        AllowedAddOnId: 10,
        AllowedAddOn: null,
        Name: 'Delivery within 25km',
        Quantity: 1,
        IsDaily: false,
        PricePerItem: 100,
        Slug: 'rv_delivery_(within_50_kms)',
        Status: 'Active',
        RVId: '6e25c64d-cff6-46fb-93f7-1895ddba88d8',
        CreatedAt: '2022-10-11T19:36:12.2337247-04:00',
        ModifiedAt: '2022-10-11T19:36:12.2337247-04:00'
      },
      {
        Id: 27,
        AllowedAddOnId: 3,
        AllowedAddOn: null,
        Name: 'Delivery within 50km',
        Quantity: 1,
        IsDaily: false,
        PricePerItem: 200,
        Slug: 'rv_delivery_(within_100_kms)',
        Status: 'Active',
        RVId: '6e25c64d-cff6-46fb-93f7-1895ddba88d8',
        CreatedAt: '2022-10-11T19:36:12.2337247-04:00',
        ModifiedAt: '2022-10-11T19:36:12.2337247-04:00'
      },
      {
        Id: 26,
        AllowedAddOnId: 9,
        AllowedAddOn: null,
        Name: 'Delivery within 100km',
        Quantity: 1,
        IsDaily: false,
        PricePerItem: 300,
        Slug: 'rv_delivery_(within_250_kms)',
        Status: 'Active',
        RVId: '6e25c64d-cff6-46fb-93f7-1895ddba88d8',
        CreatedAt: '2022-10-11T19:36:12.2337247-04:00',
        ModifiedAt: '2022-10-11T19:36:12.2337247-04:00'
      },
      {
        Id: 1061,
        AllowedAddOnId: 33,
        AllowedAddOn: null,
        Name: 'Delivery within 200km',
        Quantity: 1,
        IsDaily: false,
        PricePerItem: 1000,
        Slug: 'rv_delivery_(within_400_kms)',
        Status: 'Active',
        RVId: '6e25c64d-cff6-46fb-93f7-1895ddba88d8',
        CreatedAt: '2022-11-06T14:02:20.7413568-05:00',
        ModifiedAt: '2022-11-06T14:02:20.7413568-05:00'
      }
    ]

    expect(getSmallestDeliveryDistance(allDeliveryBuckets, 9)).toEqual(allDeliveryBuckets[0])
    expect(getSmallestDeliveryDistance(allDeliveryBuckets, 26)).toEqual(allDeliveryBuckets[1])
    expect(getSmallestDeliveryDistance(allDeliveryBuckets, 51)).toEqual(allDeliveryBuckets[2])
    expect(getSmallestDeliveryDistance(allDeliveryBuckets, 101)).toEqual(allDeliveryBuckets[3])

    const [firstBucket, secondBucket, ...restTwoBuckets] = allDeliveryBuckets

    expect(getSmallestDeliveryDistance(restTwoBuckets, 9)).toEqual(allDeliveryBuckets[2])
    expect(getSmallestDeliveryDistance([firstBucket], 50)).toEqual(false)
    expect(getSmallestDeliveryDistance([secondBucket], 50)).toEqual(allDeliveryBuckets[1])
  })
  test('timezone', () => {
    expect(getTimezone(caRv)).toEqual('America/Toronto')
  })
  test('leadTimes', () => {
    const dateFormat = (d) => {
      return `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
    }

    const actualMinDate = getMinBookableDate({ $moment: dayjs }, caRv)
    const expectedMinDate = dates().tz('America/New_York').startOf('day').add(caRv.InsideLeadDays, 'days').toDate()

    const actualMaxDate = getMaxBookableDate({ $moment: dayjs }, caRv)
    const expectedMaxDate = dates().tz('America/New_York').startOf('day').add(caRv.OutsideLeadDays, 'days').toDate()

    expect(dateFormat(actualMinDate)).toEqual(dateFormat(expectedMinDate))
    expect(dateFormat(actualMaxDate)).toEqual(dateFormat(expectedMaxDate))
  })

  test('pickupDropoffTimes', () => {
    const checkIn = getCheckInTime(caRv)
    expect('object').toEqual(typeof checkIn)

    const checkOut = getCheckOutTime(caRv)
    expect('object').toEqual(typeof checkIn)

    const { Start: checkOutStart, End: checkOutEnd } = checkOut

    expect('4:00 PM').toEqual(translateTime(checkOutStart))
    expect('8:00 PM').toEqual(translateTime(checkOutEnd))
  })

  test('hasAccommodations', () => {
    expect(hasAccommodations(caRv)).toBe(false)
  })
})
