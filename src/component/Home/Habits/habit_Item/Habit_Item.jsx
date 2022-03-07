import React from 'react';
import  './style.css'


function Habit_Item(props) {
    return ( 
        <li className='habit_Item'>
            <p>{props.habitText}</p>
        </li>
     );
}

export default Habit_Item;