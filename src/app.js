import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import messengerProfileApiMiddleware from './middleware/messenger-profile-api'
import verbotly from 'src/chatbots'
import webhookGet from './middleware/webhook-get'
import webhookPost from './middleware/webhook-post'
import { getConfig } from 'src/config'

const router = new Router()
const app = new Koa()
const {
  webhookEndpoint,
  messengerProfileEndpoint
} = getConfig()

app
  .use(router.routes())
  .use(router.allowedMethods())

router.use(bodyParser())

router.post(webhookEndpoint, webhookPost(verbotly))

router.get(webhookEndpoint, webhookGet)

router.get(messengerProfileEndpoint, messengerProfileApiMiddleware)

export {
  verbotly,
  webhookPost
}

export default app
