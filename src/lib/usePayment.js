/** @deprecated use $rentals instead */
export const getPaymentCards = ($axios, url) => $axios.$get(`${url}/api/payment/cards`)

/** @deprecated use $rentals instead */
export const getPaymentIntent = ($axios, url, id, paymentType = 0) =>
  $axios.$get(`${url}/api/payment/get-setup-intent/${id}/${paymentType}`)
