const increment = (amount = 1) => {
  return {
    type: 'counter/INCREMENT',
    payload: amount
  }
}

const decrement = (amount = 1) => {
  return {
    type: 'counter/DECREMENT',
    payload: amount
  }
}

const reset = () => {
  return {
    type: 'counter/RESET'
  }
}

export default {
  increment,
  decrement,
  reset,
}