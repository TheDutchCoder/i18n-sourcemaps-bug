let parsePhoneNumber = null

export default async function ({
  countryPhoneCode = '+1',
  phoneNumber = null,
  phoneNumberIncludesCountryPhoneCode = false,
  countryCode = null,
}) {
  if (!phoneNumber) {
    return
  }

  if (!parsePhoneNumber) {
    const { parsePhoneNumberFromString } = await import('libphonenumber-js')
    parsePhoneNumber = parsePhoneNumberFromString
  }

  if (phoneNumberIncludesCountryPhoneCode) {
    return parsePhoneNumber(phoneNumber, countryCode)
  }

  // Add plus sign if CountryPhoneCode doesn't start with one.
  return parsePhoneNumber(
    `${countryPhoneCode?.indexOf('+') === -1 ? '+' : ''}${countryPhoneCode}${phoneNumber}`,
    countryCode,
  )
}
