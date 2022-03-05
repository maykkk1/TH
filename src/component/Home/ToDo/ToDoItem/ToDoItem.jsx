import React from 'react';
import './style.css'
import useToDoList from "../../../../Hooks/useToDoList"

function ToDoItem(props) {
    const { SetToDoList, toDoList } = useToDoList();
    const deleteToDo = (e) => {
        let id = (e.target.id)
        id = parseInt(id.replace(/\D/g,''))
        console.log(id)
        const auxList = toDoList.filter((toDo)=>{
            return toDo.id !== id; 
        })
        SetToDoList(()=>{
            return [...auxList]
        })    
    }

    return ( 
        <li  className='ToDoItem'>
            <p>{props.texto}</p>
            <input id={`toDo_${props.keyId}`} onClick={(e)=>{
                deleteToDo(e)
            }} type="checkbox" />
        </li>
     );
}

export default ToDoItem; 