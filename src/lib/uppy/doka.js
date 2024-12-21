import {
  createDefaultImageReader,
  createDefaultImageWriter,
  openEditor,
  plugin_crop,
  plugin_filter,
  plugin_filter_defaults,
  plugin_finetune,
  plugin_finetune_defaults,
  setPlugins,
} from '@pqina/pintura'

import dokaLocale from '~/lib/uppy/doka-locale'
import useEditorWithUppy from '~/vendor/doka/uppy/useEditorWithUppy'

import '@pqina/pintura/pintura.css'

setPlugins(plugin_crop, plugin_filter, plugin_finetune)

export function getDokaDefaultOptions($i18n, imageCropAspectRatio = 3 / 2, maxSize = undefined) {
  const locale = dokaLocale($i18n)

  return {
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter({
      targetSize: {
        width: maxSize,
        height: maxSize,
      },
    }),

    // ...plugin_crop_defaults,
    cropEnableButtonFlipVertical: true,
    cropEnableButtonRotateRight: true,
    cropEnableSelectPreset: false,
    imageCropAspectRatio,
    imageCropLimitToImage: false,
    cropEnableZoomTowardsWheelPosition: false,

    ...plugin_filter_defaults,
    ...plugin_finetune_defaults,

    locale,
  }
}

export function attachDoka(uppy, options) {
  uppy.setOptions({
    onBeforeFileAdded: useEditorWithUppy(openEditor, options, uppy),
  })
}

export function openFileWithDoka(uppy, file, options) {
  const editor = openEditor({ ...options, src: file.original })

  editor.on('process', ({ dest }) => {
    if (dest) {
      uppy.addFile({
        name: dest.name,
        type: dest.type,
        data: dest,
        handledByDoka: true,
        meta: {
          replaceFileId: file.id,
        },
      })
    }
  })
}
