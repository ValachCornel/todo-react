import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      <div className={`task ${task.completed ? "completed" : ""}`}>
        <h2 onClick={() => toggleComplete(task.id)}>{task.task}</h2>
        <div className="icons">
          <FontAwesomeIcon icon={faPen} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
