import POST from './POST'
import isArray from 'lodash/isArray'
import assert from 'assert'
import { forEach } from '../../../async-fp/forEach'

export const send = (messagesArray = null || [
  {
    recipient: {
      id: ''
    },
    message: {}
  }
]) => {
  if (!messagesArray) return null
  assert(isArray(messagesArray),
    `
    Invalid argument for send in fb-graph-api.
    Please make sure you are passing an array of messages.
    `
  )
  forEach(messagesArray, POST)
}

export default send
