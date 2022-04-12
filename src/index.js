import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToDoListContextProvider from "./Context/ToDoListContext";

ReactDOM.render(
  <React.StrictMode>
      <ToDoListContextProvider>
          <App />
      </ToDoListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
