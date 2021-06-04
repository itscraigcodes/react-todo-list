import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  const InputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    //Fowards input to App.js
    props.onAddTask(input);
    //Resets the form blank after submission
    setInput("");
  };

  return (
    <div className="Input">
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          className="Text"
          value={input}
          onChange={InputChangeHandler}
        />
        <button className="Button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
