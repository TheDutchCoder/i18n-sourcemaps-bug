export const CANCELLATION_POLICY_OPTIONS = {
  NoDatesSelected: 'NoDatesSelected',
  LessThan7Days: 'LessThan7Days',
  Between8To30Days: 'Between8To30Days',
  MoreThan30Days: 'MoreThan30Days',
  MoreThan60Days: 'MoreThan60Days',
} as const
Object.freeze(CANCELLATION_POLICY_OPTIONS)
export type CANCELLATION_POLICY_OPTIONS = (typeof CANCELLATION_POLICY_OPTIONS)[keyof typeof CANCELLATION_POLICY_OPTIONS]
