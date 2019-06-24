import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage
} from 'src/chatbots-api/messages/templates'

const catchAll = message({
  context: 'catchAll',
  withUserData: true,
  messages: [
    seen,
    typingOn,
    textMessage({
      text: `Sorry :first_name, I did not catch that but I am writing this from AWS Lambda.`
    }),
    typingOff
  ]
})

export default catchAll
