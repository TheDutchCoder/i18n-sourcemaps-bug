import { i18nLocaleEnum, LanguageToi18nLocale } from '../enums'
import { trackExperimentViewed } from '~/lib/tracking'

export function getConfigCatUserObject({ user, $device, $geolocation, sessionId, config }) {
  const userAgent = $device.userAgent || 'unknown'
  const device = getUserDevice($device)
  const environment = config.public.hostEnvironment
  const country = $geolocation?.countryCode || null

  const email = user?.Email || ''
  const UserId = user?.Id || ''
  const Language = LanguageToi18nLocale(user?.Language) || i18nLocaleEnum.en
  const IsOwner = user?.IsOwner ? 'yes' : 'no'
  const Region = $geolocation.regionCode || null

  return {
    email,
    country,
    custom: {
      UserId,
      SessionId: sessionId,
      UserAgent: userAgent,
      UserDevice: device,
      Language,
      IsOwner,
      EnvironmentName: environment,
      Region,
    },
  }
}

export function getUserDevice($device) {
  if ($device.isDesktop) {
    return 'desktop'
  }
  if ($device.isTablet) {
    return 'tablet'
  }
  if ($device.isMobile) {
    return 'mobile'
  }
  return 'unknown'
}

export function trackExperiment(experiment, { startup = false, isWebview }) {
  if (
    experiment?.tracked
    && (!isWebview || experiment?.trackWebview)
    && (experiment.variant !== experiment.defaultVariant || experiment.trackDefaultVariant)
    && experiment.trackOnStartup === startup
  ) {
    trackExperimentViewed({
      experimentName: experiment.key,
      variantName: `${experiment.variant}`,
    })
  }
}

export function trackStartup(experiments, isWebview) {
  Object.values(experiments).forEach((experiment) => {
    trackExperiment(experiment, { startup: true, isWebview })
  })
}
