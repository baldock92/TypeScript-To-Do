import React, { useState, useRef, useEffect } from "react";
import { Todos } from "../model";
import "../styles/TaskCard.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  allTodos: Todos[];
  setAllTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  item: Todos;
};

function TaskCard({ allTodos, setAllTodos, item }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(item.todo);

  const handleDone = (id: number) => {
    setAllTodos(
      allTodos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setAllTodos(
      allTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setAllTodos(
      allTodos.map((todo) => {
        return todo.id === id ? { ...todo, todo: editText } : todo;
      })
    );
    setEdit(false);
  }
  
  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    inputRef.current?.focus();
  
    
  }, [edit])
    

  return (
    <form
      className="todo__card"
      onSubmit={(event) => handleEdit(event, item.id)}
    >
      {edit ? (
        <input
        ref={inputRef}
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          className="todos__single--text"
        ></input>
      ) : item.isDone ? (
        <s className="todos__single--text">{item.todo}</s>
      ) : (
        <span className="todos__single--text">{item.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !item.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(item.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default TaskCard;
