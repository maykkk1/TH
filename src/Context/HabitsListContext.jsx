import React, {createContext, useState} from 'react';


export const HabitsListContext = createContext();

export default function HabitsListContextProvider(props) {
    const [habitsList, SetHabitsList] = useState([{content:'aaaaa'}, {content:'bbbb'}, {content:'cccc'}, {content:'dddd'}])
    
    return (
        <HabitsListContext.Provider value ={{habitsList, SetHabitsList}}>
            {props.children}
        </HabitsListContext.Provider>
    )
}



