import fetch from 'isomorphic-fetch'

export const sendPOST = (fetch = () => {}, url = '') => async (requestBody = {
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
  } catch (error) {
    throw new Error(`Failed posting request ${requestBody}: ${error}`)
  }
}

export default sendPOST(fetch, `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`)
