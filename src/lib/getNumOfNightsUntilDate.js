import { ONE_DAY_IN_SECONDS } from '~/constants/durations'

// @deprecated use getNumOfNightsUntilDate from `utils/dates.ts`
export default function (date) {
  if (!date) {
    return
  }

  return Math.ceil(Math.abs(new Date(date) - new Date()) / (1000 * ONE_DAY_IN_SECONDS))
}
