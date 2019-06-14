import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  quickReplies
} from 'src/chatbots-api/messages/templates'

const whatIsChatbot = message({
  context: 'positive',
  messagePayload: 'WHAT_IS_A_CHATBOT',
  withUserData: true,
  messages: [
    seen,
    typingOn,
    textMessage({
      text: 'So, what is a chatbot then? In a nutshell chatbots are a new user interface.\n' +
            'This new user interface lets users interact with services and brands using their favorite messaging apps.\n' +
            'In many cases, bots are digital users within a popular messaging product, such as Facebook Messenger , yup that\'s me  ✋.\n'
    }),
    textMessage({
      text: ' Unlike most users though, I am powered by software rather than by a human, and I bring a product, a service, or a brand into a given messaging product via conversation.'
    }),
    quickReplies({
      text: 'Was that information useful to you :first_name',
      quickReplies: [
        {
          content_type: 'text',
          title: 'Yes',
          payload: 'USEFUL_CHATBOT_INFO'
        },
        {
          content_type: 'text',
          title: 'No',
          payload: 'NOT_USEFUL_CHATBOT_INFO'
        }
      ]
    }),
    typingOff
  ]
})

export default whatIsChatbot
