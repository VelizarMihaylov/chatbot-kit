"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _send = _interopRequireDefault(require("../../../fb-graph-api/messages/send"));

var _pipe = require("../../../async-fp/pipe");

var _buildMessages = _interopRequireDefault(require("./build-messages.js"));

var _negative = _interopRequireDefault(require("../../chatbot-api/context/negative"));

var _config = require("../../config");

var _build = _interopRequireDefault(require("../../chatbot-api/messages/build"));

var _templates = require("../../../templates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _default = webHookEvent => (0, _pipe.singleArgumentPipe)((0, _negative.default)(_config.payloadList), (0, _build.default)({
  withUserData: true,
  messages: [_templates.seen, _templates.typingOn, (0, _templates.textMessage)({
    text: `Sorry :first_name I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
  }), _templates.typingOff]
}), _send.default)(webHookEvent);

exports.default = _default;