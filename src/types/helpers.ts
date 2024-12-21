// eslint-disable-next-line rvezy-eslint/no-null-unions
export type Nullable<T> = T | null

export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>
}
