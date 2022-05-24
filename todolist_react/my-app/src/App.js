import { useState } from 'react';
import "./App.css";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Task } from "./components/Task/Task";

function App() {
  const [tasks,setTask]=useState([])
  let currentTask = "";
  const handleChange = (event) => {
    return (currentTask = event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tasks);
    setTask([...tasks, currentTask]);
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>ToDo List</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Input handleChange={handleChange} />
          <Button />
        </form>
        <ul>
          {tasks.map((elem, index) => (
            <Task key={`${index}-${elem}`} toDo={elem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
