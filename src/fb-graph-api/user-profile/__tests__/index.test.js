import { getUserInfoDefinition } from '../index'

describe('getUserInfo', () => {
  it('should return user info object', async () => {
    const webHookEvent = {
      sender: {
        id: '2443315192379616'
      },
      postback: {
        payload: 'Get Started'
      }
    }
    const fetch = () => new Promise((resolve) => {
      setTimeout(() =>
        resolve({
          json: () => ({
            first_name: 'Velizar',
            second_name: 'Mihaylov',
            image: 'http/velizar/profile'
          })
        }), 500)
    })
    const result = await getUserInfoDefinition(fetch)(webHookEvent)
    expect(result).toEqual({
      sender: {
        id: '2443315192379616'
      },
      postback: {
        payload: 'Get Started'
      },
      first_name: 'Velizar',
      second_name: 'Mihaylov',
      image: 'http/velizar/profile'
    })
  })
})
