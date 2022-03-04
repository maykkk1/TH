import React, { useState } from "react";
import "./ToDoItemModal.css";

function ToDoItemModal(props) {
    const [toDoText, SetToDoText] = useState('')


  return (
    <div
        id="ToDoItemModal"
      onClick={(e) => {
        if(e.target.id === "ToDoItemModal")props.CloseModal();
      }}
      className="ToDoItemModal"
    >
      <div className="ToDoItemModal_Container">
        <span className="ToDoItemModal_Close"></span>
        <form action="">
          <label htmlFor="ToDoItemModal_ToDo">To-Do</label>
          <input onChange={(e)=>{
              SetToDoText(e.target.value)
          }} autoComplete="off" id="ToDoItemModal_ToDo" type="text" />
          <button
            onClick={(e) => {
              e.preventDefault();
              const toDo = {toDoContent:toDoText}
              let auxList = [];
              auxList = props.ToDoList;
              auxList.push(toDo)
              props.addToDo(() => {
                return [...auxList];
              });
            }}
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default ToDoItemModal;
