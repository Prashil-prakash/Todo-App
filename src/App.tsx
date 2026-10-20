import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { Todo } from "./Types";


import "./App.css";
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

  return (
    <center className="todo-container">
      <AppName />
      
      
      <AddTodo onNewItem={handleNewItem} />
      
      
      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
