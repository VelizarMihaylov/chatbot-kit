import fetch from 'isomorphic-fetch'
import request from 'request'
import isArray from 'lodash/isArray'

export const sendPOSTDefinition = (fetch = () => {}, url = '') => async (requestBody = {
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
    })
    console.log(`
    Message send to:
    recipient-id: ${requestBody.id} 
    message-body: ${requestBody.body}
    `)
    return 'success'
  } catch (error) {
    console.error(`Failed posting request ${requestBody}: ${error}`)
    return 'error'
  }
}

export const transformBody = body => Object.keys(body).map(property => {
  if (property === 'sender_action') {
    return `${property}=${body[property]}`
  }
  return `${property}=${encodeURIComponent(JSON.stringify(body[property]))}`
}).join('&')

export const batchPOSTDefinition = (fetch = () => { }, url = '', transformBody) => async (requestBody = {
  recipient: {
    id: ''
  },
  message: {}
}) => {
  if (!isArray(requestBody)) return

  const batchRequestBody = requestBody.map(body => {
    const req = {
      method: 'POST',
      'relative_url': `v3.3/me/messages`,
      body: transformBody(body)
    }
    console.log('TRANSFORM BODY', transformBody(body))
    return req
  })
  try {
    const req = await request.post('https://graph.facebook.com', (err, httpResponse, body) => {
      if (err) console.error('batch send error: ', err)
    })
    const form = await req.form()
    await form.append('access_token', `${process.env.PAGE_ACCESS_TOKEN}`)
    await form.append('batch', JSON.stringify(batchRequestBody))
    return 'success'
  } catch (error) {
    console.log(`Failed posting request ${requestBody}: ${error}`)
    return 'error'
  }
}

export const sendPOST = sendPOSTDefinition(fetch, `https://graph.facebook.com/v3.3/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`)

export const batchPOST = batchPOSTDefinition(fetch, `https://graph.facebook.com/v3.3/access_token=${process.env.PAGE_ACCESS_TOKEN}`, transformBody)
