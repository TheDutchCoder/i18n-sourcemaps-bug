import Enum from './enum.js'

/**
 * @enum {string}
 */
export class i18nLocaleEnum extends Enum {
  static en = 'en'
  static fr = 'fr'
}

/**
 * @enum {string}
 */
export class BookingPseudoStage extends Enum {
  static AddDriver = 'AddDriver'
  static SignRentalAgreement = 'SignRentalAgreement'
  static TomorrowTrip = 'TomorrowTrip'
  static TodayTrip = 'TodayTrip'
  static OnTrip = 'OnTrip'
  static PendingChangeRequest = 'PendingChangeRequest'
  static NotSupported = 'NotSupported'
}

/**
 * @enum {string}
 */
export class SignupUserType extends Enum {
  static Owner = 'owner'
  static Renter = 'renter'
  static Unknown = 'unknown'
}

/**
 * @enum {string}
 */
export class PromocodeErrors extends Enum {
  static PROMOTION_BOOKING_REQUIREMENT = 'PROMOTION_BOOKING_REQUIREMENT'
  static PROMOTIONCODE_NOT_EXIST = 'PROMOTIONCODE_NOT_EXIST'
  static PROMOTION_NOT_ACTIVE = 'PROMOTION_NOT_ACTIVE'
  static PROMOTION_LIMIT_USER = 'PROMOTION_LIMIT_USER'
  static PROMOTION_LIMIT_TOTAL_QUANTITY = 'PROMOTION_LIMIT_TOTAL_QUANTITY'
  static PROMOTION_WRONG_COUNTRY = 'PROMOTION_WRONG_COUNTRY'
}

/**
 * @enum {string}
 */
export class PrepositionWord extends Enum {
  static In = 'in'
  static Near = 'near'
  static From = 'from'
  static Of = 'of'
}

/**
 * @enum {string}
 */
export class QueryStrings extends Enum {
  static swLat = 'SwLat'
  static swLng = 'SwLng'
  static neLat = 'NeLat'
  static neLng = 'NeLng'
  static searchAddress = 'SearchAddress'

  static startDate = 'StartDate'
  static endDate = 'EndDate'
  static flexibleDays = 'FlexibleDays'

  static adults = 'Adults'
  static children = 'Children'
  static petFriendly = 'PetFriendly'
  static types = 'Types'
  static delivery = 'Delivery'
  static instantbook = 'InstantBook'
  static minPrice = 'MinPrice'
  static maxPrice = 'MaxPrice'
  static amenities = 'Amenities'
  static minLength = 'MinLength'
  static maxLength = 'MaxLength'
  static minWeight = 'MinWeight'
  static maxWeight = 'MaxWeight'
  static sortOrder = 'SortOrder'
  static currentPage = 'currentPage'
  static pageSize = 'pageSize'
  static SearchLat = 'SearchLat'
  static SearchLng = 'SearchLng'
  static minYear = 'MinYear'
  static maxYear = 'MaxYear'
  static rvBrand = 'RvBrand'
  static experienceNotRequired = 'ExperienceNotRequired'
  static festivalFriendly = 'FestivalFriendly'
  static superhost = 'IsSuperHost'
}

/**
 * @enum {string}
 */
export class RouteBaseNameEnum extends Enum {
  static INDEX = 'index'
  static POINT_OF_INTEREST = 'point-of-interest'
  static RV_SEARCH = 'rv-search'
  static RV_RENTAL = 'rv-rental'
  static PRE_FILTERED_SEARCH = 'pre-filtered-search'
  static PAYMENT_PAGE = 'dashboard-bookings-id-payment'
}

/**
 * @enum {string}
 */
export class PointOfInterestPages extends Enum {
  static RVRentals = 'rv-rentals'
  static Campground = 'campground'
  static Campgrounds = 'campgrounds'
}

/**
 * @enum {string}
 */
export class ImageFormat extends Enum {
  static WEBP = 'webp'
  static PNG = 'png'
  static JPG = 'jpg'
}

/**
 * @enum {string}
 */
export class ImageResolution extends Enum {
  static SMALL = 'small'
  static MEDIUM = 'medium'
  static LARGE = 'large'
}

/**
 * @enum {string}
 */
export class ImageQuality extends Enum {
  static LOW = 'low'
  static MEDIUM = 'medium'
  static HIGH = 'high'
  static DEFAULT = 'high'
  static NONE = 'none'
}

/**
 * @enum {string}
 */
export class ImageType extends Enum {
  static AVATAR = 'avatar'
  static RV = 'rv'
  static POI = 'poi'
}

