import React from "react";
import "./styles.css";
import { log } from "util";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      className="input"
      onSubmit={(e)=>
      handleAdd}
    >
      <input
        type="input "
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
