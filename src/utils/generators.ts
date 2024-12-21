import { v4 as uuid } from 'uuid'

/**
 * This file exposes generators.
 *
 * These functions are auto-imported in components and pages and can be used
 * directly in templates, <script setup> or anywhere in the Options API without
 * having to manually import them.
 */

/**
 * Generates a Random UUID (Universally Unique Identifier).
 *
 * @example generateUuid() // "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
 */
export const generateUuid = () => uuid()
