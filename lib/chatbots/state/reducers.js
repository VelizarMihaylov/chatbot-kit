"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.welcomeMessage = void 0;

var _actions = require("./actions");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const welcomeMessage = (state = {
  received: false,
  answered: false
}, action) => {
  switch (action.type) {
    case _actions.WELCOME_MESSAGE_RECEIVED_ACTION:
      return _objectSpread({}, state, {
        received: action.payload
      });

    default:
      return state;
  }
};

exports.welcomeMessage = welcomeMessage;