"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.send = void 0;

var _POST = _interopRequireDefault(require("./POST"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _assert = _interopRequireDefault(require("assert"));

var _forEach = require("../../../async-fp/forEach");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const send = (messagesArray = null || [{
  recipient: {
    id: ''
  },
  message: {}
}]) => {
  if (!messagesArray) return null;
  (0, _assert.default)((0, _isArray.default)(messagesArray), `
    Invalid argument for send in fb-graph-api.
    Please make sure you are passing an array of messages.
    `);
  (0, _forEach.forEach)(messagesArray, _POST.default);
};

exports.send = send;
var _default = send;
exports.default = _default;