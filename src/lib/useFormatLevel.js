const greatestCommonDivisor = (a, b) => {
  return b ? greatestCommonDivisor(b, a % b) : a
}

export default function ({ level, i18n, greatestDenumenator = 8 }) {
  const gcd = greatestCommonDivisor(level, 8)
  const numerator = level / gcd
  const denumerator = greatestDenumenator / gcd

  if (numerator === 0) {
    return i18n.t('booking.details.checklist.empty')
  }
  else if (numerator === greatestDenumenator) {
    return i18n.t('booking.details.checklist.full')
  }

  return `${numerator}/${denumerator}`
}
