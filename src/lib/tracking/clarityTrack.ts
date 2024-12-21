import type { IdentifiersType } from '~/types/clarity'

export function SendEventToClarity(event: string) {
  try {
    window?.clarity?.('event', event)
  }
  catch (e) {
    console.error('Error firing clarity event', e)
  }
}

export function SendTagToClarity(tagName: string, tagValue: string) {
  try {
    window?.clarity?.('set', tagName, tagValue)
  }
  catch (e) {
    console.error('Error on clarity Tag', e)
  }
}

export function SendConsentToClarity() {
  try {
    window?.clarity?.('consent')
  }

  catch (e) {
    console.error('Error on clarity Consent', e)
  }
}

export function SendIdentifiersToClarity(args: IdentifiersType) {
  try {
    window?.clarity?.('identify', args.customId, args.customSessionId, args.customPageId, args.friendlyName)
  }

  catch (e) {
    console.error('Error on clarity Identify', e)
  }
}
