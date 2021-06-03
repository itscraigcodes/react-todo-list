import React from "react";
import "./List.css";

const List = () => {
  return (
    <div className="List">
      <ul>
        <li className="Item">
          Walk dog<button className="remove">Remove</button>
        </li>
        <li className="Item">
          Talk Bob<button className="remove">Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default List;
