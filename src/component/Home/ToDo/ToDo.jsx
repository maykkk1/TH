import React, { useState } from "react";
import "./style.css";
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoItemModal from "./ToDoItem/ToDoItemModal/ToDoItemModal";
import Title from "../util/Title/Title";
import { getTodoList } from "../../../LocalStorage/TodoStorage";

function ToDo() {
  const [isToDoListModalVisible, SetIsToDoListModalVisible] = useState(false);
  const [toDoListState, SetTodoListState] = useState(getTodoList());
  console.log(toDoListState);

  const showToDoListModal = () => {
    isToDoListModalVisible
      ? SetIsToDoListModalVisible(false)
      : SetIsToDoListModalVisible(true);
  };

  return (
    <div className="ToDo">
      <button
        onClick={() => {
          showToDoListModal();
        }}
        className="addToDo"
      >
        +
      </button>
      {isToDoListModalVisible ? (
        <ToDoItemModal
          SetTodoListState={SetTodoListState}
          CloseModal={showToDoListModal}
        />
      ) : null}
      <Title titulo={"To-do"} />
      <ul className="toDoList">
        {toDoListState.map((element) => {
          return (
            <ToDoItem
              SetTodoListState={SetTodoListState}
              texto={element.content}
              key={element.id}
              keyId={element.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
