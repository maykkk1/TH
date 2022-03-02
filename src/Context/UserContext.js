import React, {createContext, useState} from 'react';


export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [user, setUser] = useState({
        name:'',
        avatar:''
    });

    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}