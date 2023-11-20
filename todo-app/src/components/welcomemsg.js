// Importing necessary dependencies and styles
import { useContext } from "react"; // Imported useContext hook from React
import style from "./comp.module.css"; // Imported styles for the component
import { TodoItemContext } from "@/store/todo-store-items"; // Imported TodoItemContext from the store

// Welcomemsg component function
function Welcomemsg() {
  // Using the useContext hook to access the context
  const { todoItems } = useContext(TodoItemContext);

  // Returning JSX to display a welcome message when there are no todo items
  return (
    todoItems.length === 0 && (
      <h1 className={`${style.wcmsg}`}>Enjoy Your Day...</h1>
    )
  );
}

// Exporting the Welcomemsg component as default
export default Welcomemsg;
