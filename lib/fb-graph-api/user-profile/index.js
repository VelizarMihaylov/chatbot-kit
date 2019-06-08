"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getUserInfoDefinition = void 0;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUserInfoDefinition = (fetch = async () => ({
  first_name: '',
  last_name: '',
  profile_pic: ''
})) => async (id = '') => {
  try {
    const response = await fetch(`https://graph.facebook.com/${id}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return {
      first_name: '',
      last_name: '',
      profile_pic: ''
    };
  }
};

exports.getUserInfoDefinition = getUserInfoDefinition;
const getUserInfo = getUserInfoDefinition(_isomorphicFetch.default);
var _default = getUserInfo;
exports.default = _default;