import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserContextProvider from "./Context/UserContext";
import ToDoListContextProvider from "./Context/ToDoListContext";
import HabitsListContextProvider from "./Context/HabitsListContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ToDoListContextProvider>
        <HabitsListContextProvider>
          <App />
        </HabitsListContextProvider>
      </ToDoListContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
