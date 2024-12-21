import type { LocationQuery } from 'vue-router'
import type {
  SearchBounds,
  SearchBoundsWithNeSw,
  SearchCriteria,
  SearchDates,
  SearchFilters,
  SearchGuests,
  SearchLocation,
  SearchParameters,
} from '~/types/search'
import { SearchApiRequest, SearchQuery } from '~/types/search'
import type { GeolocationData, Nullable } from '~/types'
import { formatAsDateISO } from '~/utils/format-dates'
import { AMENITIES_TYPES_ARRAY, DRIVABLE_TYPES_ARRAY, SEARCH_SORT_TYPES, TOWABLE_TYPES_ARRAY } from '~/constants/search'

export function extractSearchQuery(query: LocationQuery = {}): SearchQuery {
  // Standardize every keys to lowercase
  const all: Record<string, string | undefined> = Object.keys(query).reduce((acc: Record<string, string | undefined>, k: string) => {
    acc[k.toLowerCase()] = query[k]?.toString()
    return acc
  }, {})

  const queryModel = new SearchQuery()

  queryModel.Adults = all.adults ? Number(all.adults) : undefined
  queryModel.Children = all.children ? Number(all.children) : undefined
  queryModel.SearchAddress = all.searchaddress
  queryModel.SortOrder = all.sortorder ? SEARCH_SORT_TYPES[all.sortorder as keyof typeof SEARCH_SORT_TYPES] : undefined
  queryModel.StartDate = all.startdate !== undefined ? formatAsDateISO(all.startdate) : undefined
  queryModel.EndDate = all.enddate !== undefined ? formatAsDateISO(all.enddate) : undefined
  queryModel.Types = all.types?.split(',')
  queryModel.Amenities = all.amenities?.split(',')
  queryModel.RvBrand = all.rvbrand
  queryModel.Delivery
    = (Object.prototype.hasOwnProperty.call(all, 'delivery') && all.delivery === undefined) || Boolean(all.delivery)
  queryModel.ExperienceNotRequired
    = (Object.prototype.hasOwnProperty.call(all, 'experiencenotrequired') && all.experiencenotrequired === undefined)
    || Boolean(all.experiencenotrequired)
  queryModel.IsSuperHost
    = (Object.prototype.hasOwnProperty.call(all, 'issuperhost') && all.issuperhost === undefined)
    || Boolean(all.issuperhost)
  queryModel.FestivalFriendly
    = (Object.prototype.hasOwnProperty.call(all, 'festivalfriendly') && all.festivalfriendly === undefined)
    || Boolean(all.festivalfriendly)
  queryModel.InstantBook
    = (Object.prototype.hasOwnProperty.call(all, 'instantbook') && all.instantbook === undefined)
    || Boolean(all.instantbook)
  queryModel.PetFriendly
    = (Object.prototype.hasOwnProperty.call(all, 'petfriendly') && all.petfriendly === undefined)
    || Boolean(all.petfriendly)

  queryModel.FlexibleDays = all.flexibledays ? Number(all.flexibledays) : undefined

  queryModel.MinLength = all.minlength ? Number(all.minlength) : undefined
  queryModel.MaxLength = all.maxlength ? Number(all.maxlength) : undefined

  queryModel.MinPrice = all.minprice ? Number(all.minprice) : undefined
  queryModel.MaxPrice = all.maxprice ? Number(all.maxprice) : undefined

  queryModel.MinRvYear = all.minrvyear ? Number(all.minrvyear) : undefined
  queryModel.MaxRvYear = all.maxrvyear ? Number(all.maxrvyear) : undefined

  queryModel.MinWeight = all.minweight ? Number(all.minweight) : undefined
  queryModel.MaxWeight = all.maxweight ? Number(all.maxweight) : undefined

  queryModel.NeLat = all.nelat ? Number(all.nelat) : undefined
  queryModel.NeLng = all.nelng ? Number(all.nelng) : undefined
  queryModel.SwLat = all.swlat ? Number(all.swlat) : undefined
  queryModel.SwLng = all.swlng ? Number(all.swlng) : undefined

  return queryModel
}

