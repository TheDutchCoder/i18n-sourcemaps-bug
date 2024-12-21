/** @deprecated use `format-strings.ts` instead */
export default function (slug) {
  if (!slug) {
    return ''
  }
  const exploded = slug.split('-')

  let final = ''

  exploded.forEach((part) => {
    part = part.toString()
    final = `${final}${part.charAt(0).toUpperCase()}${part.slice(1)} `
  })

  return final
}
