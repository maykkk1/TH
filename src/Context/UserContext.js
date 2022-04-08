import React, {createContext, useState} from 'react';


export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [user, SetUser] = useState({
        name:'',
        avatar:'',
        classe:'',
        level:1,
        xp:0,
        xpToUp:100,
        gold:1000
    });


    return (
        <UserContext.Provider value={{user, SetUser}}>
            {props.children}
        </UserContext.Provider>
    )
}