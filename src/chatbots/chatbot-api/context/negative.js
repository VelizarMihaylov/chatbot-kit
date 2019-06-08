import get from '../payload/get'

const negative = getPayload => payloadList => webHookEvent => {
  const {
    postback: {
      payload
    },
    message: {
      text,
      quick_reply
    }
  } = webHookEvent

  if (get(payloadList, payload)) return null

  if (get(payloadList, quick_reply.payload)) return null

  if (!text) return null

  return webHookEvent
}

export default negative(get)
