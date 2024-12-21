// TODO: DELETE once the migration is complete
export function migrateWarn(message: string, body?: unknown) {
  if (import.meta.dev) {
    console.warn(`[migrateWarn] ${message}`, body)
  }
}
