import { describe, expect, it } from 'vitest'
import { generateRvPath } from '~/utils/generate-route-paths'

describe('generateRvPath', () => {
  it('should return the correct path object', () => {
    expect(generateRvPath('slug', {})).toEqual({ name: 'rv-rental', params: { alias: 'slug' }, query: {} })
    expect(generateRvPath('slug', { foo: 'bar' })).toEqual({ name: 'rv-rental', params: { alias: 'slug' }, query: { foo: 'bar' } })
  })
})
