type RUMEvent = {
  error?: {
    message?: string
  }
}

/**
 * Injects the Datadog script into the head.
 *
 * __dangerouslyDisableSanitizersByTagID is required to tell Nuxt to not escape
 * characters in this block.
 */
export const injectDatadog = ({
  isEnabled,
  isNotSupported,
  sampleRate,
  isBotUserAgent,
  isPotentiallyABot,
  rtSessionId,
  $config,
}: {
  isEnabled: boolean
  isNotSupported: boolean
  sampleRate: number
  isBotUserAgent: boolean
  isPotentiallyABot: boolean
  rtSessionId: string
  $config: Record<string, unknown>
}) => {
  if (!isEnabled) {
    return
  }

  return {
    key: 'datadog',
    type: 'text/javascript',
    innerHTML: injectDatadogScript({ isNotSupported, sampleRate, isBotUserAgent, isPotentiallyABot, rtSessionId, $config }),
  }
}

/**
 * Generates and returns the actual script content for DataDog to be injected.
 */
// const injectDatadogScript = ($config, $experiment, $cookies, $userAgent, isPotentiallyABot, isNotSupported) => {
const injectDatadogScript = ({
  isNotSupported,
  sampleRate,
  isBotUserAgent,
  isPotentiallyABot,
  rtSessionId,
  $config,
}: {
  isNotSupported: boolean
  sampleRate: number
  isBotUserAgent: boolean
  isPotentiallyABot: boolean
  rtSessionId: string
  $config: Record<string, unknown>
}) => {
  if (isNotSupported) {
    return ''
  }

  const datadogConfig = {
    ...$config,
    trackUserInteractions: true,
    sessionSampleRate: (isPotentiallyABot || isBotUserAgent) ? 0 : sampleRate,
    beforeSend: (event: RUMEvent) => {
      if (event.error?.message) {
        // filter out error that might be caused by link validation/ pre-fetch rendering from email clicks
        // https://github.com/DataDog/browser-sdk/issues/2715
        const regex = /Object Not Found Matching Id:\\d+,\\sMethodName:\\w+,\\sParamCount:\\d+/
        if (regex.test(event.error.message)) return false
      }
      return true
    },
  }

  return `
  (function(h,o,u,n,d) {
    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
    d=o.createElement(u);d.async=1;d.src=n
    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
  })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum-slim.js','DD_RUM')
  window.DD_RUM.onReady(function() {
    var config = ${JSON.stringify($config).replace(/"[*]regex(\/[^/]+?\/[gims]*)"/g, '$1')}
    config.trackUserInteractions = ${datadogConfig.trackUserInteractions},
    config.sessionSampleRate = ${datadogConfig.sessionSampleRate},
    config.beforeSend = ${datadogConfig.beforeSend.toString()},
    window.DD_RUM.setGlobalContextProperty("rtsessionId", "${rtSessionId}");
    window.DD_RUM.init(config);
  })
  `
}
