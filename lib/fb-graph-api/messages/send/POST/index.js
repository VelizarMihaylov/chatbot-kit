"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sendPOST = void 0;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sendPOST = (fetch = () => {}, url = '') => async (requestBody = {
  recipient: {
    id: ''
  },
  message: {}
}) => {
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
  } catch (error) {
    throw new Error(`Failed posting request ${requestBody}: ${error}`);
  }
};

exports.sendPOST = sendPOST;

var _default = sendPOST(_isomorphicFetch.default, `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`);

exports.default = _default;