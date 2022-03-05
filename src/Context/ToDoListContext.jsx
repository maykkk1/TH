import React, {createContext, useState} from 'react';


export const ToDoListContext = createContext();

export default function ToDoListContextProvider(props) {
    const [toDoList, SetToDoList] = useState([])
    
    return (
        <ToDoListContext.Provider value ={{toDoList, SetToDoList}}>
            {props.children}
        </ToDoListContext.Provider>
    )
}



