export const request = (method, endpoint) => {
  return (params) => {
    if (import.meta.client) {
      window.$nuxt.$emit('request.loading')
    }
    return method(endpoint, params)
      .then((response) => {
        if (import.meta.client) {
          window.$nuxt.$emit('request.done', { success: true })
        }
        return response
      })
      .catch((err) => {
        if (import.meta.client) {
          window.$nuxt.$emit('request.done', { success: false, err })
        }
        throw err
      })
  }
}

export const createPostRequest = (axios, endpoint) => {
  return request(axios.$post, endpoint)
}

export const createGetRequest = (axios, endpoint) => {
  return request(axios.$get, endpoint)
}

export const createPutRequest = (axios, endpoint) => {
  return request(axios.$post, endpoint)
}
