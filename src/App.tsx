import React, { ReactEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './model';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';

const App: React.FC =()=> {

  const[todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>()

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()

  }
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
  
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    {/* <TodoList todos={todos} setTodos={setTodos}/> */}

    </div>
  );
}

export default App;
