const webhookGet = ctx => {
  const {
    request: {
      query
    }
  } = ctx
  console.log('REQUEST', query)
  const mode = query['hub.mode']
  const verifyToken = query['hub.verify_token'] === process.env.VERIFY_TOKEN
  const challenge = query['hub.challenge']

  if (mode && verifyToken) {
    if (mode === 'subscribe') {
      console.log('WEBHOOK_VERIFIED')
      ctx.status = 200
      ctx.body = challenge
    } else {
      ctx.status = 403
    }
  }
}

export default webhookGet
