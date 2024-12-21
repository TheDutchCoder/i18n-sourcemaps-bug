// Sort an array of dates
export function sortDateRange(dateRange = []) {
  if (!dateRange.length) {
    return [null, null]
  }

  if (dateRange.some((date) => !date?.isValid())) {
    return [null, null]
  }

  return dateRange.sort(function (a, b) {
    return a.unix() - b.unix()
  })
}
