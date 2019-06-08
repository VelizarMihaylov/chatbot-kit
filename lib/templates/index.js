"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickReplies = exports.optionsMessage = exports.textMessage = exports.imageMessage = exports.typingOff = exports.typingOn = exports.seen = void 0;

var _assert = _interopRequireDefault(require("assert"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _buildMessageText = _interopRequireDefault(require("./helpers/build-message-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const seen = id => ({
  recipient: {
    id: id
  },
  sender_action: 'mark_seen'
});

exports.seen = seen;

const typingOn = id => ({
  recipient: {
    id: id
  },
  sender_action: 'typing_on'
});

exports.typingOn = typingOn;

const typingOff = id => ({
  recipient: {
    id: id
  },
  sender_action: 'typing_off'
});

exports.typingOff = typingOff;

const imageMessage = ({
  url = '',
  isReusable = true
}) => id => ({
  recipient: {
    id: id
  },
  message: {
    'attachment': {
      'type': 'image',
      'payload': {
        url,
        is_reusable: isReusable
      }
    }
  }
});

exports.imageMessage = imageMessage;

const textMessage = ({
  text
}) => async (id, user) => {
  return {
    recipient: {
      id
    },
    message: {
      text: await (0, _buildMessageText.default)({
        text,
        user
      })
    }
  };
};

exports.textMessage = textMessage;

const optionsMessage = ({
  text = '',
  buttons = [{
    type: '',
    title: '',
    payload: ''
  }]
}) => (id, user) => ({
  recipient: {
    id: id
  },
  message: {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: (0, _buildMessageText.default)({
          text,
          user
        }),
        buttons: buttons
      }
    }
  }
});

exports.optionsMessage = optionsMessage;

const quickReplies = ({
  id = '',
  text = '',
  quickReplies = [{
    content_type: '',
    title: '',
    payload: '',
    image_url: undefined || ''
  }]
}) => {
  (0, _assert.default)(text || (0, _isString.default)(text), `
    No text field provided to quick replies.
    Please make sure you provide a title string.
    `);
  quickReplies.forEach(reply => (0, _assert.default)(reply.content_type === 'text' || reply.content_type === 'location' || reply.content_type === 'user_phone_number' || reply.content_type === 'user_email', `
    Invalid content type provided to quick reply.
    Please make sure that the content type you are passing is one of the following:
    'text' | 'location' | user_phone_number | user_email
    `));
  return {
    recipient: {
      id
    },
    message: {
      text,
      quick_replies: quickReplies
    }
  };
};

exports.quickReplies = quickReplies;