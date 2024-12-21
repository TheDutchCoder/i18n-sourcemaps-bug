export default function (device) {
  if (device.isAndroid) {
    return 'android'
  }
  if (device.isIos) {
    return 'ios'
  }
  if (device.isMacOS) {
    return 'macos'
  }
  if (device.isWindows) {
    return 'windows'
  }

  return 'other'
}
