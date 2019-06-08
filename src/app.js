import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import messengerProfileApiMiddleware from './middleware/messenger-profile-api'
import verbotly from './chatbots/verbotly'
import webhookGet from './middleware/webhook-get'
import webhookPost from './middleware/webhook-post'

const router = new Router()
const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

router.use(bodyParser())

router.post('/webhook', webhookPost(verbotly))

router.get('/webhook', webhookGet)

router.get('/update-messenger-profile', messengerProfileApiMiddleware)

app.listen(3000)

console.log('bot is listening')
