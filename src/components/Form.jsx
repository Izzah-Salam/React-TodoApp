import { useState } from "react";
import TodoItem from "./TodoItem";
import "../css/form.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="InputContainer">
        <input
          className="todoInput"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter ToDo Item"
        />
        <button className="AddBtn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
