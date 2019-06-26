import { message } from 'src/chatbots-api/messages'
import {
  seen,
  typingOn,
  typingOff,
  textMessage,
  optionsMessage,
  imageMessage
} from 'src/chatbots-api/messages/templates'

const welcome = message({
  context: 'positive',
  messagePayload: 'GET_STARTED',
  withUserData: true,
  messages: [
    seen,
    typingOn,
    // imageMessage({
    //   url: 'https://functionaluistorage.s3.eu-west-2.amazonaws.com/images/random-patterns-with-bot.jpg',
    //   isReusable: false
    // }),
    // typingOn,
    textMessage({
      text: `Hi :first_name, dick nice to meet you! My name is Verbotly and I am a friendly Messenger chatbot.`
    }),
    typingOn,
    textMessage({
      text: 'I am here to let you know what services we provide at Verbotly and how we can help your business.'
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
      ]
    }),
    typingOff
  ]
})

export default welcome
