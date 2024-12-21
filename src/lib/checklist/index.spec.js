import { getPhotos } from '~/lib/checklist'
import checklistJson from '~/test/mocks/checklist.json'

describe('Library - Checklist', () => {
  test('getPhotos', () => {
    expect(getPhotos(checklistJson).length).toEqual(5)
  })
})
