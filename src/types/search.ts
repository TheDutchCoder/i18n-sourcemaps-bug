// Cannot use d.ts because have classes in the file
import type { SEARCH_SORT_TYPES } from '~/constants/search'
import type { Nullable } from '~/types'
import type {
  GisGeocodeRaw,
  GisGeocodeRawAddressComponents,
  GisGeocodeRawBounds,
  GisGeocodeRawLocation,
} from '~/types/gis-api-aliases'

/**
 * Search related types.
 */

export type SearchCoordinates = {
  east?: number
  west?: number
  north?: number
  south?: number
}

export type SearchLocation = {
  mapArea?: boolean
  searchable?: boolean
  placeId?: Nullable<string>
  mainText?: Nullable<string>
  secondaryText?: string
  types?: Nullable<string[]>
  center?: GisGeocodeRawLocation | google.maps.LatLng | google.maps.LatLngLiteral
  city?: GisGeocodeRawAddressComponents | google.maps.GeocoderAddressComponent
  region?: GisGeocodeRawAddressComponents | google.maps.GeocoderAddressComponent
  country?: GisGeocodeRawAddressComponents | google.maps.GeocoderAddressComponent
  bounds?: GisGeocodeRawBounds | google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | SearchBounds | SearchBoundsWithNeSw
  fullName?: string
}

export type SearchMinMaxFilter = {
  min?: number
  max?: number
}

export type SearchFilters = {
  drivable?: {
    [key: string]: boolean
  }
  towable?: {
    [key: string]: boolean
  }
  amenities?: {
    [key: string]: boolean
  }
  rvCottage?: boolean
  delivery?: boolean
  rvPrice?: SearchMinMaxFilter
  rvWeight?: SearchMinMaxFilter
  rvLength?: SearchMinMaxFilter
  rvYear?: SearchMinMaxFilter
  petFriendly?: boolean
  instantBook?: boolean
  rvBrand?: Nullable<string>
  festivalFriendly?: boolean
  experienceNotRequired?: boolean
  superhost?: boolean
}

export type SearchDates = {
  dates: {
    start?: Nullable<string>
    end?: Nullable<string>
  }
}

export type SearchGuests = {
  adults?: Nullable<number>
  children?: Nullable<number>
}

export type SearchBounds = {
  hasBounds: boolean
  east?: number
  west?: number
  north?: number
  south?: number
}

export type SearchBoundsWithNeSw = {
  northeast: {
    lat: number
    lng: number
  }
  southwest: {
    lat: number
    lng: number
  }
}

export type SearchParameters = {
  amenities?: string
  bounds: SearchBounds
  dates: SearchDates
  enddate?: string
  filters: SearchFilters
  guests: SearchGuests
  location: SearchLocation
  maxlength?: number
  maxprice?: number
  maxrvyear?: number
  maxweight?: number
  minlength?: number
  minprice?: number
  minrvyear?: number
  minweight?: number
  nelat?: number
  nelng?: number
  searchaddress?: string
  sortorder?: string
  startdate?: string
  swlat?: number
  swlng?: number
  types?: string
  sort: {
    value: string
  }
}

export type SearchUpdateParameters = {
  location: SearchLocation
  dates: SearchDates['dates']
  guests: SearchGuests & SearchFilters
  filters: SearchFilters
}

export type SearchParsedGeocode = {
  searchable: boolean
  placeId: GisGeocodeRaw['place_id'] | google.maps.GeocoderResult['place_id']
  mainText: GisGeocodeRawAddressComponents['long_name'] | google.maps.GeocoderAddressComponent['long_name']
  types?: GisGeocodeRaw['types'] | google.maps.GeocoderResult['types']
  center?: GisGeocodeRawLocation | google.maps.GeocoderGeometry['location'] | google.maps.LatLngLiteral
  bounds: GisGeocodeRawBounds | google.maps.GeocoderGeometry['bounds'] | google.maps.LatLngBoundsLiteral
  city?: GisGeocodeRawAddressComponents | google.maps.GeocoderAddressComponent
  region?: GisGeocodeRawAddressComponents | google.maps.GeocoderAddressComponent
  country?: GisGeocodeRawAddressComponents | google.maps.GeocoderAddressComponent
  fullName?: string
}

