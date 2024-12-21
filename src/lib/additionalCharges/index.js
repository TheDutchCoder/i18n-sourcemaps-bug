export const isDispute = (additionalCharge) => {
  if (!additionalCharge) {
    return
  }
  return additionalCharge.Status === 'Disputed'
}

export const isRequested = (additionalCharge) => {
  if (!additionalCharge) {
    return
  }
  return additionalCharge.Status === 'Pending' || additionalCharge.Status === 'FailedPayment'
}

export const isPending = (additionalCharge) => {
  if (!additionalCharge) {
    return
  }
  return additionalCharge.Status === 'Pending' || additionalCharge.Status === 'Resolved'
}

export const isFailed = (additionalCharge) => {
  if (!additionalCharge) {
    return
  }
  return additionalCharge.Status === 'FailedPayment'
}

export const isCancelled = (additionalCharge) => {
  if (!additionalCharge) {
    return
  }
  return additionalCharge.Status === 'Cancelled'
}

export const getCurrentAdditionalBookingCharge = (additionalCharges) => {
  const charges = additionalCharges.find((charge) => charge.Status !== 'Cancelled' && charge.Status !== 'Completed')

  return charges || null
}

export const getTotal = (additionalCharge) => {
  if (!additionalCharge) {
    return 0
  }
  return additionalCharge.TotalAmount
}

export const getHostCharges = (additionalCharge) => {
  if (!additionalCharge) {
    return 0
  }
  return (
    additionalCharge.GeneratorAmount
    + additionalCharge.DamageAmount
    + additionalCharge.MileageAmount
    + additionalCharge.OtherAmount
  )
}
