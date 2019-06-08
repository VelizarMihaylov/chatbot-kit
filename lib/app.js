"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _messengerProfileApi = _interopRequireDefault(require("./middleware/messenger-profile-api"));

var _verbotly = _interopRequireDefault(require("./chatbots/verbotly"));

var _webhookGet = _interopRequireDefault(require("./middleware/webhook-get"));

var _webhookPost = _interopRequireDefault(require("./middleware/webhook-post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter.default();
const app = new _koa.default();
app.use(router.routes()).use(router.allowedMethods());
router.use((0, _koaBodyparser.default)());
router.post('/webhook', (0, _webhookPost.default)(_verbotly.default));
router.get('/webhook', _webhookGet.default);
router.get('/update-messenger-profile', _messengerProfileApi.default);
app.listen(3000);
console.log('bot is listening');