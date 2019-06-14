import { send } from 'src/fb-graph-api/messages'
import { singleArgumentPipe } from 'src/async-fp'
import { build } from 'src/chatbots-api/messages'
import { positive } from 'src/chatbots-api/context'

const message = ({
  handleText,
  context,
  payloadList,
  messagePayload,
  withUserData,
  messages
}) => webHookEvent => {
  const catchAllContext = context === 'catchAll' && 'catchAll'

  return singleArgumentPipe(
    positive(messagePayload || catchAllContext, handleText),
    build({ withUserData, messages }),
    send
  )(webHookEvent)
}

export default message
