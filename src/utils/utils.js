const getStorage = key => {
  return window.localStorage.getItem(key)
}

const setStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

export {getStorage, setStorage}