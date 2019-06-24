const webHookPost = chatBot => ctx => {
  const { callback } = ctx
  const { request } = ctx
  const {
    body: {
      object,
      entry
    }
  } = request
  if (object === 'page') {
    entry.forEach(async entry => {
      const {
        messaging
      } = entry
      const webHookEvent = messaging[0]
      chatBot(webHookEvent)
    })
    callback(null, {
      statusCode: 200,
      body: 'EVENT_RECEIVED'
    })
  } else {
    callback(null, {
      statusCode: 404
    })
  }
}

export default webHookPost
