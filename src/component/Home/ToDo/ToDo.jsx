import React, { useState } from "react";
import "./style.css";
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoItemModal from "./ToDoItem/ToDoItemModal/ToDoItemModal";

function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [isToDoListModalVisible, SetIsToDoListModalVisible] = useState(false);

  const showToDoListModal = () => {
    isToDoListModalVisible
      ? SetIsToDoListModalVisible(false)
      : SetIsToDoListModalVisible(true);
  };

  return (
    <div className="ToDo">
      <button onClick={()=>{
          console.log('aconteci')
          showToDoListModal()
      }} className="addToDo">+</button>
      {isToDoListModalVisible ? <ToDoItemModal addToDo={setToDoList} ToDoList={toDoList} CloseModal={showToDoListModal} /> : null}
      <h2>To-do</h2>
      <ul className="toDoList">
        {toDoList.map((element) => {
          return <ToDoItem />;
        })}
      </ul>
    </div>
  );
}

export default ToDo;
