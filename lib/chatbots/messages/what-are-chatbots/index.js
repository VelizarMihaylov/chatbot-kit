"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _send = _interopRequireDefault(require("../../../fb-graph-api/messages/send"));

var _pipe = require("../../../async-fp/pipe");

var _context = _interopRequireDefault(require("./context"));

var _buildMessages = _interopRequireDefault(require("./build-messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = webHookEvent => (0, _pipe.singleArgumentPipe)(_context.default, _buildMessages.default, _send.default)(webHookEvent);

exports.default = _default;