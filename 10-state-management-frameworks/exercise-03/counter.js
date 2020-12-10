import { createSlice } from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.2.3';

const { actions, reducer } = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + (action.payload || 1),
    decrement: (state, action) => state - (action.payload || 1),
    reset: () => 0,
  }
})

export {
  actions,
  reducer
}