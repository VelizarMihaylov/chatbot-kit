import getPayload from '../../../chatbot-api/payload/get'
import { payloadList } from '../../../config'

const getContext = (userInfo = {
  sender: {
    id: ''
  },
  postback: {
    payload: undefined || ''
  },
  message: undefined || {},
  first_name: ''
}) => {
  const {
    postback: {
      payload
    }
  } = userInfo

  if (!getPayload(payloadList, payload)) return null

  return userInfo
}

export default getContext
