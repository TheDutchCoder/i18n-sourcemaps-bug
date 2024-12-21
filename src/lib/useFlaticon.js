import '~/assets/scss/_flaticon.scss'

export const getFlatIconClass = (str) => `flaticon-${str}`

/**
 * @deprecated use the useFlaticon composable instead.
 */
export const useFlaticon = (amenity) => {
  const AmenitiesIconMap = {
    AirConditioner: 'airconditioner',
    BackupCamera: 'rearcamera',
    Delivery: 'delivery',
    CleaningFee: 'cleaning-fee',
    DiningTable: 'diningtable',
    HandicapAccessible: 'wheelchair',
    Inverter: 'airconditioner',
    Microwave: 'microwave',
    Radio: 'radio',
    Solar: 'solar',
    TowHitch: 'towhitch',
    WiFi: 'wifi',
    Wifi: 'wifi',
    CdPlayer: 'cdplayer',
    ExtraStorage: 'extrastorage',
    Heater: 'heater',
    KitchenSink: 'kitchensink',
    OutsideShower: 'outdoorshower',
    Refrigerator: 'refrigirator',
    Stove_Range: 'stoverange',
    TV_DVD: 'tv-dvd',
    Awning: 'awning',
    CeilingFan: 'ceilingfan',
    Generator: 'generator',
    InsideShower: 'indoorshower',
    LevelingJacks: 'leveljack',
    Oven: 'oven',
    Satellite: 'satellite',
    Toilet: 'toilet',
    Washer_Dryer: 'laundry',
    Campingchairsprovided: 'campchair',
    GPSUnitAvailable: 'gps',
    Petfriendly: 'petfriendly',
    Deliveryavailable: 'delivery-old',
    LinensProvided: 'linens',
    SmokingAllowed: 'smoking',
    FullWinterRentalAvailable: 'winterrental',
    Family_kidfriendly: 'familykids',
    Vintage: 'generic-addon',
    VintageStyle: 'generic-addon',
    Freezer: 'freezer',
  }

  return getFlatIconClass(AmenitiesIconMap[amenity])
}
