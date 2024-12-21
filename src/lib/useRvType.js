/** @deprecated */
export default function (text) {
  if (text) {
    return `rvType.${text}`
  }
  return 'rvType.rvCottage'
}
