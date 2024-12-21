export const getRenterTotalAmount = (financial) => {
  return financial?.RenterTotal
}

export const getPaidToReserveAmount = (financial) => {
  return Math.max(financial.DepositAmount - (financial.Discount + financial.CreditsApplied), 0)
}

export const getRenterServiceFee = (financial) => {
  return financial?.TotalRenterServiceFee
}

export const getOwnerServiceFee = (financial) => {
  return financial?.TotalOwnerServiceFee
}

export const getOwnerPayoutTotal = (financial) => {
  return financial?.OwnerPayoutTotal
}
