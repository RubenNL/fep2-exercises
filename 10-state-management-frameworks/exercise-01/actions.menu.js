const open = () => {
  return {
    type: 'menu/OPEN'
  }
}

const close = () => {
  return {
    type: 'menu/CLOSE'
  }
}

export default {
  open,
  close,
}