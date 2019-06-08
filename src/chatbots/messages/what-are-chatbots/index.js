import send from '../../../fb-graph-api/messages/send'
import { singleArgumentPipe } from '../../../async-fp/pipe'
import getContext from './context'
import buildMessages from './build-messages'

export default webHookEvent => singleArgumentPipe(
  getContext,
  buildMessages,
  send
)(webHookEvent)
