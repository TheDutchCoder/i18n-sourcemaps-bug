import {
  locale_en_gb,
  plugin_crop_locale_en_gb,
  plugin_filter_locale_en_gb,
  plugin_finetune_locale_en_gb,
} from '~/vendor/doka/doka'

export default function ($i18n) {
  const locale = {
    ...locale_en_gb,
    ...plugin_crop_locale_en_gb,
    ...plugin_filter_locale_en_gb,
    ...plugin_finetune_locale_en_gb,
  }

  // TODO
  // Object.keys(locale).forEach((key) => {
  //   const path = `doka.${key}`

  //   if ($i18n.te(path)) {
  //     locale[key] = $i18n.t(path)
  //   }
  // })

  locale.labelSupportError = (features) => `${features.join(', ')} ${$i18n.t('doka.notSupportedOnThisBrowser')}`

  locale.statusLabelLoadImage = (state) => {
    if (!state || !state.task) return $i18n.t('doka.waitingForImage')

    if (state.error) return $i18n.t('doka.errorLoadingImage')

    if (state.task === 'blob-to-bitmap') return $i18n.t('doka.creatingPreview')

    return $i18n.t('doka.loadingImage')
  }

  locale.statusLabelProcessImage = (state) => {
    if (!state || !state.task) return undefined

    if (state.task === 'store') {
      if (state.error) return $i18n.t('doka.errorUploadingImage')

      return $i18n.t('doka.uploadingImage')
    }

    if (state.error) return $i18n.t('doka.errorProcessingImage')

    return $i18n.t('doka.processingImage')
  }

  return locale
}
