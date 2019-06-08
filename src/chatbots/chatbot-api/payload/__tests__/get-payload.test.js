import { getPayloadDefinition } from '../get-payload'

describe('getPayload', () => {
  const payloadList = [
    'GET_STARTED',
    'CHATBOTS'
  ]
  it('should get a payload from the list', () => {
    expect(getPayloadDefinition(payloadList)('GET_STARTED')).toEqual('GET_STARTED')
  })

  it('should return undefined if no matching payload in the list', () => {
    expect(getPayloadDefinition(payloadList)('NON_VALID_PAYLOAD')).toEqual(undefined)
  })
})
