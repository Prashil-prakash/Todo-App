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
   if (todoNameElement.current) todoNameElement.current.value = "";
    if (dueDateElement.current) dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    
      <form className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center w-full" onSubmit={handleAddButtonClicked}>
        <div className="sm:col-span-6 w-full">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
          />
        </div>
        <div className="sm:col-span-4 w-full">
          <input type="date" ref={dueDateElement} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm" />
        </div>
        <div className="sm:col-span-2 w-full">
          <button type="submit" className="w-full h-11.5 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-semibold text-2xl rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-200">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    
  );
}

export default AddTodo;
