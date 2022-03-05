import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserContextProvider from "./Context/UserContext";
import ToDoListContextProvider from "./Context/ToDoListContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ToDoListContextProvider>
        <App />
      </ToDoListContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