export class SearchApiRequest {
  Guest?: Nullable<number>
  SearchAddress?: Nullable<string>
  SearchLat?: (() => number) | Nullable<number>
  SearchLng?: (() => number) | Nullable<number>
  Country?: Nullable<string>
  Region?: Nullable<string>
  SortOrder?: Nullable<keyof typeof SEARCH_SORT_TYPES>
  StartDate?: Nullable<string>
  EndDate?: Nullable<string>
  Types?: Nullable<string[]>
  Amenities?: Nullable<string>
  RVBrand?: Nullable<string[]>
  RVCottage?: Nullable<boolean>
  Delivery?: boolean
  ExperienceNotRequired?: boolean
  IsSuperHost?: boolean
  FestivalFriendly?: boolean
  Instabook?: boolean
  AirportPickup?: boolean
  Vintage?: boolean
  Hybrid?: boolean
  ToyHauler?: boolean
  ClassA?: boolean
  ClassB?: boolean
  ClassC?: boolean
  MotoVintage?: boolean
  MicroTrailer?: boolean
  TruckCamper?: boolean
  Campervan?: boolean
  TravelTrailer?: boolean
  FifthWheel?: boolean
  TentTrailer?: boolean
  SubTravelTrailer?: boolean
  MotorHome?: boolean
  MinLength?: Nullable<number>
  MaxLength?: Nullable<number>
  MinPrice?: Nullable<number>
  MaxPrice?: Nullable<number>
  MinYear?: Nullable<number>
  MaxYear?: Nullable<number>
  MinWeight?: Nullable<number>
  MaxWeight?: Nullable<number>
  NeLat?: Nullable<number>
  NeLng?: Nullable<number>
  SwLat?: Nullable<number>
  SwLng?: Nullable<number>
  [key: string]: unknown
}

export class SearchQuery {
  Adults?: Nullable<number>
  Children?: Nullable<number>
  SearchAddress?: Nullable<string>
  SortOrder?: Nullable<string>
  StartDate?: Nullable<string>
  EndDate?: Nullable<string>
  Types?: Nullable<string[]>
  Amenities?: Nullable<string[]>
  RvBrand?: Nullable<string>
  Delivery?: Nullable<boolean>
  ExperienceNotRequired?: Nullable<boolean>
  IsSuperHost?: Nullable<boolean>
  FestivalFriendly?: Nullable<boolean>
  InstantBook?: Nullable<boolean>
  PetFriendly?: Nullable<boolean>
  FlexibleDays?: Nullable<number>
  MinLength?: Nullable<number>
  MaxLength?: Nullable<number>
  MinPrice?: Nullable<number>
  MaxPrice?: Nullable<number>
  MinRvYear?: Nullable<number>
  MaxRvYear?: Nullable<number>
  MinWeight?: Nullable<number>
  MaxWeight?: Nullable<number>
  NeLat?: Nullable<number>
  NeLng?: Nullable<number>
  SwLat?: Nullable<number>
  SwLng?: Nullable<number>
}

export type SearchCriteria = {
  AirportCodes: Nullable<string[]>
  AirportPickup: Nullable<boolean>
  Amenities: Nullable<string[]>
  Campervan: Nullable<boolean>
  ClassA: Nullable<boolean>
  ClassB: Nullable<boolean>
  ClassC: Nullable<boolean>
  Country: Nullable<string>
  CurrentPage: Nullable<number>
  Delivery: Nullable<boolean>
  DistanceGroup: Nullable<string>
  EndDate: Nullable<string>
  ExperienceNotRequired: Nullable<boolean>
  FeaturedCurrentPage: Nullable<number>
  FeaturedPageSize: Nullable<number>
  FestivalFriendly: Nullable<boolean>
  FifthWheel: Nullable<boolean>
  Guest: Nullable<number>
  Hybrid: Nullable<boolean>
  IncludeFeatured: boolean
  IndexableMaxDistance: Nullable<number>
  IndexableMinCount: Nullable<number>
  Instabook: Nullable<boolean>
  IsFeatured: Nullable<boolean>
  IsSuperHost: Nullable<boolean>
  MaxLength: Nullable<number>
  MaxPrice: Nullable<number>
  MaxWeight: Nullable<number>
  MaxYear: Nullable<number>
  MicroTrailer: Nullable<boolean>
  MinLength: Nullable<number>
  MinPrice: Nullable<number>
  MinWeight: Nullable<number>
  MinYear: Nullable<number>
  ModifiedDate: Nullable<string>
  MotoVintage: Nullable<boolean>
  MotorHome: Nullable<boolean>
  NeLat: Nullable<number>
  NeLng: Nullable<number>
  Nearby: Nullable<true>
  PageSize: number
  RVBrand: Nullable<string>
  RVCottage: Nullable<boolean>
  RVDescriptionNumChar: number
  Region: Nullable<string>
  RegionId: Nullable<string>
  SearchAddress: Nullable<string>
  SearchCity: Nullable<string>
  SearchDistance: Nullable<number>
  SearchLat: Nullable<number>
  SearchLng: Nullable<number>
  SearchVariant: Nullable<string>
  SortOrder: Nullable<string>
  StartDate: Nullable<string>
  SubTravelTrailer: Nullable<boolean>
  SwLat: Nullable<number>
  SwLng: Nullable<number>
  TentTrailer: Nullable<boolean>
  ToyHauler: Nullable<boolean>
  TravelTrailer: Nullable<boolean>
  TruckCamper: Nullable<boolean>
  Vintage: Nullable<boolean>
}
