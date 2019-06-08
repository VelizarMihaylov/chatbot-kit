import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'

const conversation = combineReducers(reducers)

export const store = createStore(conversation)
