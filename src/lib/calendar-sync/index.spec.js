import {
  EXTERNAL_CALENDAR_IMPORT_SOURCES_KEY,
  EXTERNAL_CALENDAR_IMPORT_SOURCES,
  getSourceName,
  hasAnyCalendarLinked,
  getLastSyncDateTime,
  isRVShareCalendarLinked
} from './index'

const mockedLinkedCalendars = [
  {
    CreatedAt: "2022-12-06T21:12:50.8623593+00:00",
    Disabled: false,
    ExternalRvId: "2020 Forest River RV Vibe 33RK",
    Id: 1,
    LastSync: "2022-12-15T16:11:33.793983+00:00",
    ModifiedAt: "2022-12-15T16:11:33.794069+00:00",
    OwnerId: 3225,
    RvId: "32be545c-2b09-480c-9439-1e379433f037",
    Url: "https://api.rvshare.com/v1/ical/j5OdkPANXoED1pJyrQBZ9qYn"
  },
  {
    CreatedAt: "2022-12-06T21:12:50.8623593+00:00",
    Disabled: false,
    ExternalRvId: "2020 Forest River RV Vibe 33RK",
    Id: 2,
    LastSync: "2023-12-15T16:11:33.793983+00:00",
    ModifiedAt: "2022-12-15T16:11:33.794069+00:00",
    OwnerId: 3225,
    RvId: "32be545c-2b09-480c-9439-1e379433f037",
    Url: "https://api.outdoorsy.com/v1/ical/j5OdkPANXoED1pJyrQBZ9qYn"
  }
]

describe('Calendar Sync', () => {
  test('getSourceName - with existing source', () => {
    expect(getSourceName(EXTERNAL_CALENDAR_IMPORT_SOURCES_KEY.RVSHARE)).toBe(EXTERNAL_CALENDAR_IMPORT_SOURCES.rvshare)
  })

  test('getSourceName - without existing source', () => {
    expect(getSourceName('RVezy')).toBe('Unknown')
  })

  test('hasAnyCalendarLinked - with', () => {
    expect(hasAnyCalendarLinked(mockedLinkedCalendars)).toBeTruthy()
  })

  test('hasAnyCalendarLinked - without', () => {
    expect(hasAnyCalendarLinked()).toBeFalsy()
  })

  test('getLastSyncDateTime - with', () => {
    expect(getLastSyncDateTime(mockedLinkedCalendars)).toBe('2023-12-15T16:11:33.793983+00:00')
  })

  test('getLastSyncDateTime - without', () => {
    expect(getLastSyncDateTime()).toBeNull()
  })

  test('isRVShareCalendarLinked - with', () => {
    expect(isRVShareCalendarLinked(mockedLinkedCalendars)).toBeTruthy()
  })

  test('isRVShareCalendarLinked - without', () => {
    expect(isRVShareCalendarLinked()).toBeFalsy()
  })
})
