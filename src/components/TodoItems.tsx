import TodoItem from "./TodoItem";
import { Todo } from "../Types"; 


interface TodoItemsProps {
  todoItems: Todo[];
  onDeleteClick: (todoItemName: string) => void;
}

const TodoItems = ({ todoItems, onDeleteClick }: TodoItemsProps) => {
  return (
    
    <div className="flex flex-col gap-3 w-full mt-4">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name + item.duedate}
          todoDate={item.duedate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;