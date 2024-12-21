import { type VueWrapper, config } from '@vue/test-utils'

const FindByTitlePlugin = (wrapper: VueWrapper) => {
  function findByTitle(title: string) {
    const titleSelector = `[title='${title}']`
    const element = wrapper.find(titleSelector)

    if (!element.exists()) {
      throw new Error(`Element with title "${title}" not found`)
    }

    return element
  }

  return {
    findByTitle,
  }
}

config.plugins.VueWrapper.install(FindByTitlePlugin)
