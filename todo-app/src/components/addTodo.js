// Importing necessary dependencies and styles
import { useContext, useState } from "react"; // Imported useContext and useState hooks from React
import style from "./comp.module.css"; // Imported styles for the component
import { TodoItemContext } from "@/store/todo-store-items"; // Imported TodoItemContext from the store

// AddTodo component function
function AddTodo() {
  // Using the useContext hook to access the context
  const { addNewItme } = useContext(TodoItemContext);

  // State variables for name input and due date input
  const [nameInput, setNameInput] = useState(""); // State for the todo name
  const [dueDateInput, setdueDateInput] = useState(""); // State for the due date

  // Handler function for name input change
  const handleNameChange = (event) => {
    setNameInput(event.target.value); // Setting the name input state
  };

  // Handler function for date input change
  const handleDateChange = (event) => {
    setdueDateInput(event.target.value); // Setting the due date input state
  };

  // Handler function for adding a new todo item
  const handleAddButton = () => {
    addNewItme(nameInput, dueDateInput); // Calling the addNewItme function from the context
    setNameInput(""); // Resetting the name input state
    setdueDateInput(""); // Resetting the due date input state
  };

  // Returning JSX for the AddTodo component
  return (
    <div className={` ${style.todoItems}`}>
      {/* Input for todo task */}
      <span>
        <input
          type="text"
          placeholder="Enter Todo Task"
          className={`${style.inputTodo}`}
          value={nameInput}
          onChange={handleNameChange}
          required
        />
      </span>
      {/* Input for due date */}
      <span>
        <input
          type="date"
          className={`${style.inputTodo}`}
          value={dueDateInput}
          onChange={handleDateChange}
          required
        />
      </span>
      {/* Button to add the todo */}
      <span>
        <button
          className={`btn btn-primary ${style.customStyle}`}
          onClick={handleAddButton}
        >
          Add
        </button>
      </span>
    </div>
  );
}

// Exporting the AddTodo component as default
export default AddTodo;
