import React, { useState } from "react";
import "./ToDoItemModal.css";
import useToDoList from "../../../../../Hooks/useToDoList";

function ToDoItemModal(props) {
  const [toDoText, SetToDoText] = useState("");
  const { SetToDoList, toDoList } = useToDoList();

  const getId = () => {
    if (toDoList.length > 0) {
      return toDoList[toDoList.length - 1].id + 1;
    } else {
      return 0;
    }
  };

  const addTodo = () => {
    const id = getId();
    const toDo = { content:toDoText, id:id };
    const auxList = toDoList;
    auxList.push(toDo);
    SetToDoList(() => {
      return [...auxList];
    });
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
