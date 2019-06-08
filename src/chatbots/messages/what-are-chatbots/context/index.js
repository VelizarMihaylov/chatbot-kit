const getContext = async (userInfo = {
  sender: {
    id: ''
  }
}) => {
  const {
    postback: {
      payload
    }
  } = userInfo
  if (payload !== 'CHATBOTS') return null
  return userInfo
}

export default getContext
