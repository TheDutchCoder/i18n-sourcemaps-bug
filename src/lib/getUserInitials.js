/** @deprecated use `format-strings.ts` instead */
export default function (user) {
  if (user) {
    const firstName = user.FirstName?.slice(0, 1) || ''
    const lastName = user.LastName?.slice(0, 1) || ''
    return `${firstName}${lastName}`.toUpperCase()
  }

  return ''
}
