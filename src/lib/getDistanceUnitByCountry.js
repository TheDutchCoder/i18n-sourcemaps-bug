export default (Country) => {
  const map = {
    CA: 'km',
    US: 'mi',
  }

  return map[Country] || null
}
