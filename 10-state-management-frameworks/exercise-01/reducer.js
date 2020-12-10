const initialState = {
  counter: 0,
  menu: false
}

function counter(state, action) {
  switch (action.type) {
    case 'counter/INCREMENT':
      return state + action.payload
    case 'counter/DECREMENT':
      return state - action.payload
    case 'counter/RESET':
      return initialState.counter
    default:
      return state
  }
}

function menu(state, action) {
  switch (action.type) {
    case 'menu/OPEN':
      return true
    case 'menu/CLOSE':
      return false
    default:
      return state
  }
}

export default (state = initialState, action) => {
  return {
    counter: counter(state.counter, action),
    menu: menu(state.menu, action)
  }
}