export function boundsToLocation(fullName: string, bounds: SearchBounds): SearchLocation | undefined {
  if (
    bounds === undefined
    || bounds.east === undefined
    || bounds.west === undefined
    || bounds.north === undefined
    || bounds.south === undefined
    || Number.isNaN(bounds?.east)
    || Number.isNaN(bounds?.west)
    || Number.isNaN(bounds?.north)
    || Number.isNaN(bounds?.south)
  ) {
    return {}
  }

  const boundModel: SearchLocation = {
    bounds: bounds,
    mapArea: true,
    searchable: false,
    placeId: undefined,
    fullName: fullName,
    mainText: fullName,
    center: undefined,
    secondaryText: undefined,
    city: undefined,
    region: undefined,
    country: undefined,
    types: [],
  }

  return boundModel
}

export function queryStringToBounds(query: SearchQuery): SearchBounds {
  const bound: SearchBounds = {
    hasBounds: false,
  }
  if (query.NeLat == null || query.NeLng == null || query.SwLat == null || query.SwLng == null) {
    bound.hasBounds = false
    return bound
  }

  bound.hasBounds = true
  bound.east = Number(query.NeLng)
  bound.west = Number(query.SwLng)
  bound.north = Number(query.NeLat)
  bound.south = Number(query.SwLat)

  return bound
}

export function geolocationToLocation(geolocation: Nullable<GeolocationData>): SearchLocation | undefined {
  if (geolocation === null || geolocation?.latitude == null || geolocation?.longitude == null) {
    return
  }

  const location: SearchLocation = {}
  location.searchable = false
  location.placeId = undefined
  location.center = {
    lat: geolocation.latitude,
    lng: geolocation.longitude,
  }
  location.bounds = undefined
  location.city = {
    long_name: geolocation.city ?? '',
    short_name: geolocation.city ?? '',
    types: ['political', 'locality'],
  }
  location.region = {
    long_name: geolocation.regionCode ?? '',
    short_name: geolocation.regionCode ?? '',
    types: ['political', 'administrative_area_level_1'],
  }
  location.country = {
    long_name: geolocation.countryCode ?? '',
    short_name: geolocation.countryCode ?? '',
    types: ['political', 'country'],
  }
  location.fullName = [geolocation?.city, geolocation?.regionCode, geolocation?.countryCode].filter((x) => x).join(', ')
  location.mainText = geolocation?.city ?? ''
  location.secondaryText = ''
  location.types = ['political', 'locality']

  return location
}

export function queryStringToGuests(query: SearchQuery): SearchGuests {
  return {
    adults: query.Adults,
    children: query.Children,
  }
}

/**
 * This function is used to parse search types into a record.
 * It takes an array of query types and an array of types as arguments.
 * It returns a record where each key is a type and each value is a boolean indicating whether the type is included in the query types.
 * If the query types array is null or undefined, the function returns undefined.
 *
 * @param {Type[]} typesArray - An array of types. Each type is a string, number, or symbol.
 * @param {string[] | null | undefined} queryTypes - An array of query types. Each query type is a string.
 * @returns {Record<Type, boolean> | undefined} - A record where each key is a type and each value is a boolean indicating whether the type is included in the query types. If the query types array is null or undefined, the function returns undefined.
 * @template Type - A type that extends string, number, or symbol.
 */
function parseSearchTypeToRecord<Type extends number | string | symbol>(
  typesArray: Type[],
  queryTypes?: Nullable<string[]>,
): Record<Type, boolean> | undefined {
  return queryTypes
    ? queryTypes.reduce(
      (acc: Record<Type, boolean>, v: string) => {
        if (typesArray.includes(v as Type)) {
          acc[v as Type] = true
        }
        return acc
      },
      {} as Record<Type, boolean>,
    )
    : undefined
}
// Check that prevents malicious inputs from user into the search query
function isNaNOrNullOrUndefined(value?: Nullable<number>) {
  return value === undefined || value === null || isNaN(value)
}

