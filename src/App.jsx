import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} />}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
