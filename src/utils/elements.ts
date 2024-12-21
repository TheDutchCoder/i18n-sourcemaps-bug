/**
 * Focus on the input element of the given element
 * @param el - The element to focus on
 * @param autoFocus - Whether to auto focus on the input element
 */
export function focusElementInput(el: HTMLElement, autoFocus?: boolean) {
  if (autoFocus === false) {
    return
  }
  el.querySelector('input')?.focus()
}
