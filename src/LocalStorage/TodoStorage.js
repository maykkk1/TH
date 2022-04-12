export const setTodoList = (toDo) => {
    localStorage.setItem('toDo', JSON.stringify(toDo))
}

export const getTodoList = () => {
    const toDoList = JSON.parse(localStorage.getItem('toDo'))
    return toDoList;
}

export default {setTodoList, getTodoList};