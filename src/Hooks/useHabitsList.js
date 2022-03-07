import { useContext } from "react";

import { HabitsListContext } from "../Context/HabitsListContext.jsx";

export default function useHabitsList() {
    return useContext(HabitsListContext)
}

