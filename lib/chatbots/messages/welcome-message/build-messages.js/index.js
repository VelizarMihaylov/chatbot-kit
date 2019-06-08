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
  const messageArray = [(0, _templates.seen)(id), (0, _templates.typingOn)(id), (0, _templates.imageMessage)({
    id,
    url: 'https://www.alizila.com/wp-content/uploads/2018/08/shutterstock_677646532-992x558.jpg'
  }), (0, _templates.textMessage)({
    id,
    text: `Hi ${first_name}, nice to meet you! My name is Verbotly and I am a friendly Messenger chatbot.`
  }), (0, _templates.typingOn)(id), (0, _templates.textMessage)({
    id,
    text: `I am here to let you know what services we provide at Verbotly and how we can help your business.`
  }), (0, _templates.typingOn)(id), (0, _templates.textMessage)({
    id,
    text: `Please use the prompts, or if you get stuck, click the menu icon at the side to navigate trough the available options. Choose "Speak with a human" if you'd like to chat with a real person.`
  }), (0, _templates.typingOn)(id), (0, _templates.optionsMessage)({
    id,
    text: `Does that sound good to you ${first_name}?`,
    buttons: [{
      type: 'postback',
      title: 'Sure lets do this 👍',
      payload: 'AGREE_GET_STARTED'
    }]
  }), (0, _templates.typingOff)(id)];
  return messageArray;
};

var _default = buildMessages;
exports.default = _default;