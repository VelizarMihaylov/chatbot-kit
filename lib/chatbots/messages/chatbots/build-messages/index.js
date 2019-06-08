"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../../../../templates");

var _types = require("../../../../types");

const buildMessages = async (userInfo = null || _types.userInfoType) => {
  if (!userInfo) return null;
  const {
    sender: {
      id
    }
  } = userInfo;
  const messageArray = [(0, _templates.seen)(id), (0, _templates.typingOn)(id), (0, _templates.textMessage)({
    id,
    text: `OK then, here are some common chatbots questions I can answer?`
  }), (0, _templates.quickReplies)({
    id,
    text: 'Choose one of the below options to learn more about chatbots',
    quickReplies: [{
      content_type: 'text',
      title: 'What is a chatbot?',
      payload: 'WHAT_IS_A_CHAT_BOT'
    }, {
      content_type: 'text',
      title: 'Use cases',
      payload: 'USE_CASES'
    }, {
      content_type: 'text',
      title: 'Why Verbotly',
      payload: 'WHY_VERBOTLY'
    }]
  }), (0, _templates.typingOff)(id)];
  return messageArray;
};

var _default = buildMessages;
exports.default = _default;