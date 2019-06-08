"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getPayload = void 0;

const getPayload = (payload = [], get = '') => payload.find(element => element === get);

exports.getPayload = getPayload;
var _default = getPayload;
exports.default = _default;