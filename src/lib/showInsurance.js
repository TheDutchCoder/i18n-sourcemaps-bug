// Show insurance:
// RV Cottage and TravelTrailer can be insured
// Canadian MotorHome from Ontario, Quebec, Alberta, Nova Scotia, British Columbia and Newfoundland and Labrador can be insured
// American MotorHome from any state

export default function (rv) {
  if (rv) {
    if (rv.Location && rv.Location.State && rv.RentalType) {
      if (rv.RentalType === 'RVCottage' || rv.RentalType === 'TravelTrailer') {
        return true
      }
      else if (
        rv.RentalType === 'MotorHome'
        && rv.Country === 'CA'
        && ['Ontario', 'Quebec', 'Alberta', 'Nova Scotia', 'British Columbia', 'Newfoundland and Labrador'].includes(
          rv.Location.State,
        )
      ) {
        return true
      }
      else if (rv.Country === 'US' && rv.RentalType === 'MotorHome') {
        return true
      }
      else {
        return false
      }
    }
    else {
      return true
    }
  }
  return false
}
