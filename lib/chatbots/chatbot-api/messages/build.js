"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userProfile = _interopRequireDefault(require("../../../fb-graph-api/user-profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMessages = ({
  withUserData = false,
  messages = [(id = '') => ({})]
}) => async webHookEvent => {
  if (!webHookEvent) return null;
  const {
    sender: {
      id
    }
  } = webHookEvent;
  let user;

  if (withUserData) {
    user = await (0, _userProfile.default)(id);
  }

  console.log('USER INFO IN BUILD', user);
  return Promise.all(messages.map(message => message(id, user)));
};

var _default = buildMessages;
exports.default = _default;