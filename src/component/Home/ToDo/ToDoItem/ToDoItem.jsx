import React from 'react';
import './style.css'
import useToDoList from "../../../../Hooks/useToDoList"
import LevelUp from '../../../../services/LevelUp';
import useUser from "../../../../Hooks/useUser";

function ToDoItem(props) {
    const { SetToDoList, toDoList } = useToDoList();
    const {user, setUser} = useUser();
    const CompleteToDo = (e) => {
        let id = (e.target.id)
        id = parseInt(id.replace(/\D/g,''))
        const auxList = toDoList.filter((toDo)=>{
            return toDo.id !== id; 
        })
        SetToDoList(()=>{
            return [...auxList]
        })
        setUser(LevelUp(user, 50))
        console.log(user)

    }

    return ( 
        <li  className='ToDoItem'>
            <p>{props.texto}</p>
            <input id={`toDo_${props.keyId}`} onClick={(e)=>{
                CompleteToDo(e)
            }} type="checkbox" />
        </li>
     );
}

export default ToDoItem; 