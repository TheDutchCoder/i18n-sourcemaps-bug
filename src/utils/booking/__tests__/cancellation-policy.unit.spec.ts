import { describe, expect, it } from 'vitest'
import { getCancellationPolicyByStartDate } from '~/utils/booking/cancellation-policy'

describe('cancellation-policy', () => {
  it('should return NoDatesSelected if no date is provided', () => {
    expect(getCancellationPolicyByStartDate()).toBe('NoDatesSelected')
  })

  it('should return LessThan7Days if the start date is less than 7 days from today', () => {
    expect(getCancellationPolicyByStartDate('2020-04-02')).toBe('LessThan7Days')
  })

  it('should return Between8To30Days if the start date is between 8 and 30 days from today', () => {
    expect(getCancellationPolicyByStartDate('2020-04-09')).toBe('Between8To30Days')
  })

  it('should return MoreThan30Days if the start date is more than 30 days from today', () => {
    expect(getCancellationPolicyByStartDate('2020-05-06')).toBe('MoreThan30Days')
  })

  it('should return MoreThan60Days if the start date is more than 60 days from today', () => {
    expect(getCancellationPolicyByStartDate('2020-06-01')).toBe('MoreThan60Days')
  })
})
