import React, {createContext, useState} from 'react';


export const HabitsListContext = createContext();

export default function HabitsListContextProvider(props) {
    const [habitsList, SetHabitsList] = useState([])
    
    return (
        <HabitsListContext.Provider value ={{habitsList, SetHabitsList}}>
            {props.children}
        </HabitsListContext.Provider>
    )
}



