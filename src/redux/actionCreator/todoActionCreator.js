import {
  GET_LIST_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  CREATE_TODO,
} from '../actionTypes'

export const getListTodoAction = (todos) => {
  return {
    type: GET_LIST_TODO,
    payload: todos,
  }
}

export const updateTodo = (value) => {
  return {
    type: UPDATE_TODO,
    payload: value,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}
export const createTodo = (value) => {
  return {
    type: CREATE_TODO,
    payload: value,
  }
}
