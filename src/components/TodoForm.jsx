import { useState } from "react";
import "../App.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleAdd = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <div className="addContainer">
        <input
          value={value}
          className="input"
          type="text"
          placeholder="Add your task..."
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="button" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
