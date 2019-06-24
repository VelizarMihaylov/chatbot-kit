import assert from 'assert'
import isString from 'lodash/isString'
import buildMessageText from './helpers/build-message-text'
import { map } from 'src/async-fp'

export const seen = (name, dependsOn) => (id) => {
  const obj = {
    name,
    dependsOn,
    recipient: {
      id: id
    },
    sender_action: 'mark_seen'
  }
  return obj
}

export const typingOn = (name, dependsOn) => (id) => ({
  name,
  dependsOn,
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
  isReusable = false
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
    name,
    dependsOn,
    text
  }
) => async (id, user) => {
  return {
    name,
    dependsOn,
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
  name,
  dependsOn,
  text = '',
  quickReplies = [
    {
      content_type: '',
      title: '',
      payload: '',
      image_url: undefined || ''
    }
  ]
}) => (id, user) => {
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
    name,
    dependsOn,
    recipient: {
      id
    },
    message: {
      text: buildMessageText({ text, user }),
      quick_replies: quickReplies
    }
  }
}

export const delay = timeOut => (id) => new Promise(resolve => setTimeout(() => resolve(null), timeOut))

export const batch = (...messages) => async (id, user) => map(messages, message => message(id, user))

export const batchWithActions = (...messages) => async (id, user) => {
  // const template = [
  //   seen,
  //   typingOn,
  //   ...messages,
  //   typingOff
  // ]
  return map(messages, message => message(id, user))
}
