import { ImageFormat, ImageQuality, ImageResolution, ImageType } from '~/lib/enums'

const qualityMap = {
  [ImageQuality.NONE]: null,
  [ImageQuality.LOW]: 1,
  [ImageQuality.MEDIUM]: 50,
  [ImageQuality.HIGH]: 80,
}

const resolutionsMap = {
  [ImageType.RV]: {
    [ImageResolution.SMALL]: '300x200',
    [ImageResolution.MEDIUM]: '450x300',
    [ImageResolution.LARGE]: '960x640',
  },
  [ImageType.POI]: {
    [ImageResolution.SMALL]: '450x300',
    [ImageResolution.MEDIUM]: '960x640',
    [ImageResolution.LARGE]: '960x640',
  },
  [ImageType.AVATAR]: {
    [ImageResolution.SMALL]: '50x50',
    [ImageResolution.MEDIUM]: '100x100',
    [ImageResolution.LARGE]: '150x150',
  },
}

const supportedQualities = {
  [ImageFormat.WEBP]: {
    [ImageQuality.LOW]: true,
    [ImageQuality.MEDIUM]: true,
    [ImageQuality.HIGH]: true,
    [ImageQuality.DEFAULT]: ImageQuality.MEDIUM,
    [ImageQuality.NONE]: true,
  },
  [ImageFormat.PNG]: {
    [ImageQuality.MEDIUM]: true,
    [ImageQuality.DEFAULT]: ImageQuality.MEDIUM,
  },
  [ImageFormat.JPG]: {
    [ImageQuality.LOW]: true,
    [ImageQuality.MEDIUM]: true,
    [ImageQuality.HIGH]: true,
    [ImageQuality.DEFAULT]: ImageQuality.MEDIUM,
  },
}

/** @deprecated use useImageUrl (auto-imported) instead */
export const imageUrl = function ({
  $config,
  path,
  format = ImageFormat.WEBP,
  resolution = ImageResolution.SMALL,
  quality = ImageQuality.DEFAULT,
}) {
  if (!path) {
    return
  }

  if (/^https?:\/\//.test(path)) {
    const newPath = path.replace($config.dynamicAssetsURL, '')
    if (newPath === path) {
      return path
    }
    path = newPath
  }

  format = format.toLowerCase()
  if (['jpeg', 'jfif'].includes(format)) {
    format = ImageFormat.PNG
  }

  const imageType = ImageType[path.match(/^\/([^/]+)\//)?.[1]?.toUpperCase()]

  if (!imageType) {
    return
  }
  if (!ImageFormat[format.toUpperCase()]) {
    return
  }
  if (!resolutionsMap[imageType][resolution]) {
    return
  }
  if (!supportedQualities[format][quality]) {
    return
  }

  const resolutionPath = resolutionsMap[imageType][resolution]
  const qualityPath = qualityMap[quality] ? `x${qualityMap[quality]}` : ''

  return `${
    /\/prod\//.test(path) ? $config.prodDynamicAssetsURL : $config.dynamicAssetsURL
  }/${resolutionPath}${qualityPath}${path.replace(/\.[a-z]+$/i, `.${format}`)}`
}
