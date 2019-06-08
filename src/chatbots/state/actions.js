export const WELCOME_MESSAGE_RECEIVED_ACTION = 'WELCOME_MESSAGE_RECEIVED_ACTION'

export const welcomeMessageReceivedAction = received => ({
  type: WELCOME_MESSAGE_RECEIVED_ACTION,
  payload: received
})
