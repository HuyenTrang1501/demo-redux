import {
  DELETE_TODO,
  GET_LIST_TODO,
  UPDATE_TODO,
  CREATE_TODO,
} from '../actionTypes'

const initialState = {
  todos: [],
}

// (state, action) => newState
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_TODO:
      return {
        ...state,
        todos: action.payload.data,
      }
    case UPDATE_TODO:
      const cloneState = [...state.todos]
      const findIdx = state?.todos?.findIndex(
        (item) => item.id === action.payload.id
      )
      if (findIdx > -1) {
        cloneState[findIdx].department_name = action.payload.department_name
        cloneState[findIdx].department_phone = action.payload.department_phone
        cloneState[findIdx].department_manager =
          action.payload.department_manager
        cloneState[findIdx].department_manager_other =
          action.payload.department_manager_other
      }
      return {
        ...state,
        todos: cloneState,
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state?.todos?.filter((item) => item.id !== action.payload),
      }
    case CREATE_TODO:
      const cloneUpdateState = [...state.todos]
      return {
        ...state,
        todos: [...cloneUpdateState, action.payload],
      }
    default:
      return state
  }
}

export default todoReducer
