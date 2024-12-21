import distanceBetweenTwoPoints from '~/lib/distanceBetweenTwoPoints'

const mockLocationA = { lat: 10, lng: 20 }
const mockLocationB = { lat: 30, lng: 40 }

describe('Library - distanceBetweenTwoPoints', () => {
  test('Calculate distance from: 10,20 to: 30,40', () => {
    expect(Number(distanceBetweenTwoPoints(mockLocationA, mockLocationB).toFixed(1))).toBe(3040.6)
  })
})
