const app = require('./lib/app')

const chatbotPort = process.env.CHATBOT_PORT || 3000

app.listen(chatbotPort)

console.log(`bot is listening on PORT ${chatbotPort}`)
