import https from 'https'

export const respond200 = (res, result) => {
  res.setHeader('content-type', 'application/json')
  if (result) {
    res.write(JSON.stringify(result))
  }
  return res.end()
}

export const respond400 = (res, msg) => {
  res.statusCode = 400
  res.statusMessage = 'Bad request'
  if (msg) {
    res.write(msg)
  }
  return res.end()
}

export const respond404 = (res) => {
  res.statusCode = 404
  res.statusMessage = 'Not found'
  return res.end()
}

export const respond500 = (res, err) => {
  res.statusCode = 500
  res.statusMessage = 'Internal Server Error'
  if (err) {
    res.write(JSON.stringify(err))
  }
  return res.end()
}

export const proxyGet = (url, res) => {
  https.get(url, (data) => {
    // remove express headers
    Object.keys(res.getHeaders()).forEach((headerName) => {
      res.removeHeader(headerName)
    })

    // write status
    res.status = data.statusCode

    // write headers
    Object.keys(data.headers).forEach((headerName) => {
      res.setHeader(headerName, data.headers[headerName])
    })

    // Pipe data to response stream
    data.pipe(res)
  })
}
