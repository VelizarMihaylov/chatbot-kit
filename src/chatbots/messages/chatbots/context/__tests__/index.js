import getContext from '../index'


describe('getContext', () => {
  it('should return null if payload is not match "Get Started"', () => {
    const userInfo = {
      postback: {
        payload: 'Test null case'
      }
    }
    expect(getContext(userInfo)).toEqual(null)
  })

  it('should return userInfo object if payload match "Get Started"', () => {
    const userInfo = {
      sender: {
        id: '2443315192379616'
      },
      postback: {
        payload: 'Get Started'
      },
      first_name: 'John'
    }

    expect(getContext(userInfo)).toEqual(userInfo)
  })
})
