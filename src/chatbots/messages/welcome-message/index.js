import send from '../../../fb-graph-api/messages/send'
import { singleArgumentPipe } from '../../../async-fp/pipe'
import buildMessages from '../../chatbot-api/messages/build'
import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  optionsMessage,
  imageMessage
} from '../../../templates'
import positive from '../../chatbot-api/context/positive'
import { payloadList } from '../../config'

export default webHookEvent => singleArgumentPipe(
  positive(payloadList),
  buildMessages({
    withUserData: true,
    messages: [
      seen,
      typingOn,
      imageMessage({
        url: 'https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg'
      }),
      textMessage({
        text: `Hi :first_name, nice to meet you! My name is Verbotly and I am a friendly Messenger chatbot.`,
        withUserData: true
      }),
      typingOn,
      textMessage({
        text: `I am here to let you know what services we provide at Verbotly and how we can help your business.`
      }),
      typingOn,
      textMessage({
        text: `Please use the prompts, or if you get stuck, click the menu icon at the side to navigate trough the available options. Choose "Speak with a human" if you'd like to chat with a real person.`
      }),
      typingOn,
      optionsMessage({
        text: `Does that sound good to you :first_name?`,
        buttons: [
          {
            type: 'postback',
            title: 'Sure lets do this 👍',
            payload: 'AGREE_GET_STARTED'
          }
        ],
        withUserData: true
      }),
      typingOff
    ]
  }),
  send
)(webHookEvent)
