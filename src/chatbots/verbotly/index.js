import {
  welcome,
  main,
  chatbots,
  whatIsChatbot,
  catchAll
} from 'src/chatbots/verbotly/messages'
import { handler } from 'src/chatbots-api/messages'

export default handler([
  welcome,
  main,
  chatbots,
  whatIsChatbot
], catchAll)
