import React from "react";
import "../styles/TaskList.css";
import { Todos } from "../model";
import TaskCard from "./TaskCard";

interface Props {
  allTodos: Todos[];
  setAllTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export default function TaskList({ allTodos, setAllTodos }: Props) {
  return (
    <div className="all__tasks">
      {allTodos.map((item) => {
        return (
          
            <TaskCard item={item} key={item.id} allTodos={allTodos} setAllTodos={setAllTodos} />
          
        );
      })}
    </div>
  );
}
