"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.get = void 0;

const get = (payload = [], get = '') => payload.find(element => element === get);

exports.get = get;
var _default = get;
exports.default = _default;