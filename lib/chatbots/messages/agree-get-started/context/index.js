"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("../../../chatbot-api/payload/get"));

var _config = require("../../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }
  } = userInfo;
  if (!(0, _get.default)(_config.payloadList, payload)) return null;
  return userInfo;
};

var _default = getContext;
exports.default = _default;