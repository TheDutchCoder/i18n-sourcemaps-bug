import { SCREEN_SIZES } from '~/constants/screen-sizes'

let matches = []
const queries = {}

let isSetup = false

function refreshMatches() {
  const pairs = Object.keys(queries).map((key) => [key, queries[key]]) // lodash _.toPairs
  matches = pairs.filter((pair) => pair[1].matches).map((pair) => pair[0])
}

function refreshQueries() {
  if (!window || !window.matchMedia) {
    return
  }

  const screenKeys = Object.keys(SCREEN_SIZES)

  screenKeys.forEach((screen) => {
    const query = window.matchMedia(`(min-width: ${SCREEN_SIZES[screen]}px)`)
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', refreshMatches)
    }
    else {
      // Deprecated 'MediaQueryList' API, <Safari 14, <Edge 16
      query.addListener(refreshMatches)
    }
    queries[screen] = query
  })

  refreshMatches()
}

export default function setScreensForCalendar(config, def) {
  if (!isSetup) {
    if (import.meta.server) {
      return
    }

    refreshQueries()
    isSetup = true
  }

  refreshMatches()

  return matches.reduce((prev, curr) => (config[curr] ? config[curr] : prev), !def ? config.default : def)
}
