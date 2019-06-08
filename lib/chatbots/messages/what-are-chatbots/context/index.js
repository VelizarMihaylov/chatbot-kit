"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getContext = async (userInfo = {
  sender: {
    id: ''
  }
}) => {
  const {
    postback: {
      payload
    }
  } = userInfo;
  if (payload !== 'CHATBOTS') return null;
  return userInfo;
};

var _default = getContext;
exports.default = _default;