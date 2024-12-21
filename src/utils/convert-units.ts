/**
 * This file exposes frequently used conversion functions.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Converts kilometers to miles.
 *
 * @param km - The number of kilometers to convert.
 * @returns The number of miles.
 *
 * @example kmToMi(10) // 6.21371
 */
export const kmToMi = (km: number | string) => Number(km) * 0.621371

/**
 * Converts miles to kilometers.
 *
 * @param mi - The number of miles to convert.
 * @returns The number of kilometers.
 *
 * @example miToKm(10) // 16.0934
 */
export const miToKm = (mi: number | string) => Number(mi) * 1.60934
