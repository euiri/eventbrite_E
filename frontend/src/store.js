import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventDetailsReducer, eventListReducer } from './reducers/eventReducers'

const rootReducer = combineReducers({
  eventList : eventListReducer,
  eventDetails : eventDetailsReducer
})

const store = configureStore({
  reducer : rootReducer,
  preloadState : {}
})

export default store