export default (RVType) => {
  const map = {
    FifthWheel: 'Towable',
    TentTrailer: 'Towable',
    TravelTrailer: 'Towable',
    VintageTrailer: 'Towable',
    ToyHauler: 'Towable',
    Hybrid: 'Towable',
    Trailer: 'Towable',
    MicroTrailer: 'Towable',

    ClassA: 'Motorized',
    ClassB: 'Motorized',
    ClassC: 'Motorized',
    VintageMotorHome: 'Motorized',
    MotorHome: 'Motorized',
    Campervan: 'Motorized',
    TruckCamper: 'Motorized',

    RVCottage: 'RV Cottage',
  }

  return map[RVType] || null
}
