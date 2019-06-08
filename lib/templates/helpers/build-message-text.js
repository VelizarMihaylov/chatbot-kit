"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buildStringFromTokens = void 0;

const buildStringFromTokens = tokens => template => {
  const reducer = (template, token) => template.replace(`:${token}`, tokens[token]);

  return Object.keys(tokens).reduce(reducer, template);
};

exports.buildStringFromTokens = buildStringFromTokens;

const buildMessageText = ({
  text,
  user
}) => {
  if (!user) return text;
  return buildStringFromTokens(user)(text);
};

var _default = buildMessageText;
exports.default = _default;