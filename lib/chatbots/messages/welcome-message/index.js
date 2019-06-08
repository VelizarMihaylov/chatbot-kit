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
  messages: [_templates.seen, _templates.typingOn, (0, _templates.imageMessage)({
    url: 'https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg'
  }), (0, _templates.textMessage)({
    text: `Hi :first_name, nice to meet you! My name is Verbotly and I am a friendly Messenger chatbot.`,
    withUserData: true
  }), _templates.typingOn, (0, _templates.textMessage)({
    text: `I am here to let you know what services we provide at Verbotly and how we can help your business.`
  }), _templates.typingOn, (0, _templates.textMessage)({
    text: `Please use the prompts, or if you get stuck, click the menu icon at the side to navigate trough the available options. Choose "Speak with a human" if you'd like to chat with a real person.`
  }), _templates.typingOn, (0, _templates.optionsMessage)({
    text: `Does that sound good to you :first_name?`,
    buttons: [{
      type: 'postback',
      title: 'Sure lets do this 👍',
      payload: 'AGREE_GET_STARTED'
    }],
    withUserData: true
  }), _templates.typingOff]
}), _send.default)(webHookEvent);

exports.default = _default;