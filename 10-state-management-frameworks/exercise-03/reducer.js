import { createReducer, combineReducers } from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.2.3';
import { reducer as counterReducer } from './counter.js'
import { reducer as menuReducer } from './menu.js'

export default combineReducers({
  counter: counterReducer,
  menu: menuReducer,
})