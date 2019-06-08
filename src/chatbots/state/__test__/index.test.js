import { store } from '../index'
import { welcomeMessageReceivedAction } from '../actions'

describe('store', () => {
  it('should do stuff', () => {
    console.log(store.getState())
    store.dispatch(welcomeMessageReceivedAction(true))
  })
})
