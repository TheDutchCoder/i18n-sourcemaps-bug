/** @deprecated unused */
export default function (rating) {
  if (typeof rating === 'number') {
    const roundUp = Math.ceil(rating * 2) / 2

    if (parseInt(rating) === parseInt(roundUp)) {
      return Math.round((Math.floor(rating * 10) / 10) * 2) / 2
    }
    else {
      return roundUp
    }
  }

  return rating
}
