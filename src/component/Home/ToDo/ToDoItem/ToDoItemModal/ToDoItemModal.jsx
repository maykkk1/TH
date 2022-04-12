import React, { useState } from "react";
import "./ToDoItemModal.css";
import {getTodoList, setTodoList} from "../../../../../LocalStorage/TodoStorage"

function ToDoItemModal(props) {
  const [toDoText, SetToDoText] = useState("");

  const getId = () => {
    if (getTodoList().length > 0) {
      return getTodoList()[getTodoList().length - 1].id + 1;
    } else {
      return 0;
    }
  };

  const addTodo = () => {
    const id = getId();
    const toDo = { content:toDoText, id:id };
    const auxList = getTodoList();
    auxList.push(toDo);
    setTodoList(auxList);
    props.SetTodoListState(getTodoList())
  };

  return (
    <div
      id="ToDoItemModal"
      onClick={(e) => {
        if (e.target.id === "ToDoItemModal") props.CloseModal();
      }}
      className="ToDoItemModal"
    >
      <div className="ToDoItemModal_Container">
        <span onClick={()=>{props.CloseModal()}} className="ToDoItemModal_Close">x</span>
        <form action="">
          <label htmlFor="ToDoItemModal_ToDo">To-Do</label>
          <input
          value={toDoText}
            onChange={(e) => {
              let TempText = e.target.value;
              if(toDoText.length >= 18) {
                TempText = TempText.substr(0, 18);
              };
              SetToDoText(TempText)
            }}
            autoComplete="off"
            id="ToDoItemModal_ToDo"
            type="text"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addTodo();
              props.CloseModal()
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
