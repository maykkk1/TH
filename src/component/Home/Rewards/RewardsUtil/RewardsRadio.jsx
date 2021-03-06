import React from 'react';
import './style.css'

function RewardsRadio(props) {
    return ( 
        <span className='RewardsRadio'>
            <input onClick={()=>{
                props.handleRewardTime(parseInt(props.time))
            }} id={`radio_${props.time}`} type="radio" name='timeRadio' />  
            <label htmlFor={`radio_${props.time}`}>{`${props.time} minutos`}</label>
        </span>
     );
}

export default RewardsRadio;