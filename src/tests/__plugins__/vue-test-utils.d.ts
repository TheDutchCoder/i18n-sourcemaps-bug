import type { DOMWrapper } from '@vue/test-utils'

declare module '@vue/test-utils' {
  interface VueWrapper {
    findByTestId(testId: string): DOMWrapper<Element>
    findByTitle(title: string): DOMWrapper<Element>
  }
}
