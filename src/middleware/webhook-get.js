const webhookGet = ctx => {
  const { callback } = ctx
  const {
    request: {
      query
    }
  } = ctx

  const mode = query['hub.mode']
  const verifyToken = query['hub.verify_token'] === process.env.VERIFY_TOKEN
  const challenge = query['hub.challenge']

  if (mode && verifyToken) {
    if (mode === 'subscribe') {
      if (process.env.NODE_ENV === 'development') {
        ctx.status = 200
        ctx.body = challenge
      } else {
        callback(null, {
          statusCode: 200,
          body: challenge
        })
      }
    } else {
      if (process.env.NODE_ENV === 'development') {
        ctx.status = 403
      } else {
        callback(null, {
          statusCode: 403
        })
      }
    }
  }
}

export default webhookGet
