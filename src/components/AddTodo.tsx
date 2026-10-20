import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { BiMessageAdd } from "react-icons/bi";

interface AddTodoProps {
  onNewItem: (todoName: string, dueDate: string) => void;
}

function AddTodo({ onNewItem }: AddTodoProps) {
  const todoNameElement = useRef<HTMLInputElement>(null);
  const dueDateElement = useRef<HTMLInputElement>(null);
  
  
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddButtonClicked = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const todoName = todoNameElement.current?.value.trim() || ""; 
    const dueDate = dueDateElement.current?.value || "";
    
    
    if (todoName === "") {
      setErrorMessage("⚠️ Please enter a todo item before adding!");
      return; 
    }

    
    setErrorMessage("");

    if (todoNameElement.current) todoNameElement.current.value = "";
    if (dueDateElement.current) dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };

  return (
    <div className="w-full">
      
      <form onSubmit={handleAddButtonClicked} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center w-full">
        
        
        <div className="sm:col-span-6 w-full">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            
            className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200 shadow-sm ${
              errorMessage ? "border-rose-400 focus:ring-rose-400" : "border-slate-200 focus:ring-blue-500"
            }`}
          />
        </div>

        
        <div className="sm:col-span-4 w-full">
          <input 
            type="date" 
            ref={dueDateElement} 
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
          />
        </div>

        
        <div className="sm:col-span-2 w-full">
          <button 
            type="submit" 
            className="w-full h-11.5 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer text-2xl"
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>

      
      {errorMessage && (
        <p className="text-left text-sm font-semibold text-rose-500 mt-2 ml-1 animate-pulse">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default AddTodo;