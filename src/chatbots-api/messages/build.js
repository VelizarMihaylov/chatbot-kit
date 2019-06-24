import getUserInfo from '../../fb-graph-api/user-profile'
import { map } from 'src/async-fp'

export const buildDefinition = getUserInfo => ({
  withUserData = false,
  messages = [(id = '') => ({})]
}) => async (webHookEvent, setSenderId) => {
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

  return map(messages, message => message(id, user))
}

const build = buildDefinition(getUserInfo)

export default build
