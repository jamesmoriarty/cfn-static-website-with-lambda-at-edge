exports.handler = (event, ctx, cb) => {
  clientRequest = event.Records[0].cf.request

  if (clientRequest.querystring.split(/\&/).includes('debug')) {
    const status = '200'
    const headers = {
      'content-type': [{
        key: 'Content-Type',
        value: 'application/json'
      }]
    }
    const body = JSON.stringify(event, null, 2)
    const response = { status, headers, body }
    
    cb(null, response)
  } else {
    cb(null, clientRequest)
  }
}