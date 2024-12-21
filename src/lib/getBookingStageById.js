export default (id) => {
  const map = {
    0: 'AwaitingOwnerApproval',
    1: 'AwaitingPayment',
    2: 'DeclinedByTheOwner',
    3: 'DeclinedByTheRenter',
    4: 'DepositTaken',
    6: 'FullPaymentReceived',
    7: 'SecurityDepositTaken',
    8: 'PendingOwnerCloseout',
    9: 'PendingRenterCloseout',
    10: 'PendingDispute',
    11: 'PendingPayout',
    12: 'Completed',
    13: 'CanceledByTheRenter',
    14: 'CanceledByTheOwner',
    16: 'ExpiredRequest',
    17: 'ExpiredNoPayment',
    18: 'EnquiryRequest',
    19: 'ExpiredByAdmin',
    20: 'TripStarted',
    21: 'Invoice',
    22: 'InstantBooking',
    23: 'ExpiredInstantBook',
    25: 'ProcessCompleteFailed',
    26: 'PendingPayoutOnCancel',
    27: 'CanceledByTheAdmin',
  }

  return map[id] || null
}
