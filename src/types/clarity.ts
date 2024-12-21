import type { Nullable } from '~/types'

export type IdentifiersType = {
  customId: string
  customSessionId?: Nullable<string>
  customPageId?: Nullable<string>
  friendlyName?: Nullable<string>
}
