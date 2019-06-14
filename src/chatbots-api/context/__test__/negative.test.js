import negative from '../negative'

describe('negative context', () => {
  it('should return null if webHookEvent postback payload matches an entry in the payload list', () => {
    const payloadList = [
      'GET_STARTED',
      'TALK'
    ]
    const webHookEvent = {
      postback: {
        payload: 'GET_STARTED'
      },
      message: {
        text: null,
        quick_reply: {
          payload: null
        }
      }
    }
    expect(negative(payloadList)(webHookEvent)).toEqual(null)
  })

  it('should return webHookEvent if webHookEvent postback payload does not matches an entry in the payload list and text', () => {
    const payloadList = [
      'GET_STARTED',
      'TALK'
    ]
    const webHookEvent = {
      postback: {
        payload: 'NON_VALID'
      },
      message: {
        text: 'Test random text',
        quick_reply: {
          payload: null
        }
      }
    }
    expect(negative(payloadList)(webHookEvent)).toEqual(webHookEvent)
  })

  it('should return null if webHookEvent quick reply payload matches an entry in the payload list', () => {
    const payloadList = [
      'GET_STARTED',
      'TALK'
    ]
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: 'Test random text',
        quick_reply: {
          payload: 'TALK'
        }
      }
    }
    expect(negative(payloadList)(webHookEvent)).toEqual(null)
  })

  it('should return webHookEvent if webHookEvent quick reply payload does not matches an entry in the payload list', () => {
    const payloadList = [
      'GET_STARTED',
      'TALK'
    ]
    const webHookEvent = {
      postback: {
        payload: null
      },
      message: {
        text: 'Random test text',
        quick_reply: {
          payload: 'NON_VALID'
        }
      }
    }
    expect(negative(payloadList)(webHookEvent)).toEqual(webHookEvent)
  })

  it('should return null if no matching payload and no text text is provided', () => {
    const payloadList = [
      'GET_STARTED',
      'TALK'
    ]
    const webHookEvent = {
      postback: {
        payload: 'NON_VALID'
      },
      message: {
        text: null,
        quick_reply: {
          payload: 'NON_VALID'
        }
      }
    }
    expect(negative(payloadList)(webHookEvent)).toEqual(null)
  })
})
