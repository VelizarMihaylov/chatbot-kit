import { sendPOST } from '../index'

describe('sendPOST', () => {
  const fetch = jest.fn()

  it('should have sendPOST defined', async () => {
    await expect(sendPOST).toBeDefined()
  })

  it('should call fetch with url and request body', async () => {
    const url = 'http://facebook.graph-api-mock-url'
    const requestBody = {
      recipient: {
        id: '2443315192379616888'
      },
      message: {
        text: 'Hello World'
      }
    }
    await sendPOST(fetch, url)(requestBody)
    expect(fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
  })
})
