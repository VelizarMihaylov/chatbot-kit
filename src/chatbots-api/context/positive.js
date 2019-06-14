import isFunction from 'lodash/isFunction'
import isBoolean from 'lodash/isBoolean'
import assert from 'assert'

const positive = (messagePayload, handleText = (text = '') => false) => webHookEvent => {
  const {
    postback: {
      payload
    },
    message: {
      text,
      quick_reply
    }
  } = webHookEvent
  assert(isFunction(handleText), `
  Invalid property "handleText" of type ${typeof handleText}.
  Message property handleText should be of type function.
  `)
  assert(isBoolean(handleText(text)), `
  Invalid return value for "handleText" of type ${typeof handleText(text)}
  "handleText" callback should return a boolean.
  `)

  if (messagePayload === 'catchAll') return webHookEvent

  const webHookEventPayload = payload || quick_reply.payload

  if (webHookEventPayload !== messagePayload && !handleText(text)) return null

  return webHookEvent
}

export default positive
