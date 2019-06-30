import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import messengerProfileApiMiddleware from './middleware/messenger-profile-api'
import verbotly from 'src/chatbots'
import webhookGet from './middleware/webhook-get'
import webhookPost from './middleware/webhook-post'

const router = new Router()
const app = new Koa()

const webhookUrl = process.env.WEBHOOK_URL
const profileApiUrl = process.env.PROFILE_API_URL

app
  .use(router.routes())
  .use(router.allowedMethods())

router.use(bodyParser())

router.post('/webhook', webhookPost(verbotly))

router.get('/webhook', webhookGet)

router.get('/update-messenger-profile', messengerProfileApiMiddleware)

export {
  verbotly,
  webhookPost
}

export default app
