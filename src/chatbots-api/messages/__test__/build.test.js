import { buildDefinition } from '../build'

describe('build', () => {
  const getUserInfo = () => new Promise((resolve) => {
    setTimeout(() =>
      resolve({
        first_name: 'Velizar',
        last_name: 'Mihaylov',
        image: 'http/velizar/profile'
      }), 500)
  })
  const webHookEvent = {
    sender: {
      id: '2354312123'
    }
  }
  const build = buildDefinition(getUserInfo)

  it('should return null if no webHookEvent', async () => {
    expect(await build({ messages: [] })(null)).toEqual(null)
  })

  it('should call each message with id and no user data if not called "withUserData"', async () => {
    const messages = [
      (id, user) => `First message was called with id:${id} and user:${user}`,
      (id, user) => `Second message was called with id:${id} and user:${user}`
    ]
    expect(await build({ messages })(webHookEvent)).toEqual([
      'First message was called with id:2354312123 and user:undefined',
      'Second message was called with id:2354312123 and user:undefined'
    ])
  })

  it('should call each message with id and user data if called with "withUserData"', async () => {
    const messages = [
      (id, user) => `First message was called with id:${id} and user:${user.first_name}`,
      (id, user) => `Second message was called with id:${id} and user:${user.first_name}`
    ]
    expect(await build({ withUserData: true, messages })(webHookEvent)).toEqual([
      'First message was called with id:2354312123 and user:Velizar',
      'Second message was called with id:2354312123 and user:Velizar'
    ])
  })
})
