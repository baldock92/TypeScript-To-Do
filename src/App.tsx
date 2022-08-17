import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Todos } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todos[]>([]);

  const handleAdd = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    if (toDo) {
      setAllTodos([...allTodos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo("");
    }
  };

  console.log(allTodos, "<<<")

  return (
    <div className="App">
      <span className="header">TypeScript To Do List</span>
      <TaskInput toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <TaskList allTodos={allTodos} setAllTodos={setAllTodos} />
    </div>
  );
};

export default App;
