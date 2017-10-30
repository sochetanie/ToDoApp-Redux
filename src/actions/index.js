import {ADD_REMINDER} from '../constants'

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text: text // or just text, because the same word used 
  }
  console.log('action in addReminder', action)
  return action
}
