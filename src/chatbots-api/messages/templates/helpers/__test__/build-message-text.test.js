import buildMessageText from '../build-message-text'

describe('buildMessageText', () => {
  it('should return text if no user is passed', () => {
    expect(buildMessageText({ text: 'Test text.' })).toEqual('Test text.')
  })

  it('should return text with user info if user is passed', () => {
    expect(buildMessageText({ text: 'Hello :first_name.', user: { first_name: 'Velizar' } })).toEqual('Hello Velizar.')
  })
})
