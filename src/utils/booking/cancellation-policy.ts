import { CANCELLATION_POLICY_OPTIONS } from '~/constants/booking'

export const getCancellationPolicyByStartDate = (startDate?: string) => {
  if (!startDate) return CANCELLATION_POLICY_OPTIONS.NoDatesSelected

  const diffDays = dates(startDate).diff(dates(), 'days')

  if (diffDays <= 7) {
    return CANCELLATION_POLICY_OPTIONS.LessThan7Days
  }
  else if (diffDays > 7 && diffDays <= 30) {
    return CANCELLATION_POLICY_OPTIONS.Between8To30Days
  }
  else if (diffDays > 30 && diffDays <= 60) {
    return CANCELLATION_POLICY_OPTIONS.MoreThan30Days
  }
  else {
    return CANCELLATION_POLICY_OPTIONS.MoreThan60Days
  }
}
