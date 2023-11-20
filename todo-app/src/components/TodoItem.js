// Importing necessary dependencies and components
import { useContext } from "react"; // Imported useContext hook from React
import style from "./comp.module.css"; // Imported CSS module
import { TodoItemContext } from "@/store/todo-store-items"; // Imported TodoItemContext from the store

// TodoItems function component
function TodoItems({ todoName, todoDate }) {
  // Using the useContext hook to access the delete function from TodoItemContext
  const { deleteItme } = useContext(TodoItemContext);

  // Returning JSX to render each TodoItem with name, date, and a delete button
  return (
    <div className={`container ${style.iurStyle}`}>
      <div className="row">
        <div className="col-6">{todoName}</div> {/* Displaying todo name */}
        <div className="col-4">{todoDate}</div> {/* Displaying todo date */}
        <div className="col-2">
          {/* Delete button to delete the respective todo item */}
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItme(todoName)} // Calling delete function on click
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// Exporting the TodoItems component as default
export default TodoItems;
