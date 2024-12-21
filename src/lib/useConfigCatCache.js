import { createConsoleLogger, getClient, LogLevel, PollingMode } from 'configcat-node'
import { ConfigCatCache } from './config-cat.js'
import useRedisConnection from './useRedisConnection.js'

export default function ($config) {
  const redis = useRedisConnection($config)

  return getClient(($config.public.configCat ?? {}).sdkKey, PollingMode.AutoPoll, {
    pollIntervalSeconds: 120,
    cache: new ConfigCatCache(redis),
    logger: createConsoleLogger(LogLevel.Error),
  })
}
