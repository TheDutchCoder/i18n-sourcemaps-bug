import { Base64 } from 'js-base64'

export function encode(data) {
  if (data == null || data === '') {
    return ''
  }
  return Base64.encode(data)
}

export function decode(data) {
  if (data == null || data === '') {
    return ''
  }
  return Base64.decode(data)
}

export function encodeJSON(data) {
  if (data == null) {
    return ''
  }
  try {
    return encode(JSON.stringify(data))
  }
  catch {
    return ''
  }
}

export function decodeJSON(data) {
  if (data == null) {
    return {}
  }
  try {
    return JSON.parse(decode(data))
  }
  catch {
    return {}
  }
}