export function queryStringToSearchFilters(query: SearchQuery): SearchFilters {
  const filterModel: SearchFilters = {
    delivery: false,
    experienceNotRequired: false,
    festivalFriendly: false,
    instantBook: false,
    petFriendly: false,
    rvBrand: '',
    rvCottage: false,
    rvLength: {},
    rvPrice: {
      min: 0,
      max: 0,
    },
    rvWeight: {},
    rvYear: {},
    superhost: false,
  }

  filterModel.drivable = parseSearchTypeToRecord<DRIVABLE_TYPES_ARRAY>([...DRIVABLE_TYPES_ARRAY], query.Types)
  filterModel.towable = parseSearchTypeToRecord<TOWABLE_TYPES_ARRAY>([...TOWABLE_TYPES_ARRAY], query.Types)
  filterModel.amenities = parseSearchTypeToRecord<AMENITIES_TYPES_ARRAY>([...AMENITIES_TYPES_ARRAY], query.Amenities)

  filterModel.rvCottage = query.Types ? query.Types.includes('RVCottage') : false
  filterModel.delivery = query.Delivery ?? false
  filterModel.rvPrice = {
    min: !isNaNOrNullOrUndefined(query.MinPrice) ? Number(query.MinPrice) : undefined,
    max: !isNaNOrNullOrUndefined(query.MaxPrice) ? Number(query.MaxPrice) : undefined,
  }
  filterModel.rvWeight = {
    min: !isNaNOrNullOrUndefined(query.MinWeight) ? Number(query.MinWeight) : undefined,
    max: !isNaNOrNullOrUndefined(query.MaxWeight) ? Number(query.MaxWeight) : undefined,
  }
  filterModel.rvLength = {
    min: !isNaNOrNullOrUndefined(query.MinLength) ? Number(query.MinLength) : undefined,
    max: !isNaNOrNullOrUndefined(query.MaxLength) ? Number(query.MaxLength) : undefined,
  }

  filterModel.rvYear = {
    min: !isNaNOrNullOrUndefined(query.MinRvYear) ? Number(query.MinRvYear) : undefined,
    max: !isNaNOrNullOrUndefined(query.MaxRvYear) ? Number(query.MaxRvYear) : undefined,
  }

  filterModel.petFriendly = query.PetFriendly ?? false
  filterModel.instantBook = query.InstantBook ?? false
  filterModel.rvBrand = query.RvBrand
  filterModel.festivalFriendly = query.FestivalFriendly ?? false
  filterModel.experienceNotRequired = query.ExperienceNotRequired ?? false
  filterModel.superhost = query.IsSuperHost ?? false

  return filterModel
}

export const queryStringToDates = (query: SearchQuery): SearchDates => {
  const result: SearchDates = {
    dates: {
      start: undefined,
      end: undefined,
    },
  }

  if (!query.StartDate || !query.EndDate) {
    return result
  }

  result.dates.start = query.StartDate
  result.dates.end = query.EndDate
  return result
}

export const queryStringToSortOrder = (query: SearchQuery) => {
  return {
    value: query.SortOrder ?? SEARCH_SORT_TYPES.Recommended,
  }
}

export const searchParametersToSearchQuery = (params: SearchParameters): SearchQuery => {
  const query = new SearchQuery()

  query.Adults = params.guests.adults || undefined
  query.Children = params.guests.children || undefined
  query.StartDate = params.dates.dates.start
  query.EndDate = params.dates.dates.end

  query.Amenities = Object.keys(params.filters.amenities ?? [])
    .filter((x) => params.filters.amenities?.[x])
    .sort()

  query.Types = Object.keys(params.filters.drivable || [])
    .filter((x) => params.filters.drivable?.[x])
    .concat(Object.keys(params.filters.towable || []).filter((x) => params.filters.towable?.[x]))
    .concat(params.filters.rvCottage ? ['RVCottage'] : [])
    .sort()

  query.Delivery = params.filters.delivery || undefined
  query.ExperienceNotRequired = params.filters.experienceNotRequired || undefined

  query.FestivalFriendly = params.filters.festivalFriendly || undefined
  query.InstantBook = params.filters.instantBook || undefined
  query.IsSuperHost = params.filters.superhost || undefined

  query.PetFriendly = params.filters.petFriendly || undefined

  query.RvBrand = params.filters.rvBrand || undefined

  query.MinLength = params.filters.rvLength?.min
  query.MaxLength = params.filters.rvLength?.max

  query.MinPrice = params.filters.rvPrice?.min
  query.MaxPrice = params.filters.rvPrice?.max

  query.MinRvYear = params.filters.rvYear?.min
  query.MaxRvYear = params.filters.rvYear?.max

  query.MinWeight = params.filters.rvWeight?.min
  query.MaxWeight = params.filters.rvWeight?.max

  query.SearchAddress = params.location?.searchable ? params.location?.fullName : undefined
  query.NeLat = params.bounds?.north
  query.NeLng = params.bounds?.east
  query.SwLat = params.bounds?.south
  query.SwLng = params.bounds?.west

  query.SortOrder = params.sort.value !== SEARCH_SORT_TYPES.Recommended ? params.sort.value : undefined

  return query
}

