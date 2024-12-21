/** @deprecated use `format-strings.ts` instead */
export const startsWithVowel = (word) => /^[aeiouy]/i.test(word)

/** @deprecated use `format-strings.ts` instead */
export const toCamelCase = (value) => {
  return value
    .replace(/^\w|[A-Z]|\b\w|\s+/g, function (match, index) {
      if (Number(match) === 0) {
        return ''
      }
      return index === 0 ? match.toLowerCase() : match.toUpperCase()
    })
    .replaceAll('-', '')
}

/** @deprecated use `format-strings.ts` instead */
export const removeHtmlTags = (text) => {
  const htmlTagRegex = /<\/?[^>]+(>|$)/g
  return text.replace(htmlTagRegex, '')
}
