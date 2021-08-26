import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import todoApi from './api/TodoApi'
import TodoList from './components/TodoList'
import { getListTodoAction } from './redux/actionCreator/todoActionCreator'
import store from './redux/store'

const App = () => {
  const getListEmployee = async () => {
    try {
      const todos = await todoApi.getAll()
      store.dispatch(getListTodoAction(todos))
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getListEmployee()
  }, [])

  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App
