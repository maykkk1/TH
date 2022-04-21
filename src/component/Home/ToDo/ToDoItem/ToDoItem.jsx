import React from 'react';
import './style.css'
import LevelUp from '../../../../services/LevelUp';
import { setUser, getUser } from '../../../../LocalStorage/user';
import { getTodoList, setTodoList } from '../../../../LocalStorage/TodoStorage';

function ToDoItem(props) {

    const CompleteToDo = (e) => {
        let id = (e.target.id)
        id = parseInt(id.replace(/\D/g,''))
        const auxList = getTodoList().filter((toDo)=>{
            return toDo.id !== id; 
        })
        setTodoList(auxList)
        props.SetTodoListState(getTodoList())
        setUser(LevelUp(getUser(), 50 * getUser().xpBonus, 30 * getUser().goldBonus))
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