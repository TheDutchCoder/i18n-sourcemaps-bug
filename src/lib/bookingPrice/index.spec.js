import bookingPriceJson from '~/test/mocks/bookingPrice'
import {
  getRoadsidePrice,
  getCleaningPrice,
  getInsurancePrice,
  getTotalRentalPrice,
  getTotalRenterServiceFee,
  getGeneratorPricePerHour,
  getSecurityDeposit,
  getPricePerKm,
  getPriceToReserve,
  getTotalDays,
  getTotalNights,
  getGeneratorHoursPerDay,
  getDeliveryDistance,
  getTotalRenterPrice
} from '~/lib/bookingPrice'

describe('Library - Booking Price', () => {
  test('getRoadsidePrice', () => {
    expect(getRoadsidePrice(bookingPriceJson)).toBe(36)
  })

  test('getCleaningPrice', () => {
    expect(getCleaningPrice(bookingPriceJson)).toBe(60)
  })

  test('getInsurancePrice', () => {
    expect(getInsurancePrice(bookingPriceJson)).toBe(79.98)
  })

  test('getTotalRentalPrice', () => {
    expect(getTotalRentalPrice(bookingPriceJson)).toBe(625.58)
  })

  test('getTotalRenterServiceFee', () => {
    expect(getTotalRenterServiceFee(bookingPriceJson)).toBe(49.6)
  })

  test('getGeneratorPricePerHour', () => {
    expect(getGeneratorPricePerHour(bookingPriceJson)).toBe(0)
  })

  test('getSecurityDeposit', () => {
    expect(getSecurityDeposit(bookingPriceJson)).toBe(1000)
  })

  test('getPricePerKm', () => {
    expect(getPricePerKm(bookingPriceJson)).toBe(0.35)
  })

  test('getPriceToReserve', () => {
    expect(getPriceToReserve(bookingPriceJson)).toBe(625.58)
  })

  test('getTotalDays', () => {
    expect(getTotalDays(bookingPriceJson)).toBe(3)
  })

  test('getTotalNights', () => {
    expect(getTotalNights(bookingPriceJson)).toBe(2)
  })

  test('getGeneratorHoursPerDay', () => {
    expect(getGeneratorHoursPerDay(bookingPriceJson)).toBe(0)
  })

  test('getDeliveryDistance', () => {
    expect(getDeliveryDistance(bookingPriceJson)).toBe(undefined)
  })
  
  test('getTotalRenterPrice', () => {
    expect(getTotalRenterPrice(bookingPriceJson)).toBe(625.58)
  })
})
