import { createSlice } from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.2.3';

const { actions, reducer } = createSlice({
  name: 'menu',
  initialState: false,
  reducers: {
    open: () => true,
    close: () => false
  }
})

export {
  actions,
  reducer
}