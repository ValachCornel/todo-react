import { useState } from "react";
import "../App.css";

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleAdd = () => {
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      <div className="addContainer">
        <input
          value={value}
          className="input"
          type="text"
          placeholder="Change Task"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="button" onClick={handleAdd}>
          Update Task
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
