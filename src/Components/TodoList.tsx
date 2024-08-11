import React from "react";
import "./styles.css";
import { Todo } from "../model";
import TodoItem from "./TodoItem";

interface todosProp {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<todosProp> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {/* {todos.map((item)=>({<li>{item.todo}</li>}))} */}
      {todos.map((todo) => (
        // <li>{item.todo}</li>
     <TodoItem todo={todo} todos={todos} setTodos={setTodos} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
