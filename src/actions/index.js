import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../constants'

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text, // or just text, because the same word used 
    dueDate
  }
  return action
}


export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('delete action', action)
  return action
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDER
  }
}
