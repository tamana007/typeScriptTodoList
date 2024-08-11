import React, { FormEvent, useState } from "react";
import { Todo } from "../model";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import TodoList from "./TodoList";

interface TodoItem {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: number;
  age?: number;
}

const TodoItem: React.FC<TodoItem> = ({ todo, todos, setTodos, id }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e:FormEvent,id:number) => {
    e.preventDefault()
    // setEdit(!edit);
// setTodos(todos.map((todo)=>todo.id===id))
setTodos(todos.map((todo)=>(todo.id===id?{...todo,todo:editTodo}:todo)));
setEdit(false)
  };
  return (
    <form className="todo_item" onSubmit={(e)=>handleEdit(e,todo.id)}>
      {edit ?( <input type="input" value={editTodo} onChange={(e) =>setEditTodo( e.target.value)}></input>)

     : todo.isDone ? (
        <s className="todo_single_text">{todo.todo}</s>
      ) : (
        <span className="todo_single_text">{todo.todo}</span>
      )}
      <div className="icon">
        <span className="icon" onClick={()=>{if (!edit && !todo.isDone) {
          setEdit(!edit)
          
        }}}>
          <CiEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
