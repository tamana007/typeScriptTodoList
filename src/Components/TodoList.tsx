import React from 'react'
import { Todo } from '../model'

interface todosProp{
  todos:Todo,
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | undefined>>
}

const TodoList:React.FC <todosProp>=({todos,setTodos})=> {
  return (
    <div>
      
    </div>
  )
}

export default TodoList
