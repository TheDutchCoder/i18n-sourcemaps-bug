/**
 * This file exposes frequently used check functions.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Check if a value is not null or undefined.
 *
 * @param value - The value to check.
 *
 * @example hasValue(10) // true
 */
export const hasValue = (value?: unknown): boolean => value !== null && value !== undefined