export const searchParametersToApiRequest = (params: SearchParameters): SearchApiRequest => {
  const request = new SearchApiRequest()

  /** filters */
  request.Instabook = params.filters.instantBook || undefined
  request.Delivery = params.filters.delivery || undefined
  request.FestivalFriendly = params.filters.festivalFriendly || undefined
  request.ExperienceNotRequired = params.filters.experienceNotRequired || undefined
  request.IsSuperHost = params.filters.superhost || undefined
  request.MinPrice = params.filters.rvPrice?.min
  request.MaxPrice = params.filters.rvPrice?.max
  request.MinWeight = params.filters.rvWeight?.min
  request.MaxWeight = params.filters.rvWeight?.max
  request.MinYear = params.filters.rvYear?.min
  request.MaxYear = params.filters.rvYear?.max
  request.RVBrand = params.filters.rvBrand?.split(',') || undefined
  request.MinLength = params.filters.rvLength?.min
  request.MaxLength = params.filters.rvLength?.max
  request.Amenities = ''
  request.RVCottage = params.filters.rvCottage || undefined

  const procAmenities: string[] = []

  for (const key in params.filters.amenities) {
    if (key === 'AirportPickup' && params.filters.amenities.AirportPickup) {
      request.AirportPickup = true
    }
    else if (params.filters.amenities[key] === true) {
      procAmenities.push(key)
    }
  }

  if (params.filters.petFriendly) {
    procAmenities.push('Petfriendly')
  }

  request.Amenities = procAmenities.length > 0 ? procAmenities.join(',') : ''

  for (const key in params.filters.drivable) {
    request[key] = params.filters.drivable[key] === true || undefined
  }

  for (const key in params.filters.towable) {
    request[key] = params.filters.towable[key] === true || undefined
  }

  /** guests */
  if (params.guests) {
    request.Guest = (params.guests.adults ?? 0) + (params.guests.children ?? 0)
  }

  /** dates */
  if (params.dates?.dates?.start && params.dates?.dates?.end) {
    request.StartDate = params.dates.dates.start
    request.EndDate = params.dates.dates.end
  }

  /** location */
  if (params.bounds?.hasBounds) {
    request.NeLat = params.bounds.north
    request.NeLng = params.bounds.east
    request.SwLat = params.bounds.south
    request.SwLng = params.bounds.west
  }
  else if (!Number.isNaN(params.location?.center?.lat) && !Number.isNaN(params.location?.center?.lng)) {
    request.Country = params.location.country?.short_name

    if (!params.location?.types?.includes('country')) {
      if (params.location?.types?.includes('political')) {
        if (params.location.city) {
          request.SearchLat = params.location.center?.lat
          request.SearchLng = params.location.center?.lng
        }
        else if (
          !params.location?.types?.includes('administrative_area_level_1')
          && params.location?.types?.find((x: string) => /^administrative_area_level_/.test(x))
        ) {
          checkAndAssignBounds(request, params.location)
        }
        else if (params.location.region) {
          request.Region = params.location.region.long_name
        }
        else {
          checkAndAssignBounds(request, params.location)
        }
      }
      else if (params.location.center) {
        request.SearchLat = params.location.center.lat
        request.SearchLng = params.location.center.lng
      }
    }
  }

  /** sort */
  request.SortOrder = SEARCH_SORT_TYPES[params.sort.value as keyof typeof SEARCH_SORT_TYPES]

  return request
}