export class PointOfInterestIds extends Enum {
  static Canada = '6207d354-e321-4f14-902d-df1b758e8eaa'
  static UnitedStates = '7e7ae79d-b6dd-4c59-96cf-8a20c926ed1d'
}

export class BookingPaymentStates extends Enum {
  static intialDepositTaken = 0
  static awaitingDepositTaken = 1
  static fullPaymentTaken = 2
  static fullPaymentFailed = 3
  static awaitingFullPayment = 4
  static securityDepositTaken = 5
  static securityDepositFailed = 6
  static awaitingSecurityDeposit = 7
}

export class Manufacturer extends Enum {
  static OTHER = 'Other'
}

export class DateRangeType extends Enum {
  static START = 'START'
  static END = 'END'
}

export class MonthsAsDays extends Enum {
  static MONTHS_1 = 30
  static MONTHS_3 = 91
  static MONTHS_6 = 183
  static MONTHS_9 = 274
  static MONTHS_12 = 365
  static MONTHS_15 = 456
  static MONTHS_18 = 548
  static MONTHS_21 = 639
  static MONTHS_24 = 730
}

export class CalendarDayType extends Enum {
  static UNAVAILABLE = 'UNAVAILABLE'
}

export class DashboardTrips extends Enum {
  static CompletedTrip = 'completed_trip'
  static BookingTrips = 'booking_trips'
  static BookingTripsPending = 'booking_trips_pending'
}

export class DeclinationActions extends Enum {
  static UPDATE_CALENDAR = 'UPDATE_CALENDAR'
  static SYNC_CALENDAR = 'SYNC_CALENDAR'
  static CALENDAR_SETTINGS = 'CALENDAR_SETTINGS'
  static LEARN_HOST_PROTECTION = 'LEARN_HOST_PROTECTION'
  static EVENT_PREFERENCES = 'EVENT_PREFERENCES'
  static TOWING_PREFERENCES = 'TOWING_PREFERENCES'
  static DRIVING_PREFERENCES = 'DRIVING_PREFERENCES'
  static UNPUBLISH = 'UNPUBLISH'
}
// TODO: remove when experiments lib function is converted to typescript and uses EXPERIMENT_FLAG_TYPES
export class FlagType extends Enum {
  static Experiment = 'experiment'
  static Feature = 'feature'
  static Configuration = 'configuration'
}

export class BadgeColors extends Enum {
  static Unknown = 'unknown'
  static Blue = 'blue'
  static Yellow = 'yellow'
  static Green = 'green'
  static Red = 'red'
  static Grey = 'grey'
}

export class FuelTypes extends Enum {
  static Diesel = 0
  static Gasoline = 1
}

export class SearchTypes extends Enum {
  static SearchAll = 'searchAll'
  static Drivable = 'drivable'
  static Towable = 'towable'
  static Delivery = 'delivery'
}

export class DownloadAppModalVariants extends Enum {
  static QuarterSheet = 'QuarterSheet'
  static HalfSheet = 'HalfSheet'
  static FullSheetGeneral = 'FullSheetGeneral'
  static FullSheetFinishBooking = 'FullSheetFinishBooking'
}

export class DownloadAppCookies extends Enum {
  static LoggedIn = 'app_download_logged_in_dismissed'
  static Inactive = 'app_download_inactive_dismissed'
}

export class ReportTypeEnum extends Enum {
  static Soliciting = 'Soliciting'
  static Abusive = 'Abusive'
  static Greymarket = 'Greymarket'
  static Other = 'Other'
}

export class RvListingRequirements extends Enum {
  static MinimumDescriptionLength = 200
}

export class PaymentMethodType extends Enum {
  static Unknown = 0
  static CreditCard = 1
  static Affirm = 2
}

export class SeatbeltLimits extends Enum {
  static Minimum = 0
  static Maximum = 12
}

export class DistanceUnitEnumKey extends Enum {
  static km = 'km'
  static mi = 'mi'
}

export class Cookies extends Enum {
  static AppDownloadBannerDismissed = 'app_download_banner_dismissed'
  static Platform = 'platform'
  static ExperimentOverrides = 'experiment_overrides'
  static Capabilities = 'capabilities'
  static AppDownloadLoggedIn = 'app_download_logged_in_dismissed'
  static AppDownloadInactive = 'app_download_inactive_dismissed'
  static AutomatedTest = 'automated-test'
}

export class Platform extends Enum {
  static Android = 'android'
  static IOS = 'ios-v1'
  static Web = 'web'
  static Unknown = 'unknown'
}

export class AuthenticationType extends Enum {
  static Login = 'Login'
  static Signup = 'Signup'
}

