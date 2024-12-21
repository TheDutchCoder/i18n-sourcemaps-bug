import { createPostRequest, createGetRequest, createPutRequest } from '~/lib/requests'

const axiosMock = {
  $get: (url) => Promise.resolve(url),
  $post: (url, payload) => Promise.resolve({ url, payload }),
  $put: (url, payload) => Promise.resolve({ url, payload })
}

describe('Library - Requests', () => {
  test('createPostRequest', async () => {
    const postRequest = createPostRequest(axiosMock, '/mock/endpoint/post')
    const postData = await postRequest({ body: 'body' })
    expect(postData.url).toBe('/mock/endpoint/post')
    expect(postData.payload).toMatchObject({ body: 'body' })
  })

  test('createPutRequest', async () => {
    const putRequest = createPutRequest(axiosMock, '/mock/endpoint/put')
    const putData = await putRequest({ body: 'body' })
    expect(putData.url).toBe('/mock/endpoint/put')
    expect(putData.payload).toMatchObject({ body: 'body' })
  })

  test('createGetRequest', async () => {
    const getRequest = createGetRequest(axiosMock, '/mock/endpoint/get')
    const getData = await getRequest()
    expect(getData).toBe('/mock/endpoint/get')
  })
})
