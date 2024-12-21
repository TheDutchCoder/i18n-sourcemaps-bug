/***
 * Required attributes:
 *
 * type: Type.Feature, Type.Experiment or Type.Configuration depending of ConfigCat flag
 *
 * List of optional attributes for experiment object:
 *   - defaultVariant: The default variant when the experiment is turned off
 *         default: experiment=off, feature=false, configuration=<empty string>
 *   - tracked: Is the experiment view being tracked
 *         default: experiment=true, otherwise false
 *   - trackDefaultVariant: when the experiment is tracked, should the default variant also be tracked
 *         default: experiment=false, otherwise true
 *   - trackOnStartup: when the experiment is tracked, should it be automatically tracked upon start up
 *         default: false
 *   - segmentBy: how should the experiment variant be determined? by SegmentBy.Device or SegmentBy.User
 *         default: SegmentBy.Device
 */

import { FlagType as Type } from './enums/index.js'

export default {
  maintenanceMode: {
    type: Type.Feature,
    platforms: ['frontend', 'ios', 'android'],
    team: 'platform',
  },
  rvz10584DatadogRumEnabled: {
    type: Type.Feature,
    defaultVariant: false,
    platforms: ['frontend'],
  },
  rvz11609DatadogRumSampleRate: {
    type: Type.Configuration,
    defaultVariant: 100,
    team: 'platform',
  },
  rvz16504NewWebclientInNuxt3: {
    type: Type.Experiment,
    variants: ['control', 'beta', 'alpha', 'off', 'disabled'],
    defaultVariant: 'control',
    platforms: ['frontend'],
  },
  rvz16530BuyNowPayLater: {
    type: Type.Feature,
    defaultVariant: false,
    platforms: ['frontend'],
  },
  zeroDollarSecurityDeposit: {
    type: Type.Feature,
    defaultVariant: false,
    platforms: ['frontend'],
  },
  rvz20599ThanksgivingBanner: {
    type: Type.Experiment,
    variants: ['CA', 'US', 'CA|US', 'off'],
    platforms: ['frontend'],
  },
  rvz20755clarityFeatureFlag: {
    type: Type.Feature,
    defaultVariant: false,
    platforms: ['frontend'],
  },
  rvz18372FomoFeatureFlag: {
    type: Type.Feature,
    defaultVariant: false,
    platforms: ['frontend'],
  },
  rvz20810HostStateDefinitionAndVisualization: {
    type: Type.Feature,
    defaultVariant: false,
    platforms: ['frontend'],
  },
}
