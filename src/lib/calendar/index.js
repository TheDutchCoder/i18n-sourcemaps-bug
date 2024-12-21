import dates from '~/utils/dates'

export const EDIT_DATE_STATUS = {
  AVAILABLE: 'available',
  BLOCKED: 'blocked',
}

export const ATTRIBUTE_TYPE = {
  BLOCKED: 'blocked',
  EXTERNALLY_BLOCKED: 'externally_blocked',
  FORCE_BLOCKED: 'force_blocked',
  BOOKING: 'booking',
  PRICE: 'price',
  INSIDE_LEAD_TIME: 'inside_lead_time',
  OUTSIDE_LEAD_TIME: 'outside_lead_time',
}

export const isDateExternallyBlocked = ({ date, attributes, excludeLastDay = true }) => {
  const parsedDate = dates(date)

  return attributes.some((attr) => {
    return (
      attr.customData.type === ATTRIBUTE_TYPE.EXTERNALLY_BLOCKED
      && (excludeLastDay
        ? parsedDate.isBefore(attr.dates.end, 'day')
        : parsedDate.isSameOrBefore(attr.dates.end, 'day'))
      && parsedDate.isSameOrAfter(attr.dates.start, 'day')
    )
  })
}

export const isDateForceBlocked = ({ date, attributes }) => {
  const parsedDate = dates(date)

  return attributes.some((attr) => {
    return attr.customData.type === ATTRIBUTE_TYPE.FORCE_BLOCKED && parsedDate.isSameOrAfter(attr.dates.start, 'day')
  })
}

export const isDateUnavailable = ({ date, attributes }) => {
  const mDate = dates(date)

  return (
    attributes.filter((attr) => {
      return (
        (attr.customData.type === ATTRIBUTE_TYPE.INSIDE_LEAD_TIME
          && mDate.isSameOrBefore(dates(attr.dates.end), 'day'))
        || (attr.customData.type === ATTRIBUTE_TYPE.OUTSIDE_LEAD_TIME
          && mDate.isSameOrAfter(dates(attr.dates.start), 'day'))
      )
    }).length > 0
  )
}

export const isDateBooked = ({ date, attributes, excludeLastDay = true }) => {
  const parsedDate = dates(date)

  return attributes.some((attr) => {
    return (
      attr.customData.type === ATTRIBUTE_TYPE.BOOKING
      && (excludeLastDay
        ? parsedDate.isBefore(attr.dates.end, 'day')
        : parsedDate.isSameOrBefore(attr.dates.end, 'day'))
      && parsedDate.isSameOrAfter(attr.dates.start, 'day')
    )
  })
}
