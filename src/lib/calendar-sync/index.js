export const SUPPORTED_STEPS = {
  MAIN: 'Main',
  IMPORT: 'Import',
  SELECT_LISTING: 'SelectListing',
  SUCCESS: 'Success',
  REMOVE: 'Remove',
}

export const EXTERNAL_CALENDAR_IMPORT_SOURCES_KEY = {
  RVSHARE: 'rvshare',
  OUTDOORSY: 'outdoorsy',
}

export const EXTERNAL_CALENDAR_IMPORT_SOURCES = {
  rvshare: 'RVshare',
  outdoorsy: 'Outdoorsy',
}

export function getSourceName(source) {
  return EXTERNAL_CALENDAR_IMPORT_SOURCES[source] || 'Unknown'
}

export function hasAnyCalendarLinked(calendars = []) {
  return calendars.some((cal) => !cal.Disabled)
}

export function getLastSyncDateTime(calendars = []) {
  return (
    calendars.sort((a, b) => {
      return new Date(b.LastSync) - new Date(a.LastSync)
    })[0]?.LastSync || null
  )
}

export function isRVShareCalendarLinked(calendars = []) {
  // TODO: check source instead of URL
  return calendars.some((cal) => !cal.Disabled && cal.Url.startsWith('https://api.rvshare.com'))
}

export function RVShareCalendar(calendars = []) {
  // TODO: check source instead of URL
  return calendars.find((cal) => !cal.Disabled && cal.Url.startsWith('https://api.rvshare.com'))
}

export function isOutdoorsyCalendarLinked(calendars = []) {
  // TODO: check source instead of URL
  return calendars.some((cal) => !cal.Disabled && cal.Url.startsWith('https://printer.outdoorsy.com'))
}

export function OutdoorsyCalendar(calendars = []) {
  // TODO: check source instead of URL
  return calendars.find(
    (cal) =>
      !cal.Disabled
      && (cal.Url.startsWith('https://printer.outdoorsy.com') || cal.Url.startsWith('https://api.outdoorsy.com')),
  )
}

export function isOutdoorsyUrlNewFormat(url) {
  return url?.startsWith('https://api.outdoorsy.com')
}
