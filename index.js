const { webhookPost, verbotly } = require('./lib/app')

module.exports.handler = async (event, context, callback) => {
  const ctx = {
    request: {
      body: JSON.parse(event.body)
    },
    callback
  }
  const chatbot = webhookPost(verbotly)
  await chatbot(ctx)
}
