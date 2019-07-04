import { message, handler } from 'src/chatbots-api/messages'
import * as templates from 'src/chatbots-api/messages/templates'

export const {
  seen,
  typingOn,
  typingOff,
  imageMessage,
  textMessage,
  optionsMessage,
  quickReplies
} = templates

export {
  message as flow,
  handler as dialog
}
