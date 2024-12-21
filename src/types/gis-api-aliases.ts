import type { components } from '#open-fetch-schemas/gis'

export type GisGeocode = components['schemas']['Rvezy.GeographicInformationService.Dtos.Response.RvezyPlaceResponse']
export type GisGeocodeRaw = components['schemas']['Rvezy.GeographicInformationService.Models.Google.Maps.Geocode']
export type GisGeocodeRawAddressComponents = components['schemas']['Rvezy.GeographicInformationService.Models.Google.Maps.AddressComponent']
export type GisGeocodeRawLocation = components['schemas']['Rvezy.GeographicInformationService.Models.Google.Maps.LatLngLiteral']
export type GisGeocodeRawBounds = components['schemas']['Rvezy.GeographicInformationService.Models.Google.Maps.Bounds']

export type GisPlaceDetails = components['schemas']['Rvezy.GeographicInformationService.Dtos.Response.RvezyPlaceResponse']
export type GisPlaceDetailsRaw = components['schemas']['Rvezy.GeographicInformationService.Dtos.Response.GooglePlaceResponse']
export type GisPlaceDetailsRawResult = components['schemas']['Rvezy.GeographicInformationService.Models.Google.Maps.Place']
