import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import todo_reducer from './reducer';


export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({ todo_reducer }),
    initialState,
  )
  return store
}