const webHookPost = chatBot => ctx => {
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
    ctx.status = 200
    ctx.body = 'EVENT_RECEIVED'
  } else {
    ctx.status = 404
  }
}

export default webHookPost
