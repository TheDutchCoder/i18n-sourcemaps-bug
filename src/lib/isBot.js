export default function (userAgent) {
  const botPattern = '(bot|googlebot|crawler|spider|robot|crawling)'
  const regex = new RegExp(botPattern, 'i')

  if (userAgent) {
    return regex.test(userAgent)
  }
  if (typeof navigator !== 'undefined') {
    return regex.test(navigator.userAgent)
  }
  return false
}
