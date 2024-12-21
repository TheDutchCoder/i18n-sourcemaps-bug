import type { SegmentTypes } from '~/types/api/rental-segment-types'
import { PropertyMetadata as SegmentEventMetadata } from '~/types/api/rental-segment-types'

export async function logBrazeCustomEvent<T extends keyof SegmentTypes>(eventName: T,
  data: SegmentTypes[T]) {
  const brazeApi = await useBraze()
  const metadata = SegmentEventMetadata[eventName]
  brazeApi.logCustomEvent(metadata.name, data)
}
