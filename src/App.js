import { useState } from "react";
import Input from "./Components/Input";
import List from "./Components/List";

const App = () => {
  const [task, setTask] = useState([]);

  //Adds Todo to the list
  const addTaskHandler = (input) => {
    setTask((prevTask) => {
      return [...prevTask, { input: input, id: Math.random().toString() }];
    });
  };

  //Deletes Todo from the list
  const deleteTaskHandler = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Input onAddTask={addTaskHandler} />
      <List tasks={task} onDeleteTask={deleteTaskHandler} />
    </div>
  );
};

export default App;
