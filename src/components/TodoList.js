import React, { useState, useEffect } from 'react'
import selectListTodos from '../redux/selectors/todoSelector'
import store from '../redux/store'
import Todo from './Todo'

function TodoList() {
  const [todos, updateTodos] = useState(selectListTodos())
  const updateList = () => store.subscribe(() => updateTodos(selectListTodos()))

  useEffect(() => {
    updateList()
  }, [])

  return <Todo todo={todos} />
}

export default TodoList
