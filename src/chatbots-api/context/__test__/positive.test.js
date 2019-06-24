import positive from '../positive'

describe('positive context', () => {
  it('should return null if webHookEvent postback payload does not match message payload', () => {
    const webHookEvent = {
      postback: {
        payload: 'GET_STARTED'
      },
      message: {
        text: null,
        quick_reply: null
      }
    }
    expect(positive('NON_VALID')(webHookEvent)).toEqual(null)
  })

  it('should return the webHookEvent if webHook postback payload matches message payload', () => {
    const webHookEvent = {
      postback: {
        payload: 'GET_STARTED'
      },
      message: {
        text: null,
        quick_reply: null
      }
    }
    expect(positive('GET_STARTED')(webHookEvent)).toEqual(webHookEvent)
  })

  it('should return null if webHookEvent quick reply payload does not match message payload', () => {
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: null,
        quick_reply: {
          payload: 'CHAT'
        }
      }
    }
    expect(positive('NON_VALID')(webHookEvent)).toEqual(null)
  })

  it('should return the webHookEvent if webHookEvent quick reply payload does match message payload', () => {
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: null,
        quick_reply: {
          payload: 'CHAT'
        }
      }
    }
    expect(positive('CHAT')(webHookEvent)).toEqual(webHookEvent)
  })

  it('should return null if handleText function return false and no webHookPayload matches the message payload', () => {
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: 'Test',
        quick_reply: {
          payload: 'CHAT'
        }
      }
    }
    const handleText = text => text === 'Fail test'

    expect(positive('CHIT', handleText)(webHookEvent)).toEqual(null)
  })

  it('should return the webHookEvent if handleText function return false and a webHookEvent payload matches the message payload', () => {
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: 'Test',
        quick_reply: {
          payload: 'CHAT'
        }
      }
    }
    const handleText = text => text === 'Fail test'

    expect(positive('CHAT', handleText)(webHookEvent)).toEqual(webHookEvent)
  })

  it('should return the webHookEvent if handleText function return true and a webHookEvent payload does not match the message payload', () => {
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: 'Test',
        quick_reply: {
          payload: 'CHAT'
        }
      }
    }
    const handleText = text => text === 'Test'

    expect(positive('CHIT', handleText)(webHookEvent)).toEqual(webHookEvent)
  })
})
