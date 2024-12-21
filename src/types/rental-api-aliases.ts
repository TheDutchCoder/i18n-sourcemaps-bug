import type { components, paths } from '#open-fetch-schemas/rentals'

// Paths
export type AccountRegisterResponse = paths['/api/account/register']['post']['responses']['200']['content']['application/json']
export type RvDetailsOfOwnerResponse = paths['/api/rvlistings/rv-details-of-owner/{profileId}']['get']['responses']['200']['content']['application/json']
export type ProfileOtherResponse = paths['/api/user-profiles/profile-other']['get']['responses']['200']['content']['application/json']
export type UserReviewResponse = paths['/api/reviews/{userId}']['get']['responses']['200']['content']['application/json']
export type RvUnifiedSearchParameters = paths['/api/rvlistings/unified-search']['get']['parameters']['query']
export type RvDetailsParameters = paths['/api/rvlistings/details']['get']['parameters']['query']
export type ProfileOtherParameters = paths['/api/user-profiles/profile-other']['get']['parameters']['query']
export type RvDetailsOfOwnerParameters = paths['/api/rvlistings/rv-details-of-owner/{profileId}']['get']['parameters']['path']
export type UserReviewParameters = paths['/api/reviews/{userId}']['get']['parameters']['path']
export type RvDetailsResponse = paths['/api/rvlistings/details']['get']['responses']['200']['content']['application/json']
export type TabHaveItems = paths['/api/booking/tab-have-items']['get']['responses']['200']['content']['application/json']
export type GetListProfiles = paths['/api/user-profiles/get-list-profiles']['get']['responses']['200']['content']['application/json']
export type UserFavourites = paths['/api/user-profiles/me/favourites']['get']['responses']['200']['content']['application/json']

export type DeliveryCostRequest = paths['/api/rvs/delivery-cost']['get']['parameters']['query']
export type DeliveryCostResponse = paths['/api/rvs/delivery-cost']['get']['responses']['200']['content']['application/json']

// Components
export type AccountRegisterRequest = components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.RegisterModel']
/**
 * TODO: this file can be organized better.
 * It would make sense to group them by "domain"/"path" or something similar.
 * The names are also inconsistent.
 * The goal should be that developers understand what the type is about by just looking at the name.
 *
 * For example:
 * '/api/account/register' => AccountRegisterParams / AccountRegisterResponse
 * '/api/rvlistings/unified-search' => RvlistingsUnifiedSearchRequest / RvlistingsUnifiedSearchResponse
 *
 * However, the latter is very verbose and RvSearchRequest / RvSearchResponse might be more intuitive.
 *
 * @todo Better structure like:
 * export type AccountTypes = {
 *   RegisterParams: components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.RegisterModel']
 *   ForgotPasswordParams: components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.RequestRecoveryPasswordCodeModel']
 *   UserPermissionsResponse: paths['/api/account/me/permissions']['get']['responses']['200']['content']['application/json']
 * }
 */
export type AccountRegisterParams = components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.RegisterModel']
export type AddRvToCollectionParams = components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.FavouriteBindingModel']
export type BookingEnquiryParams = components['schemas']['RVezy.Common.Models.BindingModels.BookingEnquiryBindingModel']
export type BookingTabHaveItemsParams = paths['/api/booking/tab-have-items']['get']['parameters']['query']
export type BookingTabHaveItemsResponse = paths['/api/booking/tab-have-items']['get']['responses']['200']['content']['application/json']
export type BookingPriceRequest = components['schemas']['RVezy.Common.Models.Bookings.BookingRequest']
export type BookingPriceResponse = paths['/api/bookings/get-booking-price']['post']['responses']['200']['content']['application/json']
export type DashboardBooking = components['schemas']['RVezy.NewBookingService.Models.ViewModels.DashboardBookingViewModel']
export type DeliveryCostParams = paths['/api/rvs/delivery-cost']['get']['parameters']['query']
export type ForgotPasswordRequest = components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.RequestRecoveryPasswordCodeModel']
export type GetUserPorfilesListParams = paths['/api/user-profiles/get-list-profiles']['get']['parameters']['query']
export type ListRenterBooking = paths['/api/bookings/mobile/list-renter-booking']['get']['responses']['200']['content']['application/json']
export type Profile = components['schemas']['RVezy.Data.Authentication.Entities.ViewModel.ProfileViewModel']
export type ProfileOtherParams = paths['/api/user-profiles/profile-other']['get']['parameters']['query']
export type RequestBookingParams = components['schemas']['RVezy.Common.Models.Bookings.BookingRequest']
export type RvDetailsOfOwnerParams = paths['/api/rvlistings/rv-details-of-owner/{profileId}']['get']['parameters']['path']
export type RvDetailsParams = paths['/api/rvlistings/details']['get']['parameters']['query']
export type RvUnifiedSearchParams = paths['/api/rvlistings/unified-search']['get']['parameters']['query']
export type RvUnifiedSearchResponse = paths['/api/rvlistings/unified-search']['get']['responses']['200']['content']['application/json']
export type SearchPhotosList = components['schemas']['RVezy.Common.Models.Search.PathInfo'][]
export type UserCollection = components['schemas']['RVezy.Data.Authentication.Entities.BindingModels.FavouriteCollectionBindingModel']
export type UserCollectionDeleteParameters = paths['/api/user-profiles/me/remove-collection']['delete']['parameters']['query']
export type UserCollectionsResponse = paths['/api/user-profiles/me/get-list-collection']['get']['responses']['200']['content']['application/json']
export type UserFavouritesResponse = paths['/api/user-profiles/me/favourites']['get']['responses']['200']['content']['application/json']
export type UserFavouriteDeleteParameters = paths['/api/user-profiles/me/remove-from-collection']['delete']['parameters']['query']
export type UserFavouritesCollection = components['schemas']['AuthenticationServer.Response.FavouriteCollectionResponse']
export type UserFavouritesCollectionItem = components['schemas']['AuthenticationServer.Response.NewFavouriteResponse']
export type UserPermissionsResponse = paths['/api/account/me/permissions']['get']['responses']['200']['content']['application/json']
export type UserReviewParams = paths['/api/reviews/{userId}']['get']['parameters']['path']
export type BookingParams = paths['/api/bookings/{bookingId}']['get']['parameters']['path']
export type GetRvByIdParams = paths['/api/rvlistings/find-by-id/{id}']['get']['parameters']['path']
export type ReportReviewPhoto = components['schemas']['RVezy.Common.Request.ReportReviewPhotoRequest']
export type MyRvsResponse = components['schemas']['RVezyListingServer.Models.ViewModels.RVAdditionalAverageRating'][]
export type RvReviewsQueryParams = paths['/api/reviews/rvs/{rvId}']['get']['parameters']['query']
export type RvReviewsPathParams = paths['/api/reviews/rvs/{rvId}']['get']['parameters']['path']
export type RvReviewsResponse = components['schemas']['RVezy.Common.Response.PaginatedResponse`1[RVezy.Common.Models.Host.RvReviewsFromGuestsViewModel]']
export type HostRvRatingsResponse = components['schemas']['RVezy.Common.Models.Ratings.RatingViewModel']
export type HostRvRatingsPathParams = paths['/api/hosts/ratings/{rvId}']['get']['parameters']['path']
export type UseAuthentication = components['schemas']['RVezy.Data.Authentication.Entities.ViewModels.FullDetailViewModel']
