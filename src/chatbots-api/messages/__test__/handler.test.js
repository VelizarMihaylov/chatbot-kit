import { messageHandlerDefinition } from '../handler'


describe('handler', () => {
  it('should call forEach with messages and webHookEvent', () => {
    const forEach = jest.fn()
    const handler = messageHandlerDefinition(forEach)
    const webHookEvent = {
      sender: {
        id: '12434321'
      },
      postback: {
        payload: 'GET_STARTED'
      },
      message: {
        text: 'Hello world',
        quick_reply: {
          payload: 'QUICK_REPLY_PAYLOAD'
        }
      }
    }
    const messages = [
      () => 'First message',
      () => 'Second message',
      () => 'Second message'
    ]

    handler(messages)(webHookEvent)
    expect(forEach).toHaveBeenCalledTimes(1)
  })
})
