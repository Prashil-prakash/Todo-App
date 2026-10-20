import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { Todo } from "./Types.ts";



import { useState } from "react";



function App() {
  
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  
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

  return (<div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 flex justify-center items-start">
      
      
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-8">
        
        
        <AppName />
        
        
        <AddTodo onNewItem={handleNewItem} />
        
       
        {todoItems.length === 0 && <WelcomeMessage />}

        
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        />
        
      </div>
    </div>
  );
}

export default App;
