import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  quickReplies
} from 'src/chatbots-api/messages/templates'

const chatbots = message({
  context: 'positive',
  messagePayload: 'CHATBOTS',
  messages: [
    seen,
    typingOn,
    textMessage({
      text: `OK then, here are some common chatbots questions I can answer?`
    }),
    typingOn,
    quickReplies({
      text: 'Choose one of the below options to learn more about chatbots',
      quickReplies: [
        {
          content_type: 'text',
          title: 'What is a chatbot?',
          payload: 'WHAT_IS_A_CHATBOT'
        },
        {
          content_type: 'text',
          title: 'Use cases',
          payload: 'USE_CASES'
        },
        {
          content_type: 'text',
          title: 'Why Verbotly',
          payload: 'WHY_VERBOTLY'
        }
      ]
    }),
    typingOff
  ]
})

export default chatbots
