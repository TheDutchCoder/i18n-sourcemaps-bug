import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import localizedFormat from 'dayjs/plugin/localizedFormat.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isBetween from 'dayjs/plugin/isBetween.js'
import weekday from 'dayjs/plugin/weekday.js'
import 'dayjs/locale/fr.js'

import type { Dayjs } from 'dayjs'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)
dayjs.extend(advancedFormat)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)
dayjs.extend(weekday)

export type DatesInstance = Dayjs

const dates = dayjs

export default dates