export class PreferencesHash extends Enum {
  static Calendar = '#calendar'
  static Pickup = '#pickup'
  static Nights = '#nights'
  static Stays = '#stays'
  static Min = '#min'
  static Max = '#max'
  static CalendarOpen = '#calendar-open'
  static Driving = '#driving'
  static Events = '#events'
}

export class RvUpdateState extends Enum {
  static Pending = 'pending'
  static DeliverPerKM = 'DeliverPerKM'
  static CalendarSettings = 'CalendarSettings'
}

export class RvGoals extends Enum {
  static FrequencyPersonalTrips = 'FrequencyPersonalTrips'
  static FrequencyRentOnRvezy = 'FrequencyRentOnRvezy'
}

export class WeekdaysEnumKey extends Enum {
  static Sunday = 'Sunday'
  static Monday = 'Monday'
  static Tuesday = 'Tuesday'
  static Wednesday = 'Wednesday'
  static Thursday = 'Thursday'
  static Friday = 'Friday'
  static Saturday = 'Saturday'
}

export class WeekdaysEnum extends Enum {
  static Sunday = 0
  static Monday = 1
  static Tuesday = 2
  static Wednesday = 3
  static Thursday = 4
  static Friday = 5
  static Saturday = 6
}

export class FrenchWeekdaysEnum extends Enum {
  static Monday = 0
  static Tuesday = 1
  static Wednesday = 2
  static Thursday = 3
  static Friday = 4
  static Saturday = 5
  static Sunday = 6
}

export class CustomExceptions extends Enum {
  static UserFlowError = 'USER_FLOW_ERROR'
  static LibError = 'LIB_ERROR'
}

export class AllowFestivalEventsParticipation extends Enum {
  static Yes = 'Yes'
  static No = 'No'
  static Negotiable = 'Negotiable'
}

export class FomoTags extends Enum {
  static GreatPrice = 'Great Price'
  static GoodPrice = 'Good Price'
  static HighDemand = 'High Demand'
}

export class RvBadges extends Enum {
  static Superhost = 'Superhost'
  static InstantBook = 'Instant Book'
  static DeliveryOnly = 'Delivery only'
}

export class RvTags extends Enum {
  static Featured = 'Featured'
  static DeliveryOnly = 'Delivery only'
}

export class QuickFilters extends Enum {
  static Thanksgiving = 'thanksgiving'
  static Delivery = 'delivery'
  static MidweekDeals = 'midweekDeals'
  static BudgetFriendly = 'budgetFriendly'
  static PetFriendly = 'petFriendly'
  static FamilyFriendly = 'familyFriendly'
  static FestivalFriendly = 'festivalFriendly'
  static InstantBook = 'instantBook'
}

export class SearchCollapsibleFilters extends Enum {
  static Drivable = 'Drivable'
  static Towable = 'Towable'
  static Filters = 'Filters'
}

Object.freeze(i18nLocaleEnum)
Object.freeze(BookingPseudoStage)
Object.freeze(SignupUserType)
Object.freeze(PromocodeErrors)
Object.freeze(PrepositionWord)
Object.freeze(QueryStrings)
Object.freeze(RouteBaseNameEnum)
Object.freeze(PointOfInterestPages)
Object.freeze(ImageFormat)
Object.freeze(ImageResolution)
Object.freeze(ImageQuality)
Object.freeze(ImageType)
Object.freeze(PointOfInterestIds)
Object.freeze(BookingPaymentStates)
Object.freeze(Manufacturer)
Object.freeze(DateRangeType)
Object.freeze(MonthsAsDays)
Object.freeze(CalendarDayType)
Object.freeze(DashboardTrips)
Object.freeze(DeclinationActions)
Object.freeze(FlagType)
Object.freeze(BadgeColors)
Object.freeze(FuelTypes)
Object.freeze(SearchTypes)
Object.freeze(DownloadAppModalVariants)
Object.freeze(DownloadAppCookies)
Object.freeze(ReportTypeEnum)
Object.freeze(RvListingRequirements)
Object.freeze(SeatbeltLimits)
Object.freeze(PaymentMethodType)
Object.freeze(AuthenticationType)
Object.freeze(PreferencesHash)
Object.freeze(RvUpdateState)
Object.freeze(RvGoals)
Object.freeze(FrenchWeekdaysEnum)
Object.freeze(CustomExceptions)
Object.freeze(AllowFestivalEventsParticipation)
Object.freeze(FomoTags)
Object.freeze(RvBadges)
Object.freeze(RvTags)
Object.freeze(QuickFilters)
Object.freeze(SearchCollapsibleFilters)
