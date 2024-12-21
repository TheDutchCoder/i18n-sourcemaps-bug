import { ExperimentTypeEnumKey, FlagType } from '../enums/index.js'
import useConfigCatCache from '../useConfigCatCache.js'
import experimentConfig from '../experimentConfig.js'
import { captureError } from '../logger/index.js'

export async function evaluateExperiments({ config, sessionId, userObject, user, overrides = {} }) {
  const configCatClient = useConfigCatCache(config)

  const enrichedExperimentConfig = enrichExperiments({
    config: experimentConfig,
    sessionId,
    userId: user?.Id || '',
  })

  for (const experimentKey in enrichedExperimentConfig) {
    const experimentObject = enrichedExperimentConfig[experimentKey]
    const identifier = experimentObject.identifier
    const configCatUserObject = { ...userObject, identifier }
    const configCatVariant = await configCatClient.getValueAsync(
      experimentKey,
      experimentObject.defaultVariant,
      configCatUserObject,
    )

    enrichedExperimentConfig[experimentKey] = evaluatedExperiment({
      configCatVariant,
      experimentObject: enrichedExperimentConfig[experimentKey],
      overrider: getOverride(enrichedExperimentConfig[experimentKey], overrides),
    })
  }

  return {
    evaluated: enrichedExperimentConfig,
    overridden: Object.keys(overrides).filter((key) => key[0] !== '*'),
  }
}

function getOverride(experiment, overrides) {
  if (!overrides[experiment.key] && overrides['*defaultAll'] === true) {
    return experiment.defaultVariant
  }

  return overrides[experiment.key]
}

function enrichExperiments({ config, sessionId, userId }) {
  const enrichedExperimentConfig = {}

  for (const experimentKey in config) {
    enrichedExperimentConfig[experimentKey] = enrichExperiment(config[experimentKey], {
      sessionId,
      userId,
      experimentKey,
    })
  }

  return enrichedExperimentConfig
}

function enrichExperiment(experiment, { experimentKey, sessionId, userId }) {
  if (!FlagType.$allValues().includes(experiment.type)) {
    captureError(
      `Unknown type received. Expected one of: ${FlagType.$allValues().join(', ')}. Got '${experiment.type}'.`,
    )
    return
  }

  const defaultValueMap = {
    [FlagType.Experiment]: 'off',
    [FlagType.Feature]: false,
    [FlagType.Configuration]: '',
  }

  const identifierMap = {
    [ExperimentTypeEnumKey.User]: userId,
    [ExperimentTypeEnumKey.Device]: sessionId,
  }

  const defaultVariant = experiment.defaultVariant ?? defaultValueMap[experiment.type]
  const identifier = identifierMap[experiment.segmentBy ?? ExperimentTypeEnumKey.Device]
  const tracked = experiment.type === FlagType.Experiment && identifier
  const trackDefaultVariant = experiment.type !== FlagType.Experiment
  const trackOnStartup = Boolean(experiment.trackOnStartup)
  const trackWebview = !trackOnStartup

  return {
    defaultVariant,
    tracked,
    trackDefaultVariant,
    trackOnStartup,
    trackWebview,
    ...experiment,
    identifier,
    key: experimentKey,
  }
}

function evaluatedExperiment({ experimentObject, overrider, configCatVariant }) {
  const _overrider = overrider

  let variant = experimentObject.defaultVariant

  if (_overrider !== undefined) {
    variant = _overrider
  }
  else if (experimentObject.identifier) {
    variant = configCatVariant
  }

  // TODO: Confirm if we still need this logic
  if (/-off$/.test(variant)) {
    variant = variant.replace(/-off$/, '')
    experimentObject.tracked = false
  }

  return {
    ...experimentObject,
    originalVariant: configCatVariant,
    overrider: _overrider,
    variant,
  }
}
