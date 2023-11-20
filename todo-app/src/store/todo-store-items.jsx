// Importing necessary components and hooks from React
import { Children, createContext, useReducer } from "react";
// Creating the context with default values
export const TodoItemContext = createContext({
  todoItems: [],
  addNewItme: () => {},
  deleteItme: () => {},
});
// Reducer function to manage state based on dispatched actions
const todoItemsReduces = (currentTodoItmes, action) => {
  let newTodoItmes = currentTodoItmes;
 // Handling different action types to update state accordingly
  if (action.type === "NEW_ITEM") {
    newTodoItmes = [
      ...currentTodoItmes,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItmes = currentTodoItmes.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItmes;
};
// Context provider component that holds the state and provides it to its children
const TodoItemContextProvider = ({ children }) => {
 // Using useReducer hook to manage state with the defined reducer function
  const [todoItems, dispatchTodoItme] = useReducer(todoItemsReduces, []);
// Functions to dispatch actions for adding and deleting items
  const addNewItme = (itemName, itemDueDate) => {
    const newItmeAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItme(newItmeAction);
  };

  const deleteItme = (todoItemName) => {
    const deleteItmeAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItme(deleteItmeAction);
  };
// Providing the state and action functions through the context value
  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        addNewItme,
        deleteItme,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};
// Exporting the TodoItemContextProvider component as the default export
export default TodoItemContextProvider;
