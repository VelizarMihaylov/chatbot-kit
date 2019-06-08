import get from '../payload/get'

const positive = getPayload => payloadList => webHookEvent => {
  const {
    postback: {
      payload
    }
  } = webHookEvent

  if (!getPayload(payloadList, payload)) return null

  return webHookEvent
}

export default positive(get)
