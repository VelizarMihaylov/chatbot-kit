// import send from '../../../fb-graph-api/messages/send'
// import getUserInfo from '../../../fb-graph-api/user-profile'
// import {
//   seen,
//   typingOn,
//   typingOff,
//   textMessage
// } from '../../../templates'
// import { singleArgumentPipe } from '../../../async-fp/pipe'

// export const cantUnderstandMessage = async webHookEvent => {
//   const {
//     sender: {
//       id
//     }
//   } = webHookEvent

//   const user = await getUserInfo(id)
//   const firstName = user['first_name']

//   if (webHookEvent.postback && webHookEvent.postback.payload === 'Get Started') return null

//   const messageArray = [
//     seen(id),
//     typingOn(id),
//     textMessage({
//       id,
//       text: `Sorry ${firstName} I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
//     }),
//     typingOff()
//   ]

//   return messageArray
// }


// export default webHookEvent => singleArgumentPipe(
//   cantUnderstandMessage,
//   send
// )(webHookEvent)

import send from '../../../fb-graph-api/messages/send'
import { singleArgumentPipe } from '../../../async-fp/pipe'
import buildMessages from './build-messages.js'
import negative from '../../chatbot-api/context/negative'
import { payloadList } from '../../config'
import build from '../../chatbot-api/messages/build'
import {
  seen,
  typingOn,
  typingOff,
  textMessage
} from '../../../templates'

export default webHookEvent => singleArgumentPipe(
  negative(payloadList),
  build({
    withUserData: true,
    messages: [
      seen,
      typingOn,
      textMessage({
        text: `Sorry :first_name I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
      }),
      typingOff
    ]
  }),
  send
)(webHookEvent)
