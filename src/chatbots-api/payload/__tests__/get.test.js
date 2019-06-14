import get from '../get'

describe('getPayload', () => {
  const payloadList = [
    'GET_STARTED',
    'CHATBOTS'
  ]
  it('should get a payload from the list', () => {
    expect(get(payloadList, 'GET_STARTED')).toEqual('GET_STARTED')
  })

  it('should return undefined if no matching payload in the list', () => {
    expect(get(payloadList, 'NON_VALID_PAYLOAD')).toEqual(undefined)
  })
})
