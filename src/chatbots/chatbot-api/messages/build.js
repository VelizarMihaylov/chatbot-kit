import getUserInfo from '../../../fb-graph-api/user-profile'

const buildMessages = ({
  withUserData = false,
  messages = [(id = '') => ({})]
}) => async (webHookEvent) => {
  if (!webHookEvent) return null

  const {
    sender: {
      id
    }
  } = webHookEvent
  let user
  if (withUserData) {
    user = await getUserInfo(id)
  }
  console.log('USER INFO IN BUILD', user)
  return Promise.all(messages.map(message => message(id, user)))
}

export default buildMessages
