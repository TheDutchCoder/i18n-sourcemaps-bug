/**
 * This file runs once before the whole test suite.
 * It sets the timezone to UTC.
 */
export const setup = () => {
  process.env.TZ = 'UTC'
}
