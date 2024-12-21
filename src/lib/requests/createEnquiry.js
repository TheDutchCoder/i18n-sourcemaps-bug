import { createPostRequest } from '~/lib/requests'

export const createEnquiry = ($axios, $config) => createPostRequest($axios, `${$config.apiUrl}/api/v2/bookings/enquiry`)
