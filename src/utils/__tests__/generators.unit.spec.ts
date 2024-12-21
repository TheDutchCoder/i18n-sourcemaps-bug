import { describe, expect, test, vi } from 'vitest'
import { v4 as uuidv4 } from 'uuid'
import { generateUuid } from '~/utils/generators'

vi.mock('uuid', () => ({
  v4: vi.fn(() => '123e4567-e89b-12d3-a456-426614174000'),
}))

describe('generateUuid()', () => {
  test('generates a random UUID', () => {
    const uuid = generateUuid()
    expect(uuid).toBe('123e4567-e89b-12d3-a456-426614174000')
    expect(uuidv4).toHaveBeenCalled()
  })
})
