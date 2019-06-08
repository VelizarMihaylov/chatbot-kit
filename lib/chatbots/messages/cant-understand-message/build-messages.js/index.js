"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../../../../templates");

var _types = require("../../../../types");

var _userProfile = _interopRequireDefault(require("../../../../fb-graph-api/user-profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMessages = async (userInfo = null || _types.userInfoType) => {
  if (!userInfo) return null;
  const {
    sender: {
      id
    }
  } = userInfo;
  const user = await (0, _userProfile.default)(id);
  const {
    first_name
  } = user;
  const messageArray = [(0, _templates.seen)(id), (0, _templates.typingOn)(id), (0, _templates.textMessage)({
    id,
    text: `Sorry ${first_name} I did not catch that. Please keep in mind that I am an a machine and I can only do what I am programmed to do.`
  }), (0, _templates.typingOff)(id)];
  return messageArray;
};

var _default = buildMessages;
exports.default = _default;