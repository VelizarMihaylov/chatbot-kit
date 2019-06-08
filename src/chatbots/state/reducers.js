import { WELCOME_MESSAGE_RECEIVED_ACTION } from './actions'

export const welcomeMessage = (state = {
  received: false,
  answered: false
}, action) => {
  switch (action.type) {
    case WELCOME_MESSAGE_RECEIVED_ACTION:
      return {
        ...state,
        received: action.payload
      }
    default:
      return state
  }
}
