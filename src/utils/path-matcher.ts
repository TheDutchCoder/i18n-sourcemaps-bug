import type { IRoutePatternMatcherEnum } from '../types/interfaces/IRouteManager'

/**
 * Match a path to a pattern.
 *
 * @param {IRoutePatternMatcherEnum} pattern - The pattern to match the path against.
 * @param {string} path - The path to match against the pattern.
 * @returns {boolean} Whether the path matches the pattern.
 *
 * @example pathMatcher(IRoutePatternMatcherEnum.RV_DETAILS, '/rv/123') // true
 */
export function pathMatcher(pattern: IRoutePatternMatcherEnum, path: string) {
  const re = new RegExp(pattern)
  return re.test(path)
}
