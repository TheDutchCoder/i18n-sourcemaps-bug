import type { components } from './api/campgrounds-api-types'

export type Campground = components['schemas']['Rvezy.Campgrounds.Api.Dtos.Response.CampgroundResponse']
export type CampgroundSearch = components['schemas']['Rvezy.Campgrounds.Api.Dtos.Response.PagedResponse[Rvezy.Campgrounds.Api.Dtos.Response.CampgroundResponse]']
export type PlaceSearch = components['schemas']['Rvezy.Campgrounds.Api.Dtos.Response.PagedResponse[Rvezy.Campgrounds.Api.Dtos.Response.PlaceResponse]']
export type PlaceRoute = components['schemas']['Rvezy.Campgrounds.Api.Dtos.Response.PlaceResponse']
