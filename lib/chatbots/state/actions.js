"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.welcomeMessageReceivedAction = exports.WELCOME_MESSAGE_RECEIVED_ACTION = void 0;
const WELCOME_MESSAGE_RECEIVED_ACTION = 'WELCOME_MESSAGE_RECEIVED_ACTION';
exports.WELCOME_MESSAGE_RECEIVED_ACTION = WELCOME_MESSAGE_RECEIVED_ACTION;

const welcomeMessageReceivedAction = received => ({
  type: WELCOME_MESSAGE_RECEIVED_ACTION,
  payload: received
});

exports.welcomeMessageReceivedAction = welcomeMessageReceivedAction;