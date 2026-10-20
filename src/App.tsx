import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { Todo } from "./Types.ts";
import { BiSun, BiMoon } from "react-icons/bi";



import { useState , useEffect} from "react";



function App() {
  
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const [isDarkMode,setIsDarkMode] =useState<boolean>(false)

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  
  const handleNewItem = (itemName: string, itemDueDate: string) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName: string) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (<div className="w-full">
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 py-12 px-4 flex justify-center items-start transition-colors duration-300">
        <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-2xl/40 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 space-y-6 transition-all duration-300">
          
          <div className="flex justify-between items-center w-full border-b border-slate-100 dark:border-slate-800 pb-4">
            <AppName />
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 cursor-pointer shadow-xs text-xl"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <BiSun className="animate-spin-slow" /> : <BiMoon />}
            </button>
          </div>
          
          <AddTodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage />}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
