import nock from 'nock'
import send from '../../../src/fb-graph-api/messages/send'

describe('send', () => {
  beforeAll(() => {
    nock(`https://graph.facebook.com`)
      .post(`/v2.6/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`)
      .reply('200', {
        status: 'success'
      })
      .post(`/v2.6/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`)
      .reply('200', {
        status: 'success'
      })
  })

  it('should post messages to the Facebook Graph API', async done => {
    const dataArray = [
      {
        senderPersonalId: '2443315192379616',
        messageType: 'message',
        message: {
          text: 'Hello World'
        }
      },
      {
        senderPersonalId: '2443315192379616',
        messageType: 'senderAction',
        message: {
          text: 'mark_seen'
        }
      }
    ]
    send(dataArray)
    done()
  })

  afterEach(async () => {
    await nock.cleanAll()
  })
})
