"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("../payload/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const positive = getPayload => payloadList => webHookEvent => {
  const {
    postback: {
      payload
    }
  } = webHookEvent;
  if (!getPayload(payloadList, payload)) return null;
  return webHookEvent;
};

var _default = positive(_get.default);

exports.default = _default;