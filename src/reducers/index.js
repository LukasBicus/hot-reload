import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
  console.log('counter reducer called, prevState: ' + state)
  console.log('counter reducer called, action: ' + JSON.stringify(action))
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

export default combineReducers({
  counter: counterReducer
})
