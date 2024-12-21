export default function (app, boolValue) {
  return boolValue ? app.$t('common.yes') : app.$t('common.no')
}
