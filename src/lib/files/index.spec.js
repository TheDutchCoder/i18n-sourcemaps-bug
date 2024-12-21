import { bytesToMegabytes, bytesToSize, truncateImageName } from '~/lib/files'

describe('Library - Files', () => {
  test('bytesToMegabytes', () => {
    expect(bytesToMegabytes(636960)).toEqual('0.6')
    expect(bytesToMegabytes(1147701)).toEqual('1.1')
    expect(bytesToMegabytes(4610731235)).toEqual('4397.1')
  })
  
  test('bytesToSize', () => {
    expect(bytesToSize(636960)).toEqual('622kb')
    expect(bytesToSize(1147701)).toEqual('1mb')
    expect(bytesToSize(4610731235)).toEqual('4gb')
  })

  test('truncateImageName', () => {
    expect(truncateImageName('photo-1486837348513-8fb4a7624668.jpeg')).toEqual('photo-1486...jpeg')
    expect(truncateImageName('RV-rental_RV-interior_C19_1-(1).png')).toEqual('RV-rental_...png')
  })
})
