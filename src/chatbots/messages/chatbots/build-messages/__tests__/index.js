import buildMessages from '../index'


describe('buildMessages', () => {
  it('should return null if no user info', () => {
    expect(buildMessages(null)).toEqual(null)
  })

  it('should return a messages array when called with ', () => {
    const userInfo = {
      sender: {
        id: '2443315192379616'
      },
      postback: {
        payload: 'Get Started'
      },
      first_name: 'John'
    }
    expect(buildMessages(userInfo)).toMatchSnapshot()
  })
})
