// Importing necessary dependencies and components
import { useContext } from "react"; // Imported useContext hook from React
import TodoItems from "./TodoItem"; // Imported TodoItems component
import { TodoItemContext } from "@/store/todo-store-items"; // Imported TodoItemContext from the store

// TodoItem function component
function TodoItem() {
  // Using the useContext hook to access the context and required functions
  const { todoItems, deleteItme } = useContext(TodoItemContext);

  // Returning JSX to render TodoItems component for each todo item
  return (
    <>
      {/* Mapping through the todoItems array to display each TodoItem */}
      {todoItems.map((item, index) => (
        <TodoItems
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItme} // Passing the delete function as props
        />
      ))}
    </>
  );
}

// Exporting the TodoItem component as default
export default TodoItem;
