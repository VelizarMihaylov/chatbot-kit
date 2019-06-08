"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _forEach = require("../../async-fp/forEach");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const messageHandler = (...messages) => webHookEvent => {
  (0, _forEach.forEach)(messages, message => message({
    sender: _objectSpread({}, webHookEvent.sender),
    postback: _objectSpread({
      payload: null
    }, webHookEvent.postback),
    message: _objectSpread({
      text: null,
      quick_reply: {
        payload: null
      }
    }, webHookEvent.message)
  }));
};

var _default = messageHandler;
exports.default = _default;