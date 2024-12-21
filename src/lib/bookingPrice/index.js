import { getRenterTotalAmount } from '~/lib/financial'

export const getFinancialObject = (bookingPrice) => bookingPrice.Financial
export const getRVSnapshotObject = (bookingPrice) => bookingPrice.RVSnapshot

export const getTotalRentalPrice = (bookingPrice) => getFinancialObject(bookingPrice).RenterTotal
export const getRentalPrice = (bookingPrice) => getFinancialObject(bookingPrice).TotalRentalAmount
export const getRentalPricePerNight = (bookingPrice) => getRentalPrice(bookingPrice) / getTotalNights(bookingPrice)
export const getRoadsidePrice = (bookingPrice) => getFinancialObject(bookingPrice).TotalRoadsides
export const getInsurancePrice = (bookingPrice) => getFinancialObject(bookingPrice).TotalInsurances
export const getTotalRenterPrice = (bookingPrice) => {
  const renterTotal = getRenterTotalAmount(bookingPrice.Financial)
  if (!bookingPrice.Financial.Discount && !bookingPrice.Financial.CreditsToBeApplied) {
    return renterTotal
  }
  const total = Math.max(renterTotal - (bookingPrice.Financial.Discount + bookingPrice.Financial.CreditsToBeApplied), 0)
  if (total < 0) {
    return 0
  }
  return total
}
export const getDiscount = (bookingPrice) => {
  if (bookingPrice.Financial.TotalPreDiscountRentalAmount !== bookingPrice.Financial.TotalRentalAmount) {
    return Math.abs(bookingPrice.Financial.TotalPreDiscountRentalAmount - bookingPrice.Financial.TotalRentalAmount) * -1
  }

  return 0
}

export const getTotalOwnerServiceFee = (bookingPrice) => getFinancialObject(bookingPrice).TotalOwnerServiceFee
export const getTotalRenterServiceFee = (bookingPrice) => getFinancialObject(bookingPrice).TotalRenterServiceFee
export const getTotalRenterServiceFeePercentage = (bookingPrice) =>
  getFinancialObject(bookingPrice).RenterServiceFeePercentage

export const getTotalAddonsPrice = (bookingPrice) => getFinancialObject(bookingPrice).TotalAddOns
export const getCleaningPrice = (bookingPrice) => getFinancialObject(bookingPrice).TotalCleanings
export const getSecurityDeposit = (bookingPrice) => getFinancialObject(bookingPrice).TotalSecurityDeposits
export const getPriceToReserve = (bookingPrice) => getFinancialObject(bookingPrice).PayToReserve
export const getTotalNights = (bookingPrice) => getFinancialObject(bookingPrice).Nights.length
export const getTotalDays = (bookingPrice) => getFinancialObject(bookingPrice).Nights.length + 1
export const getDeliveryDistance = (bookingPrice) =>
  getFinancialObject(bookingPrice)
    .AddOns?.find((addon) => addon.Slug?.match(/rv_delivery_/g))
    ?.Slug?.match(/([\d]+)/g)[0]

export const getGeneratorPricePerHour = (bookingPrice) => getRVSnapshotObject(bookingPrice).ChargePerHourOver
export const getGeneratorHoursPerDay = (bookingPrice) => getRVSnapshotObject(bookingPrice).FreeHoursPerDay
export const getPricePerKm = (bookingPrice) => getRVSnapshotObject(bookingPrice).SurchargePerExtraKM
