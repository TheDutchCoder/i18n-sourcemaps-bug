import type { Nullable } from '~/types'

export const replaceUrlQueryParams = (params: Record<string, Nullable<boolean | number | string | undefined>> = {}) => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) {
      searchParams.delete(key)
    }
    else if (value === null) {
      searchParams.set(key, '')
    }
    else {
      searchParams.set(key, value.toString())
    }
  })
  history.replaceState(history.state, '', `${window.location.pathname}${searchParams.size ? `?${searchParams.toString()}` : ''}`)
}
