import buildMessages from '../build'

describe('buildMessages', () => {
  it('should build message array with id', () => {
    const messages = [
      id => ({
        id,
        text: 'First message'
      }),
      id => ({
        id,
        text: 'Second message'
      })
    ]
    expect(buildMessages(messages)('23461')).toMatchSnapshot()
  })
})