const checkAndAssignBounds = (request: SearchApiRequest, location: SearchLocation) => {
  // Todo: Find the exact type in google that has northeast and southwest
  // right now these fields comes in the execution but not in the type
  if ((location?.bounds as SearchBoundsWithNeSw)?.northeast && (location?.bounds as SearchBoundsWithNeSw)?.southwest) {
    request.NeLat = (location.bounds as SearchBoundsWithNeSw).northeast.lat
    request.NeLng = (location.bounds as SearchBoundsWithNeSw).northeast.lng
    request.SwLat = (location.bounds as SearchBoundsWithNeSw).southwest.lat
    request.SwLng = (location.bounds as SearchBoundsWithNeSw).southwest.lng
  }
  else if (location?.bounds) {
    request.NeLat = (location.bounds as SearchBounds).north
    request.NeLng = (location.bounds as SearchBounds).east
    request.SwLat = (location.bounds as SearchBounds).south
    request.SwLng = (location.bounds as SearchBounds).west
  }
  else if (location.center) {
    request.SearchLat = location.center.lat
    request.SearchLng = location.center.lng
  }
  return request
}

export const searchCriteriaToSearchParameters = (searchCriteria: SearchCriteria, params: SearchParameters) => {
  params.filters = {
    drivable: {
      MotorHome: searchCriteria.MotorHome ?? false,
      ClassA: searchCriteria.ClassA ?? false,
      ClassB: searchCriteria.ClassB ?? false,
      ClassC: searchCriteria.ClassC ?? false,
      MotoVintage: searchCriteria.MotoVintage ?? false,
      TruckCamper: searchCriteria.TruckCamper ?? false,
      Campervan: searchCriteria.Campervan ?? false,
    },
    towable: {
      TravelTrailer: searchCriteria.TravelTrailer ?? false,
      FifthWheel: searchCriteria.FifthWheel ?? false,
      TentTrailer: searchCriteria.TentTrailer ?? false,
      SubTravelTrailer: searchCriteria.SubTravelTrailer ?? false,
      Vintage: searchCriteria.Vintage ?? false,
      Hybrid: searchCriteria.Hybrid ?? false,
      ToyHauler: searchCriteria.ToyHauler ?? false,
      MicroTrailer: searchCriteria.MicroTrailer ?? false,
    },
    rvCottage: searchCriteria.RVCottage ?? false,
    delivery: searchCriteria.Delivery ?? false,
    rvPrice: {
      min: searchCriteria.MinPrice ?? undefined,
      max: searchCriteria.MaxPrice ?? undefined,
    },
    petFriendly: searchCriteria.Amenities?.includes('Petfriendly'),
    instantBook: searchCriteria.Instabook ?? false,
    amenities:
      searchCriteria.Amenities?.reduce((acc: Record<string, boolean>, v: string) => {
        if (
          [
            'AirConditioner',
            'AirportPickup',
            'DiningTable',
            'Family_kidfriendly',
            'Heater',
            'InsideShower',
            'KitchenSink',
            'Microwave',
            'OutsideShower',
            'Petfriendly',
            'Refrigerator',
            'Stove_Range',
            'Toilet',
          ].includes(v)
        )
          acc[v] = true
        return acc
      }, {}) ?? undefined,
    rvWeight: {
      min: searchCriteria.MinWeight ?? undefined,
      max: searchCriteria.MaxWeight ?? undefined,
    },
    rvLength: {
      min: searchCriteria.MinLength ?? undefined,
      max: searchCriteria.MaxLength ?? undefined,
    },
    rvYear: {
      min: searchCriteria.MinYear ?? undefined,
      max: searchCriteria.MaxYear ?? undefined,
    },
    rvBrand: searchCriteria.RVBrand ?? '',
    festivalFriendly: searchCriteria.FestivalFriendly ?? undefined,
    experienceNotRequired: searchCriteria.ExperienceNotRequired ?? undefined,
    superhost: searchCriteria.IsSuperHost ?? undefined,
  }
}
