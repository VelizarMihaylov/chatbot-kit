import { forEach } from '../../async-fp/forEach'

const messageHandler = (...messages) => webHookEvent => {
  forEach(messages, message => message({
    sender: {
      ...webHookEvent.sender
    },
    postback: {
      payload: null,
      ...webHookEvent.postback
    },
    message: {
      text: null,
      quick_reply: {
        payload: null
      },
      ...webHookEvent.message
    }
  }))
}

export default messageHandler
