/**
 * A collection of Booking related types.
 */
import type { components } from '#open-fetch-schemas/rentals'

export type Booking = components['schemas']['RVezy.Data.Bookings.Entities.Booking']
export type BookingDetails = components['schemas']['RVezy.NewBookingService.Models.ViewModels.BookingDetailsResponse']
export type BookingProtectionLevel = BookingDetails['ProtectionLevel']

export type PaymentMethod = components['schemas']['RVezy.Common.Models.UserPaymentMethod']
export type PaymentIntent = components['schemas']['RVezy.Common.Models.Financials.StripeIntent']
export type PaymentMethodType = components['schemas']['RVezy.Common.Models.ConnectedContent.BookingDetailsViewModel']['PaymentMethodType']
