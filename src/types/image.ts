import type { Nullable } from '~/types'
import type { IMAGE_FORMAT, IMAGE_QUALITY, IMAGE_RESOLUTION } from '~/constants/image'

export type GetImageUrl = {
  path?: Nullable<string>
  format?: keyof typeof IMAGE_FORMAT
  resolution?: keyof typeof IMAGE_RESOLUTION
  quality?: keyof typeof IMAGE_QUALITY
}
