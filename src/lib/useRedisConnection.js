import { createClient } from '@redis/client'
import Redis from './redis.js'
import { captureError } from './logger/index.js'

let client

export default function ($config) {
  if (client) {
    return client
  }

  const $redisConfig = $config.Redis || {}

  try {
    client = new Redis({
      $client: createClient({
        url: `redis://${$redisConfig.Host}:${$redisConfig.Port}`,
        database: $redisConfig.Database,
      }),
      $config: $redisConfig,
      captureError,
    })

    return client
  }
  catch (err) {
    captureError(err)
  }
}
