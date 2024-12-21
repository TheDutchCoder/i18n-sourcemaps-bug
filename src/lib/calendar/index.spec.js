import { ATTRIBUTE_TYPE, isDateExternallyBlocked, isDateForceBlocked, isDateBooked, isDateUnavailable } from './index'

import bookingMock from '~/test/mocks/booking.json'

const mockCalendarExternallyBlockedAttributes = [
  {
    key: `${ATTRIBUTE_TYPE.EXTERNALLY_BLOCKED}_20241221_0`,
    customData: {
      type: ATTRIBUTE_TYPE.EXTERNALLY_BLOCKED,
      source: 'rvshare',
      eventName: 'Externally blocked'
    },
    dates: {
      start: '2024-12-21',
      end: '2024-12-30'
    }
  }
]

const mockCalendarForceBlockedAttributes = [
  {
    key: 'sold',
    customData: {
      type: ATTRIBUTE_TYPE.FORCE_BLOCKED,
      eventName: ''
    },
    dates: {
      start: '2024-12-21',
      end: null
    }
  }
]

const mockCalendarBookedAttributes = [
  {
    key: `${ATTRIBUTE_TYPE.BOOKING}_${bookingMock.StartDate}`,
    customData: {
      type: ATTRIBUTE_TYPE.BOOKING,
      booking: bookingMock
    },
    dates: {
      start: '2024-12-21',
      end: '2024-12-30'
    }
  }
]

const mockCalendarLeadtimeAttributes = [
  {
    key: 'insideLeadTime',
    customData: {
      type: ATTRIBUTE_TYPE.INSIDE_LEAD_TIME,
      eventName: ''
    },
    dates: {
      start: null,
      end: '2023-03-07'
    }
  },
  {
    key: 'outsideLeadTime',
    customData: {
      type: ATTRIBUTE_TYPE.OUTSIDE_LEAD_TIME,
      eventName: ''
    },
    dates: {
      start: '2023-05-01',
      end: null
    }
  }
]

const mockCalendarEmptyAttributes = []

describe('Calendar', () => {
  test('isDateExternallyBlocked - with externally blocked', () => {
    expect(
      isDateExternallyBlocked({
        date: '2024-12-25',
        attributes: mockCalendarExternallyBlockedAttributes
      })
    ).toBeTruthy()
  })

  test('isDateExternallyBlocked - without externally blocked', () => {
    expect(
      isDateExternallyBlocked({
        date: '2024-12-25',
        attributes: mockCalendarEmptyAttributes
      })
    ).toBeFalsy()
  })

  test('isDateForceBlocked - with forced blocked', () => {
    expect(
      isDateForceBlocked({
        date: '2024-12-25',
        attributes: mockCalendarForceBlockedAttributes
      })
    ).toBeTruthy()
  })

  test('isDateForceBlocked - without forced blocked', () => {
    expect(
      isDateForceBlocked({
        date: '2024-12-25',
        attributes: mockCalendarEmptyAttributes
      })
    ).toBeFalsy()
  })

  test('isDateBooked - with booking', () => {
    expect(
      isDateBooked({
        date: '2024-12-25',
        attributes: mockCalendarBookedAttributes
      })
    ).toBeTruthy()
  })

  test('isDateBooked - without booking', () => {
    expect(
      isDateBooked({
        date: '2024-12-25',
        attributes: mockCalendarEmptyAttributes
      })
    ).toBeFalsy()
  })

  test('isDateUnavailable - inside lead time - unavailable', () => {
    expect(
      isDateUnavailable({
        date: '2023-03-05',
        attributes: mockCalendarLeadtimeAttributes
      })
    ).toBeTruthy()
  })

  test('isDateUnavailable - lead time - available', () => {
    expect(
      isDateUnavailable({
        date: '2023-03-09',
        attributes: mockCalendarLeadtimeAttributes
      })
    ).toBeFalsy()
  })

  test('isDateUnavailable - outside lead time - unavailable', () => {
    expect(
      isDateUnavailable({
        date: '2023-05-05',
        attributes: mockCalendarLeadtimeAttributes
      })
    ).toBeTruthy()
  })
})
