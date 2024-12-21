export const INDEXABLE_PARAMS = {
  RVCOUNT: 3,
  RADIUSKM: 100,
  SEARCHDISTANCE: 200,
}
Object.freeze(INDEXABLE_PARAMS)
export type INDEXABLE_PARAMS = (typeof INDEXABLE_PARAMS)[keyof typeof INDEXABLE_PARAMS]