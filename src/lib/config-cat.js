export class ConfigCatCache {
  #redis

  constructor(redisClient) {
    // Redis client from lib/Redis
    this.#redis = redisClient
  }

  // No getters as the intent is only to write file
  get(key) {
    return this.#redis.get({ key: `ConfigCat:config.json:${key}` })
  }

  set(key, item) {
    this.#redis.set({ key: `ConfigCat:config.json:${key}`, data: item })
  }
}

export async function getAllKeys(configCatClient) {
  const keys = await configCatClient.getAllKeysAsync()
  const newObject = keys.reduce((previousValue, key) => {
    return {
      ...previousValue,
      [key]: true,
    }
  }, {})
  return newObject
}
