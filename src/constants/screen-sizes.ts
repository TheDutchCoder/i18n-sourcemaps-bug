/**
 * Collection of screen size breakpoints.
 */
export const SCREEN_SIZES = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xxLarge: 1500,
} as const
Object.freeze(SCREEN_SIZES)
export type SCREEN_SIZES = (typeof SCREEN_SIZES)[keyof typeof SCREEN_SIZES]
