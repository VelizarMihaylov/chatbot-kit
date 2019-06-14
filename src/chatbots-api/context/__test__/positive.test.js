import positive from '../positive'

describe('positive context', () => {
  it('should return null if webHookEvent payload does not match message payload', () => {
    const webHookEvent = {
      postback: {
        payload: 'GET_STARTED'
      }
    }
    expect(positive('NON_VALID')(webHookEvent)).toEqual(null)
  })

  it('should return the webHookEvent if webHook payload matches message payload', () => {
    const webHookEvent = {
      postback: {
        payload: 'GET_STARTED'
      }
    }
    expect(positive('GET_STARTED')(webHookEvent)).toEqual(webHookEvent)
  })
})
