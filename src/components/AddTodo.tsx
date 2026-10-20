import {  useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { FormEvent } from 'react';


interface AddTodoProps {
  onNewItem: (todoName: string, dueDate: string) => void;
}

function AddTodo({ onNewItem }:AddTodoProps) {
  const todoNameElement = useRef<HTMLInputElement>(null);
  const dueDateElement = useRef<HTMLInputElement>(null);

  const handleAddButtonClicked = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoName = todoNameElement.current?.value || "";
    const dueDate = dueDateElement.current?.value || "";
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
