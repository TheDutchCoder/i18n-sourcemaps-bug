export const IMAGE_FORMAT = {
  webp: 'webp',
  png: 'png',
  jpg: 'jpg',
} as const
Object.freeze(IMAGE_FORMAT)
export type IMAGE_FORMAT = (typeof IMAGE_FORMAT)[keyof typeof IMAGE_FORMAT]

export const IMAGE_TYPE = {
  avatar: 'avatar',
  rv: 'rv',
  poi: 'poi',
  reviews: 'reviews',
} as const
Object.freeze(IMAGE_TYPE)
export type IMAGE_TYPE = (typeof IMAGE_TYPE)[keyof typeof IMAGE_TYPE]

export const IMAGE_RESOLUTION = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const
Object.freeze(IMAGE_RESOLUTION)
export type IMAGE_RESOLUTION = (typeof IMAGE_RESOLUTION)[keyof typeof IMAGE_RESOLUTION]

export const IMAGE_QUALITY = {
  low: 'low',
  medium: 'medium',
  high: 'high',
  default: 'default',
  none: 'none',
} as const
Object.freeze(IMAGE_QUALITY)
export type IMAGE_QUALITY = (typeof IMAGE_QUALITY)[keyof typeof IMAGE_QUALITY]

export const IMAGE_QUALITY_MAP = {
  [IMAGE_QUALITY.none]: null,
  [IMAGE_QUALITY.default]: null,
  [IMAGE_QUALITY.low]: 1,
  [IMAGE_QUALITY.medium]: 50,
  [IMAGE_QUALITY.high]: 80,
} as const
Object.freeze(IMAGE_QUALITY_MAP)
export type IMAGE_QUALITY_MAP = (typeof IMAGE_QUALITY_MAP)[keyof typeof IMAGE_QUALITY_MAP]

export const IMAGE_RESOLUTIONS_MAP = {
  [IMAGE_TYPE.rv]: {
    [IMAGE_RESOLUTION.small]: '300x200',
    [IMAGE_RESOLUTION.medium]: '450x300',
    [IMAGE_RESOLUTION.large]: '960x640',
  },
  [IMAGE_TYPE.poi]: {
    [IMAGE_RESOLUTION.small]: '450x300',
    [IMAGE_RESOLUTION.medium]: '960x640',
    [IMAGE_RESOLUTION.large]: '960x640',
  },
  [IMAGE_TYPE.avatar]: {
    [IMAGE_RESOLUTION.small]: '50x50',
    [IMAGE_RESOLUTION.medium]: '100x100',
    [IMAGE_RESOLUTION.large]: '150x150',
  },
  [IMAGE_TYPE.reviews]: {
    [IMAGE_RESOLUTION.small]: '450x300',
    [IMAGE_RESOLUTION.medium]: '960x640',
    [IMAGE_RESOLUTION.large]: '960x640',
  },
} as const
Object.freeze(IMAGE_RESOLUTIONS_MAP)
export type IMAGE_RESOLUTIONS_MAP = (typeof IMAGE_RESOLUTIONS_MAP)[keyof typeof IMAGE_RESOLUTIONS_MAP]

export const IMAGE_SUPPORT_QUALITIES_MAP = {
  [IMAGE_FORMAT.webp]: {
    [IMAGE_QUALITY.low]: true,
    [IMAGE_QUALITY.medium]: true,
    [IMAGE_QUALITY.high]: true,
    [IMAGE_QUALITY.none]: true,
    [IMAGE_QUALITY.default]: false,
  },
  [IMAGE_FORMAT.png]: {
    [IMAGE_QUALITY.low]: false,
    [IMAGE_QUALITY.medium]: true,
    [IMAGE_QUALITY.high]: false,
    [IMAGE_QUALITY.none]: false,
    [IMAGE_QUALITY.default]: true,
  },
  [IMAGE_FORMAT.jpg]: {
    [IMAGE_QUALITY.low]: true,
    [IMAGE_QUALITY.medium]: true,
    [IMAGE_QUALITY.high]: true,
    [IMAGE_QUALITY.none]: false,
    [IMAGE_QUALITY.default]: false,
  },
} as const
Object.freeze(IMAGE_SUPPORT_QUALITIES_MAP)
export type IMAGE_SUPPORT_QUALITIES_MAP = (typeof IMAGE_SUPPORT_QUALITIES_MAP)[keyof typeof IMAGE_SUPPORT_QUALITIES_MAP]
