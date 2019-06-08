import messageHandler from './message-handler'
import welcomeMessage from './messages/welcome-message'
import cantUnderstandMessage from './messages/cant-understand-message'
import agreeGetStarted from './messages/agree-get-started'
import chatbots from './messages/chatbots'

const verbotly = messageHandler(
  welcomeMessage,
  agreeGetStarted,
  cantUnderstandMessage,
  chatbots
)

export default verbotly
