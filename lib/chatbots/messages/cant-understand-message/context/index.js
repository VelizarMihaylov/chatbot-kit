"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getContext = (userInfo = {
  sender: {
    id: ''
  },
  postback: {
    payload: undefined || ''
  },
  message: undefined || {},
  first_name: ''
}) => {
  const {
    postback: {
      payload
    },
    message: {
      text,
      quick_reply
    }
  } = userInfo; // switch (payload) {
  //   case 'Get Started':
  //     return null
  //   default:
  //     return userInfo
  // }

  if (payload === 'Get Started') return null;
  if (quick_reply.payload === 'WHAT_IS_A_CHAT_BOT') return null;
  if (!text) return null;
  return userInfo;
};

var _default = getContext;
exports.default = _default;