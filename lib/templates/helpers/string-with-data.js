"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buildStringFromTokens = void 0;

var _userProfile = _interopRequireDefault(require("../../fb-graph-api/user-profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildStringFromTokens = tokens => template => {
  const reducer = (template, token) => template.replace(`:${token}`, tokens[token]);

  return Object.keys(tokens).reduce(reducer, template);
};

exports.buildStringFromTokens = buildStringFromTokens;

const buildMessageText = async ({
  text,
  id,
  withUserData = false
}) => {
  if (!withUserData) return text;
  const user = await (0, _userProfile.default)(id);
  return buildStringFromTokens(user)(text);
};

var _default = buildMessageText;
exports.default = _default;