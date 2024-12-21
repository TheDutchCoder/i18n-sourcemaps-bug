import { type VueWrapper, config } from '@vue/test-utils'

const FindByTestIdPlugin = (wrapper: VueWrapper) => {
  function findByTestId(selector: string) {
    const dataSelector = `[data-testid='${selector}']`
    const element = wrapper.find(dataSelector)

    if (!element.exists()) {
      throw new Error(`Element with data-testid "${selector}" not found`)
    }

    return element
  }

  return {
    findByTestId,
  }
}

config.plugins.VueWrapper.install(FindByTestIdPlugin)
