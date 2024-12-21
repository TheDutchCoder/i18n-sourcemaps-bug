import { beforeEach, describe, expect, test, vi } from 'vitest'
import { focusElementInput } from '~/utils/elements'

describe('focusElementInput()', () => {
  let element: HTMLElement
  let input: HTMLInputElement

  beforeEach(() => {
    // Create a mock DOM element with an input
    element = document.createElement('div')
    input = document.createElement('input')
    element.appendChild(input)

    // Mock the focus method
    input.focus = vi.fn()
  })

  test('focuses the input element of the given element', () => {
    focusElementInput(element, false)
    expect(input.focus).not.toHaveBeenCalled()
  })

  test('focuses the input element of the given element', () => {
    focusElementInput(element, true)
    expect(input.focus).toHaveBeenCalled()
  })
})
