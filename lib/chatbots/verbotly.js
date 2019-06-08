"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _messageHandler = _interopRequireDefault(require("./message-handler"));

var _welcomeMessage = _interopRequireDefault(require("./messages/welcome-message"));

var _cantUnderstandMessage = _interopRequireDefault(require("./messages/cant-understand-message"));

var _agreeGetStarted = _interopRequireDefault(require("./messages/agree-get-started"));

var _chatbots = _interopRequireDefault(require("./messages/chatbots"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const verbotly = (0, _messageHandler.default)(_welcomeMessage.default, _agreeGetStarted.default, _cantUnderstandMessage.default, _chatbots.default);
var _default = verbotly;
exports.default = _default;