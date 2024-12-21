import isBot from '~/lib/isBot.js'

/**
 * Creates url for RV rental page.
 * @deprecated Use `useRvUrl.ts` instead.
 */
export default function ({ localePath, headers }, rtSessionId, slug, query) {
  const reqWithRts = {
    name: 'rv-rental',
    params: { alias: slug },
    query,
  }

  if (!isBot(headers['user-agent'])) {
    if (!reqWithRts.query) {
      reqWithRts.query = {}
    }
    reqWithRts.query.rts = rtSessionId
  }

  return localePath(reqWithRts)
}
