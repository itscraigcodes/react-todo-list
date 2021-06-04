import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <div className="List">
      <ul>
        {props.tasks.map((task) => (
          <li className="item" key={task.id}>
            {task.input}
            <button
              className="remove"
              onClick={() => props.onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
