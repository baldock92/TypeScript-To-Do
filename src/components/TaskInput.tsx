import React, {useRef} from "react";
import "../styles/TaskInput.css"

interface Props{
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

export default function TaskInput({toDo, setToDo, handleAdd} : Props) {
    const inputRef = useRef<HTMLInputElement>(null);



  return (
    <div>
      <form className="input__overall" onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur()
      }}>
        <input
        ref={inputRef}
          type="input"
          placeholder="Enter a task to do..."
          className="input__box"
          value={toDo}
          onChange={
            ((event) => setToDo(event.target.value))
        }
        ></input>
        <button className="input__submit">Add</button>
      </form>
    </div>
  );
}
