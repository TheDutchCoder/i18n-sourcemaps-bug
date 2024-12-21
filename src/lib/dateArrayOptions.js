import { RVTypeEnumKey } from '~/lib/enums'
import { RV_MAX_DEFAULT_AGE, RV_MAX_MOTORHOME_AGE } from '@/constants'

function descArray(start, end) {
  return Array.from(
    {
      length: start - end + 1,
    },
    (_, i) => start - i,
  )
}

function paddedOptions(length) {
  return Array.from({ length }, (_, i) => {
    return String(i + 1).padStart(2, '0')
  })
}

export function rvYearOptions(rvType) {
  const currentYear = new Date().getFullYear()

  switch (rvType) {
    case RVTypeEnumKey.ClassA:
    case RVTypeEnumKey.ClassB:
    case RVTypeEnumKey.ClassC:
      return descArray(parseInt(currentYear + 1), currentYear - RV_MAX_MOTORHOME_AGE)
    default:
      return descArray(parseInt(currentYear + 1), currentYear - RV_MAX_DEFAULT_AGE)
  }
}

export function legalYearOptions() {
  const legalAge = 18
  const currentYear = parseInt(new Date().getFullYear()) - legalAge
  return descArray(currentYear, currentYear - 100 + legalAge)
}

export function monthOptions() {
  return paddedOptions(12)
}

export function dayOptions(year, month) {
  let maxday = 31
  if (month !== null) {
    if (month === '02') {
      if (year !== null) {
        maxday = new Date(year, month, 0).getDate()
      }
      else {
        maxday = 29
      }
    }
    else if (['04', '06', '09', '11'].includes(month)) {
      maxday = 30
    }
  }
  return paddedOptions(maxday)
}

export default { rvYearOptions, legalYearOptions, monthOptions, dayOptions }
