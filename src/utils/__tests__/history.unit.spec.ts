// @vitest-environment happy-dom
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { replaceUrlQueryParams } from '~/utils/history'

describe('replaceUrlQueryParams', () => {
  let replaceStateSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    window.location.href = 'http://localhost:3010/current-path?existing=old'
    replaceStateSpy = vi.spyOn(window.history, 'replaceState')
  })

  test('should append query params in URL', () => {
    replaceUrlQueryParams({ param1: 'value1', param2: 'value2' })

    expect(replaceStateSpy).toHaveBeenCalledWith(
      null,
      '',
      '/current-path?existing=old&param1=value1&param2=value2',
    )
  })

  test('should handle remove params object', () => {
    window.history.pushState({}, '', '/current-path?existing=old')

    replaceUrlQueryParams({ existing: undefined })

    expect(replaceStateSpy).toHaveBeenCalledWith(
      {},
      '',
      '/current-path',
    )
  })

  test('should handle null in params object', () => {
    window.history.pushState({}, '', '/current-path?existing=old')

    replaceUrlQueryParams({ existing: null })

    expect(replaceStateSpy).toHaveBeenCalledWith(
      {},
      '',
      '/current-path?existing=',
    )
  })

  test('should handle empty params object', () => {
    window.history.pushState({}, '', '/current-path?existing=old')

    replaceUrlQueryParams({})

    expect(replaceStateSpy).toHaveBeenCalledWith(
      {},
      '',
      '/current-path?existing=old',
    )
  })
})
