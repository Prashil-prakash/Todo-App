import { AiFillDelete } from "react-icons/ai";


interface TodoItemProps {
  todoName: string;
  todoDate: string;
  onDeleteClick: (todoItemName: string) => void;
}


function TodoItem({ todoName, todoDate, onDeleteClick }: TodoItemProps) {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center w-full bg-slate-50 border border-slate-100 p-3.5 rounded-xl transition-all duration-200 shadow-sm hover:bg-slate-100/70">
      
      
      <div className="sm:col-span-6 text-left font-medium text-slate-700 tracking-wide break-words">
        {todoName}
      </div>

      
      <div className="sm:col-span-4 text-left text-sm font-semibold text-slate-500 tabular-nums">
        {todoDate || "No Date"}
      </div>

      
      <div className="sm:col-span-2 w-full">
        <button
          type="button"
          className="w-full h-10 flex justify-center items-center bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-medium rounded-xl transition-all duration-150 shadow-sm hover:shadow cursor-pointer text-xl"
          onClick={() => onDeleteClick(todoName)}
        >
          <AiFillDelete />
        </button>
      </div>
      
    </div>
  );
}

export default TodoItem;
