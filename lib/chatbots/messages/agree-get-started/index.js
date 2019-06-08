"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _send = _interopRequireDefault(require("../../../fb-graph-api/messages/send"));

var _pipe = require("../../../async-fp/pipe");

var _build = _interopRequireDefault(require("../../chatbot-api/messages/build"));

var _templates = require("../../../templates");

var _positive = _interopRequireDefault(require("../../chatbot-api/context/positive"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = webHookEvent => (0, _pipe.singleArgumentPipe)((0, _positive.default)(_config.payloadList), (0, _build.default)({
  withUserData: true,
  messages: [_templates.seen, _templates.typingOn, (0, _templates.textMessage)({
    text: `Great :first_name 🙌`
  }), _templates.typingOn, (0, _templates.textMessage)({
    text: 'I can help you learn more about what chatbots are and how they help your business.\n' + 'In case you are not that interested in the theory behind chatbots I can show you a demo.\n' + 'Or maybe you would like to speak with a real person from our team to get the ball rolling.'
  }), _templates.typingOn, (0, _templates.optionsMessage)({
    text: 'Choose one of the options below to let me know what you are interested in.',
    buttons: [{
      type: 'postback',
      title: 'Chatbots ℹ️',
      payload: 'CHATBOTS'
    }, {
      type: 'postback',
      title: 'Demo 🤖',
      payload: 'DEMO'
    }, {
      type: 'postback',
      title: 'Person 👨👩',
      payload: 'PERSON'
    }]
  }), _templates.typingOff]
}), _send.default)(webHookEvent);

exports.default = _default;