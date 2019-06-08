import assert from 'assert'
import isString from 'lodash/isString'
import buildMessageText from './helpers/build-message-text'

export const seen = (id) => ({
  recipient: {
    id: id
  },
  sender_action: 'mark_seen'
})

export const typingOn = (id) => ({
  recipient: {
    id: id
  },
  sender_action: 'typing_on'
})

export const typingOff = (id) => ({
  recipient: {
    id: id
  },
  sender_action: 'typing_off'
})

export const imageMessage = ({
  url = '',
  isReusable = true
}) => (id) => ({
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
})

export const textMessage = (
  {
    text
  }
) => async (id, user) => {
  return {
    recipient: {
      id
    },
    message: {
      text: await buildMessageText({ text, user })
    }
  }
}

export const optionsMessage = ({
  text = '',
  buttons = [
    {
      type: '',
      title: '',
      payload: ''
    }
  ]
}) => (id, user) => ({
  recipient: {
    id: id
  },
  message: {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: buildMessageText({ text, user }),
        buttons: buttons
      }
    }
  }
})

export const quickReplies = ({
  id = '',
  text = '',
  quickReplies = [
    {
      content_type: '',
      title: '',
      payload: '',
      image_url: undefined || ''
    }
  ]
}) => {
  assert(text || isString(text),
    `
    No text field provided to quick replies.
    Please make sure you provide a title string.
    `
  )
  quickReplies.forEach(reply => assert(
    reply.content_type === 'text' ||
    reply.content_type === 'location' ||
    reply.content_type === 'user_phone_number' ||
    reply.content_type === 'user_email',
    `
    Invalid content type provided to quick reply.
    Please make sure that the content type you are passing is one of the following:
    'text' | 'location' | user_phone_number | user_email
    `
  ))

  return {
    recipient: {
      id
    },
    message: {
      text,
      quick_replies: quickReplies
    }
  }
}
