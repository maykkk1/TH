import React, { useState } from "react";
import "./style.css";
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoItemModal from "./ToDoItem/ToDoItemModal/ToDoItemModal";
import useToDoList from "../../../Hooks/useToDoList"
import Title from "../util/Title/Title";

function ToDo() {
  const {toDoList} = useToDoList();
  const [isToDoListModalVisible, SetIsToDoListModalVisible] = useState(false);

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
          CloseModal={showToDoListModal}
        />
      ) : null}
      <Title  titulo={"To-do"}/>
      <ul className="toDoList">
        {toDoList.map((element) => {
          return <ToDoItem texto={element.content} key={element.id} keyId={element.id} />;
        })}
      </ul>
    </div>
  );
}

export default ToDo;
