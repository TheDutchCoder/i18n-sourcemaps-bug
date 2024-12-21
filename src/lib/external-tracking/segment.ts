import type { Nullable } from '~/types'
/**
 * Injects the Segment script into the head.
 *
 * __dangerouslyDisableSanitizersByTagID is required to tell Nuxt to not escape
 * characters in this block.
 */
export const injectSegment = ({
  isEnabled,
  rtSessionId,
  url,
  writeKey,
}: {
  isEnabled: boolean
  rtSessionId?: Nullable<string>
  url: string
  writeKey: string
}) => {
  if (!isEnabled) {
    return
  }

  return {
    key: 'segment',
    type: 'text/javascript',
    innerHTML: injectSegmentScript({ rtSessionId, url, writeKey }),
  }
}

/**
 * Generates and returns the actual script content for Segment to be injected.
 */
const injectSegmentScript = ({
  rtSessionId,
  url,
  writeKey,
}: {
  rtSessionId?: Nullable<string>
  url: string
  writeKey: string
}) => {
  return `
(function() {
  // define the key where the global analytics object will be accessible
  // customers can safely set this to be something else if need be
  var globalAnalyticsKey = "analytics"

  // Create a queue, but don't obliterate an existing one!
  var analytics = window[globalAnalyticsKey] = window[globalAnalyticsKey] || [];

  // If the real analytics.js is already on the page return.
  if (analytics.initialize) return;

  // If the snippet was invoked already show an error.
  if (analytics.invoked) {
    if (window.console && console.error) {
      console.error("Segment snippet included twice.");
    }
    return;
  }

  // Invoked flag, to make sure the snippet
  // is never invoked twice.
  analytics.invoked = true;

  // A list of the methods in Analytics.js to stub.
  analytics.methods = [
    "trackSubmit",
    "trackClick",
    "trackLink",
    "trackForm",
    "pageview",
    "identify",
    "reset",
    "group",
    "track",
    "ready",
    "alias",
    "debug",
    "page",
    "screen",
    "once",
    "off",
    "on",
    "addSourceMiddleware",
    "addIntegrationMiddleware",
    "setAnonymousId",
    "addDestinationMiddleware",
    "register"
  ];

  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The method is
  // stored as the first argument, so we can replay the data.
  analytics.factory = function(e) {
    return function() {
      if (window[globalAnalyticsKey].initialized) {
        // Sometimes users assigned analytics to a variable before analytics is done loading, resulting in a stale reference.
        // If so, proxy any calls to the 'real' analytics instance.
        return window[globalAnalyticsKey][e].apply(window[globalAnalyticsKey], arguments);
      }
      var args = Array.prototype.slice.call(arguments);

      // Add buffered page context object so page information is always up-to-date
      if (["track", "screen", "alias", "group", "page", "identify"].indexOf(e) > -1) {
        var c = document.querySelector("link[rel='canonical']");
        args.push({
          __t: "bpc",
          c: c && c.getAttribute("href") || undefined,
          p: location.pathname,
          u: location.href,
          s: location.search,
          t: document.title,
          r: document.referrer
        });
      }

      args.unshift(e);
      analytics.push(args);
      return analytics;
    };
  };


  // For each of our methods, generate a queueing stub.
  for (var i = 0; i < analytics.methods.length; i++) {
    var key = analytics.methods[i];
    analytics[key] = analytics.factory(key);
  }

  // Define a method to load Analytics.js from our CDN,
  // and that will be sure to only ever load it once.
  analytics.load = function(key, options) {
    // Create an async script element based on your key.
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.setAttribute("data-global-segment-analytics-key", globalAnalyticsKey)
    script.src = '${url || 'https://cdn.segment.com'}/analytics.js/v1/' + key + '/analytics.min.js';

    // Insert our script next to the first script element.
    var head = document.getElementsByTagName('head')[0];
    head.insertAdjacentElement('beforeend', script);
    analytics._loadOptions = options;
  };

  // Add extra context fields (ANALYTICS.JS)
  analytics.addSourceMiddleware(({ payload, next }) => {
    ${rtSessionId ? `payload.obj.context.rtSessionId = '${rtSessionId}'` : ''}
    payload.obj.context.framework = 'Nuxt 3'
    payload.obj.context.screen = {
      height: window.innerHeight,
      width: window.innerWidth,
      density: window.devicePixelRatio || 1
    }
    payload.obj.context.host = window.location.host

    //Add user traits to all events track events
    const traits = window.analytics.user().traits();
    switch (payload.action()) {
      case 'page':
      case 'track':
        payload.obj.context.traits = {
          ...traits,
          ...payload.obj.context.traits
        };
        break;
    }
    next(payload)
  })

  analytics._writeKey = '${writeKey}';

  // Add a version to keep track of what's in the wild.
  analytics.SNIPPET_VERSION = "5.2.1";

  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  analytics.load("${writeKey}", { integrations: { "Segment.io": { apiHost: "analytics-api.rvezy.com/v1" }}});
})();
  `
}

export const injectSegmentPlugin = ({
  isEnabled,
}: {
  isEnabled: boolean
}) => {
  if (!isEnabled) {
    return
  }

  return {
    hid: 'segmentPlugin',
    type: 'text/javascript',
    innerHTML: 'window.navigator.plugins = window.navigator.plugins || [];',
  }
}
