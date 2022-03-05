import { useContext } from "react";

import { ToDoListContext } from "../Context/ToDoListContext";

export default function useToDoList() {
    return useContext(ToDoListContext)
}