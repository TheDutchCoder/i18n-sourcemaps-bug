import {getBreadcrumbList, getFaq, getItemListElement, getProductJson} from '~/lib/jsonld'
import {
  productJson,
  faqJson,
  faqJsonEmptyQuestions,
  breadcrumbJson,
  itemListElementJson,
  breadcrumbEmptyJson
} from '~/test/mocks/jsonld'
import rvJson from '~/test/mocks/rv'
import faqsInputJson from '~/test/mocks/faq.json'

describe('Json-LD', () => {
  test('getProductJson', () => {
    expect(getProductJson({
      rv: rvJson,
      path: '/rv-rental/british-columbia_sidney_motorhome_classc_thor-motor-coach_amazing-blaze',
      image: 'https://cdn-d-non-prod.rvezy.com/960x640x50/rv/dev/030e31254bde4bf29dede77400e37f53_20220623181054172.webp'
    })).toEqual(productJson)
  })
  test('getFaq', () => {
    expect(getFaq({questions: faqsInputJson})).toEqual(faqJson)
  })
  test('getFaq empty input', () => {
    expect(getFaq({questions: []})).toEqual(faqJsonEmptyQuestions)
  })
  test('getItemListElement', () => {
    const position = 1
    const name = 'test'
    const item = '/test/test'
    expect(getItemListElement({position, name, item})).toEqual({
      '@type': 'ListItem',
      position,
      name,
      item
    })
  })
  test('getBreadcrumbList', () => {
    expect(getBreadcrumbList({itemList: itemListElementJson})).toEqual(breadcrumbJson)
  })

  test('getBreadcrumbList empty input', () => {
    expect(getBreadcrumbList({itemList: []})).toEqual(breadcrumbEmptyJson)
  })
})
