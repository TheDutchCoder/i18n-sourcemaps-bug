import type { LocationQuery } from 'vue-router'

/**
 * Injects the Google Gtag base script into the head.
 */
export const injectGtagBase = ({
  isEnabled,
  id,
}: {
  isEnabled: boolean
  id: string
}) => {
  if (!isEnabled) {
    return
  }

  return {
    key: 'google-gtag-base',
    type: 'text/javascript',
    src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
    defer: true,
  }
}

/**
 * Injects the Google GTAG script into the head.
 *
 * __dangerouslyDisableSanitizersByTagID is required to tell Nuxt to not escape
 * characters in this block.
 */
export const injectGtag = ({
  isEnabled,
  analyticsId,
  adsId,
  userId,
  userEmail,
  query,
}: {
  isEnabled: boolean
  analyticsId: string
  adsId: string
  userId: string
  userEmail: string
  query: LocationQuery
}) => {
  if (!isEnabled) {
    return
  }

  return {
    key: 'google-gtag',
    type: 'text/javascript',
    innerHTML: injectGtagScript({ analyticsId, adsId, userId, userEmail, query }),
  }
}

/**
 * Generates and returns the actual script content for Google Gtag to be
 * injected.
 */
const injectGtagScript = ({
  analyticsId,
  adsId,
  userId,
  userEmail,
  query,
}: {
  analyticsId: string
  adsId: string
  userId: string
  userEmail: string
  query: LocationQuery
}) => {
  return `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  window.gtag('set', 'linker', {'domains': ['rvezy.com']});
  window.gtag('js', new Date());
  window.gtag('set', 'user_data', {
    'user_id': '${userId ?? ''}',
    'email': '${userEmail ?? ''}'
  });
  window.gtag('config', '${analyticsId}', {
    'user_id': '${userId ?? ''}',
    'campaign_id' : '${query?.rvz_camp_id ?? ''}', // rvz_camp_id
    'user_properties': {
      'user_id_dimension': '${userId ?? ''}'
    }
  });
  window.gtag('config', '${adsId}', {
    'allow_enhanced_conversions': true
  });
  `
}
