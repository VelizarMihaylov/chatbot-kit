import POST from './POST'
import isArray from 'lodash/isArray'
import assert from 'assert'
import { asyncMap } from 'src/async-fp'

export const send = async (messagesArray = null || [
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
  const result = await asyncMap(messagesArray, POST)
  return result
}

export default send
