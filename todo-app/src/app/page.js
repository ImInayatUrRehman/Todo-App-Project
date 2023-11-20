"use client";
// Importing necessary components and styles
import TodoItem from "@/components/TodoItems"; // Imported TodoItems component
import styles from "./page.module.css"; // Imported styles for the page
import AddTodo from "@/components/addTodo"; // Imported AddTodo component
import Welcomemsg from "@/components/welcomemsg"; // Imported Welcomemsg component
import TodoItemContextProvider from "@/store/todo-store-items"; // Imported TodoItemContextProvider from the store

// Default function for the Home component
export default function Home() {
  // Returning the JSX structure for the Home component
  return (
    // Wrapping the main content with TodoItemContextProvider to provide context
    <TodoItemContextProvider>
      {/* Main container for the content */}
      <main className={styles.mainContainer}>
        {/* Heading for the Todo App */}
        <h1 className="heading">Todo App</h1>
        {/* Component to add new todos */}
        <AddTodo />
        {/* Welcome message component */}
        <Welcomemsg />
        {/* Component to display todo items */}
        <TodoItem />
      </main>
    </TodoItemContextProvider>
  );
}
