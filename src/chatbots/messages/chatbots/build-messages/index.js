import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  quickReplies
} from '../../../../templates'
import { userInfoType } from '../../../../types'

const buildMessages = async (userInfo = null || userInfoType) => {
  if (!userInfo) return null

  const {
    sender: {
      id
    }
  } = userInfo

  const messageArray = [
    seen(id),
    typingOn(id),
    textMessage({
      id,
      text: `OK then, here are some common chatbots questions I can answer?`
    }),
    quickReplies({
      id,
      text: 'Choose one of the below options to learn more about chatbots',
      quickReplies: [
        {
          content_type: 'text',
          title: 'What is a chatbot?',
          payload: 'WHAT_IS_A_CHAT_BOT'
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
    typingOff(id)
  ]
  return messageArray
}

export default buildMessages
