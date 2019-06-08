"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("../payload/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const negative = getPayload => payloadList => webHookEvent => {
  const {
    postback: {
      payload
    },
    message: {
      text,
      quick_reply
    }
  } = webHookEvent;
  if ((0, _get.default)(payloadList, payload)) return null;
  if ((0, _get.default)(payloadList, quick_reply.payload)) return null;
  if (!text) return null;
  return webHookEvent;
};

var _default = negative(_get.default);

exports.default = _default;