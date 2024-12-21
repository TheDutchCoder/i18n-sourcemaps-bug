// Can Start Insurance Claim:
// Owner only
// Backend is handling the logic in "OwnerCanCreateClaim" field

export default function (booking, userId) {
  if (booking && userId) {
    return booking.OwnerId === userId && booking.OwnerCanCreateClaim
  }
  return false
}
