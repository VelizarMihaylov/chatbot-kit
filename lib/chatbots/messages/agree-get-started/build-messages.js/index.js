"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../../../../templates");

var _types = require("../../../../types");

var _userProfile = _interopRequireDefault(require("../../../../fb-graph-api/user-profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMessages = async (userInfo = null || _types.userInfoType) => {
  if (!userInfo) return null;
  const {
    sender: {
      id
    }
  } = userInfo;
  const user = await (0, _userProfile.default)(id);
  const first_name = user.first_name || '';
  const messageArray = [(0, _templates.seen)(id), (0, _templates.typingOn)(id), (0, _templates.textMessage)({
    id,
    text: `Great ${first_name} 🙌`
  }), (0, _templates.typingOn)(id), (0, _templates.textMessage)({
    id,
    text: 'I can help you learn more about what chatbots are and how they help your business.\n' + 'In case you are not that interested in the theory behind chatbots I can show you a demo.\n' + 'Or maybe you would like to speak with a real person from our team to get the ball rolling.'
  }), (0, _templates.typingOn)(id), (0, _templates.optionsMessage)({
    id,
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
      title: 'Person 👨',
      payload: 'PERSON'
    }]
  }), (0, _templates.typingOff)(id)];
  return messageArray;
};

var _default = buildMessages;
exports.default = _default;