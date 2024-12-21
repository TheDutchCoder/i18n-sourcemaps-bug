import type { ContentBlock, Nullable, SupportedLocales } from '~/types'

export type PointOfInterestRouteDetails = {
  Id: string
  Action: string
  PointOfInterest: PointOfInterest
  Keyword: Nullable<string>
  Breadcrumbs: PointOfInterestBreadcrumb[]
  CanonicalPath: string
  FAQs: PointOfInterestFaq[]
  Components: Record<string, PointOfInterestComponent>
  CanonicalPaths: Record<SupportedLocales, string>
  ActionConfig: PointOfInterestComponentConfig
  Component: PointOfInterestComponentConfig
}

export type PointOfInterestComponentConfigs = Record<string, PointOfInterestComponentConfig>
export type PointOfInterestComponentConfig = {
  CanonicalSlugs?: Record<SupportedLocales, string>
  Component: string
  ComponentType: string
  Id: string
  Indexable: boolean
  Name: string
  Slugs?: string[]
}

export type PointOfInterestAttributes = {
  Abbreviation?: string
  GooglePlaceId: string
  WebsiteLink?: string
  Population?: number
  TotalHousing?: number
  OccupiedHousing?: number
  LandAreaKM2?: number
  RegionType?: string
  GrammarRules?: number
  CountryId?: number
}

export type PointOfInterestStats = {
  RVCount: number
  ReviewCount: number
  CampgroundCount: number
  AvgRating: number
  MinPrice: number
  MinPriceWeekly: number
  MinPriceMonthly: number
  MaxPrice: number
  MaxPriceWeekly: number
  MaxPriceMonthly: number
  AvgPrice: number
  AvgPriceWeekly: number
  AvgPriceMonthly: number
}

export type PointOfInterestPhoto = {
  Id: string
  Path: string
  HtmlAttribution: Record<string, string>
}

export type PointOfInterest = {
  Attributes: PointOfInterestAttributes
  Bounds?: Bounds
  CanonicalPaths: Record<SupportedLocales, string>
  Coordinates?: Coordinates
  Components?: Record<string, PointOfInterestComponent>
  ComponentType: string
  Photos: PointOfInterestPhoto[]
  Id: string
  Name: string
  FullName: string
  ParentName: Nullable<string>
  GrandParentName: Nullable<string>
  CanonicalPath: string
  ParentId: string
  Component: string
  DistanceKM: Nullable<number>
  Indexable: boolean
  ParentAttributes: Nullable<PointOfInterestAttributes>
  GrandParentAttributes: Nullable<PointOfInterestAttributes>
  Stats?: PointOfInterestStats
  Version: string
}

export type PointOfInterestComponent = PointOfInterestBreadcrumb & { Name: string }

export type PointOfInterestBreadcrumb = {
  Id: string
  Attributes?: PointOfInterestAttributes
  Component: string
  NameAbbreviation: string
  Names: Record<string, string>
  CanonicalPaths: Record<SupportedLocales, string>
}

export type PointOfInterestContentBlock = {
  Id: string
  BlockContentTypeId?: string
  Content: string
  ContentJson: ContentBlock[]
}

export type PointOfInterestFaq = {
  Id: string
  Question: string
  Answer: string
}

export type Bounds = {
  North: number
  East: number
  South: number
  West: number
}

export type Coordinates = {
  Latitude: number
  Longitude: number
}
