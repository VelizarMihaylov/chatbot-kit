import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  optionsMessage
} from 'src/chatbots-api/messages/templates'

const main = message({
  context: 'positive',
  messagePayload: 'AGREE_GET_STARTED',
  withUserData: true,
  messages: [
    seen,
    typingOn,
    textMessage({
      text: `Great :first_name 🙌`
    }),
    typingOn,
    textMessage({
      text: 'I can help you learn more about what chatbots are and how they help your business.\n' +
        'In case you are not that interested in the theory behind chatbots I can show you a demo.\n' +
        'Or maybe you would like to speak with a real person from our team to get the ball rolling.'
    }),
    typingOn,
    optionsMessage({
      text: 'Choose one of the options below to let me know what you are interested in.',
      buttons: [
        {
          type: 'postback',
          title: 'Chatbots ℹ️',
          payload: 'CHATBOTS'
        },
        {
          type: 'postback',
          title: 'Demo 🤖',
          payload: 'DEMO'
        },
        {
          type: 'postback',
          title: 'Person 👨👩',
          payload: 'PERSON'
        }
      ]
    }),
    typingOff
  ]
})

export default main
