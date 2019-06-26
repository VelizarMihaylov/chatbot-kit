import { map } from 'src/async-fp'
import flatten from 'lodash/flatten'

export const messageHandlerDefinition = map => (replies, catchAll) => async webHookEvent => {
  // @TODO Decide how to manage delivery in the webHookEvent
  // Should it be enabled at all if yes should we manage it per message base etc.
  // For now I am just returning null to avoid unnecessary calls
  if (webHookEvent.delivery) return null
  const sendReply = await map(replies, reply => reply({
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

  if (!flatten(sendReply).includes('success')) {
    if (!webHookEvent.message) return
    catchAll({
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
    })
  }
}

const handler = messageHandlerDefinition(map)

export default handler
